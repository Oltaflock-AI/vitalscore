const Detective = () => {
  return (
    <section id="detective" className="relative py-24 md:py-32 bg-background overflow-hidden">
      <div className="absolute top-1/2 -translate-y-1/2 -right-32 w-[28rem] h-[28rem] rounded-full bg-accent/10 blur-3xl" aria-hidden />

      <div className="container-px max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        <div>
          <span className="text-xs font-semibold tracking-[0.2em] text-accent-foreground/80 uppercase">03 — The signature feature</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] text-primary tracking-tight leading-[1.05] mt-5 text-balance">
            The AI Detective. <em className="italic text-primary/85">No logging required.</em>
          </h2>
          <div className="text-lg text-foreground/70 mt-6 leading-relaxed text-pretty max-w-[50ch] space-y-4">
            <p>On Sunday night, enter one number: your weight.</p>
            <p>
              VitalScore reads the signal your body leaves behind — and shows you what likely changed.
            </p>
            <p>What worked. What slipped. What to fix next.</p>
            <p>
              No tracking everything.
              <br />
              Just understanding what matters.
            </p>
          </div>

          <ul className="mt-8 space-y-4">
            {[
              'No food diaries. No step counts to remember.',
              'No wearables required (though they help).',
              'One number, once a week. The AI does the rest.',
            ].map((line) => (
              <li key={line} className="flex items-start gap-3 text-foreground/75">
                <span className="mt-2 size-1.5 rounded-full bg-accent shrink-0" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Chat-style detective panel */}
        <div className="relative">
          <div className="bg-card border border-border rounded-[2rem] p-7 md:p-8 shadow-soft">
            <div className="flex items-center gap-3 pb-5 border-b border-border">
              <div className="size-10 rounded-full bg-primary grid place-items-center">
                <span className="size-2 rounded-sm bg-accent" />
              </div>
              <div>
                <div className="text-sm font-medium text-primary">VitalScore Detective</div>
                <div className="text-xs text-foreground/50">Sunday, 9:14 PM</div>
              </div>
            </div>

            <div className="pt-6 space-y-4">
              <div className="flex justify-end">
                <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-sm px-4 py-2.5 text-sm">
                  178.4 lb
                </div>
              </div>

              <div className="bg-secondary rounded-2xl rounded-tl-sm p-5 text-sm text-foreground/80 leading-relaxed">
                <p>
                  <span className="font-medium text-primary">Down 0.6 lb. Nice week.</span> Based on your trend, here's what likely happened:
                </p>
                <ul className="mt-3 space-y-2 text-foreground/75">
                  <li>✓ You were in a slight calorie deficit</li>
                  <li>✓ Your routine was more consistent than last week</li>
                  <li>✓ Activity levels or movement likely increased</li>
                  <li>✗ Some inconsistency towards the end of the week</li>
                </ul>
                <p className="mt-3 text-primary font-medium">
                  Want to keep this trajectory? Stay consistent with your current routine.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs text-foreground/50 pt-1">
                <span className="inline-block size-1.5 rounded-full bg-accent animate-pulse-soft" />
                Confidence: moderate — based on your recent trend data
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detective;
