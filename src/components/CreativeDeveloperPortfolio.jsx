import React from "react";
import {
  PenTool,
  Code2,
  Layers,
  Zap,
  ArrowUpRight,
  Github,
  Link as LinkIcon,
  Send,
  Flame,
} from "lucide-react";

/**
 * Creative Developer Portfolio — single-file React component
 * Tailwind CSS required (see setup instructions).
 * Drop your own portrait into the `heroImage` src, and swap
 * project screenshots in the `projects` array.
 */

const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "40+", label: "Projects Delivered" },
  { value: "25+", label: "Happy Clients" },
  { value: "10+", label: "Technologies" },
];

const services = [
  {
    icon: PenTool,
    title: "Web Design",
    desc: "Pixel-perfect designs that combine creativity with strategy.",
    n: "01",
  },
  {
    icon: Code2,
    title: "Web Development",
    desc: "Clean, scalable code with modern frameworks and best practices.",
    n: "02",
  },
  {
    icon: Layers,
    title: "UI/UX Design",
    desc: "Intuitive interfaces designed for seamless user experiences.",
    n: "03",
  },
  {
    icon: Zap,
    title: "Optimization",
    desc: "Speed, SEO and performance tweaks that drive results.",
    n: "04",
  },
];

const projects = [
  {
    n: "01",
    title: "Brandix Studio",
    tag: "Web Design & Development",
    accent: "from-violet-700 via-purple-800 to-black",
  },
  {
    n: "02",
    title: "Taskly App",
    tag: "Dashboard Design & Development",
    accent: "from-slate-200 via-slate-100 to-white",
    light: true,
  },
  {
    n: "03",
    title: "Hosteria",
    tag: "Landing Page Design & Development",
    accent: "from-neutral-800 via-neutral-900 to-black",
  },
];

const toolkit = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Git & GitHub",
  "Figma",
  "VS Code",
  "Firebase",
];

const process = [
  { n: "01", title: "Discover", desc: "Understanding your goals, audience and requirements." },
  { n: "02", title: "Design", desc: "Creating wireframes and visuals that communicate." },
  { n: "03", title: "Develop", desc: "Building clean, responsive and scalable solutions." },
  { n: "04", title: "Deliver", desc: "Testing, optimizing and launching with care." },
];

