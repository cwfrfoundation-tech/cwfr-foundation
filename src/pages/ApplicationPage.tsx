import { FileText, ShieldCheck } from 'lucide-react';
import { Link } from '@/router';

const APPLICATION_FORM = 'https://airtable.com/app1ixGUs4jrxEBpo/pag4I5QcQ5M907sNs/form';

export default function ApplicationPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-gradient-to-br from-purple-950 via-purple-900 to-purple-700 text-white pt-40 pb-12">
        <div className="container-base max-w-5xl mx-auto">
          <p className="text-gold-400 font-bold tracking-wider uppercase text-sm">Participant onboarding · Step 1</p>
          <h1 className="text-3xl sm:text-5xl font-display font-bold mt-3">CWFR Youth Program Application</h1>
          <p className="text-purple-100 mt-5 max-w-3xl leading-relaxed">
            Complete the full application below. Applicants under 18 will see required parent or guardian consent fields after entering their age. After submitting, continue to the orientation video from the confirmation message.
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
            <p className="text-sm text-gray-700">The photo/media permission choice is optional. Guardian consent verification is tracked separately from orientation completion.</p>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl border border-purple-100 shadow-xl bg-white">
          <iframe
            title="CWFR Full Youth Participant Application"
            src={APPLICATION_FORM}
            className="block w-full min-h-[4800px] sm:min-h-[4200px]"
            loading="eager"
            allow="fullscreen"
          />
        </div>
        <div className="mt-6 rounded-xl bg-purple-50 p-5 text-sm text-gray-700">
          <p>After the application shows that it was received, follow its orientation link to continue. If you are returning to finish the video, use this button:</p>
          <Link to="/orientation" className="btn-gold inline-flex mt-4">Continue to the orientation</Link>
        </div>
        <p className="mt-6 text-center text-sm text-gray-600">Questions about the application? <Link to="/contact" className="text-purple-800 font-semibold underline">Contact CWFR</Link>.</p>
      </section>
    </div>
  );
}
