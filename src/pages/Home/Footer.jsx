import React from "react";

/**
 * Responsive Footer Component (React + Tailwind)
 * - Default export: Footer
 * - Props: companyName, links (array), socialLinks (object), onSubscribe (fn)
 *
 * Usage example:
 * <Footer
 *   companyName="Turag"
 *   links={[{title:'Products', items:[{label:'Chairs', href:'#'},{label:'Tables', href:'#'}]}]}
 *   socialLinks={{ twitter:'#', facebook:'#', instagram:'#' }}
 *   onSubscribe={(email) => console.log('subscribe', email)}
 * />
 */

export default function Footer({
  companyName = "Your Company",
  links = [
    { title: "Product", items: [{ label: "Features", href: "#" }, { label: "Pricing", href: "#" }] },
    { title: "Company", items: [{ label: "About", href: "#" }, { label: "Careers", href: "#" }] },
    { title: "Support", items: [{ label: "Docs", href: "#" }, { label: "Contact", href: "#" }] },
  ],
  socialLinks = {},
  onSubscribe = null,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements.email?.value?.trim();
    if (!email) return;
    if (typeof onSubscribe === "function") onSubscribe(email);
    e.target.reset();
  };

  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand + description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-xl font-semibold">
                {companyName?.charAt(0) ?? "C"}
              </div>
              <span className="font-semibold text-lg">{companyName}</span>
            </div>
            <p className="text-sm text-slate-400">Create beautiful spaces with handcrafted furniture — sustainably made and thoughtfully designed.</p>

            <div className="flex items-center gap-3 mt-2">
              {/* Social icons (simple SVGs) */}
              {socialLinks.twitter && (
                <a href={socialLinks.twitter} aria-label="Twitter" className="p-2 rounded-md hover:bg-white/5">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M22 5.92c-.63.28-1.3.47-2 .56a3.48 3.48 0 001.53-1.93 6.9 6.9 0 01-2.2.84 3.45 3.45 0 00-5.9 3.14A9.78 9.78 0 013 4.89a3.45 3.45 0 001.07 4.6 3.4 3.4 0 01-1.56-.43v.04a3.46 3.46 0 002.77 3.39c-.4.11-.82.16-1.26.06.36 1.12 1.41 1.93 2.65 1.95A6.92 6.92 0 012 19.54a9.75 9.75 0 005.29 1.55c6.35 0 9.84-5.26 9.84-9.83v-.45A7.05 7.05 0 0022 5.92z" />
                  </svg>
                </a>
              )}

              {socialLinks.facebook && (
                <a href={socialLinks.facebook} aria-label="Facebook" className="p-2 rounded-md hover:bg-white/5">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 4.99 3.66 9.12 8.44 9.95v-7.05H7.9v-2.9h2.53V9.4c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.76-1.61 1.54v1.86h2.74l-.44 2.9h-2.3V22c4.78-.83 8.44-4.96 8.44-9.93z" />
                  </svg>
                </a>
              )}

              {socialLinks.instagram && (
                <a href={socialLinks.instagram} aria-label="Instagram" className="p-2 rounded-md hover:bg-white/5">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6.2A4.8 4.8 0 1016.8 13 4.8 4.8 0 0012 8.2zm6.4-2.6a1.12 1.12 0 11-1.12-1.12A1.12 1.12 0 0118.4 5.6z" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Links columns */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {links.map((col) => (
              <div key={col.title}>
                <h4 className="text-sm font-semibold text-slate-200 mb-3">{col.title}</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  {col.items.map((it) => (
                    <li key={it.label}>
                      <a href={it.href} className="hover:text-white">
                        {it.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h4 className="text-sm font-semibold text-slate-200 mb-3">Join our newsletter</h4>
            <p className="text-sm text-slate-400 mb-4">Get product updates, tips, and exclusive discounts.</p>

            <form onSubmit={handleSubmit} className="flex gap-2">
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                className="flex-1 min-w-0 rounded-md px-3 py-2 bg-white/5 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button type="submit" className="rounded-md px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium">
                Subscribe
              </button>
            </form>

            <p className="text-xs text-slate-500 mt-3">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>

        <div className="border-t border-white/5 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <span>© {new Date().getFullYear()} {companyName}. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

