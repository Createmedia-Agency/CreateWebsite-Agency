import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-32 pb-12 overflow-hidden relative border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32 border-b-2 border-white/10 pb-32">
          <div>
            <Link href="/" className="text-[clamp(4rem,10vw,10rem)] font-display font-extrabold leading-[0.75] tracking-tighter block hover:text-brand-red transition-colors">
              CREATE<span className="text-brand-red">.</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 gap-8 md:items-end md:justify-items-end text-sm font-bold uppercase tracking-widest">
            <div className="space-y-4 flex flex-col md:text-right">
              <Link href="/work" className="hover:text-brand-red transition-colors">WORK</Link>
              <Link href="/studio" className="hover:text-brand-red transition-colors">STUDIO</Link>
              <Link href="/labs" className="hover:text-brand-red transition-colors">LABS</Link>
              <Link href="/social" className="hover:text-brand-red transition-colors">SOCIAL</Link>
              <Link href="/events" className="hover:text-brand-red transition-colors">EVENTS</Link>
            </div>
            
            <div className="space-y-4 flex flex-col md:text-right">
              <a href="#" className="hover:text-brand-red transition-colors">INSTAGRAM</a>
              <a href="#" className="hover:text-brand-red transition-colors">YOUTUBE</a>
              <a href="#" className="hover:text-brand-red transition-colors">LINKEDIN</a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-xs font-bold uppercase tracking-widest opacity-50">
          <p>&copy; {new Date().getFullYear()} CREATE STUDIO. ALL RIGHTS RESERVED.</p>
          <p>CREATIVE PRODUCTION STUDIO.</p>
          <Link href="/admin" className="hover:text-brand-red">ADMIN LOGIN</Link>
        </div>
      </div>

      {/* Decorative large background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-display font-extrabold text-white/5 pointer-events-none whitespace-nowrap">
        CREATE.
      </div>
    </footer>
  );
}
