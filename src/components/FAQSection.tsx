import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "Will the AI agent sound robotic to my customers?",
    a: "Not at all. Our AI agents use natural language processing to hold fluid, human-like conversations. Most callers can't tell they're speaking with AI.",
  },
  {
    q: "How quickly can we get set up?",
    a: "Most businesses are fully deployed within 48–72 hours. We handle the entire setup — you just approve and go live.",
  },
  {
    q: "What if I already have bad reviews?",
    a: "We'll craft professional responses to existing negative reviews and launch a campaign to generate fresh 5-star reviews from happy customers, pushing negatives down.",
  },
  {
    q: "Do you work with my industry?",
    a: "We work with service-based businesses across dozens of industries — dental, HVAC, legal, med spas, restaurants, contractors, and more.",
  },
  {
    q: "Can I see what the AI is doing?",
    a: "Absolutely. You get a real-time dashboard showing every call, text, lead, follow-up, and review — full transparency.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-12 max-w-2xl"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-xl border border-border/50 bg-card/30 px-6"
              >
                <AccordionTrigger className="font-display text-left font-medium hover:no-underline hover:text-primary">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
