"use client";

import { FormEvent, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Check, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

type PitchData = {
  company: string;
  website: string;
  sector: string;
  stage: string;
  raise: string;
  lead: string;
  traction: string;
  founder: string;
  email: string;
  phone: string;
};

const emptyPitch: PitchData = {
  company: "",
  website: "",
  sector: "",
  stage: "",
  raise: "",
  lead: "",
  traction: "",
  founder: "",
  email: "",
  phone: "",
};

const stepTitles = ["Company", "Round", "Founder"];

export function PitchForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<PitchData>(emptyPitch);
  const [saved, setSaved] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const draft = window.localStorage.getItem("bsic-pitch-draft");
    if (draft) {
      try {
        const timer = window.setTimeout(() => {
          setData({ ...emptyPitch, ...JSON.parse(draft) });
        }, 0);
        return () => window.clearTimeout(timer);
      } catch {
        window.localStorage.removeItem("bsic-pitch-draft");
      }
    }
    return undefined;
  }, []);

  function update(field: keyof PitchData, value: string) {
    setData((current) => ({ ...current, [field]: value }));
    setSaved(false);
  }

  function saveDraft() {
    window.localStorage.setItem("bsic-pitch-draft", JSON.stringify(data));
    setSaved(true);
  }

  function next(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (step < 2) setStep((current) => current + 1);
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.localStorage.removeItem("bsic-pitch-draft");
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (submitted) {
    return (
      <div className="form-success" role="status" aria-live="polite">
        <span className="form-success__icon">
          <Check aria-hidden="true" size={26} />
        </span>
        <p className="eyebrow">Prototype confirmation</p>
        <h2>Thank you, {data.founder || "founder"}.</h2>
        <p>
          The production flow would now send a secure confirmation and give the
          BSIC team a structured screening record for {data.company || "your company"}.
        </p>
        <p className="form-demo-note">
          This V1 is frontend-only. No personal or company information was transmitted.
        </p>
        <Button
          className="button button--secondary"
          type="button"
          onClick={() => {
            setData(emptyPitch);
            setStep(0);
            setSubmitted(false);
          }}
        >
          Start another submission
        </Button>
      </div>
    );
  }

  return (
    <div className="flow-form">
      <div className="flow-form__progress">
        <div className="flow-form__progress-head">
          <p>
            Step {step + 1} of 3 <span>· {stepTitles[step]}</span>
          </p>
          <p>{Math.round(((step + 1) / 3) * 100)}%</p>
        </div>
        <Progress value={((step + 1) / 3) * 100} aria-label="Pitch submission progress" />
      </div>

      <form onSubmit={step === 2 ? submit : next}>
        {step === 0 ? (
          <fieldset>
            <legend>
              <span className="eyebrow">01 · Company</span>
              Tell us what you are building.
            </legend>
            <div className="form-grid">
              <label>
                Company name <span aria-hidden="true">*</span>
                <Input
                  className="form-control"
                  value={data.company}
                  onChange={(event) => update("company", event.target.value)}
                  placeholder="Company Ltd."
                  required
                />
              </label>
              <label>
                Website
                <Input
                  className="form-control"
                  type="url"
                  value={data.website}
                  onChange={(event) => update("website", event.target.value)}
                  placeholder="https://"
                />
              </label>
              <label>
                Sector <span aria-hidden="true">*</span>
                <NativeSelect
                  className="form-control"
                  value={data.sector}
                  onChange={(event) => update("sector", event.target.value)}
                  required
                  aria-label="Sector"
                >
                  <NativeSelectOption value="">Select sector</NativeSelectOption>
                  <NativeSelectOption value="Fintech">Fintech</NativeSelectOption>
                  <NativeSelectOption value="Agritech">Agritech</NativeSelectOption>
                  <NativeSelectOption value="Healthtech">Healthtech</NativeSelectOption>
                  <NativeSelectOption value="Edtech">Edtech</NativeSelectOption>
                  <NativeSelectOption value="Climate">Climate</NativeSelectOption>
                  <NativeSelectOption value="SaaS / AI">SaaS / AI</NativeSelectOption>
                  <NativeSelectOption value="Logistics">Logistics</NativeSelectOption>
                  <NativeSelectOption value="Other">Other</NativeSelectOption>
                </NativeSelect>
              </label>
              <label>
                Current stage <span aria-hidden="true">*</span>
                <NativeSelect
                  className="form-control"
                  value={data.stage}
                  onChange={(event) => update("stage", event.target.value)}
                  required
                  aria-label="Current stage"
                >
                  <NativeSelectOption value="">Select stage</NativeSelectOption>
                  <NativeSelectOption value="Pre-seed">Pre-seed</NativeSelectOption>
                  <NativeSelectOption value="Seed">Seed</NativeSelectOption>
                  <NativeSelectOption value="Late-seed">Late-seed</NativeSelectOption>
                  <NativeSelectOption value="Series A">Series A</NativeSelectOption>
                  <NativeSelectOption value="Series B+">Series B+</NativeSelectOption>
                </NativeSelect>
              </label>
            </div>
          </fieldset>
        ) : null}

        {step === 1 ? (
          <fieldset>
            <legend>
              <span className="eyebrow">02 · Round</span>
              Help us understand the opportunity.
            </legend>
            <div className="form-grid">
              <label>
                Target raise <span aria-hidden="true">*</span>
                <Input
                  className="form-control"
                  value={data.raise}
                  onChange={(event) => update("raise", event.target.value)}
                  placeholder="e.g. USD 2.5M"
                  required
                />
              </label>
              <label>
                Lead investor status
                <NativeSelect
                  className="form-control"
                  value={data.lead}
                  onChange={(event) => update("lead", event.target.value)}
                  aria-label="Lead investor status"
                >
                  <NativeSelectOption value="">Select status</NativeSelectOption>
                  <NativeSelectOption value="Committed">Lead committed</NativeSelectOption>
                  <NativeSelectOption value="In discussion">In discussion</NativeSelectOption>
                  <NativeSelectOption value="Seeking">Seeking a lead</NativeSelectOption>
                  <NativeSelectOption value="Not applicable">Not applicable</NativeSelectOption>
                </NativeSelect>
              </label>
              <label className="form-grid__full">
                Traction and why now <span aria-hidden="true">*</span>
                <Textarea
                  className="form-control form-control--textarea"
                  value={data.traction}
                  onChange={(event) => update("traction", event.target.value)}
                  placeholder="Share revenue or usage growth, customers, and the milestone this round unlocks."
                  required
                />
              </label>
            </div>
          </fieldset>
        ) : null}

        {step === 2 ? (
          <fieldset>
            <legend>
              <span className="eyebrow">03 · Founder</span>
              Where should the investment team respond?
            </legend>
            <div className="form-grid">
              <label>
                Founder name <span aria-hidden="true">*</span>
                <Input
                  className="form-control"
                  value={data.founder}
                  onChange={(event) => update("founder", event.target.value)}
                  autoComplete="name"
                  required
                />
              </label>
              <label>
                Work email <span aria-hidden="true">*</span>
                <Input
                  className="form-control"
                  type="email"
                  value={data.email}
                  onChange={(event) => update("email", event.target.value)}
                  autoComplete="email"
                  required
                />
              </label>
              <label>
                Phone
                <Input
                  className="form-control"
                  type="tel"
                  value={data.phone}
                  onChange={(event) => update("phone", event.target.value)}
                  autoComplete="tel"
                />
              </label>
              <div className="form-summary">
                <p className="mono-label">Submission summary</p>
                <p><strong>{data.company || "Company"}</strong> · {data.stage || "Stage"}</p>
                <p>{data.sector || "Sector"} · Raising {data.raise || "—"}</p>
              </div>
            </div>
            <p className="form-privacy">
              In production, BSIC’s privacy notice and secure document-upload policy
              would appear here before submission.
            </p>
          </fieldset>
        ) : null}

        <div className="flow-form__actions">
          <div>
            {step > 0 ? (
              <Button
                className="button button--text"
                variant="ghost"
                type="button"
                onClick={() => setStep((current) => current - 1)}
              >
                <ArrowLeft aria-hidden="true" size={17} /> Back
              </Button>
            ) : null}
            <Button
              className="button button--text"
              variant="ghost"
              type="button"
              onClick={saveDraft}
            >
              <Save aria-hidden="true" size={16} /> {saved ? "Draft saved" : "Save draft"}
            </Button>
          </div>
          <Button className="button button--primary" type="submit">
            {step === 2 ? "Review & submit demo" : "Continue"}
            {step === 2 ? <Check aria-hidden="true" size={17} /> : <ArrowRight aria-hidden="true" size={17} />}
          </Button>
        </div>
      </form>
    </div>
  );
}
