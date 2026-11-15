import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";
import { SwapText } from "./pieces";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/work", label: "Work", end: false },
  { to: "/press", label: "Press", end: false },
  { to: "/about", label: "About", end: false },
];

function NavItem({ to, label, end, onClick }: { to: string; label: string; end?: boolean; onClick?: () => void }) {
  return (
    <NavLink
      to={to}
      end={end}
      onClick={onClick}
      className={({ isActive }) => cn("mono text-[13px] text-white/80 transition-colors hover:text-white md:text-[14px]", isActive && "text-white")}
    >
      <SwapText>{label}</SwapText>
    </NavLink>
  );
}

const Layout = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setOpen(false);
  }, [pathname]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#111111] text-white">
      <header className="fixed inset-x-0 top-0 z-50 bg-[#111111]/90 backdrop-blur-md">
        <div className="flex items-center justify-between px-5 py-7 md:px-[72px] md:py-8">
          <NavLink to="/" className="mono text-[13px] text-white/80 transition-colors hover:text-white md:text-[14px]">
            <SwapText>{site.mark}</SwapText>
          </NavLink>
          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 lg:flex xl:gap-14">
            {links.map((link) => (
              <NavItem key={link.to} {...link} />
            ))}
          </nav>
          <div className="hidden lg:block">
            <NavItem to="/contact" label="Let’s talk" />
          </div>
          <button
            type="button"
            className="mono text-[13px] text-white/80 lg:hidden"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 flex flex-col justify-center gap-6 bg-[#111111] px-8 lg:hidden">
          {[...links, { to: "/contact", label: "Let’s talk", end: false }].map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              onClick={() => setOpen(false)}
              className="display text-5xl text-white"
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}

      <main>
        <Outlet />
      </main>

      <footer className="px-5 pb-8 pt-24 md:px-[72px] md:pt-28">
        <div className="grid gap-12 md:grid-cols-[1fr_1fr_1.4fr]">
          <div>
            <p className="mono text-[13px] text-[#888] md:text-[14px]">Socials</p>
            <ul className="mt-4 space-y-1">
              {site.socials.map((social) => (
                <li key={social.label}>
                  <a href={social.href} target="_blank" rel="noreferrer" className="text-[21px] tracking-[-0.01em] text-white/80 transition-colors hover:text-white">
                    <SwapText>{social.label}</SwapText>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mono text-[13px] text-[#888] md:text-[14px]">Menu</p>
            <ul className="mt-4 space-y-1">
              <li>
                <NavLink to="/work" className="text-[21px] tracking-[-0.01em] text-white/80 hover:text-white">
                  <SwapText>Work</SwapText>
                </NavLink>
              </li>
              <li>
                <NavLink to="/press" className="text-[21px] tracking-[-0.01em] text-white/80 hover:text-white">
                  <SwapText>Press</SwapText>
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-[21px] tracking-[-0.01em] text-white/80 hover:text-white">
                  <SwapText>About</SwapText>
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-[21px] tracking-[-0.01em] text-white/80 hover:text-white">
                  <SwapText>Contact</SwapText>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="md:justify-self-end">
            <p className="mono text-[13px] text-[#888] md:text-[14px]">Contact</p>
            <ul className="mt-4 space-y-1">
              <li>
                <a href={`mailto:${site.email}`} className="text-[21px] tracking-[-0.01em] text-white/80 hover:text-white">
                  {site.email}
                </a>
              </li>
              {site.phone ? (
                <li>
                  <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="text-[21px] tracking-[-0.01em] text-white/80 hover:text-white">
                    {site.phone}
                  </a>
                </li>
              ) : null}
            </ul>
          </div>
        </div>

        <p className="display mt-16 text-[clamp(2.7rem,8.6vw,8.4rem)] text-white md:mt-20">{site.name}</p>

        <div className="mt-6 grid grid-cols-3 items-center">
          <span />
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="mono justify-self-center text-[13px] text-[#888] transition-colors hover:text-white md:text-[14px]"
          >
            Back to top ↑
          </button>
          <p className="mono justify-self-end text-[13px] text-[#888] md:text-[14px]">©2026</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
