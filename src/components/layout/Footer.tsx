import Link from "next/link";
import Image from "next/image";
import { footerLinks, brand } from "@/content/copy";

export default function Footer() {
  return (
    <footer className="border-t border-paper/10 bg-ink px-6 py-16 text-paper">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:justify-between">
        <div className="max-w-sm">
          <Image src="/brand/logo.jpg" alt="" width={140} height={93} className="h-10 w-auto rounded-sm" />
          <p className="font-display mt-4 text-xl tracking-[0.2em]">{brand.name}</p>
          <p className="mt-4 text-sm leading-relaxed text-paper/60">{brand.fullName}</p>
          <p className="mt-6 text-sm text-gold-soft/90">{brand.tagline}</p>
        </div>

        <nav className="grid grid-cols-2 gap-x-10 gap-y-3 sm:grid-cols-3">
          {footerLinks.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-paper/60 hover:text-paper">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="mx-auto mt-14 flex max-w-7xl flex-col gap-4 border-t border-paper/10 pt-8 text-xs text-paper/40 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} P2P Global Discipleship Network.</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-paper/70">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-paper/70">
            Terms
          </Link>
          <Link href="/about" className="hover:text-paper/70">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
