# API Documentation

## Internal APIs

### Contact Form Endpoint
```typescript
POST /api/contact

Request Body:
{
  name: string;
  email: string;
  message: string;
}

Response:
{
  success: boolean;
  message: string;
}
```

### Content Loading
```typescript
GET /api/content

Response:
{
  data: ResumeSchema;
  lastUpdated: string;
}
``` 