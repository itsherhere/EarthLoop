import Card from "./ui/Card";
import Button from "./ui/Button";

export default function Pricing() {
  return (
    <div  className="min-h-screen w-full bg-linear-to-t from-[#0e4d3a] via-[#0e4d3a]  via-30% to-[#cbe9e0] to-99% px-4 pt-8">
    <section className="mx-auto max-w-7xl px-4 py-12 md:py-16 ">
      <h2 className="text-4xl md:text-6xl font-title font-bold text-slate-900 text-center">
        Choose the plan that fits<br/> your sustainability goals
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3 px-12">
        {/* Starter */}
        <Card
          className="bg-[#F9FFFA] text-slate-900"
        >
          <h3 className="font-title text-3xl md:text-4xl">Starter</h3>
          <p className="font-subtitle mt-2 text-slate-700">
            Perfect for small teams taking their first step into carbon measurement.
          </p>

          <div className="mt-6 font-price text-5xl md:text-6xl text-slate-900">
            €0<span className="text-2xl align-super font-price">/mo</span>
          </div>

          <ul className="mt-6 space-y-3 font-subtitle text-slate-800">
            <li>✓ Basic carbon accounting</li>
            <li>✓ 1 workspace</li>
            <li>✓ CSV upload</li>
            <li>✓ Dashboard access</li>
          </ul>

          <div className="mt-auto pt-8 pb-2">
            <Button 
            >Get started</Button>
          </div>
        </Card>

        {/* Growth */}
        <Card
          className="text-slate-900 bg-[#b2ddd4]"
        >
          <h3 className="font-title text-3xl md:text-4xl">Growth</h3>
          <p className="font-subtitle mt-2 text-slate-900/90">
            Unlock full ESG insights and automate your reporting.
          </p>

          <div className="mt-6 font-price text-5xl md:text-6xl text-slate-900">
            €30<span className="text-2xl align-super  font-price">/mo</span>
          </div>

          <ul className="mt-6 space-y-3 font-subtitle text-slate-900">
            <li>✓ ESG dashboard</li>
            <li>✓ Reports export</li>
            <li>✓ + Limited benchmarks</li>
          </ul>

          <div className="mt-auto pt-8 pb-2">
            <Button>Get started</Button>
          </div>
        </Card>

        {/* Enterprise */}
        <Card
          className="text-slate-900 bg-[#6bb1a1]"
        >
          <h3 className="font-title text-3xl md:text-4xl">Enterprise</h3>
          <p className="font-subtitle mt-2  text-slate-900/90">
            Designed for global organizations and data-driven consultants.
          </p>

          <div className="mt-6 font-price text-5xl md:text-6xl">
            Contact us
          </div>

          <ul className="mt-6 space-y-3 font-subtitle">
            <li>✓ Unlimited data sources</li>
            <li>✓ Multi-team access</li>
            <li>✓ API integration</li>
            <li>✓ Eurostat link</li>
          </ul>

          <div className="mt-auto pt-8 pb-2">
            <Button  className="bg-[#1f574a]">
              Get started
            </Button>
          </div>
        </Card>
      </div>
    </section>
    </div>
  );
}
