import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const username = "admin";
  const password = "admintono123"; // Ganti jika perlu

  const admin = await prisma.adminUser.upsert({
    where: { username },
    update: { password },
    create: {
      username,
      password,
    },
  })

  console.log(`Akun admin berhasil dibuat/diperbarui:`)
  console.log(`Username: ${admin.username}`)
  console.log(`Password: ${admin.password}`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
