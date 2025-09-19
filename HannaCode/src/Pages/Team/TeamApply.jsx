import React, { useMemo, useState } from "react";
import { submitApplication, uploadResumeFile } from "../../lib/teamApi";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../components/ui/card";
import { Button } from "../../components/ui/button";

const ROLES = [
  "Frontend Developer",
  "Backend Developer",
  "Fullstack Developer",
  "Mobile Developer",
  "UI/UX Designer",
  "QA Engineer",
  "DevOps Engineer",
  "Product Manager",
    "Technical Writer",
    "Community Manager",
    "Business Development",
    "Marketing Specialist",
    "Customer Support",
    "Content Creator",
    "Other"
];

const COUNTRIES = [
  "Nigeria","Ghana","Kenya","South Africa","United States","United Kingdom","Canada","Germany","France","India","Other",
];

export default function TeamApply() {
  const [surname, setSurname] = useState("");
  const [firstName, setFirstName] = useState("");
  const [otherName, setOtherName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("Prefer not to say");
  const [role, setRole] = useState(ROLES[0]);
  const [qualification, setQualification] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState(COUNTRIES[0]);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [portfolioUrl, setPortfolioUrl] = useState("");
  const [resumeUrl, setResumeUrl] = useState("");
  const [otherProfessionalFields, setOtherProfessionalFields] = useState("");
  const [message, setMessage] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ ok: false, error: "" });
  const [uploading, setUploading] = useState(false);

  const emailValid = useMemo(() => /\S+@\S+\.\S+/.test(email), [email]);
  const phoneValid = useMemo(() => phone.trim().length >= 7, [phone]);
  const isValidUrl = (s) => {
    if (!s) return true;
    try {
      const u = new URL(s);
      return !!u.protocol && !!u.hostname;
    } catch {
      return false;
    }
  };
  const portfolioValid = useMemo(() => isValidUrl(portfolioUrl), [portfolioUrl]);
  const resumeValid = useMemo(() => isValidUrl(resumeUrl), [resumeUrl]);

  const requiredOk =
    surname.trim() &&
    firstName.trim() &&
    dob &&
    role &&
    qualification.trim() &&
    address.trim() &&
    country &&
    emailValid &&
    phoneValid &&
    portfolioValid &&
    resumeValid &&
    acceptTerms;

  async function onSubmit(e) {
    e.preventDefault();
    if (!requiredOk) return;
    setSubmitting(true);
    setStatus({ ok: false, error: "" });
    try {
      await submitApplication({
        surname,
        firstName,
        otherName,
        dob,
        gender,
        role,
        qualification,
        address,
        country,
        email,
        phone,
        portfolioUrl,
        resumeUrl,
        otherProfessionalFields,
        message,
        acceptTerms,
      });
      setStatus({ ok: true, error: "" });
      // reset minimal
      setSurname("");
      setFirstName("");
      setOtherName("");
      setDob("");
  setGender("Prefer not to say");
      setRole(ROLES[0]);
      setQualification("");
      setAddress("");
      setCountry(COUNTRIES[0]);
      setEmail("");
      setPhone("");
  setPortfolioUrl("");
  setResumeUrl("");
      setOtherProfessionalFields("");
      setMessage("");
      setAcceptTerms(false);
    } catch (err) {
      setStatus({ ok: false, error: err.message || "Failed to send" });
    } finally {
      setSubmitting(false);
    }
  }

  async function onResumeSelected(e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    setStatus({ ok: false, error: "" });
    setUploading(true);
    try {
      const out = await uploadResumeFile(file);
      // out: { success, url }
      if (out?.url) setResumeUrl(out.url);
    } catch (err) {
      setStatus({ ok: false, error: err.message || 'Resume upload failed' });
    } finally {
      setUploading(false);
    }
  }

  return (
    <main className="container py-8">
      <Card>
        <CardHeader>
          <CardTitle>Join the HannaCode Team</CardTitle>
          <CardDescription>Apply for a particular role and we will contact you by email.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Surname</label>
              <input className="w-full rounded-md border bg-background px-3 py-2" value={surname} onChange={e=>setSurname(e.target.value)} required />
            </div>
            <div>
              <label className="block text-sm mb-1">First name</label>
              <input className="w-full rounded-md border bg-background px-3 py-2" value={firstName} onChange={e=>setFirstName(e.target.value)} required />
            </div>
            <div>
              <label className="block text-sm mb-1">Other name</label>
              <input className="w-full rounded-md border bg-background px-3 py-2" value={otherName} onChange={e=>setOtherName(e.target.value)} />
            </div>
            <div>
              <label className="block text-sm mb-1">Date of birth</label>
              <input type="date" className="w-full rounded-md border bg-background px-3 py-2" value={dob} onChange={e=>setDob(e.target.value)} required />
            </div>
            <div>
              <label className="block text-sm mb-1">Gender (optional)</label>
              <select className="w-full rounded-md border bg-background px-3 py-2" value={gender} onChange={(e)=>setGender(e.target.value)}>
                {[
                  "Male",
                  "Female",
                  "Non-binary",
                  "Prefer not to say",
                  "Other",
                ].map(g => (
                  <option key={g} value={g}>{g}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm mb-1">Role to apply for</label>
              <select className="w-full rounded-md border bg-background px-3 py-2" value={role} onChange={e=>setRole(e.target.value)}>
                {ROLES.map(r => <option key={r} value={r}>{r}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm mb-1">Highest qualification</label>
              <input className="w-full rounded-md border bg-background px-3 py-2" value={qualification} onChange={e=>setQualification(e.target.value)} required placeholder="e.g., B.Sc. Computer Science" />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm mb-1">Address</label>
              <input className="w-full rounded-md border bg-background px-3 py-2" value={address} onChange={e=>setAddress(e.target.value)} required />
            </div>

            <div>
              <label className="block text-sm mb-1">Country</label>
              <select className="w-full rounded-md border bg-background px-3 py-2" value={country} onChange={e=>setCountry(e.target.value)}>
                {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input type="email" className="w-full rounded-md border bg-background px-3 py-2" value={email} onChange={e=>setEmail(e.target.value)} required />
              {!emailValid && email && <p className="text-xs text-red-500 mt-1">Invalid email.</p>}
            </div>
            <div>
              <label className="block text-sm mb-1">Phone</label>
              <input className="w-full rounded-md border bg-background px-3 py-2" value={phone} onChange={e=>setPhone(e.target.value)} required placeholder="+2348012345678" />
              {!phoneValid && phone && <p className="text-xs text-red-500 mt-1">Phone looks too short.</p>}
            </div>
            <div>
              <label className="block text-sm mb-1">Portfolio URL (optional)</label>
              <input
                type="url"
                className="w-full rounded-md border bg-background px-3 py-2"
                value={portfolioUrl}
                onChange={(e) => setPortfolioUrl(e.target.value)}
                placeholder="https://your-portfolio.example.com"
              />
              {!portfolioValid && portfolioUrl && (
                <p className="text-xs text-red-500 mt-1">Enter a valid URL starting with http:// or https://</p>
              )}
            </div>
            <div>
              <label className="block text-sm mb-1">Resume URL (optional)</label>
              <input
                type="url"
                className="w-full rounded-md border bg-background px-3 py-2"
                value={resumeUrl}
                onChange={(e) => setResumeUrl(e.target.value)}
                placeholder="https://link.to/your-resume.pdf"
              />
              {!resumeValid && resumeUrl && (
                <p className="text-xs text-red-500 mt-1">Enter a valid URL starting with http:// or https://</p>
              )}
              <div className="mt-2 flex items-center gap-2">
                <label className="text-sm">Or upload resume:</label>
                <input type="file" accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" onChange={onResumeSelected} />
                {uploading ? <span className="text-xs text-gray-500">Uploading…</span> : null}
              </div>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm mb-1">Other professional fields</label>
              <input className="w-full rounded-md border bg-background px-3 py-2" value={otherProfessionalFields} onChange={e=>setOtherProfessionalFields(e.target.value)} placeholder="e.g., Data Analysis, AI/ML, Security" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm mb-1">Message</label>
              <textarea className="w-full h-28 rounded-md border bg-background px-3 py-2" value={message} onChange={e=>setMessage(e.target.value)} placeholder="Tell us about your experience." />
            </div>

            <div className="md:col-span-2 flex items-start gap-2">
              <input id="terms" type="checkbox" checked={acceptTerms} onChange={e=>setAcceptTerms(e.target.checked)} />
              <label htmlFor="terms" className="text-sm">
                I agree to the Terms and Conditions and consent to my data being processed for recruitment purposes.
              </label>
            </div>

            <div className="md:col-span-2 flex items-center gap-2">
              <Button type="submit" disabled={!requiredOk || submitting}>{submitting ? "Sending…" : "Apply"}</Button>
              {status.error ? <span className="text-sm text-red-500">{status.error}</span> : null}
              {status.ok ? <span className="text-sm text-green-600">Application sent.</span> : null}
            </div>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}