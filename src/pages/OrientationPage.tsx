import { useState } from 'react';
import { Link } from '@/router';
import { CheckCircle2, ExternalLink, PlayCircle, ShieldCheck } from 'lucide-react';

const VIDEO_URL = '/videos/cwfr-orientation.mp4';
const CONFIRMATION_FORM = 'https://airtable.com/app1ixGUs4jrxEBpo/pagXiD0utgnlztopW/form';
const APPLICATION_FORM = 'https://airtable.com/app1ixGUs4jrxEBpo/pag4I5QcQ5M907sNs/form';

export default function OrientationPage() {
  const [finished, setFinished] = useState(false);
  const [videoUnavailable, setVideoUnavailable] = useState(false);

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-gradient-to-br from-purple-950 via-purple-900 to-purple-700 text-white pt-40 pb-16">
        <div className="container-base max-w-4xl mx-auto">
          <p className="text-gold-400 font-bold tracking-wider uppercase text-sm">Participant onboarding · Step 2</p>
          <h1 className="text-3xl sm:text-5xl font-display font-bold mt-3">CWFR Participant Orientation</h1>
          <p className="text-purple-100 mt-5 max-w-3xl leading-relaxed">
            After submitting your youth program application, watch the orientation in full.
            Then use the confirmation form to record that you completed it.
          </p>
        </div>
      </section>
      <section className="container-base max-w-4xl mx-auto py-12 sm:py-16">
        <div className="rounded-2xl border border-purple-100 shadow-xl overflow-hidden">
          <div className="bg-purple-950 text-white px-6 py-5 flex items-center gap-3">
            <PlayCircle className="text-gold-400 w-7 h-7 shrink-0" />
            <h2 className="font-display font-bold text-xl">Watch the Orientation Video</h2>
          </div>
          <div className="bg-black">
            {!videoUnavailable ? (
              <video
                className="block w-full aspect-video"
                controls
                playsInline
                preload="metadata"
                src={VIDEO_URL}
                onEnded={() => setFinished(true)}
                onError={() => setVideoUnavailable(true)}
                aria-label="Charles Workforce Readiness Foundation orientation video"
              >
                Your browser does not support video playback.
              </video>
            ) : (
              <div className="aspect-video flex items-center justify-center text-center text-white p-8">
                The orientation video is temporarily unavailable. Please check back later or contact CWFR.
              </div>
            )}
          </div>
          <div className="p-6 sm:p-8">
            {finished ? (
              <div className="flex gap-3 items-start text-purple-950">
                <CheckCircle2 className="w-6 h-6 text-green-700 shrink-0" />
                <p>You reached the end of the video. Please complete the official confirmation form using the same name and email as your application.</p>
              </div>
            ) : (
              <p className="text-gray-700">The completion link will be available after the video finishes playing. Please watch the entire orientation.</p>
            )}
            {finished && (
              <a href={CONFIRMATION_FORM} target="_blank" rel="noopener noreferrer" className="btn-gold inline-flex gap-2 items-center mt-6">
                Confirm Orientation Completion <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
        <div className="mt-8 grid md:grid-cols-2 gap-5">
          <div className="rounded-2xl bg-purple-50 border border-purple-100 p-6">
            <h3 className="font-bold text-purple-950 mb-2">Have you applied?</h3>
            <p className="text-gray-700 text-sm mb-4">You must submit the existing CWFR Youth Program Application before confirming orientation.</p>
            <a href={APPLICATION_FORM} target="_blank" rel="noopener noreferrer" className="font-semibold text-purple-800 underline">Open the participant application</a>
          </div>
          <div className="rounded-2xl bg-amber-50 border border-amber-100 p-6">
            <h3 className="font-bold text-purple-950 mb-2 flex items-center gap-2"><ShieldCheck className="w-5 h-5" /> Under 18?</h3>
            <p className="text-gray-700 text-sm">Parent or legal guardian consent must be documented and verified by CWFR before participation. Orientation confirmation does not replace guardian consent, acceptance, or enrollment.</p>
          </div>
        </div>
        <div className="mt-8 text-sm text-gray-600">
          <Link to="/programs" className="text-purple-700 font-semibold underline">Return to Programs</Link>
        </div>
      </section>
    </div>
  );
}
