import { ArrowRight, CheckCircle2, FileText, ShieldCheck, Video } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const APPLICATION_FORM_URL = 'https://airtable.com/app1ixGUs4jrxEBpo/pag4I5QcQ5M907sNs/form/embed';
const ORIENTATION_VIDEO_URL = import.meta.env.VITE_CWFR_ORIENTATION_VIDEO_URL;

export default function ApplyPage() {
  return (
    <div className="bg-gradient-to-b from-purple-50 via-white to-white">
      <section className="container-base pt-28 pb-12">
        <SectionHeading
          center
          eyebrow="Youth Program Application"
          title="Apply, Orient, and Get Started"
          subtitle="Complete the application, watch the orientation, and finish the required acknowledgements in one place. You can do the entire process on this page."
        />

        <div className="mx-auto mt-10 max-w-4xl rounded-3xl border border-purple-100 bg-white p-6 shadow-lg sm:p-8">
          <div className="flex items-start gap-4">
            <div className="rounded-2xl bg-purple-100 p-3 text-purple-800"><Video className="h-6 w-6" /></div>
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-gold-700">Step 1 · Orientation</p>
              <h2 className="mt-1 font-display text-2xl font-bold text-purple-950">Watch the CWFR orientation</h2>
              <p className="mt-2 text-gray-600">Please watch this video before you submit the application. The form asks you to confirm that you watched it.</p>
            </div>
          </div>

          {ORIENTATION_VIDEO_URL ? (
            <video className="mt-6 aspect-video w-full rounded-2xl bg-black" controls preload="metadata">
              <source src={ORIENTATION_VIDEO_URL} type="video/mp4" />
              Your browser cannot play this video. Please use a different browser or contact CWFR for assistance.
            </video>
          ) : (
            <div className="mt-6 flex min-h-48 items-center justify-center rounded-2xl border border-dashed border-purple-300 bg-purple-50 p-6 text-center text-purple-900">
              The orientation video is ready to add. CWFR needs to set its public video file URL before this page is published.
            </div>
          )}
        </div>

        <div className="mx-auto mt-10 max-w-5xl">
          <div className="mb-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-purple-100 bg-white p-5">
              <FileText className="h-6 w-6 text-purple-700" />
              <h3 className="mt-3 font-semibold text-purple-950">Complete the application</h3>
              <p className="mt-1 text-sm text-gray-600">Answer the participant intake questions and upload your required clear photo.</p>
            </div>
            <div className="rounded-2xl border border-purple-100 bg-white p-5">
              <CheckCircle2 className="h-6 w-6 text-purple-700" />
              <h3 className="mt-3 font-semibold text-purple-950">Confirm orientation</h3>
              <p className="mt-1 text-sm text-gray-600">Check the orientation confirmation after watching the video above.</p>
            </div>
            <div className="rounded-2xl border border-purple-100 bg-white p-5">
              <ShieldCheck className="h-6 w-6 text-purple-700" />
              <h3 className="mt-3 font-semibold text-purple-950">Guardian signs online</h3>
              <p className="mt-1 text-sm text-gray-600">Applicants under 18 will see required parent/guardian contact, consent, and typed signature fields.</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-purple-100 bg-white shadow-xl">
            <iframe
              src={APPLICATION_FORM_URL}
              title="CWFR Youth Program Application"
              className="block w-full"
              style={{ height: 'min(5200px, 82vh)', minHeight: '1800px', border: 0 }}
              loading="eager"
              allow="clipboard-write"
            />
          </div>
          <p className="mt-4 text-center text-sm text-gray-600">
            Your application and photo are submitted to CWFR’s applicant CRM in Airtable. If the form does not load,{' '}
            <a className="font-semibold text-purple-800 underline" href="https://airtable.com/app1ixGUs4jrxEBpo/pag4I5QcQ5M907sNs/form" target="_blank" rel="noreferrer">
              open the application in a new tab <ArrowRight className="inline h-4 w-4" />
            </a>.
          </p>
        </div>

        <p className="mx-auto mt-8 max-w-4xl text-center text-sm text-gray-500">
          Applicants under 18 must have their parent or legal guardian complete the consent and signature fields before the application is submitted. Do not upload Social Security numbers, government ID images, medical information, or background-check information.
        </p>
      </section>
    </div>
  );
}
