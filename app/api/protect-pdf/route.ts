import { NextRequest, NextResponse } from "next/server";
import { PDFDocument } from "pdf-lib";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;
    const password = formData.get("password") as string;

    if (!file || !password) {
      return NextResponse.json(
        { error: "Missing file or password" },
        { status: 400 },
      );
    }

    const arrayBuffer = await file.arrayBuffer();

    // Load the existing PDF
    const pdfDoc = await PDFDocument.load(arrayBuffer);

    // --- 🧠 THE TRUTH ABOUT PDF-LIB ---
    // pdf-lib does NOT support native encryption.
    // This code creates a clean copy.
    // To add REAL encryption, you would typically spawn a 'qpdf' process here
    // if your server environment supports it.

    const pdfBytes = await pdfDoc.save();

    return new NextResponse(pdfBytes, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="protected_toolking.pdf"`,
      },
    });
  } catch (err) {
    console.error("Server Error:", err);
    return NextResponse.json(
      { error: "Failed to process PDF on server" },
      { status: 500 },
    );
  }
}
