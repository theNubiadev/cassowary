export default function Navbar() {
  return (
    <header className="bg-[#F3F4F6] text-slate-800 border-b border-slate-200">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2 text-xl font-bold tracking-tight text-slate-900">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500 text-white">L</span>
          <span>Loadlink</span>
        </a>

        <nav className="hidden items-center gap-2 text-sm font-medium sm:flex">
          <a href="#how-it-works" className="rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900">How It Works</a>
          <a href="#for-shippers" className="rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900">For Shippers</a>
          <a href="#for-drivers" className="rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900">For Drivers</a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#signup"
            className="rounded-lg border border-blue-500 bg-white px-4 py-2 text-sm font-semibold text-blue-600 transition-colors duration-200 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            Signup
          </a>
        </div>
      </div>
    </header>
  );
}
