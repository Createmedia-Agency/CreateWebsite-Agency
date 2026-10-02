import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/10 p-6 flex flex-col h-screen sticky top-0">
        <div className="font-display font-extrabold text-2xl tracking-tighter mb-12">CREATE. CMS</div>
        <nav className="flex flex-col gap-4 font-sans text-sm font-bold uppercase tracking-widest opacity-80">
          <Link href="/admin" className="text-brand-red">Dashboard</Link>
          <Link href="/admin/leads" className="hover:text-white transition-colors">Leads</Link>
          <Link href="/admin/portfolio" className="hover:text-white transition-colors">Portfolio</Link>
          <Link href="/admin/team" className="hover:text-white transition-colors">Team</Link>
          <Link href="/admin/content" className="hover:text-white transition-colors">Content Library</Link>
          <Link href="/admin/media" className="hover:text-white transition-colors">Media</Link>
          <Link href="/admin/settings" className="hover:text-white transition-colors">Settings</Link>
        </nav>
        <div className="mt-auto pt-6 border-t border-white/10">
          <button className="text-xs font-bold uppercase tracking-widest opacity-50 hover:opacity-100">Sign Out</button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-12">
        <h1 className="text-4xl font-display font-bold uppercase mb-12">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-[#111] p-6 border border-white/10">
            <div className="text-xs font-bold uppercase tracking-widest opacity-50 mb-4">Total Leads</div>
            <div className="text-5xl font-display font-bold">12</div>
          </div>
          <div className="bg-[#111] p-6 border border-white/10">
            <div className="text-xs font-bold uppercase tracking-widest opacity-50 mb-4">Published Projects</div>
            <div className="text-5xl font-display font-bold">4</div>
          </div>
          <div className="bg-[#111] p-6 border border-white/10">
            <div className="text-xs font-bold uppercase tracking-widest opacity-50 mb-4">Content Awaiting Review</div>
            <div className="text-5xl font-display font-bold text-brand-red">3</div>
          </div>
        </div>

        <h2 className="text-2xl font-display font-bold uppercase mb-6">Recent Leads</h2>
        <div className="bg-[#111] border border-white/10 overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/5 font-bold uppercase tracking-widest text-xs opacity-50">
              <tr>
                <th className="p-4">Name</th>
                <th className="p-4">Company</th>
                <th className="p-4">Service</th>
                <th className="p-4">Status</th>
                <th className="p-4">Date</th>
              </tr>
            </thead>
            <tbody>
              {/* Dummy data until DB is connected */}
              <tr className="border-t border-white/5">
                <td className="p-4 font-bold">John Doe</td>
                <td className="p-4">Acme Corp</td>
                <td className="p-4">Commercials</td>
                <td className="p-4"><span className="px-2 py-1 bg-brand-red text-white text-[10px] font-bold uppercase">New</span></td>
                <td className="p-4 opacity-50">Just now</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
