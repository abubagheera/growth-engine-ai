import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "We Audit Your Business",
    description:
      "We analyze your online presence, reviews, Google profile, and lead flow to find every gap costing you customers.",
  },
  {
    number: "02",
    title: "Deploy Your AI Agents",
    description:
      "Custom AI phone and text agents are set up to handle calls, respond to inquiries, and follow up automatically.",
  },
  {
    number: "03",
    title: "Optimize & Automate",
    description:
      "We fix your Google profile, launch review campaigns, and set up reactivation sequences — all on autopilot.",
  },
  {
    number: "04",
    title: "Watch Your Business Grow",
    description:
      "More leads captured, more reviews earned, more customers retained. Track everything in your growth dashboard.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="container relative">
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-widest text-primary"
          >
            How It Works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            From Leaking Leads to <span className="text-gradient">Growth Machine</span>
          </motion.h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-8 md:grid-cols-2">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-xl border border-border/50 bg-card/30 p-8"
            >
              <span className="font-display text-5xl font-bold text-primary/15">
                {step.number}
              </span>
              <h3 className="mt-2 font-display text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
