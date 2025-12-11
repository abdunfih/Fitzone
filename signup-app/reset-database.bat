@echo off
echo Resetting and seeding Prisma database...

echo Step 1: Generating Prisma client...
npx prisma generate

echo Step 2: Pushing schema to database...
npx prisma db push

echo Step 3: Seeding database...
npx ts-node prisma/seed.ts

echo Database reset and seed completed!
echo You can verify the data by running: npx prisma studio
pause