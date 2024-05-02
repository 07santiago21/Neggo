import { NextResponse } from "next/server";
import { connectDB } from "../../../libs/mongodb";
import Empresa from "../../../models/Empresa";


export async function GET() {
    await connectDB()

    const empresas = await Empresa.find()
    return NextResponse.json(empresas)
}

export async function POST(request) {
    const data = await request.json();

    const newEmpresa = await Empresa.create(data)
    return NextResponse.json(newEmpresa)
}