import Hero from './components/Hero';
import Collections from './components/Collections';
import Heritage from './components/Heritage';
import Enquiry from './components/Enquiry';

function App() {
  return (
    <div className="min-h-screen bg-white antialiased">
      <Hero />
      <Collections />
      <Heritage />
      <Enquiry />
      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto w-full max-w-7xl px-6 py-10 text-sm text-neutral-600">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="tracking-widest uppercase text-xs">Veridian Estates • Mumbai</p>
            <p className="text-neutral-500">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
