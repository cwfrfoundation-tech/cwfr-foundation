import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import { PROGRAMS, STEPS } from '@/data/programs';
import { IMAGES } from '@/data/content';
import { Link } from '@/router';

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Programs"
        title="Programs That Prepare Young Adults for Success"
        subtitle="Comprehensive workforce-readiness programs designed to equip participants with the skills, confidence, and connections they need to build sustainable careers."
        image={IMAGES.programsHero}
      />

      {/* Real participants portrait gallery: original photos, no altered faces */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-purple-950 via-purple-900 to-purple-700">
        <div className="container-base">
          <div className="text-center mb-9">
            <p className="text-gold-400 text-sm font-bold uppercase tracking-widest mb-2">The people behind our purpose</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">Meet Our Participants</h2>
            <p className="text-purple-100 mt-3 max-w-2xl mx-auto">Real young people. Real potential. One community committed to opportunity.</p>
          </div>
          <div className="grid grid-cols-3 gap-2 sm:gap-5 max-w-5xl mx-auto">
            <div className="rounded-2xl overflow-hidden bg-gradient-to-b from-purple-700 to-purple-900 border-2 border-gold-400/60 shadow-xl p-2 sm:p-3">
              <img src="/images/D1175822-1D9A-4141-BD8F-25EC4CA043A2.png" alt="CWFR youth participant in purple polo" className="w-full h-48 sm:h-96 object-contain object-center rounded-xl" loading="lazy" />
            </div>
            <div className="rounded-2xl overflow-hidden bg-gradient-to-b from-purple-700 to-purple-900 border-2 border-gold-400/60 shadow-xl p-2 sm:p-3">
              <img src="/images/cwfr_gold_polo_retouched.png" alt="CWFR youth participant in gold polo" className="w-full h-48 sm:h-96 object-contain object-center rounded-xl" loading="lazy" />
            </div>
            <div className="rounded-2xl overflow-hidden bg-gradient-to-b from-purple-700 to-purple-900 border-2 border-gold-400/60 shadow-xl p-2 sm:p-3">
              <img src="/images/IMG_8858.png" alt="CWFR youth participant in purple polo" className="w-full h-48 sm:h-96 object-contain object-center rounded-xl" loading="lazy" />
            </div>
          </div>
          <p className="text-center text-purple-200 text-xs mt-5">Portrait gallery featuring actual CWFR participants.</p>
        </div>
      </section>

      {/* Financial literacy leadership: unaltered original portraits in one continuous composition */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="container-base">
          <div className="overflow-hidden rounded-3xl shadow-xl bg-gradient-to-r from-purple-950 via-purple-700 to-purple-900">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-7 sm:p-12 flex flex-col justify-center">
                <p className="text-gold-400 text-xs font-bold uppercase tracking-widest">Financial Literacy • Foundation Leadership</p>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-4">Building confident financial futures</h2>
                <p className="mt-5 text-purple-100 leading-relaxed">Financial literacy is part of our commitment to helping young adults ages 17–24 prepare for life and work. Our Founder, Charles C. Vallon, and Executive Director, Tiffinay Cage, bring real-world experience and personal commitment to this mission.</p>
                <p className="mt-4 text-purple-200 text-sm">Original leadership portraits presented together as an illustration of our mission, not a photograph of a training session.</p>
              </div>
              <div className="relative bg-[#e6e0ed] overflow-hidden">
                <div className="grid grid-cols-2 gap-0">
                  <div className="relative min-w-0 overflow-hidden">
                    <img src="/images/356110CE-415A-47A5-AA6F-1B1889D4145A.png" alt="Original portrait of Executive Director Tiffinay Cage in gold dress" className="block w-full h-64 sm:h-80 lg:h-96 object-cover object-top scale-[1.6] origin-top [mask-image:linear-gradient(to_right,transparent_0%,black_18%,black_82%,transparent_100%)]" loading="lazy" />
                  </div>
                  <div className="relative min-w-0 overflow-hidden">
                    <img src="/images/FD6D09A1-7E7F-446F-9066-B54253A0FE9E.png" alt="Original portrait of Founder Charles C. Vallon in purple suit" className="block w-full h-64 sm:h-80 lg:h-96 object-cover object-top [mask-image:linear-gradient(to_right,transparent_0%,black_18%,black_82%,transparent_100%)]" loading="lazy" />
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-purple-950/30 via-transparent to-purple-700/5" />
                <div className="grid grid-cols-2 bg-purple-950 text-white text-center">
                  <div className="py-3 px-2"><span className="block text-sm sm:text-base font-bold">Tiffinay Cage</span><span className="block mt-1 text-xs text-purple-200">Executive Director</span></div>
                  <div className="py-3 px-2"><span className="block text-sm sm:text-base font-bold">Charles C. Vallon</span><span className="block mt-1 text-xs text-purple-200">Founder &amp; Chairman</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-base">
          <SectionHeading
            center
            eyebrow="What We Offer"
            title="Our Programs"
            subtitle="Each program is designed to address a specific aspect of workforce readiness and career development."
          />

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROGRAMS.map((program, i) => (
              <div key={i} className="group card overflow-hidden hover:-translate-y-1 flex flex-col">
                <div className={program.title === 'Leadership Development' ? "relative aspect-[4/3] overflow-hidden bg-[url('/images/5A1FDDE5-D528-4E8F-8BC6-FC5EBF44B049.jpeg')] bg-cover bg-center" : 'relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-purple-950 via-purple-800 to-purple-500'}>
                  <img
                    src={program.title === 'Leadership Development' ? '/images/IMG_3717.jpeg' : program.image}
                    alt={program.title}
                    className={program.title === 'Leadership Development' ? 'relative z-10 w-[74%] h-full mx-auto object-contain' : 'w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'}
                  />
                  <div className={program.title === 'Leadership Development' ? 'hidden' : 'absolute inset-0 bg-gradient-to-t from-purple-950/70 to-transparent'} />
                  <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-white/90 backdrop-blur flex items-center justify-center shadow-lg">
                    <program.icon className="w-5 h-5 text-purple-700" />
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display font-semibold text-lg text-purple-900 mb-2 leading-snug">
                    {program.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed flex-1">
                    {program.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-28 bg-purple-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl" />

        <div className="container-base relative">
          <SectionHeading
            center
            light
            eyebrow="The Journey"
            title="How It Works"
            subtitle="From application to success, we guide young adults through every step of their workforce-readiness journey."
          />

          <div className="mt-16 relative">
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
              {STEPS.map((step, i) => (
                <div key={i} className="relative group">
                  <div className="relative z-10 mx-auto w-24 h-24 rounded-full bg-gradient-to-br from-purple-700 to-purple-500 flex items-center justify-center shadow-xl border-4 border-purple-950 group-hover:border-gold-400/50 transition-all duration-300 group-hover:scale-105">
                    <span className="font-display font-bold text-2xl text-gold-400">{step.number}</span>
                  </div>
                  <div className="mt-5 bg-white/5 backdrop-blur rounded-2xl p-5 border border-white/10 group-hover:bg-white/10 group-hover:border-gold-400/30 transition-all duration-300">
                    <h3 className="font-display font-semibold text-lg text-gold-400 text-center mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-purple-100 text-center leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-purple-50 to-white">
        <div className="container-base text-center max-w-2xl mx-auto">
          <SectionHeading
            center
            eyebrow="Ready to Begin?"
            title="Take the First Step Today"
            subtitle="Apply to participate in our workforce-readiness programs and start your journey toward career success."
          />
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="btn-gold group">
              Apply Today
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/get-involved" className="btn-outline-purple">
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
