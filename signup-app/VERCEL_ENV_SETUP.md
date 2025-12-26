# Vercel Environment Variables Setup

## Required Environment Variables

For your Next.js app with NextAuth to work correctly on Vercel, you **MUST** set these environment variables in your Vercel project settings:

### 1. NextAuth Configuration (REQUIRED)

```
NEXTAUTH_SECRET=your-secret-key-here
NEXTAUTH_URL=https://your-domain.vercel.app
```

**Important Notes:**
- `NEXTAUTH_SECRET`: Generate a secure random string (32+ characters)
  - You can use: `openssl rand -base64 32`
  - Or online generator: https://generate-secret.vercel.app/32
- `NEXTAUTH_URL`: Your production URL (e.g., `https://your-app.vercel.app`)
  - Vercel automatically provides `VERCEL_URL`, but you should set `NEXTAUTH_URL` explicitly
  - For preview deployments, you can use: `https://${process.env.VERCEL_URL}`

### 2. Google OAuth (REQUIRED for Google Sign-In)

```
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

### 3. Database (REQUIRED)

```
DATABASE_URL=postgresql://user:password@host:port/database?sslmode=require
```

## How to Set Environment Variables in Vercel

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add each variable for **Production**, **Preview**, and **Development** environments
4. Click **Save**

## Verification

After setting environment variables:
1. Redeploy your application
2. Check build logs to ensure no errors
3. Test authentication endpoints

## Common Issues Fixed

✅ **Issue 1**: `AUTH_SECRET` vs `NEXTAUTH_SECRET`
- **Fixed**: Removed `AUTH_SECRET`, using only `NEXTAUTH_SECRET`

✅ **Issue 2**: Build fails during page data collection
- **Fixed**: Added `export const dynamic = 'force-dynamic'` to route handler
- **Fixed**: Added explicit `secret` property in `authOptions`

✅ **Issue 3**: Missing environment variable validation
- **Fixed**: Added validation in `auth.ts` to catch missing variables early

✅ **Issue 4**: OAuth redirects broken
- **Fixed**: Ensured `NEXTAUTH_URL` is properly configured

## Production Checklist

- [ ] `NEXTAUTH_SECRET` is set (32+ character random string)
- [ ] `NEXTAUTH_URL` is set to your production domain
- [ ] `GOOGLE_CLIENT_ID` is set
- [ ] `GOOGLE_CLIENT_SECRET` is set
- [ ] `DATABASE_URL` is set to your production database
- [ ] All variables are set for Production, Preview, and Development environments
- [ ] Build completes successfully
- [ ] Authentication endpoints work correctly

