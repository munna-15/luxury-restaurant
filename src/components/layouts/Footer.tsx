
import Link from "next/link";

const footerBackground =
  "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function Footer() {
  return (
    <footer className="relative z-10 w-full overflow-hidden text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("${footerBackground}")`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[430px] max-w-[1180px] flex-col items-center justify-center px-5 py-20 text-center sm:px-8 lg:min-h-[48vh] lg:px-10">
        <div className="flex flex-col items-center">
          {/* Main Heading */}
          <h2 className="whitespace-nowrap font-display text-[clamp(2rem,3.2vw,3.4rem)] font-normal leading-[1.05] tracking-[-0.008em] text-white">
            Call for All Your Reservations
          </h2>

          {/* Accent */}
          <div className="mt-5 h-px w-12 bg-[#d97706]" />

          {/* Phone */}
          <Link
            href="tel:+01792960610"
            className="mt-6 font-body text-[clamp(1.9rem,3.4vw,3rem)] leading-none tracking-[0.01em] text-white transition-colors duration-300 hover:text-[#d97706]"
            style={{ fontWeight: 700 }}
          >
            +88 01792960610
          </Link>
        </div>

        {/* Copyright */}
        <div className="absolute inset-x-0 bottom-7 px-5">
          <p className="font-body text-[11px] font-normal uppercase tracking-[0.12em] text-white sm:text-[12px]">
            Copyright © 2026 Italian Restaurant | Powered by Italian
            Restaurant
          </p>
        </div>
      </div>
    </footer>
  );
}

