import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-12 overflow-hidden border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-5">
            <Link href="/" className="block relative w-48 h-32 mb-8 hover:opacity-80 transition-opacity">
              <Image 
                src="/brand-logo.png" 
                alt="CREATE. Logo" 
                fill 
                className="object-contain object-left"
              />
            </Link>
            <p className="text-xl font-sans font-medium opacity-80 max-w-sm leading-relaxed text-balance">
              Branding so effective, it feels illegal.
            </p>
          </div>
          
          <div className="md:col-span-2 md:col-start-8 flex flex-col space-y-4 text-sm font-medium tracking-wide">
            <Link href="/work" className="hover:text-brand-red transition-colors">Work</Link>
            <Link href="/services" className="hover:text-brand-red transition-colors">Services</Link>
            <Link href="/studio" className="hover:text-brand-red transition-colors">Studio</Link>
            <Link href="/labs" className="hover:text-brand-red transition-colors">Labs</Link>
          </div>

          <div className="md:col-span-2 flex flex-col space-y-4 text-sm font-medium tracking-wide">
            <Link href="/social" className="hover:text-brand-red transition-colors">Social</Link>
            <Link href="/events" className="hover:text-brand-red transition-colors">Events</Link>
            <Link href="/insights" className="hover:text-brand-red transition-colors">Insights</Link>
            <Link href="/contact" className="hover:text-brand-red transition-colors">Contact</Link>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-medium tracking-widest uppercase opacity-40 border-t border-white/10 pt-8">
          <p>&copy; {new Date().getFullYear()} CREATE. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <Link href="/admin" className="hover:text-brand-red transition-colors">Admin Login</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
