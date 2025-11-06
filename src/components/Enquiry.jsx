import { useState } from 'react';

export default function Enquiry() {
  const [status, setStatus] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    setStatus(`Thank you, ${name}. Our private client team will be in touch shortly.`);
    e.currentTarget.reset();
  }

  return (
    <section id="enquire" className="relative bg-neutral-50 py-20">
      <div className="mx-auto w-full max-w-3xl px-6">
        <div className="mb-8 text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-neutral-500">Private Viewing</p>
          <h2 className="mt-3 font-serif text-3xl text-neutral-900">Request an Introduction</h2>
          <p className="mt-3 text-neutral-600">Share a few details and our team will arrange a discreet, private walkthrough at your convenience.</p>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm text-neutral-700">Full Name</label>
              <input name="name" required className="w-full rounded-md border border-neutral-300 bg-white px-4 py-3 outline-none ring-0 placeholder:text-neutral-400 focus:border-neutral-900" placeholder="Your name" />
            </div>
            <div>
              <label className="mb-2 block text-sm text-neutral-700">Phone</label>
              <input name="phone" type="tel" required className="w-full rounded-md border border-neutral-300 bg-white px-4 py-3 outline-none focus:border-neutral-900" placeholder="+91" />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm text-neutral-700">Email</label>
              <input name="email" type="email" required className="w-full rounded-md border border-neutral-300 bg-white px-4 py-3 outline-none focus:border-neutral-900" placeholder="you@example.com" />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm text-neutral-700">Preferred Location</label>
              <select name="location" className="w-full rounded-md border border-neutral-300 bg-white px-4 py-3 outline-none focus:border-neutral-900">
                <option>Malabar Hill</option>
                <option>Worli</option>
                <option>Bandra Kurla Complex</option>
                <option>Altamount Road</option>
              </select>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-between">
            <p className="text-sm text-neutral-500">We value discretion. Your details will remain confidential.</p>
            <button className="rounded-full bg-neutral-900 px-6 py-3 text-white transition hover:bg-black">Submit</button>
          </div>
        </form>

        {status && (
          <div className="mt-6 rounded-lg bg-neutral-900 p-4 text-white">{status}</div>
        )}
      </div>
    </section>
  );
}
