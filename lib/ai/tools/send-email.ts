import { tool } from 'ai';
import { z } from 'zod';

export const sendEmail = tool({
  description: 'Show an email form for the user to contact Shrey. When the user asks to send an email or contact Shrey, call this tool WITHOUT any parameters to show an interactive form.',
  inputSchema: z.object({
    showForm: z.boolean().optional().default(true).describe('Show the email form for user to fill out'),
  }),
  execute: async ({ showForm }) => {
    return {
      type: 'show_form',
      showForm: true,
    };
  },
});
