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
                src="/create-logo-transparent.png" 
                alt="CREATE. Logo" 
                fill 
                className="object-contain object-left"
              />
            </Link>
            <p className="text-xl font-sans font-medium opacity-80 max-w-sm leading-relaxed text-balance">
              Branding so effective, it feels illegal.
            </p>
          </div>
          
          <div className="md:col-span-3 md:col-start-7 flex flex-col space-y-4 text-sm font-medium tracking-wide">
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-red mb-2">Contact</h4>
            <a href="mailto:createforbrands@gmail.com" className="hover:text-brand-red transition-colors">createforbrands@gmail.com</a>
            <a href="tel:+919811005532" className="hover:text-brand-red transition-colors">+91 98110 05532</a>
            <div className="pt-2">
              <Link href="/contact" className="text-xs font-bold uppercase tracking-widest hover:text-brand-red transition-colors border-b border-white/20 pb-1">Start a Project</Link>
            </div>
          </div>

          <div className="md:col-span-2 md:col-start-11 flex flex-col space-y-4 text-sm font-medium tracking-wide">
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-red mb-2">Explore</h4>
            <Link href="/work" className="hover:text-brand-red transition-colors">Work</Link>
            <Link href="/services" className="hover:text-brand-red transition-colors">Services</Link>
            <Link href="/insights" className="hover:text-brand-red transition-colors">Insights</Link>
            <Link href="/about" className="hover:text-brand-red transition-colors">About</Link>
            <Link href="/why-choose-us" className="hover:text-brand-red transition-colors">Why Choose Us</Link>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-medium tracking-widest uppercase opacity-40 border-t border-white/10 pt-8">
          <p>&copy; {new Date().getFullYear()} CREATE. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            
          </div>
        </div>
      </div>
    </footer>
  );
}
