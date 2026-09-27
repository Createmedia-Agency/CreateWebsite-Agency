import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-ink text-brand-bg pt-32 pb-12 overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32 border-b-2 border-brand-bg/20 pb-32">
          <div>
            <Link href="/" className="text-[15vw] md:text-[10rem] font-display font-extrabold leading-[0.75] tracking-tighter block hover:text-brand-orange transition-colors">
              CREATE
            </Link>
          </div>
          
          <div className="grid grid-cols-2 gap-8 md:items-end md:justify-items-end text-sm font-bold uppercase tracking-widest">
            <div className="space-y-4 flex flex-col md:text-right">
              <Link href="/work" className="hover:text-brand-blue transition-colors">LAB / CONCEPT</Link>
              <Link href="/services" className="hover:text-brand-blue transition-colors">SERVICES</Link>
              <Link href="/about" className="hover:text-brand-blue transition-colors">MANIFESTO</Link>
              <Link href="/insights" className="hover:text-brand-blue transition-colors">INSIGHTS</Link>
            </div>
            
            <div className="space-y-4 flex flex-col md:text-right">
              <a href="#" className="hover:text-brand-orange transition-colors">INSTAGRAM</a>
              <a href="#" className="hover:text-brand-orange transition-colors">X / TWITTER</a>
              <a href="#" className="hover:text-brand-orange transition-colors">LINKEDIN</a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-xs font-bold uppercase tracking-widest opacity-50">
          <p>&copy; {new Date().getFullYear()} CREATE STUDIO. ALL RIGHTS RESERVED.</p>
          <p>NOT A NORMAL MARKETING AGENCY.</p>
        </div>
      </div>

      {/* Decorative large background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-display font-extrabold text-white/5 pointer-events-none whitespace-nowrap">
        CREATE
      </div>
    </footer>
  );
}
