import { ArrowRight, UsersRound, MessageCircle, TrendingUp, GraduationCap, BriefcaseBusiness, Building2, Handshake } from 'lucide-react';
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
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-purple-950 via-purple-800 to-purple-500">
                  {program.title.includes('Workforce Readiness') ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-950 via-purple-800 to-purple-600 p-6">
                      <div className="absolute -right-14 -top-12 h-56 w-56 rounded-full border-[22px] border-gold-400/25" />
                      <div className="absolute -left-16 -bottom-20 h-64 w-64 rounded-full border-[22px] border-white/10" />
                      <div className="relative z-10 w-full max-w-[240px] rounded-2xl border-2 border-gold-400/70 bg-white p-5 shadow-2xl transition-transform duration-500 group-hover:scale-105">
                        <img src="/logo.png" alt="Charles Workforce Readiness Foundation official logo" className="w-full h-28 object-contain" />
                        <div className="mt-3 border-t border-purple-200 pt-3 text-center text-xs font-extrabold uppercase tracking-[0.15em] text-purple-900">Career-ready skills</div>
                      </div>
                    </div>
                  ) : program.title.includes('Financial Literacy') ? (
                    <div className="absolute inset-0 flex flex-col justify-center bg-gradient-to-br from-amber-50 via-white to-purple-100 p-5 sm:p-7">
                      <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full border-[26px] border-purple-800/10" />
                      <div className="relative z-10 flex items-center gap-4 rounded-2xl border border-gold-400 bg-white/95 p-4 shadow-xl">
                        <div className="w-[45%] shrink-0 rounded-xl bg-purple-50 p-2"><img src="/logo.png" alt="Charles Workforce Readiness Foundation official logo" className="w-full h-28 object-contain" /></div>
                        <div className="min-w-0 text-purple-950">
                          <span className="block text-xs font-bold uppercase tracking-wider text-purple-600">Learn • Grow</span>
                          <span className="mt-2 block text-xl sm:text-2xl font-display font-extrabold leading-tight">Digital Skills</span>
                          <span className="mt-1 block text-base font-semibold text-amber-700">&amp; Money Smarts</span>
                        </div>
                      </div>
                      <div className="relative z-10 mt-4 flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-widest text-purple-800"><span className="h-1.5 w-1.5 rounded-full bg-gold-500" /> Skills for life and work <span className="h-1.5 w-1.5 rounded-full bg-gold-500" /></div>
                    </div>
                  ) : program.title === 'Leadership Development' ? (
                    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-purple-950 via-purple-800 to-purple-600 p-5 sm:p-7 flex flex-col items-center justify-center">
                      <div className="absolute -top-20 -right-16 h-60 w-60 rounded-full border-[24px] border-gold-400/20" />
                      <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full border-[24px] border-white/10" />
                      <div className="relative z-10 flex items-center gap-3 sm:gap-5">
                        <div className="flex h-16 w-16 sm:h-20 sm:w-20 flex-col items-center justify-center rounded-full border-2 border-white/60 bg-white/15 shadow-lg backdrop-blur-sm">
                          <MessageCircle className="h-7 w-7 sm:h-9 sm:w-9 text-white" />
                        </div>
                        <div className="flex h-24 w-24 sm:h-28 sm:w-28 flex-col items-center justify-center rounded-full border-4 border-gold-400 bg-white shadow-2xl">
                          <UsersRound className="h-12 w-12 sm:h-14 sm:w-14 text-purple-800" />
                        </div>
                        <div className="flex h-16 w-16 sm:h-20 sm:w-20 flex-col items-center justify-center rounded-full border-2 border-white/60 bg-white/15 shadow-lg backdrop-blur-sm">
                          <TrendingUp className="h-7 w-7 sm:h-9 sm:w-9 text-gold-400" />
                        </div>
                      </div>
                      <div className="relative z-10 mt-7 rounded-full border border-gold-400/60 bg-purple-950/70 px-5 py-2 text-center text-xs sm:text-sm font-extrabold uppercase tracking-[0.15em] text-gold-300 shadow-lg">Lead • Inspire • Grow</div>
                    </div>
                  ) : program.title.includes('Internship & Job Placement') ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-purple-950 via-purple-800 to-purple-600 p-5 sm:p-7">
                      <div className="absolute -top-20 -right-16 h-60 w-60 rounded-full border-[24px] border-gold-400/20" />
                      <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full border-[24px] border-white/10" />
                      <div className="relative z-10 flex w-full max-w-sm items-center justify-between gap-1 rounded-2xl border border-white/30 bg-white/10 p-4 shadow-2xl backdrop-blur-sm">
                        <div className="flex flex-1 flex-col items-center gap-2"><span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-purple-800 shadow-lg"><GraduationCap className="h-9 w-9" /></span><span className="text-center text-[10px] sm:text-xs font-bold uppercase tracking-wide text-white">Prepare</span></div>
                        <ArrowRight className="h-7 w-7 shrink-0 text-gold-400" />
                        <div className="flex flex-1 flex-col items-center gap-2"><span className="flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-gold-400 bg-purple-950 text-gold-400 shadow-lg"><BriefcaseBusiness className="h-9 w-9" /></span><span className="text-center text-[10px] sm:text-xs font-bold uppercase tracking-wide text-white">Opportunity</span></div>
                      </div>
                      <span className="relative z-10 mt-5 text-center text-xs sm:text-sm font-extrabold uppercase tracking-[0.14em] text-gold-300">Your next step starts here</span>
                    </div>
                  ) : program.title.includes('Employer & Community Partnerships') ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-white to-purple-100 p-5 sm:p-7">
                      <div className="absolute -top-20 -right-16 h-60 w-60 rounded-full border-[24px] border-purple-800/10" />
                      <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full border-[24px] border-gold-400/20" />
                      <div className="relative z-10 w-full max-w-sm rounded-2xl border border-gold-400 bg-white p-4 sm:p-5 shadow-xl">
                        <div className="flex items-center justify-center gap-3 sm:gap-5">
                          <span className="flex h-16 w-16 items-center justify-center rounded-xl bg-purple-100 text-purple-800"><Building2 className="h-9 w-9" /></span>
                          <span className="flex h-20 w-20 items-center justify-center rounded-full bg-purple-900 text-gold-400 shadow-lg ring-4 ring-gold-400/70"><Handshake className="h-11 w-11" /></span>
                          <span className="flex h-16 w-16 items-center justify-center rounded-xl bg-amber-100 text-purple-800"><UsersRound className="h-9 w-9" /></span>
                        </div>
                        <div className="mt-4 border-t border-purple-100 pt-3 text-center text-xs sm:text-sm font-extrabold uppercase tracking-[0.13em] text-purple-900">Stronger together</div>
                      </div>
                      <span className="relative z-10 mt-4 text-center text-xs font-bold uppercase tracking-widest text-purple-700">Businesses • Community • Youth</span>
                    </div>
                  ) : (
                    <>
                      <img src={program.image} alt={program.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-950/70 to-transparent" />
                    </>
                  )}
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
            <a href="https://airtable.com/app1ixGUs4jrxEBpo/pag4I5QcQ5M907sNs/form" className="btn-gold group">
              Apply Today
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link to="/get-involved" className="btn-outline-purple">
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
