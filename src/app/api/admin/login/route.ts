import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    const admin = await prisma.adminUser.findUnique({
      where: { username },
    });

    if (!admin || admin.password !== password) {
      return NextResponse.json(
        { message: "Username atau password salah" },
        { status: 401 }
      );
    }

    // In a real app, use JWT or sessions. For simplicity, we'll return success.
    return NextResponse.json({ 
      message: "Login berhasil",
      user: { username: admin.username }
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Terjadi kesalahan server" },
      { status: 500 }
    );
  }
}
