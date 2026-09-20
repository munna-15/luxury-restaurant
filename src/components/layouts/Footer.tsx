import Link from "next/link";

const footerBackground =
  "https://images.unsplash.com/photo-1781955781178-6ea29c66e860?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function Footer() {
  return (
    <footer className="relative z-10 w-full overflow-hidden text-white">
      {/* Real Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("${footerBackground}")`,
        }}
      />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[430px] max-w-[1180px] flex-col items-center justify-center px-5 py-20 text-center sm:px-8 lg:min-h-[48vh] lg:px-10">
        <div className="flex flex-col items-center">
          <p className="font-body text-[9px] font-semibold uppercase tracking-[0.36em] text-[#d9a064] sm:text-[10px]">
            Reservations
          </p>

          <h2 className="mt-5 max-w-[760px] font-display text-[clamp(3.2rem,5.6vw,6.4rem)] font-semibold leading-[0.86] tracking-[-0.055em] text-white">
            Call for All Your
            <br />
            <span className="italic">Reservations</span>
          </h2>

          <div className="mt-7 h-px w-12 bg-[#c87832]" />

          <Link
            href="tel:+01792960610"
            className="mt-7 font-display text-[clamp(2rem,3.5vw,3.25rem)] font-semibold tracking-[-0.035em] text-white transition-colors duration-300 hover:text-[#d9a064]"
          >
            +01792960610
          </Link>
        </div>

        {/* Copyright */}
        <div className="absolute inset-x-0 bottom-7 px-5">
          <p className="font-body text-[8px] font-medium uppercase tracking-[0.18em] text-white/70 sm:text-[9px]">
            Copyright © 2026 Italian Restaurant | Powered by Italian Restaurant
          </p>
        </div>
      </div>
    </footer>
  );
}
