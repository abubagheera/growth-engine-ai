import { motion } from "framer-motion";

const stats = [
  { value: "3x", label: "More Leads Captured" },
  { value: "95%", label: "Calls Answered" },
  { value: "4.8★", label: "Avg Review Score" },
  { value: "40%", label: "Customer Reactivation" },
];

const ResultsSection = () => {
  return (
    <section id="results" className="relative py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-widest text-primary"
          >
            Results
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            Numbers That <span className="text-gradient">Speak</span>
          </motion.h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-xl border border-border/50 bg-card/50 p-8 text-center glow-border"
            >
              <div className="font-display text-4xl font-bold text-gradient">
                {stat.value}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-3xl rounded-2xl border border-primary/10 bg-card/30 p-8 text-center sm:p-12"
        >
          <p className="text-lg italic leading-relaxed text-foreground/90 sm:text-xl">
            "We were losing calls every day. Within the first week, the AI agent booked 
            14 appointments we would've missed. Our reviews went from 3.2 to 4.7 stars 
            in two months."
          </p>
          <div className="mt-6">
            <p className="font-display font-semibold">Sarah Mitchell</p>
            <p className="text-sm text-muted-foreground">Owner, Bright Smile Dental</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsSection;
