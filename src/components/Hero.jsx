import Spline from '@splinetool/react-spline';
import { ArrowRight, Phone, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Spline scene as immersive background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle dark vignette for contrast (does not block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col">
        {/* Top bar */}
        <div className="mx-auto w-full max-w-7xl px-6 pt-8">
          <div className="flex items-center justify-between text-white/90">
            <div className="font-semibold tracking-widest uppercase text-xs sm:text-sm">Mumbai • India</div>
            <div className="flex items-center gap-6 text-xs sm:text-sm">
              <div className="hidden md:flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Malabar Hill, BKC, Worli
              </div>
              <a href="#enquire" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 backdrop-blur-md transition hover:bg-white/20">
                <Phone className="h-4 w-4" />
                Enquire
              </a>
            </div>
          </div>
        </div>

        {/* Headline */}
        <div className="mx-auto mt-auto w-full max-w-7xl px-6 pb-24">
          <div className="max-w-3xl text-white">
            <p className="mb-4 text-xs tracking-[0.35em] uppercase text-white/70">Veridian Estates</p>
            <h1 className="font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
              Private Residences Curated for the Discerning Few
            </h1>
            <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/80">
              Tailored sanctuaries overlooking the Arabian Sea. Crafted with restraint, finished to perfection, and serviced with quiet discretion.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#residences"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-gray-900 transition hover:bg-neutral-100"
              >
                Explore Residences
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#enquire"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-white backdrop-blur-md transition hover:bg-white/20"
              >
                Request a Private Viewing
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
