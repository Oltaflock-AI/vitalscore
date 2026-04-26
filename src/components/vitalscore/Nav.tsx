const Nav = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <div className="container-px max-w-7xl mx-auto flex items-center justify-between py-7">
        <a href="#" className="flex items-center gap-2.5">
          <span className="size-7 rounded-lg bg-primary grid place-items-center">
            <span className="size-2.5 rounded-sm bg-accent" />
          </span>
          <span className="font-display text-xl text-primary tracking-tight">VitalScore</span>
        </a>
        <nav className="hidden md:flex items-center gap-9 text-sm text-primary/70">
          <a href="#problem" className="hover:text-primary transition-colors">The problem</a>
          <a href="#solution" className="hover:text-primary transition-colors">How it works</a>
          <a href="#detective" className="hover:text-primary transition-colors">AI Detective</a>
        </nav>
        <a
          href="#waitlist"
          className="text-sm font-medium text-primary border border-primary/20 rounded-full px-5 py-2 hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          Join waitlist
        </a>
      </div>
    </header>
  );
};

export default Nav;