export default function CreativeDeveloperPortfolio() {
  return (
    <div className="min-h-screen w-full bg-[#0b0a0f] text-white font-sans selection:bg-violet-500/40">
      <div className="mx-auto max-w-3xl px-6 py-10 sm:px-10">
        {/* ---------------- HERO ---------------- */}
        <section className="relative">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-[1.1fr_0.9fr] sm:items-start">
            <div className="relative z-10">
              <h1 className="font-black uppercase leading-[0.85] tracking-tight">
                <span className="block text-[clamp(3rem,10vw,5.5rem)] text-violet-400">
                  Creative
                </span>
                <span className="block text-[clamp(3rem,10vw,5.5rem)] text-white">
                  Developer
                </span>
              </h1>

              <p
                className="mt-2 text-3xl text-violet-300"
                style={{ fontFamily: "'Brush Script MT', cursive" }}
              >
                Portfolio
              </p>

              <p className="mt-6 max-w-xs text-sm font-semibold uppercase tracking-wide text-violet-200">
                I design &amp; code digital experiences that inspire.
              </p>

              <p className="mt-3 font-mono text-xs text-violet-400/70">
                &lt;/ code. design. deploy /&gt;
              </p>
            </div>

            {/* Portrait placeholder — swap the src for a real photo */}
            <div className="relative mx-auto aspect-[3/4] w-48 overflow-hidden rounded-2xl bg-gradient-to-b from-violet-800 via-violet-950 to-black sm:w-full">
              <div className="absolute inset-0 flex items-center justify-center text-violet-400/40 text-xs">
                your portrait
              </div>
              <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full border border-violet-500/40" />
            </div>
          </div>

          {/* Availability + monogram badge */}
          <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-violet-400" />
              <span className="text-xs font-semibold uppercase tracking-wide text-white/80">
                Available for projects
              </span>
            </div>
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-violet-500/50 text-sm font-bold text-violet-300">
              CD
            </div>
          </div>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-4 gap-4 border-t border-white/10 pt-6">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-extrabold text-violet-400 sm:text-3xl">
                  {s.value}
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-wide text-white/50">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------- WHAT I DO ---------------- */}
        <section className="mt-16">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-[0.8fr_2fr]">
            <div>
              <h2 className="text-2xl font-extrabold uppercase text-violet-400">
                What
                <br />I Do
              </h2>
              <p className="mt-3 text-xs leading-relaxed text-white/60">
                I design, build and ship modern websites and web applications
                that are fast, responsive and user-focused.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {services.map(({ icon: Icon, title, desc, n }) => (
                <div
                  key={title}
                  className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <Icon className="h-5 w-5 text-violet-400" strokeWidth={1.5} />
                  <div className="mt-4">
                    <p className="text-sm font-bold uppercase">{title}</p>
                    <p className="mt-1 text-[11px] leading-relaxed text-white/50">
                      {desc}
                    </p>
                  </div>
                  <p className="mt-4 text-[10px] text-white/30">{n}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- FEATURED PROJECTS ---------------- */}
        <section className="mt-16">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-extrabold uppercase tracking-wide text-violet-400">
              Featured Projects
            </h2>
            <a
              href="#"
              className="flex items-center gap-1 text-[11px] font-semibold uppercase text-white/60 hover:text-white"
            >
              View all projects <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {projects.map((p) => (
              <div
                key={p.n}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
              >
                <div
                  className={`relative flex h-32 items-end bg-gradient-to-br p-3 ${p.accent}`}
                >
                  <span
                    className={`absolute left-3 top-3 text-[10px] font-bold ${
                      p.light ? "text-black/40" : "text-white/40"
                    }`}
                  >
                    {p.n}
                  </span>
                </div>
                <div className="flex items-center justify-between p-4">
                  <div>
                    <p className="text-sm font-bold">{p.title}</p>
                    <p className="text-[11px] text-white/40">{p.tag}</p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-white/40 transition group-hover:text-violet-400" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------- TOOLKIT / PROCESS / CTA ---------------- */}
        <section className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {/* Toolkit */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h3 className="text-sm font-extrabold uppercase text-violet-400">
              My Toolkit
            </h3>
            <div className="mt-4 grid grid-cols-3 gap-4">
              {toolkit.map((tool) => (
                <div key={tool} className="flex flex-col items-center gap-1">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-[10px] font-bold text-violet-300">
                    {tool.slice(0, 2)}
                  </div>
                  <span className="text-center text-[9px] text-white/40">
                    {tool}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Work process */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h3 className="text-sm font-extrabold uppercase text-violet-400">
              Work Process
            </h3>
            <ol className="mt-4 space-y-4 border-l border-dashed border-white/15 pl-4">
              {process.map((step) => (
                <li key={step.n} className="relative">
                  <span className="absolute -left-[21px] flex h-4 w-4 items-center justify-center rounded-full bg-violet-500 text-[8px] font-bold text-black">
                    {step.n}
                  </span>
                  <p className="text-xs font-bold uppercase">{step.title}</p>
                  <p className="mt-0.5 text-[11px] leading-relaxed text-white/45">
                    {step.desc}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          {/* CTA */}
          <div className="flex flex-col justify-between rounded-2xl bg-gradient-to-br from-violet-400 to-violet-600 p-5 text-black">
            <p className="text-lg font-extrabold uppercase leading-tight">
              Let's build something amazing together.
            </p>
            <p className="mt-2 text-xs text-black/70">
              I'm open to new opportunities and exciting collaborations.
            </p>
            <button className="mt-4 flex w-fit items-center gap-1 rounded-full bg-black px-4 py-2 text-[11px] font-bold uppercase text-white">
              Get in touch <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </section>

        {/* ---------------- CONTACT / FOOTER ---------------- */}
        <footer className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
          <div>
            <h3 className="text-sm font-extrabold uppercase text-violet-400">
              Contact
            </h3>
            <p className="mt-2 text-xs text-white/50">hello@yourname.dev</p>
          </div>
          <div>
            <h3 className="text-sm font-extrabold uppercase text-violet-400">
              Let's Connect
            </h3>
            <div className="mt-3 flex gap-3 text-white/50">
              <Github className="h-4 w-4 hover:text-violet-400" />
              <LinkIcon className="h-4 w-4 hover:text-violet-400" />
              <Send className="h-4 w-4 hover:text-violet-400" />
              <Flame className="h-4 w-4 hover:text-violet-400" />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}