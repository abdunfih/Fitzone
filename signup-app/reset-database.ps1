Write-Host "Resetting and seeding Prisma database..." -ForegroundColor Green

Write-Host "Step 1: Generating Prisma client..." -ForegroundColor Yellow
npx prisma generate

Write-Host "Step 2: Pushing schema to database..." -ForegroundColor Yellow
npx prisma db push

Write-Host "Step 3: Seeding database..." -ForegroundColor Yellow
npx ts-node prisma/seed.ts

Write-Host "Database reset and seed completed!" -ForegroundColor Green
Write-Host "You can verify the data by running: npx prisma studio" -ForegroundColor Cyan