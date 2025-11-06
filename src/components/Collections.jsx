import { Building2, Waves, Trees } from 'lucide-react';

const collections = [
  {
    icon: Building2,
    title: 'Skyline Penthouses',
    desc: 'Elevated sanctuaries with panoramic views over the Queen’s Necklace. Private lobbies, cigar rooms, and dedicated concierge.'
  },
  {
    icon: Waves,
    title: 'Seafront Residences',
    desc: 'Expansive terraces that open to the Arabian Sea. Natural stone, linen, and oak with an emphasis on quiet luxury.'
  },
  {
    icon: Trees,
    title: 'Garden Villas',
    desc: 'Low-density, green enclaves within the city. Courtyards, plunge pools, and bespoke landscaping for a resort-like calm.'
  }
];

export default function Collections() {
  return (
    <section id="residences" className="relative bg-neutral-50 py-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="text-xs tracking-[0.25em] uppercase text-neutral-500">The Portfolio</p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-neutral-900">Addresses with Quiet Confidence</h2>
          <p className="mt-4 text-neutral-600">A curated selection across Malabar Hill, Worli, and BKC — each residence crafted with restraint and enduring materials.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100 text-neutral-800">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-xl text-neutral-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-600">{desc}</p>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
              <button className="mt-4 text-sm font-medium text-neutral-900 underline-offset-4 hover:underline">Explore</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
