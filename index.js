import Prisma from '@prisma/client';
const { PrismaClient } = Prisma;

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      username: 'alice',
      email: 'alice@gmail.com',
      firstname: 'alice',
      lastname: 'lal',
    },
  });

  const allUsers = await prisma.user.findMany({});
  console.dir(allUsers, { depth: null });
}

main();
