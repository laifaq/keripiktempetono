import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const username = "admin";
<<<<<<< HEAD
  const password = "admintono123"; // Ganti jika perlu
=======
  const password = "keripiktempetono123"; // Ganti jika perlu
>>>>>>> 88cb45f (initial commit: full admin dashboard and dynamic settings)

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
