import { Metadata } from "next";
import Link from "next/link";
import { Gamepad2, Trophy, Users, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Free Online Games - Play Nau Goti & More",
  description:
    "Play classic Indian board games and modern web games for free on ToolKing. No download required, instant play in browser.",
};

export default function GamesLanding() {
  const baseUrl = "https://toolking.online";

  // Single Breadcrumb for this hub
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Games",
        item: `${baseUrl}/games`,
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <header className="mb-16">
        <h1 className="text-6xl font-black italic uppercase tracking-tighter mb-4">
          ToolKing <span className="text-indigo-600">Arcade</span>
        </h1>
        <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">
          Traditional & Modern Browser Games • Ad-Free Experience
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Game Card: Nau Goti */}
        <Link
          href="/games/nau-goti"
          className="group p-8 rounded-[3rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-indigo-500/50 transition-all"
        >
          <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-10 shadow-lg group-hover:rotate-6 transition-transform">
            <Trophy className="text-white" />
          </div>
          <h2 className="text-2xl font-black uppercase italic tracking-tighter mb-2">
            Nau Goti
          </h2>
          <p className="text-xs text-slate-500 font-bold mb-6 uppercase tracking-tight">
            The classic 9-bead strategy game from India. Challenge your brain.
          </p>
          <div className="flex items-center gap-2 text-[10px] font-black uppercase text-indigo-600">
            Play Now <ArrowRight size={14} />
          </div>
        </Link>

        {/* Placeholder for future games */}
        <div className="p-8 rounded-[3rem] border border-dashed border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center text-center opacity-50">
          <Gamepad2 className="text-slate-300 mb-4" size={40} />
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
            More Games Coming Soon
          </p>
        </div>
      </div>
    </div>
  );
}
