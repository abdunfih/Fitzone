# Modern Signup App with Next.js 15

A modern and professional signup page using Next.js 15, Tailwind CSS, and PostgreSQL for data storage.

## Features

- 🎨 Modern, responsive design with Tailwind CSS
- 🔐 Secure password hashing with bcrypt
- 🗄️ PostgreSQL database integration with Prisma ORM
- 📱 Fully responsive and centered layout
- 🎯 Soft color palette with rounded corners
- 🔤 Modern typography (Inter font)
- 🌐 Google OAuth integration (placeholder)
- 📝 Form validation and error handling
- 🔄 Login page integration

## Tech Stack

- **Frontend**: Next.js 15, React, TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: bcrypt for password hashing
- **Font**: Inter (Google Fonts)

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Database Setup

First, ensure your PostgreSQL database is running and accessible with the connection details in `.env.local`.

Generate Prisma client:
```bash
npm run db:generate
```

Push the schema to your database:
```bash
npm run db:push
```

### 3. Environment Variables

Create a `.env.local` file with the following variables:

```env
# Authentication
AUTH_SECRET="eS82/1+UVALwAbUHQPCBWLzCu89oir3swFI/CVDT3PM="
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""

# Database
DATABASE_URL="c"
```

### 4. Run the Application

Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
signup-app/
├── src/
│   ├── app/
│   │   ├── api/auth/signup/
│   │   │   └── route.ts          # Signup API endpoint
│   │   ├── globals.css           # Global styles with Tailwind
│   │   ├── layout.tsx            # Root layout
│   │   ├── login/
│   │   │   └── page.tsx          # Login page
│   │   └── page.tsx              # Signup page
│   ├── components/               # Reusable components
│   └── lib/
│       └── prisma.ts             # Prisma client setup
├── prisma/
│   └── schema.prisma            # Database schema
├── tailwind.config.js           # Tailwind configuration
├── postcss.config.js            # PostCSS configuration
├── next.config.js               # Next.js configuration
├── package.json                  # Project dependencies
└── .env.local                   # Environment variables
```

## API Endpoints

### POST /api/auth/signup

Creates a new user account with the following fields:
- `fullName` (string, required)
- `email` (string, required)
- `password` (string, required)

**Response:**
- Success (201): `{ message: 'User created successfully', user: UserWithoutPassword }`
- Error (400): `{ message: 'Validation error' }`
- Error (500): `{ message: 'Internal server error' }`

## Database Schema

The `users` table contains:
- `id` (String, Primary Key)
- `name` (String, optional)
- `email` (String, unique)
- `password` (String, optional)
- `provider` (String, default: 'credentials')
- `createdAt` (DateTime)
- `updatedAt` (DateTime)

## Security Features

- Password hashing using bcrypt with salt rounds of 12
- Input validation on both client and server
- Secure environment variable management
- Protection against duplicate email registration

## Future Enhancements

- Complete NextAuth.js integration with Google OAuth
- Email verification system
- Password reset functionality
- Session management
- Additional form validation with Zod
- Rate limiting for API endpoints
- CSRF protection

## Development

### Database Management

View your database:
```bash
npm run db:studio
```

Create migrations:
```bash
npm run db:migrate
```

### Linting

```bash
npm run lint
```

### Build for Production

```bash
npm run build
npm start