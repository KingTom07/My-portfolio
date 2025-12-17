# Backend Setup Guide

## Quick Start

### 1. Configure Environment Variables

Copy the `.env.example` file to `.env` in the root directory:

```bash
cp .env.example .env
```

Then edit `.env` with your actual email credentials.

### 2. Gmail Setup (Recommended)

If using Gmail, you'll need to create an **App Password**:

1. Go to your Google Account settings
2. Navigate to Security > 2-Step Verification (enable if not already)
3. Scroll to "App passwords" and click it
4. Generate a new app password for "Mail"
5. Copy the 16-character password
6. Use this password in your `.env` file as `EMAIL_PASSWORD`

### 3. Environment Variables

Update your `.env` file:

```env
PORT=3001
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-16-char-app-password
RECIPIENT_EMAIL=your-personal-email@example.com
```

### 4. Run the Server

```bash
npm run server:dev
```

The server will run on `http://localhost:3001`

### 5. Run Both Frontend and Backend

Open two terminal windows:

**Terminal 1 (Frontend):**
```bash
npm run dev
```

**Terminal 2 (Backend):**
```bash
npm run server:dev
```

## API Endpoints

### POST `/api/contact`

Send contact form submissions via email.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'd like to connect!"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

**Error Response (400/500):**
```json
{
  "success": false,
  "error": "Error message"
}
```

### GET `/api/health`

Health check endpoint.

**Response:**
```json
{
  "status": "ok",
  "message": "Server is running"
}
```

## Using Other Email Services

If not using Gmail, update `EMAIL_SERVICE` in `.env`:

- `outlook` - For Outlook/Hotmail
- `yahoo` - For Yahoo Mail
- `hotmail` - For Hotmail

For custom SMTP servers, modify `server/index.js`:

```javascript
const transporter = nodemailer.createTransport({
  host: 'smtp.example.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});
```

## Troubleshooting

### "Invalid login" error
- Make sure you're using an App Password, not your regular Gmail password
- Verify 2-Step Verification is enabled on your Google account

### CORS errors
- Ensure the backend is running on port 3001
- Check that CORS is properly configured in `server/index.js`

### Email not sending
- Check your email credentials in `.env`
- Verify your email service allows SMTP access
- Check the server console for error messages
