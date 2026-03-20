import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log("Contato recebido", body);
    return NextResponse.json({ success: true, message: "Contato enviado com sucesso" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Falha ao processar contato" }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ success: true, message: "API de contato ativa" });
}
