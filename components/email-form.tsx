'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Send, User, AtSign, MessageSquare, Sparkles, CheckCircle, XCircle, Loader2 } from 'lucide-react';
import type { UseChatHelpers } from '@ai-sdk/react';
import type { ChatMessage } from '@/lib/types';

interface EmailFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

interface EmailFormProps {
  chatId?: string;
  sendMessage?: UseChatHelpers<ChatMessage>['sendMessage'];
}

export function EmailForm({ chatId, sendMessage }: EmailFormProps) {
  const [formData, setFormData] = useState<EmailFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<EmailFormData>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState<string>('');

  const validateForm = (): boolean => {
    const newErrors: Partial<EmailFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setStatus('sending');
    setStatusMessage('Sending email to Shrey...');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          chatId,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setStatusMessage(data.message || 'Email sent successfully to Shrey!');
      } else {
        setStatus('error');
        setStatusMessage(data.error || 'Failed to send email. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setStatusMessage('An error occurred while sending the email. Please try again.');
    }
  };

  const handleChange = (field: keyof EmailFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const isFormDisabled = status === 'sending' || status === 'success';

  return (
    <Card className="relative w-full max-w-2xl mx-auto portfolio-card-gradient border border-gray-800/60 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm">
      <div className="absolute inset-0 portfolio-mesh-gradient opacity-40" />
      <div className="absolute top-0 left-0 w-full h-1 portfolio-accent-gradient" />

      <CardHeader className="space-y-1 relative z-10">
        <div className="flex items-center gap-2">
          <Mail className="h-6 w-6 text-amber-400" />
          <CardTitle className="text-2xl portfolio-gradient-text">Send Email to Shrey</CardTitle>
        </div>
        <CardDescription className="text-gray-400">
          Fill out the form below to send an email directly to Shrey Shah
        </CardDescription>
      </CardHeader>
      
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4 relative z-10">
          <div className="space-y-2">
            <Label htmlFor="name" className="flex items-center gap-2 text-gray-300">
              <User className="h-4 w-4 text-gray-400" />
              Your Name
            </Label>
            <Input
              id="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              disabled={isFormDisabled}
              className={`${errors.name ? 'border-destructive' : ''} bg-gray-800/50 border-gray-700 placeholder:text-gray-500 focus-visible:ring-amber-500/40`}
            />
            {errors.name && (
              <p className="text-sm text-rose-400 flex items-center gap-1">
                <XCircle className="h-3 w-3" />
                {errors.name}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2 text-gray-300">
              <AtSign className="h-4 w-4 text-gray-400" />
              Your Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              disabled={isFormDisabled}
              className={`${errors.email ? 'border-destructive' : ''} bg-gray-800/50 border-gray-700 placeholder:text-gray-500 focus-visible:ring-amber-500/40`}
            />
            {errors.email && (
              <p className="text-sm text-rose-400 flex items-center gap-1">
                <XCircle className="h-3 w-3" />
                {errors.email}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject" className="flex items-center gap-2 text-gray-300">
              <Sparkles className="h-4 w-4 text-gray-400" />
              Subject (Optional)
            </Label>
            <Input
              id="subject"
              placeholder="Enter your subject"
              value={formData.subject}
              onChange={(e) => handleChange('subject', e.target.value)}
              disabled={isFormDisabled}
              className="bg-gray-800/50 border-gray-700 placeholder:text-gray-500 focus-visible:ring-amber-500/40"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="flex items-center gap-2 text-gray-300">
              <MessageSquare className="h-4 w-4 text-gray-400" />
              Your Message
            </Label>
            <Textarea
              id="message"
              placeholder="Hi Shrey, I'd like to discuss..."
              value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
              disabled={isFormDisabled}
              className={`min-h-[150px] bg-gray-800/50 border-gray-700 placeholder:text-gray-500 focus-visible:ring-amber-500/40 ${errors.message ? 'border-destructive' : ''}`}
            />
            {errors.message && (
              <p className="text-sm text-rose-400 flex items-center gap-1">
                <XCircle className="h-3 w-3" />
                {errors.message}
              </p>
            )}
          </div>

          {status !== 'idle' && statusMessage && (
            <div className={`p-4 rounded-lg flex items-start gap-2 ${
              status === 'success' ? 'bg-emerald-500/10 text-emerald-200 border border-emerald-500/30' : 
              status === 'error' ? 'bg-red-500/10 text-red-200 border border-red-500/30' : 
              'bg-amber-500/10 text-amber-200 border border-amber-500/30'
            }`}>
              <div className="shrink-0">
                {status === 'sending' && <Loader2 className="size-4 animate-spin text-amber-400" />}
                {status === 'success' && <CheckCircle className="size-5 text-emerald-400" />}
                {status === 'error' && <XCircle className="size-4 text-red-400" />}
              </div>
              <div className="flex-1">
                <p className="font-medium">{status === 'success' ? 'Email Sent Successfully!' : status === 'error' ? 'Error' : 'Sending...'}</p>
                <p className="text-sm mt-1">{statusMessage}</p>
              </div>
            </div>
          )}
        </CardContent>

        <CardFooter className="flex gap-2 relative z-10 border-t border-gray-800">
          {status === 'success' ? (
            <>
              <Button 
                type="button" 
                className="flex-1 bg-transparent border border-gray-700 hover:border-amber-500/50 text-gray-300 hover:text-amber-200" 
                variant="outline"
                onClick={() => {
                  setFormData({ name: '', email: '', subject: '', message: '' });
                  setStatus('idle');
                  setStatusMessage('');
                }}
              >
                <Sparkles className="mr-2 size-4" />
                Send Another
              </Button>
              <Button 
                type="button" 
                className="flex-1 bg-gray-800 text-gray-400 border border-gray-700" 
                disabled
              >
                <CheckCircle className="mr-2 size-4" />
                Email Sent!
              </Button>
            </>
          ) : (
            <Button 
              type="submit" 
              className="w-full bg-amber-500 hover:bg-amber-400 text-gray-900 font-semibold shadow-xl shadow-amber-500/20 hover:shadow-amber-400/30" 
              disabled={isFormDisabled}
            >
              {status === 'sending' ? (
                <>
                  <Loader2 className="mr-2 size-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 size-4" />
                  Send Email
                </>
              )}
            </Button>
          )}
        </CardFooter>
      </form>
    </Card>
  );
}
