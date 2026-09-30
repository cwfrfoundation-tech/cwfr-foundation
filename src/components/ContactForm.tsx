import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { CONTACT_REASONS } from '@/data/programs';
import HCaptcha from '@hcaptcha/react-hcaptcha';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [captchaToken, setCaptchaToken] = useState<string>('');

  const onHCaptchaChange = (token: string) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!captchaToken) {
      setStatus('error');
      setErrorMessage('Please complete the captcha field.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      access_key: "43f2e741-2f43-4142-a206-edb8b270bcf9",
      "h-captcha-response": captchaToken,
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      organization: formData.get('organization') as string,
      reason: formData.get('reason') as string,
      message: formData.get('message') as string,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      
      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to submit the form.");
      }
      
      setStatus('success');
      form.reset();
      setCaptchaToken('');
    } catch (err) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again or email us directly.'
      );
    }
  };

  if (status === 'success') {
    return (
      <div className="card p-10 text-center">
        <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-5">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="font-display font-bold text-xl text-purple-900 mb-2">
          Message Sent Successfully
        </h3>
        <p className="text-gray-600 mb-6">
          Thank you for reaching out. We'll get back to you as soon as possible.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="btn-outline-purple"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="card p-6 lg:p-8 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5">
              Name <span className="text-gold-600">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="input-field"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">
              Email Address <span className="text-gold-600">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="input-field"
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5">
              Telephone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="input-field"
              placeholder="(305) 555-0000"
            />
          </div>
          <div>
            <label htmlFor="organization" className="block text-sm font-semibold text-gray-700 mb-1.5">
              Organization / Company
            </label>
            <input
              id="organization"
              name="organization"
              type="text"
              className="input-field"
              placeholder="Your organization (optional)"
            />
          </div>
        </div>

        <div>
          <label htmlFor="reason" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Reason for Contact <span className="text-gold-600">*</span>
          </label>
          <select id="reason" name="reason" required className="input-field cursor-pointer">
            <option value="">Select a reason...</option>
            {CONTACT_REASONS.map((reason) => (
              <option key={reason} value={reason}>
                {reason}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Message <span className="text-gold-600">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="input-field resize-none"
            placeholder="Tell us how we can help..."
          />
        </div>

        {status === 'error' && (
          <div className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-red-50 border border-red-200">
            <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
            <span className="text-sm text-red-700">{errorMessage}</span>
          </div>
        )}

        <HCaptcha
          sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
          reCaptchaCompat={false}
          onVerify={onHCaptchaChange}
        />

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="btn-gold w-full sm:w-auto group disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>
      </form>
      <div className="mt-4">
        <p className="text-xs text-gray-500 leading-relaxed">
          <strong>Privacy Notice:</strong> Information submitted through this form will be used to respond to your inquiry and provide information about our programs and services. Please do not submit Social Security numbers, driver’s license numbers, financial information, or other sensitive personal information through this form.
        </p>
      </div>
    </div>
  );
}
