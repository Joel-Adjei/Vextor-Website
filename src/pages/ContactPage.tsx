import { useState, type ChangeEvent, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useReveal } from "@/hooks/use-reveal";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@vextorlabs.io",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 000-VXTR",
  },
];

const projectTypes = [
  "New product",
  "Platform rebuild",
  "Performance fix",
  "Architecture review",
];

export function ContactPage() {
  const ref = useReveal();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-background" ref={ref}>
      <section className="relative overflow-hidden bg-[#0d1610] pt-36 pb-16">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#acc8a2]/30 to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className=" gap-10 ">
            <div>
              <h1 className="reveal text-5x text-center font-black leading-[0.98] tracking-tight text-white md:text-7xl">
                Let&apos;s talk about what you&apos;re building
              </h1>
              <p className="reveal text-center mt-5 max-w-4xl mx-auto text-lg leading-relaxed text-[#8aab82]">
                Bring the rough idea, the production problem, or the system that
                needs a second set of senior eyes. We&apos;ll help shape the
                path forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <aside className="space-y-6">
              <div className="reveal rounded-2xl border border-border bg-card p-6">
                <h2 className="text-xl font-bold text-foreground">
                  Reach us directly
                </h2>
                <div className="mt-6 space-y-5">
                  {contactMethods.map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-center gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#acc8a2]/10">
                        <Icon className="h-4 w-4 text-[#acc8a2]" />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                          {label}
                        </p>
                        <p className="mt-1 text-sm font-medium text-foreground">
                          {value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="reveal rounded-2xl border border-[#acc8a2]/20 bg-[#111a0f] p-6">
                <CheckCircle2 className="mb-4 h-5 w-5 text-[#acc8a2]" />
                <h2 className="text-lg font-bold text-white">Good fit for</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {projectTypes.map((type) => (
                    <span
                      key={type}
                      className="rounded-lg border border-[#acc8a2]/20 bg-[#acc8a2]/5 px-3 py-1.5 text-xs font-medium text-[#acc8a2]"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            </aside>

            <div className="reveal">
              {submitted ? (
                <div className="flex min-h-[520px] flex-col items-center justify-center rounded-2xl border border-[#acc8a2]/20 bg-[#acc8a2]/5 p-10 text-center">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#acc8a2]/15">
                    <CheckCircle2 className="h-7 w-7 text-[#acc8a2]" />
                  </div>
                  <h2 className="text-2xl font-black text-foreground">
                    Message sent
                  </h2>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                    Thanks for reaching out. We&apos;ll review the context and
                    get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8"
                >
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label
                        htmlFor="name"
                        className="text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                      >
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="border-border focus-visible:ring-[#acc8a2]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                      >
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@company.com"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="border-border focus-visible:ring-[#acc8a2]"
                      />
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label
                        htmlFor="company"
                        className="text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                      >
                        Company
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Company name"
                        value={form.company}
                        onChange={handleChange}
                        className="border-border focus-visible:ring-[#acc8a2]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="budget"
                        className="text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                      >
                        Budget / timeline
                      </Label>
                      <Input
                        id="budget"
                        name="budget"
                        placeholder="Optional context"
                        value={form.budget}
                        onChange={handleChange}
                        className="border-border focus-visible:ring-[#acc8a2]"
                      />
                    </div>
                  </div>

                  <div className="mt-5 space-y-2">
                    <Label
                      htmlFor="message"
                      className="text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                    >
                      Project context
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us what you are trying to build, fix, or improve..."
                      rows={7}
                      required
                      value={form.message}
                      onChange={handleChange}
                      className="resize-none border-border focus-visible:ring-[#acc8a2]"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="mt-6 w-full bg-[#acc8a2] font-bold text-[#1a2517] hover:bg-white"
                    size="lg"
                  >
                    Send Message <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
