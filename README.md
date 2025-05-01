# Swwap Auth Service

Authentication service for the Swwap bartering application. This service handles user authentication, registration, and password management.

## Features

- User registration with email verification
- Login with JWT authentication
- Password reset functionality
- Email verification
- Rate limiting
- Security headers with Helmet
- TypeScript support
- Prisma ORM with PostgreSQL
- Input validation with Zod
- Error handling middleware

## Prerequisites

- Node.js (v14 or higher)
- PostgreSQL
- npm or yarn

## Setup

1. Clone the repository:
```bash
git clone https://github.com/your-username/swwap-auth.git
cd swwap-auth
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```
DATABASE_URL="postgresql://postgres:password@localhost:5432/swwap_auth"
PORT=3001
JWT_SECRET="your-super-secret-jwt-key-change-this-in-production"
```

4. Set up the database:
```bash
npx prisma migrate dev
```

5. Generate Prisma client:
```bash
npm run prisma:generate
```

## Development

Start the development server:
```bash
npm run dev
```

## Production

Build and start the production server:
```bash
npm run build
npm start
```

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/forgot-password` - Request password reset
- `POST /api/auth/reset-password` - Reset password
- `GET /api/auth/verify/:token` - Verify email

## Security

- Password hashing with bcrypt
- JWT for authentication
- Rate limiting to prevent brute force attacks
- Security headers with Helmet
- Input validation with Zod
- CORS protection

## License

ISC 