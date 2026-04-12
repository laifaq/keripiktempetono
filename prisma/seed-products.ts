import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const products = [
    {
      name: "Keripik Tempe Original",
      slug: "keripik-tempe-original",
      price: 15000,
      discount: 0,
      imageUrl: "https://down-id.img.susercontent.com/file/id-11134207-7r98r-lqfvk4v4vev1f0",
      description: "Keripik tempe khas Malang dengan rasa original yang gurih dan renyah. Dibuat dari kedelai pilihan tanpa bahan pengawet.",
      weight: "200g",
      shopeeUrl: "https://shopee.co.id",
      popular: true,
      sold: 1250,
    },
    {
      name: "Keripik Tempe Pedas Daun Jeruk",
      slug: "keripik-tempe-pedas-daun-jeruk",
      price: 18000,
      discount: 10,
      imageUrl: "https://down-id.img.susercontent.com/file/id-11134207-7r98o-lqfvk4v4vev1f0",
      description: "Sensasi pedas yang nendang berpadu dengan aroma segarnya daun jeruk. Cocok untuk pecinta tantangan rasa!",
      weight: "200g",
      shopeeUrl: "https://shopee.co.id",
      popular: true,
      sold: 850,
    },
    {
      name: "Keripik Tempe Barbeque",
      slug: "keripik-tempe-barbeque",
      price: 17000,
      discount: 0,
      imageUrl: "https://down-id.img.susercontent.com/file/id-11134207-7r98t-lqfvk4v4vev1f0",
      description: "Rasa barbeque yang smokey dan lezat. Favorit anak-anak dan keluarga untuk camilan santai.",
      weight: "200g",
      shopeeUrl: "https://shopee.co.id",
      popular: false,
      sold: 450,
    },
    {
      name: "Keripik Tempe Keju",
      slug: "keripik-tempe-keju",
      price: 17000,
      discount: 5,
      imageUrl: "https://down-id.img.susercontent.com/file/id-11134207-7r98u-lqfvk4v4vev1f0",
      description: "Gurihnya keju premium yang melimpah di setiap gigitan keripik tempe renyah.",
      weight: "200g",
      shopeeUrl: "https://shopee.co.id",
      popular: false,
      sold: 600,
    }
  ];

  console.log('Sedang mengisi data produk...');

  for (const p of products) {
    await prisma.product.upsert({
      where: { slug: p.slug },
      update: p,
      create: p,
    });
  }

  console.log('Data produk berhasil ditambahkan!');
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
