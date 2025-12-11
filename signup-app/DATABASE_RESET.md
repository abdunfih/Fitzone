# Database Reset and Seed Instructions

## Prerequisites
- Make sure PostgreSQL is running and accessible
- Ensure the DATABASE_URL in `.env.local` is correctly configured

## Manual Database Reset Process

### 1. Generate Prisma Client
```bash
npx prisma generate
```

### 2. Reset Database (Push Schema)
```bash
npx prisma db push
```

### 3. Run Seed Script
```bash
npx ts-node prisma/seed.ts
```

## Using NPM Scripts (if environment allows)
```bash
npm run db:reset
```

This will automatically:
1. Push the schema to the database
2. Run the seed script

## Seed Script Details

The seed script (`prisma/seed.ts`) creates the following sample users:

1. **John Doe** (john@example.com)
   - Provider: credentials
   - Password: (hashed password)

2. **Jane Smith** (jane@example.com)
   - Provider: credentials
   - Password: (hashed password)

3. **Google User** (google@example.com)
   - Provider: google
   - No password (OAuth user)

## Verification

After running the seed script, you can verify the database has been seeded correctly by:

1. **Using Prisma Studio**
   ```bash
   npx prisma studio
   ```
   Then navigate to the `User` table to see the seeded users.

2. **Querying the database directly**
   ```sql
   SELECT * FROM users;
   ```

## Troubleshooting

### Common Issues:

1. **Invalid URL Error**
   - Ensure the DATABASE_URL in `.env.local` is properly formatted
   - Check that the database server is accessible

2. **Connection Refused**
   - Verify PostgreSQL is running
   - Check the database host and port in the DATABASE_URL

3. **Permission Denied**
   - Ensure the database user has the necessary permissions
   - Check the username and password in the DATABASE_URL

### Environment Variables

The database connection is configured in `.env.local`:
```
DATABASE_URL="postgresql://nafi:Nafi2005@172.31.224.1:5432/nafi-ai-wo-3?schema=public"
```

## Schema

The current schema includes a single `User` model:
- `id` (String, CUID, Primary Key)
- `name` (String, Optional)
- `email` (String, Unique)
- `password` (String, Optional)
- `provider` (String, Default: "credentials")
- `createdAt` (DateTime, Default: now())
- `updatedAt` (DateTime, Updated automatically)