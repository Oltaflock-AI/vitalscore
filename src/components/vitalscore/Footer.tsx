const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container-px max-w-7xl mx-auto py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-foreground/55">
        <div className="flex items-center gap-2.5">
          <span className="size-5 rounded-md bg-primary grid place-items-center">
            <span className="size-1.5 rounded-sm bg-accent" />
          </span>
          <span className="font-display text-primary">VitalScore</span>
        </div>
        <p>© {new Date().getFullYear()} VitalScore. Health intelligence for the rest of us.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-primary transition-colors">Privacy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
