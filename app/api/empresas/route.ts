import { NextResponse } from "next/server";
import { connectDB } from "@/utils/db/mongoose";
import Empresa from '@/models/Empresa'

export async function POST(request) {
    const data = await request.json();
    const newEmpresa = new Empresa(data);
    newEmpresa.save();
}