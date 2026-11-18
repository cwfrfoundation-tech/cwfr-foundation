import { useState } from 'react';
import { FileText, ShieldCheck, UserPlus, UserRoundCheck } from 'lucide-react';
import { Link } from '@/router';

const APPLICATION_FORM = 'https://airtable.com/embed/app1ixGUs4jrxEBpo/pag4I5QcQ5M907sNs/form';

export default function ApplicationPage() {
  const [choice, setChoice] = useState<'new' | 'returning' | null>(null);
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-gradient-to-br from-purple-950 via-purple-900 to-purple-700 text-white pt-40 pb-12">
        <div className="container-base max-w-5xl mx-auto">
          <p className="text-gold-400 font-bold tracking-wider uppercase text-sm">Participant onboarding · Step 1</p>
          <h1 className="text-3xl sm:text-5xl font-display font-bold mt-3">CWFR Youth Program Application</h1>
          <p className="text-purple-100 mt-5 max-w-3xl leading-relaxed">
            Applicants ages 16–24 can apply below. If you are 16, your application is PRE-REGISTRATION only; formal CWFR program participation begins at 17. For ages 16 and 17, choose the matching option under “Applicant Age and Guardian Consent” to reveal the required parent/guardian consent fields at the end of the form. A parent or legal guardian must complete those fields and sign. After submitting, continue to orientation using the confirmation link.
          </p>
        </div>
      </section>
      <section className="container-base max-w-5xl mx-auto py-8 sm:py-12">
        <div className="mb-6 grid sm:grid-cols-2 gap-4">
          <div className="rounded-xl bg-purple-50 border border-purple-100 p-4 flex gap-3">
            <FileText className="w-5 h-5 text-purple-800 shrink-0 mt-0.5" />
            <p className="text-sm text-gray-700">Have a clear recent participant photo ready. The photo and applicant electronic signature are required to submit.</p>
          </div>
          <div className="rounded-xl bg-amber-50 border border-amber-100 p-4 flex gap-3">
            <ShieldCheck className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
            <p className="text-sm text-gray-700">You must choose approve or decline for media use; declining does not affect eligibility. Under-18 guardian consent must be verified separately from orientation completion.</p>
          </div>
        </div>

        <div className="mb-8 rounded-2xl border-2 border-purple-200 bg-purple-50 p-6">
          <h2 className="text-2xl font-bold text-purple-950">Have you already applied to CWFR?</h2>
          <p className="mt-2 text-gray-700">Submit only one application per person. A second submission creates a duplicate in our records. Returning applicants should continue their existing application process instead of filling out another form.</p>
          <div className="mt-5 grid sm:grid-cols-2 gap-3">
            <button type="button" onClick={() => setChoice('returning')} aria-pressed={choice === 'returning'} className="rounded-xl border-2 border-purple-700 bg-white p-4 font-semibold text-purple-950 hover:bg-purple-100 flex items-center justify-center gap-2"><UserRoundCheck className="w-5 h-5" /> I already applied</button>
            <button type="button" onClick={() => setChoice('new')} aria-pressed={choice === 'new'} className="rounded-xl border-2 border-purple-700 bg-white p-4 font-semibold text-purple-950 hover:bg-purple-100 flex items-center justify-center gap-2"><UserPlus className="w-5 h-5" /> This is my first application</button>
          </div>
          {choice === 'returning' && (
            <div className="mt-5 rounded-xl bg-white p-5" role="status">
              <p className="font-bold text-purple-950">Welcome back. Do not submit another application.</p>
              <p className="text-sm text-gray-700 mt-2">To add missing information or correct an answer, contact CWFR with your original application name and email. Staff will update your existing record.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link to="/orientation" className="btn-gold inline-flex">Continue to orientation</Link>
                <Link to="/contact" className="font-semibold underline text-purple-800 self-center">Update my existing application</Link>
              </div>
            </div>
          )}
        </div>
        {choice === 'new' && (
        <div className="overflow-hidden rounded-2xl border border-purple-100 shadow-xl bg-white">
          <iframe
            title="CWFR Full Youth Participant Application"
            src={APPLICATION_FORM}
            className="block w-full min-h-[4800px] sm:min-h-[4200px]"
            loading="eager"
            allow="fullscreen"
          />
        </div>
        )}
        <div className="mt-6 rounded-xl bg-purple-50 p-5 text-sm text-gray-700">
          <p>After the application shows that it was received, follow its orientation link to continue. If you are returning to finish the video, use this button:</p>
          <Link to="/orientation" className="btn-gold inline-flex mt-4">Continue to the orientation</Link>
        </div>
        <p className="mt-6 text-center text-sm text-gray-600">Questions about the application? <Link to="/contact" className="text-purple-800 font-semibold underline">Contact CWFR</Link>.</p>
      </section>
    </div>
  );
}
