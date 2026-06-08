import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Search } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-zinc-50 dark:bg-zinc-900">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="hero-ambient hero-ambient-one" />
        <div className="hero-ambient hero-ambient-two" />
        <svg
          className="absolute left-0 top-1/3 h-[60vh] w-screen opacity-[0.03] dark:opacity-[0.04]"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            className="hero-line"
            d="M0 40 Q 25 20 50 40 T 100 40"
            stroke="currentColor"
            strokeWidth="0.3"
            fill="none"
          />
          <path
            className="hero-line hero-line-delay"
            d="M0 60 Q 25 80 50 60 T 100 60"
            stroke="currentColor"
            strokeWidth="0.3"
            fill="none"
          />
        </svg>
      </div>

      <section className="relative min-h-screen">
        <div className="container relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-32 md:px-12 md:py-40">
          <div className="grid grid-cols-1 items-center gap-12 md:gap-16 lg:grid-cols-2 lg:gap-24">
            <div className="space-y-10 md:space-y-12">
              <div className="hero-reveal space-y-6">
                <div className="h-px origin-center animate-hero-line bg-gradient-to-r from-transparent via-black/10 to-transparent dark:via-white/10" />

                <h1 className="font-light text-6xl leading-none tracking-tight text-zinc-900 dark:text-zinc-50 md:text-7xl lg:text-8xl">
                  Mamadou
                  <span className="mt-2 block text-right text-4xl font-light opacity-50 md:text-5xl lg:text-6xl">
                    Cissé
                  </span>
                </h1>

                <div className="flex flex-col space-y-4 pt-4">
                  <h2 className="text-2xl font-light tracking-tight text-zinc-800 dark:text-zinc-100 md:text-3xl lg:text-4xl">
                    Développeur{" "}
                    <span className="relative inline-block">
                      <span className="relative z-10 font-normal text-zinc-900 dark:text-zinc-50">
                        Logiciel & DevOps
                      </span>
                      <span className="absolute bottom-0 left-0 h-2 w-full bg-indigo-500/20 dark:bg-indigo-400/20" />
                    </span>
                  </h2>

                  <span className="inline-flex w-max rounded-full border border-zinc-900 bg-zinc-900/90 px-4 py-2 text-sm font-light tracking-wide text-zinc-50 dark:border-zinc-100 dark:bg-zinc-100/90 dark:text-zinc-900">
                    Futur étudiant en mastère en ingénierie logicielle
                  </span>
                </div>
              </div>

              <div className="hero-reveal hero-reveal-delay relative rounded-2xl border border-zinc-900/5 bg-white/60 p-8 shadow-sm backdrop-blur-sm dark:border-zinc-100/5 dark:bg-zinc-800/60">
                <div className="absolute bottom-6 left-0 top-6 w-1 rounded-full bg-gradient-to-b from-indigo-500 to-amber-500 opacity-40" />

                <div className="pl-4">
                  <p className="text-lg font-light leading-relaxed text-zinc-700 dark:text-zinc-200">
                    Je me passionne pour l&apos;ingénierie{" "}
                    <span className="font-normal text-zinc-900 dark:text-zinc-50">logicielle</span> et la culture{" "}
                    <span className="font-normal text-zinc-900 dark:text-zinc-50">DevOps</span>, en concevant des
                    architectures robustes et en automatisant les déploiements via les outils{" "}
                    <span className="font-normal text-indigo-600 dark:text-indigo-400">Cloud & CI/CD</span>.
                  </p>

                  <div className="mt-6 rounded-lg border-l-2 border-amber-500/40 bg-amber-50/80 p-4 dark:bg-amber-900/20">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-amber-500/10">
                        <Search className="h-4 w-4 text-amber-600 dark:text-amber-400" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-sm font-normal text-amber-900 dark:text-amber-100">
                          Recherche d&apos;alternance
                        </p>
                        <p className="mt-0.5 text-xs text-amber-700 dark:text-amber-300">
                          À partir de septembre 2026 - Ingénierie Logicielle / DevOps
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hero-reveal hero-reveal-delay-long flex items-center gap-4">
                <a
                  href="https://github.com/Neptune2k21"
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-zinc-900/10 bg-zinc-100 transition-colors hover:border-zinc-900 hover:bg-zinc-900 dark:border-zinc-100/10 dark:bg-zinc-800 dark:hover:border-zinc-100 dark:hover:bg-zinc-100"
                  aria-label="GitHub Profile"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Github className="h-5 w-5 text-zinc-900 transition-colors group-hover:text-zinc-100 dark:text-zinc-100 dark:group-hover:text-zinc-900" />
                </a>

                <a
                  href="https://www.linkedin.com/in/mamadou-lamine-ciss%C3%A9/"
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-zinc-900/10 bg-zinc-100 transition-colors hover:border-zinc-900 hover:bg-zinc-900 dark:border-zinc-100/10 dark:bg-zinc-800 dark:hover:border-zinc-100 dark:hover:bg-zinc-100"
                  aria-label="LinkedIn Profile"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Linkedin className="h-5 w-5 text-zinc-900 transition-colors group-hover:text-zinc-100 dark:text-zinc-100 dark:group-hover:text-zinc-900" />
                </a>

                <a
                  href="mailto:mamadoulcisse9236@gmail.com"
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-zinc-900/10 bg-zinc-100 transition-colors hover:border-zinc-900 hover:bg-zinc-900 dark:border-zinc-100/10 dark:bg-zinc-800 dark:hover:border-zinc-100 dark:hover:bg-zinc-100"
                  aria-label="Email Contact"
                >
                  <Mail className="h-5 w-5 text-zinc-900 transition-colors group-hover:text-zinc-100 dark:text-zinc-100 dark:group-hover:text-zinc-900" />
                </a>

                <div className="h-px w-16 bg-gradient-to-r from-zinc-900/20 to-transparent dark:from-zinc-100/20" />

                <Link
                  href="/contact"
                  className="group flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-light tracking-wide text-zinc-50 transition-[gap] hover:gap-3 dark:bg-zinc-100 dark:text-zinc-900"
                >
                  Me contacter
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="hero-reveal-image relative mx-auto aspect-square w-full max-w-lg">
              <div className="absolute inset-0 -z-10 scale-95 -rotate-3 rounded-3xl bg-gradient-to-br from-indigo-100/30 via-amber-100/20 to-rose-100/30 blur-2xl dark:from-indigo-900/20 dark:via-amber-900/10 dark:to-rose-900/20" />
              <div className="absolute inset-0 -z-10 scale-95 rotate-2 rounded-3xl border border-zinc-900/10 dark:border-zinc-100/10" />
              <div className="absolute -right-8 top-1/4 -z-10 h-12 w-12 rounded-full border border-indigo-200 opacity-40 dark:border-indigo-800" />
              <div className="absolute -left-6 bottom-1/3 -z-10 h-10 w-10 rounded-full border border-amber-200 opacity-30 dark:border-amber-800" />

              <div className="relative h-full w-full overflow-hidden rounded-2xl border border-zinc-900/10 shadow-xl dark:border-zinc-100/10">
                <Image
                  src="/web.jpg"
                  alt="Mamadou Cissé - Développeur Logiciel & DevOps"
                  fill
                  className="object-cover"
                  priority
                  fetchPriority="high"
                  quality={72}
                  sizes="(min-width: 1280px) 512px, (min-width: 1024px) 40vw, (min-width: 768px) 70vw, 92vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/20 to-transparent" />
              </div>

              <div className="absolute -bottom-4 -right-4 rounded-full border border-zinc-900/10 bg-white px-6 py-2.5 text-sm font-light shadow-lg dark:border-zinc-100/10 dark:bg-zinc-800">
                <span className="flex items-center gap-2 text-zinc-900 dark:text-zinc-100">
                  JavaScript Fans
                </span>
              </div>

              <div className="absolute -right-6 top-1/2 -translate-y-1/2 rounded-lg border border-amber-500 bg-amber-400 px-4 py-2 text-sm font-normal shadow-lg dark:border-amber-600 dark:bg-amber-500">
                <div className="flex items-center gap-2">
                  <Search className="h-4 w-4 text-amber-900 dark:text-amber-950" aria-hidden="true" />
                  <span className="text-amber-900 dark:text-amber-950">Alternance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
