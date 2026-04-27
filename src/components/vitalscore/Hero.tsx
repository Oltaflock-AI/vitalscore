const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-grain opacity-60 pointer-events-none" aria-hidden />
      <div className="absolute -top-40 -right-40 w-[40rem] h-[40rem] rounded-full bg-accent/10 blur-3xl pointer-events-none" aria-hidden />
      <div className="absolute -bottom-40 -left-40 w-[40rem] h-[40rem] rounded-full bg-primary/5 blur-3xl pointer-events-none" aria-hidden />

      <div className="container-px max-w-7xl mx-auto pt-36 md:pt-44 pb-20 md:pb-28 grid lg:grid-cols-[1.05fr_1fr] gap-16 lg:gap-20 items-center relative">
        <div className="flex flex-col gap-8 animate-fade-up">
          <div className="inline-flex items-center gap-2.5 text-primary/70 font-medium tracking-[0.18em] text-xs uppercase">
            <span className="size-1.5 rounded-full bg-accent animate-pulse-soft" />
            Precision health intelligence
          </div>
          <h1 className="font-display text-[2.75rem] sm:text-6xl lg:text-[4.5rem] text-primary tracking-tight leading-[0.98] text-balance">
            Know your health trajectory in&nbsp;<em className="italic text-primary/90">thirty</em> seconds.
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-[52ch] leading-relaxed text-pretty">
            Not another BMI calculator. Not another calorie tracker. VitalScore tells you what your numbers actually mean,
            where you're headed if nothing changes, and the two or three things that will move the needle for <em>you</em>.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href="#waitlist"
              className="bg-primary text-primary-foreground px-7 py-4 rounded-full font-medium hover:bg-primary/90 transition-colors text-center"
            >
              Get early access
            </a>
            <a
              href="#solution"
              className="px-7 py-4 rounded-full border border-primary/15 text-primary hover:bg-card transition-colors text-center"
            >
              See how it works
            </a>
          </div>
          <div className="flex items-center gap-4 pt-4 text-sm text-foreground/55">
            <div className="flex -space-x-2">
              <div className="size-7 rounded-full bg-accent/40 border-2 border-background" />
              <div className="size-7 rounded-full bg-primary/30 border-2 border-background" />
              <div className="size-7 rounded-full bg-accent/60 border-2 border-background" />
            </div>
            <span>Joining 200+ on the waitlist</span>
          </div>
        </div>

        {/* Insight card */}
        <div className="relative animate-fade-up [animation-delay:120ms]">
          <div className="relative p-7 md:p-9 bg-card rounded-[2rem] shadow-soft border border-border/60">
            <div className="flex items-center justify-between mb-7">
              <span className="text-xs font-semibold tracking-widest text-primary/50 uppercase">Your morning insight</span>
              <span className="text-[11px] bg-accent/15 text-accent-foreground px-2.5 py-1 rounded-full font-medium">
                AI Detective · live
              </span>
            </div>

            <div className="relative h-44 rounded-2xl bg-gradient-to-b from-secondary to-background flex items-center justify-center mb-7 overflow-hidden">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 180" preserveAspectRatio="none" aria-hidden>
                <defs>
                  <linearGradient id="traj" x1="0" x2="1">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.9" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,140 C80,130 120,90 200,80 C280,70 320,55 400,30"
                  fill="none"
                  stroke="url(#traj)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray="1000"
                  className="animate-draw"
                />
              </svg>
              <div className="relative text-center">
                <div className="font-display text-7xl text-primary leading-none tabular-nums">84</div>
                <div className="text-[11px] tracking-widest uppercase text-primary/50 mt-2">VitalScore · trending up</div>
              </div>
            </div>

            <div className="grid gap-3">
              <div className="flex gap-4 p-4 border border-border rounded-2xl">
                <div className="size-10 shrink-0 rounded-full bg-accent/15 grid place-items-center font-display text-accent-foreground italic">S</div>
                <div>
                  <h4 className="font-medium text-sm text-primary">Subtle strain detected</h4>
                  <p className="text-xs text-foreground/60 mt-0.5">Your recovery curve suggests a gentler pivot today.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 border border-border rounded-2xl">
                <div className="size-10 shrink-0 rounded-full bg-primary/10 grid place-items-center font-display text-primary italic">V</div>
                <div>
                  <h4 className="font-medium text-sm text-primary">Vitality baseline stable</h4>
                  <p className="text-xs text-foreground/60 mt-0.5">Cardiac coherence remains elevated — keep going.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -top-4 -left-4 hidden md:flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 shadow-card">
            <span className="size-1.5 rounded-full bg-accent" />
            <span className="text-xs text-primary font-medium">No tracking required</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
