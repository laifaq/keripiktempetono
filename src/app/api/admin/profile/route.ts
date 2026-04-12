import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const admin = await prisma.adminUser.findFirst();
    if (!admin) return NextResponse.json({ error: 'Admin not found' }, { status: 404 });
    
    return NextResponse.json({ username: admin.username });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch admin' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();
    const admin = await prisma.adminUser.findFirst();
    
    if (!admin) return NextResponse.json({ error: 'Admin not found' }, { status: 404 });

    const updateData: any = {};
    if (username) updateData.username = username;
    if (password) updateData.password = password;

    const updatedAdmin = await prisma.adminUser.update({
      where: { id: admin.id },
      data: updateData,
    });
    
    return NextResponse.json({ success: true, username: updatedAdmin.username });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update admin' }, { status: 500 });
  }
}
