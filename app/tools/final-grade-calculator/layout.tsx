import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "What Do I Need on My Final? Final Grade Calculator (College & High School)",
  description:
    "Use this final grade calculator to find out what you need on your final exam to pass or get an A. Works for college and high school students using weighted grading systems.",
  openGraph: {
    title: "Finals Week? Find Out What You Need to Score 🎯",
    description:
      "Calculate exactly what you need on your final exam to pass or get an A. Supports US weighted grading and 4.0 GPA tracking.",
    url: "https://toolking.online/tools/final-grade-calculator",
    siteName: "ToolKing Academic",
    images: [
      {
        url: "https://toolking.online/og-grade-slayer.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function FinalGradeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
