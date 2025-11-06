export default function Heritage() {
  return (
    <section className="relative bg-white py-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-neutral-500">Our Ethos</p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-neutral-900">An Inheritance of Discretion</h2>
            <p className="mt-5 text-neutral-700 leading-7">
              Built for families that value permanence and privacy, our homes are created with a belief in longevity — in materials that age gracefully and service that remains invisible. Italian travertine, European oak, brass patina, and hand-finished linens define an aesthetic that never asks for attention yet commands it.
            </p>
            <ul className="mt-6 space-y-3 text-neutral-700">
              <li>• Limited residences per tower with private lift access</li>
              <li>• In-house butler and concierge, on call 24/7</li>
              <li>• Sound-insulated sanctuaries designed for quiet living</li>
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-neutral-200">
              <img
                src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop"
                alt="Marble and oak interior"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="-mt-8 ml-auto w-2/3 max-w-md overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 shadow-lg">
              <p className="font-serif text-xl text-neutral-900">Crafted with intention.</p>
              <p className="mt-2 text-sm text-neutral-600">Every residence is planned around natural light, cross-ventilation, and storage that is generous yet unobtrusive.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
