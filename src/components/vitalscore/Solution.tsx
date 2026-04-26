const steps = [
  {
    n: '01',
    title: 'What your numbers actually mean',
    body: 'Plain-language interpretation of every metric, in the context of your age, history, and goals — not a generic chart.',
  },
  {
    n: '02',
    title: 'Where you\'re headed',
    body: 'A trajectory. Five years out, ten years out — what your body looks like if nothing changes. Honest, not alarmist.',
  },
  {
    n: '03',
    title: 'The 2–3 things that move the needle',
    body: 'Not 47 habits. The specific small changes that, for you, will shift the trajectory the most. Ranked by impact.',
  },
];

const Solution = () => {
  return (
    <section id="solution" className="relative py-24 md:py-32 bg-secondary/40">
      <div className="container-px max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold tracking-[0.2em] text-accent-foreground/80 uppercase">02 — The solution</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] text-primary tracking-tight leading-[1.05] mt-5 text-balance">
            A health app that answers the question you actually have.
          </h2>
          <p className="text-lg text-foreground/70 mt-6 leading-relaxed text-pretty">
            VitalScore reads your numbers like a thoughtful friend who happens to understand health.
            Three answers, every time you check in.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mt-16">
          {steps.map((s) => (
            <div
              key={s.n}
              className="bg-card border border-border rounded-3xl p-8 hover:shadow-card transition-shadow group"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-display text-2xl text-accent italic">{s.n}</span>
                <div className="size-8 rounded-full border border-border grid place-items-center text-primary/60 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8m0 0L6 2m4 4L6 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                </div>
              </div>
              <h3 className="font-display text-2xl text-primary leading-snug mb-3">{s.title}</h3>
              <p className="text-foreground/65 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
