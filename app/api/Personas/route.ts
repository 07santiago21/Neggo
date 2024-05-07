import { NextResponse } from "next/server";
import { connectDB } from "../../../libs/mongodb";
import Persona from "../../../models/Persona";


export async function GET() {
    await connectDB()

    const personas = await Persona.find()
    return NextResponse.json(personas)
}

export async function POST(request) {
    
    await connectDB()
    const data = await request.json();

    const newPerson = await Persona.create(data)
    return NextResponse.json(newPerson)
}