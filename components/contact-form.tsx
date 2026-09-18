"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm({ initialAudience = "general" }: { initialAudience?: string }) {
  const [audience, setAudience] = useState(initialAudience);
  const [submitted, setSubmitted] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="form-success" role="status" aria-live="polite">
        <span className="form-success__icon"><Check aria-hidden="true" size={26} /></span>
        <p className="eyebrow">Prototype confirmation</p>
        <h2>Thank you.</h2>
        <p>A live form would route this to the right BSIC team and send you an acknowledgement.</p>
        <p className="form-demo-note">No information was transmitted in this frontend-only V1.</p>
        <Button className="button button--secondary" type="button" onClick={() => setSubmitted(false)}>Send another enquiry</Button>
      </div>
    );
  }

  return (
    <form className="flow-form contact-form" onSubmit={submit}>
      <fieldset>
        <legend><span className="eyebrow">Direct your enquiry</span>Start with the right context.</legend>
        <div className="form-grid">
          <label>
            I am contacting BSIC as <span aria-hidden="true">*</span>
            <NativeSelect className="form-control" value={audience} onChange={(event) => setAudience(event.target.value)} aria-label="Enquiry type" required>
              <NativeSelectOption value="general">General enquiry</NativeSelectOption>
              <NativeSelectOption value="co-investor">Co-investor</NativeSelectOption>
              <NativeSelectOption value="ecosystem">Ecosystem partner</NativeSelectOption>
              <NativeSelectOption value="shareholder">Shareholder institution</NativeSelectOption>
              <NativeSelectOption value="media">Media</NativeSelectOption>
              <NativeSelectOption value="recruiting">Candidate / recruiting</NativeSelectOption>
            </NativeSelect>
          </label>
          <label>Name <span aria-hidden="true">*</span><Input className="form-control" autoComplete="name" required /></label>
          <label>Work email <span aria-hidden="true">*</span><Input className="form-control" type="email" autoComplete="email" required /></label>
          <label>Organisation<Input className="form-control" autoComplete="organization" /></label>
          <label className="form-grid__full">Message <span aria-hidden="true">*</span><Textarea className="form-control form-control--textarea" placeholder="What would a useful next conversation cover?" required /></label>
        </div>
        <p className="form-privacy">Prototype — nothing is sent.</p>
      </fieldset>
      <div className="flow-form__actions flow-form__actions--right">
        <Button className="button button--primary" type="submit">Send demo enquiry <ArrowRight aria-hidden="true" size={17} /></Button>
      </div>
    </form>
  );
}
