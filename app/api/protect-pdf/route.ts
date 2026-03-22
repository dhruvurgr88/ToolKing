import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("File") as File;
    const password = formData.get("Password") as string;

    if (!file || !password) {
      return NextResponse.json(
        { error: "Missing file or password" },
        { status: 400 },
      );
    }

    const azureFormData = new FormData();
    azureFormData.append("File", file);
    azureFormData.append("Password", password);

    const azureResponse = await fetch(
      "https://vidyaos-api-bmggd8fecxfqh9gf.centralindia-01.azurewebsites.net/api/AIChat/ProtectPdf",
      {
        method: "POST",
        body: azureFormData,
      },
    );

    if (!azureResponse.ok) {
      return NextResponse.json(
        { error: "Azure API Error" },
        { status: azureResponse.status },
      );
    }

    const pdfArrayBuffer = await azureResponse.arrayBuffer();
    // 🔥 Convert to Buffer to satisfy Next.js 16 build types
    const pdfBuffer = Buffer.from(pdfArrayBuffer);

    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="protected_${file.name}"`,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
