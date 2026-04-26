import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      toast({ title: "Please enter a valid email" });
      return;
    }
    setSubmitted(true);
    toast({ title: "You're on the list", description: "We'll be in touch soon." });
  };

  return (
    <section id="waitlist" className="relative py-28 md:py-36 bg-secondary/50">
      <div className="container-px max-w-3xl mx-auto text-center">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary tracking-tight leading-[1.05] text-balance">
          Finally, a health app for normal people.
        </h2>
        <p className="text-lg text-foreground/70 mt-6 max-w-xl mx-auto text-pretty">
          We're letting people in slowly so each new member gets the time and attention they deserve.
          Add your email — we'll let you know when it's your turn.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <label htmlFor="email" className="sr-only">Email</label>
          <input
            id="email"
            type="email"
            required
            placeholder="you@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={submitted}
            className="flex-1 px-5 py-4 rounded-full bg-card border border-border text-primary placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={submitted}
            className="px-7 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors disabled:opacity-60"
          >
            {submitted ? "You're in ✓" : "Join the waitlist"}
          </button>
        </form>

        <p className="text-xs text-foreground/50 mt-5">No spam. One email when we're ready for you.</p>
      </div>
    </section>
  );
};

export default Waitlist;
