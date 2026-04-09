import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const data = await request.json();
    const product = await prisma.product.update({
      where: { slug: slug },
      data: {
        name: data.name,
        price: data.price,
        discount: data.discount,
        imageUrl: data.imageUrl,
        description: data.description,
        weight: data.weight,
        shopeeUrl: data.shopeeUrl,
        popular: data.popular,
        sold: data.sold,
        archived: data.archived,
      }
    });
    return NextResponse.json(product);
  } catch (error) {
    console.error('Error updating product:', error);
    return NextResponse.json({ error: 'Failed to update product' }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    await prisma.product.delete({
      where: { slug: slug }
    });
    return NextResponse.json({ message: 'Product deleted' });
  } catch (error) {
    console.error('Error deleting product:', error);
    return NextResponse.json({ error: 'Failed to delete product' }, { status: 500 });
  }
}
