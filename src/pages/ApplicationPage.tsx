import { FileText, ShieldCheck } from 'lucide-react';
import { Link } from '@/router';

import ParticipantApplication from '@/components/ParticipantApplication';

export default function ApplicationPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-gradient-to-br from-purple-950 via-purple-900 to-purple-700 text-white pt-40 pb-12">
        <div className="container-base max-w-5xl mx-auto">
          <p className="text-gold-400 font-bold tracking-wider uppercase text-sm">Participant onboarding · Step 1</p>
          <h1 className="text-3xl sm:text-5xl font-display font-bold mt-3">CWFR Youth Program Application</h1>
          <p className="text-purple-100 mt-5 max-w-3xl leading-relaxed">
            Applicants ages 16–24 can apply below. If you are 16, your application is PRE-REGISTRATION only; formal CWFR program participation begins at 17. For ages 16 and 17, enter your age to reveal the required parent/guardian consent fields at the end of the form. A parent or legal guardian must complete those fields and sign. After submitting, you’ll continue to orientation.
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

        <ParticipantApplication />
        <div className="mt-6 rounded-xl bg-purple-50 p-5 text-sm text-gray-700">
          <p>Already submitted your application? You can return to finish the orientation.</p>
          <Link to="/orientation" className="btn-gold inline-flex mt-4">Continue to the orientation</Link>
        </div>
        <p className="mt-6 text-center text-sm text-gray-600">Questions about the application? <Link to="/contact" className="text-purple-800 font-semibold underline">Contact CWFR</Link>.</p>
      </section>
    </div>
  );
}
