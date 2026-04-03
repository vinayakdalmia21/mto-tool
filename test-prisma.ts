import { PrismaClient } from '@prisma/client';

try {
  const prisma = new PrismaClient();
  console.log("Success with no args");
} catch(e) {
  console.error("Error with no args:", e.message);
}

try {
  const prisma2 = new PrismaClient({ adapter: null });
  console.log("Success with adapter null");
} catch(e) {
  console.error("Error with adapter null:", e.message);
}

try {
  const prisma3 = new PrismaClient({ adapter: undefined });
  console.log("Success with adapter undefined");
} catch(e) {
  console.error("Error with adapter undefined:", e.message);
}
