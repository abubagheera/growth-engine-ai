import { motion } from "framer-motion";
import {
  Phone,
  MessageSquare,
  Star,
  RotateCcw,
  Search,
  Users,
  Shield,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: Phone,
    title: "AI Phone Agent",
    description:
      "Never miss a call. Our AI answers, qualifies, and books leads 24/7 — sounding natural and professional.",
  },
  {
    icon: MessageSquare,
    title: "AI Text Agent",
    description:
      "Instant text responses to inquiries. Automated follow-ups that nurture leads until they convert.",
  },
  {
    icon: Star,
    title: "Review Generation & Repair",
    description:
      "Automatically request reviews from happy customers. Fix and respond to negative reviews before they hurt you.",
  },
  {
    icon: RotateCcw,
    title: "Reactivation Campaigns",
    description:
      "Win back lost customers with personalized AI-driven outreach. Turn dormant contacts into revenue.",
  },
  {
    icon: Search,
    title: "Google Profile & SEO",
    description:
      "Optimize your Google Business Profile, local SEO, and GEO so customers find you — not competitors.",
  },
  {
    icon: Users,
    title: "Lead Capture & Nurture",
    description:
      "Catch every lead from every channel. Smart nurture sequences guide them to booking or purchase.",
  },
  {
    icon: Shield,
    title: "Reputation Management",
    description:
      "Monitor and manage your online presence. Look and feel like the most professional business in your market.",
  },
  {
    icon: Zap,
    title: "Smart Reminders",
    description:
      "Reduce no-shows with automated appointment reminders via text, call, and email.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-widest text-primary"
          >
            What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            Your Complete <span className="text-gradient">Growth Engine</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-muted-foreground sm:text-lg"
          >
            Everything your business needs to capture, convert, and keep customers — powered by AI.
          </motion.p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group rounded-xl border border-border/50 bg-card/50 p-6 transition-all duration-300 hover:glow-border hover:glow-box"
            >
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-2.5 text-primary transition-colors group-hover:bg-primary/20">
                <service.icon size={22} />
              </div>
              <h3 className="font-display text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
