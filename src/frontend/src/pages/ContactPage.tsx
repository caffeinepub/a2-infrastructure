import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useActor } from "@/hooks/useActor";
import {
  AlertCircle,
  CheckCircle,
  Clock,
  Loader2,
  Mail,
  Phone,
  Send,
} from "lucide-react";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const INITIAL_FORM: FormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function ContactPage() {
  const { actor } = useActor();
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!actor) {
      setStatus("error");
      setErrorMsg("Connection unavailable. Please try again.");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      await actor.submitContactForm(
        form.name,
        form.email,
        form.phone,
        form.subject,
        form.message,
      );
      setStatus("success");
      setForm(INITIAL_FORM);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMsg(
        "Something went wrong. Please try again or email us directly.",
      );
    }
  };

  return (
    <main>
      <PageHeader
        title="Contact Us"
        subtitle="Reach out for project inquiries, quotation requests, or any questions about our services."
      />

      {/* ─── Contact Layout ──────────────────────────────────────── */}
      <section className="py-24 section-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
            {/* ─ Contact Info ──── */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-px bg-gold" />
                <span className="text-gold text-xs tracking-[0.2em] uppercase font-medium">
                  Get in Touch
                </span>
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-800 text-navy-deep tracking-tight mb-6">
                We'd love to hear about your project
              </h2>
              <p className="text-steel text-sm leading-relaxed mb-8">
                Whether you need a complete drawing package, a quick BOQ, or
                ongoing project documentation support — send us a message and
                we'll get back to you promptly.
              </p>

              {/* Contact details */}
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-navy flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <div className="text-xs text-steel uppercase tracking-widest mb-0.5">
                      Email
                    </div>
                    <a
                      href="mailto:ainfra2structure@gmail.com"
                      className="text-navy font-medium text-sm hover:text-gold transition-colors"
                    >
                      ainfra2structure@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-navy flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <div className="text-xs text-steel uppercase tracking-widest mb-0.5">
                      Phone
                    </div>
                    <a
                      href="tel:+918544127517"
                      className="text-navy font-medium text-sm hover:text-gold transition-colors block"
                    >
                      +91-8544127517
                    </a>
                    <a
                      href="tel:+916299862284"
                      className="text-navy font-medium text-sm hover:text-gold transition-colors block mt-0.5"
                    >
                      +91-6299862284
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-navy flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <div className="text-xs text-steel uppercase tracking-widest mb-0.5">
                      Working Hours
                    </div>
                    <p className="text-navy font-medium text-sm">
                      Monday to Saturday
                    </p>
                    <p className="text-steel text-sm">9 AM – 6 PM IST</p>
                  </div>
                </div>
              </div>

              {/* Blueprint accent */}
              <div className="mt-10 p-5 border border-navy/20 rounded-sm bg-secondary/50">
                <p className="text-steel text-sm leading-relaxed">
                  <strong className="text-navy font-semibold">
                    Quick Response:
                  </strong>{" "}
                  We typically respond to all inquiries within 24 hours on
                  working days.
                </p>
              </div>
            </div>

            {/* ─ Contact Form ──── */}
            <div className="lg:col-span-3">
              <div className="bg-white border-2 border-border rounded-sm p-8 shadow-card">
                <h3 className="font-display font-700 text-navy-deep text-xl mb-6">
                  Send an Inquiry
                </h3>

                {/* Success State */}
                {status === "success" && (
                  <div
                    data-ocid="contact.success_state"
                    className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-sm mb-6"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-green-800 font-semibold text-sm">
                        Inquiry Sent Successfully!
                      </p>
                      <p className="text-green-700 text-sm mt-0.5">
                        Thank you for reaching out. We'll get back to you within
                        24 hours.
                      </p>
                    </div>
                  </div>
                )}

                {/* Error State */}
                {status === "error" && (
                  <div
                    data-ocid="contact.error_state"
                    className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-sm mb-6"
                  >
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-red-800 font-semibold text-sm">
                        Submission Failed
                      </p>
                      <p className="text-red-700 text-sm mt-0.5">{errorMsg}</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="name"
                        className="text-navy text-xs uppercase tracking-widest font-medium"
                      >
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        data-ocid="contact.name_input"
                        className="rounded-sm border-border focus:border-navy h-11 text-navy placeholder:text-steel/50"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="email"
                        className="text-navy text-xs uppercase tracking-widest font-medium"
                      >
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        data-ocid="contact.email_input"
                        className="rounded-sm border-border focus:border-navy h-11 text-navy placeholder:text-steel/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="phone"
                        className="text-navy text-xs uppercase tracking-widest font-medium"
                      >
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        data-ocid="contact.phone_input"
                        className="rounded-sm border-border focus:border-navy h-11 text-navy placeholder:text-steel/50"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="subject"
                        className="text-navy text-xs uppercase tracking-widest font-medium"
                      >
                        Subject *
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="Project type / inquiry"
                        required
                        data-ocid="contact.subject_input"
                        className="rounded-sm border-border focus:border-navy h-11 text-navy placeholder:text-steel/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label
                      htmlFor="message"
                      className="text-navy text-xs uppercase tracking-widest font-medium"
                    >
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, scope, timeline, and any specific requirements..."
                      required
                      rows={5}
                      data-ocid="contact.message_textarea"
                      className="rounded-sm border-border focus:border-navy text-navy placeholder:text-steel/50 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={status === "loading"}
                    data-ocid="contact.submit_button"
                    className="w-full bg-navy hover:bg-navy-deep text-white font-semibold h-12 rounded-sm text-base"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Inquiry
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-steel text-center">
                    We respect your privacy and will never share your details.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Map Placeholder / Additional Info ──────────────────── */}
      <section className="section-navy-deep py-16 border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                icon: <Mail className="w-6 h-6 text-gold" />,
                label: "Email Us",
                value: "ainfra2structure@gmail.com",
                href: "mailto:ainfra2structure@gmail.com",
              },
              {
                icon: <Phone className="w-6 h-6 text-gold" />,
                label: "Call Us",
                value: "+91-8544127517 / +91-6299862284",
                href: "tel:+918544127517",
              },
              {
                icon: <Clock className="w-6 h-6 text-gold" />,
                label: "Office Hours",
                value: "Mon – Sat, 9 AM to 6 PM IST",
                href: undefined,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-3"
              >
                <div className="w-12 h-12 rounded-full bg-navy-light flex items-center justify-center">
                  {item.icon}
                </div>
                <div className="text-white/40 text-xs tracking-widest uppercase">
                  {item.label}
                </div>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-white/80 text-sm hover:text-gold transition-colors font-medium"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="text-white/80 text-sm font-medium">
                    {item.value}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
