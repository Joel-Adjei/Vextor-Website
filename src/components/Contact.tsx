import { useState } from "react"
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useReveal } from "@/hooks/use-reveal"

export function Contact() {
  const ref = useReveal()
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-28 bg-background relative overflow-hidden" ref={ref}>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#acc8a2]/6 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <div className="reveal">
              <p className="text-xs font-semibold tracking-widest text-[#acc8a2] uppercase mb-3">
                Contact
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight leading-tight">
                Let's build something
                <br />
                <span className="text-[#acc8a2]">great together.</span>
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed max-w-md">
                Have a project in mind? Reach out — whether it's a new product,
                a performance fix, or an architecture review.
              </p>
            </div>

            <div className="reveal mt-10 space-y-5">
              {[
                { icon: Mail, label: "hello@vextorlabs.io" },
                { icon: Phone, label: "+1 (555) 000-VXTR" },
                { icon: MapPin, label: "Remote-first · Global Reach" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1a2517] dark:bg-[#acc8a2]/10 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-[#acc8a2]" />
                  </div>
                  <span className="text-sm text-muted-foreground">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="reveal">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center gap-6 bg-[#1a2517]/5 dark:bg-[#acc8a2]/5 border border-[#acc8a2]/20 rounded-2xl p-12">
                <div className="w-16 h-16 rounded-full bg-[#acc8a2]/15 flex items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-[#acc8a2]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Message sent!</h3>
                  <p className="text-muted-foreground text-sm">
                    Thanks for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-card border border-border rounded-2xl p-8 space-y-5 shadow-sm"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
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
                    <Label htmlFor="email" className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
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
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Company (optional)
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Your company"
                    value={form.company}
                    onChange={handleChange}
                    className="border-border focus-visible:ring-[#acc8a2]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project..."
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    className="border-border focus-visible:ring-[#acc8a2] resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#1a2517] dark:bg-[#acc8a2] text-white dark:text-[#1a2517] hover:bg-[#acc8a2] hover:text-[#1a2517] dark:hover:bg-white font-bold transition-all duration-200"
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
  )
}
