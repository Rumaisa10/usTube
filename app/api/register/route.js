import { NextResponse } from "next/server";
import dbConnect from "@/service/dbConnect";
import User from "@/lib/models/user";
import bcrypt from "bcryptjs";

export async function POST(request) {
    const {name,email,password} = await request.json()

    if (!name || !email || !password)
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
   
    await dbConnect()

  const existing = await User.findOne({ email })
  if (existing)
    return NextResponse.json({ error: 'Email already in use' }, { status: 400 })

  const hashed = await bcrypt.hash(password, 10)
  await User.create({ name, email, password: hashed })

  return NextResponse.json({ message: 'Account created' }, { status: 201 })

}