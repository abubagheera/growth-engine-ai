import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[500px] rounded-full bg-primary/5 blur-[150px]" />
      </div>

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl rounded-2xl border border-primary/20 bg-card/40 p-10 text-center backdrop-blur-sm sm:p-16 glow-box"
        >
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Stop Losing Customers to
            <br />
            <span className="text-gradient">Your Competitors</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground sm:text-lg">
            Get a free growth audit and see exactly how many leads and customers 
            you're leaving on the table. No commitment, just clarity.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button variant="hero" size="lg" className="gap-2 text-base">
              Get Your Free Audit <ArrowRight size={18} />
            </Button>
            <Button variant="heroOutline" size="lg" className="text-base">
              Schedule a Call
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
