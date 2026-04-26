const Problem = () => {
  return (
    <section id="problem" className="relative bg-background py-24 md:py-32">
      <div className="container-px max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 items-center">
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] text-accent-foreground/80 uppercase">01 — The problem</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] text-primary tracking-tight leading-[1.05] mt-5 text-balance">
              You checked your BMI. You got a number. Then what?
            </h2>
            <p className="text-lg text-foreground/70 mt-6 leading-relaxed text-pretty max-w-[48ch]">
              Every health app hands you a metric and walks away. Twenty-six. Eighty-two. One hundred and forty over ninety.
              The numbers are real. The meaning isn't anywhere. So you close the tab, promise yourself you'll
              "be healthier," and nothing changes.
            </p>
            <p className="text-lg text-primary mt-5 font-medium">
              Knowing a number isn't the same as understanding what to do about it.
            </p>
          </div>

          <div className="relative">
            <div className="bg-card border border-border rounded-3xl p-8 shadow-card">
              <div className="text-xs uppercase tracking-widest text-primary/50 mb-5">Today's typical health app</div>
              <div className="space-y-5">
                {[
                  { label: 'BMI', value: '26.4', tag: 'Overweight' },
                  { label: 'Resting HR', value: '74', tag: 'Average' },
                  { label: 'Body fat', value: '24%', tag: '—' },
                ].map((row) => (
                  <div key={row.label} className="flex items-baseline justify-between border-b border-border pb-4 last:border-0 last:pb-0">
                    <span className="text-foreground/60 text-sm">{row.label}</span>
                    <div className="flex items-baseline gap-3">
                      <span className="font-display text-3xl text-primary tabular-nums">{row.value}</span>
                      <span className="text-xs text-foreground/50">{row.tag}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-7 p-4 rounded-2xl bg-secondary text-center text-sm text-foreground/60 italic">
                "…okay, but what does this mean for me?"
              </div>
            </div>
            <div className="absolute -bottom-5 -right-5 size-20 rounded-full bg-accent/20 blur-2xl" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
