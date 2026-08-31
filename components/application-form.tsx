"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ApplicationForm({ roleTitle, roleSlug }: { roleTitle: string; roleSlug: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (submitted) {
    return (
      <div className="form-success" role="status" aria-live="polite">
        <span className="form-success__icon"><Check aria-hidden="true" size={26} /></span>
        <p className="eyebrow">Application prototype</p>
        <h2>Thank you, {name || "candidate"}.</h2>
        <p>
          A live application for <strong>{roleTitle}</strong> would now be
          recorded and acknowledged by email.
        </p>
        <p className="form-demo-note">
          This V1 is frontend-only. No personal information or files were transmitted.
        </p>
        <Link className="button button--secondary" href="/careers">
          View all roles
        </Link>
      </div>
    );
  }

  return (
    <form className="flow-form application-form" onSubmit={submit}>
      <fieldset>
        <legend>
          <span className="eyebrow">Candidate details</span>
          Apply for {roleTitle}
        </legend>
        <div className="form-grid">
          <label>
            Full name <span aria-hidden="true">*</span>
            <Input
              className="form-control"
              value={name}
              onChange={(event) => setName(event.target.value)}
              autoComplete="name"
              required
            />
          </label>
          <label>
            Email <span aria-hidden="true">*</span>
            <Input className="form-control" type="email" autoComplete="email" required />
          </label>
          <label>
            Phone
            <Input className="form-control" type="tel" autoComplete="tel" />
          </label>
          <label>
            LinkedIn or portfolio URL
            <Input className="form-control" type="url" placeholder="https://" />
          </label>
          <label className="form-grid__full">
            Why this role, and why BSIC? <span aria-hidden="true">*</span>
            <Textarea
              className="form-control form-control--textarea"
              placeholder="Use specific examples from your experience."
              required
            />
          </label>
          <label className="form-grid__full">
            CV / résumé
            <Input className="form-control form-control--file" type="file" accept=".pdf,.doc,.docx" />
            <span className="field-help">Prototype only. The file remains on your device.</span>
          </label>
        </div>
        <p className="form-privacy">
          Need an adjustment to the process? Get in touch through the contact route.
        </p>
      </fieldset>
      <div className="flow-form__actions">
        <Link className="button button--text" href={`/careers/${roleSlug}`}>
          <ArrowLeft aria-hidden="true" size={17} /> Back to role
        </Link>
        <Button className="button button--primary" type="submit">
          Submit demo application <Check aria-hidden="true" size={17} />
        </Button>
      </div>
    </form>
  );
}
