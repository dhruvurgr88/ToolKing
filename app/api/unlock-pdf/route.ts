import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const azureResponse = await fetch(
      "https://vidyaos-api-bmggd8fecxfqh9gf.centralindia-01.azurewebsites.net/api/AIChat/UnlockPdf",
      {
        method: "POST",
        body: formData, // Forwarding the multipart/form-data
      },
    );

    if (azureResponse.status === 401) {
      return new NextResponse("Incorrect Password", { status: 401 });
    }

    if (!azureResponse.ok) {
      return new NextResponse("API Error", { status: azureResponse.status });
    }

    const pdfBuffer = Buffer.from(await azureResponse.arrayBuffer());
    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: { "Content-Type": "application/pdf" },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
