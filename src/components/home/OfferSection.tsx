import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const offerImage =
  "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1800&q=92";

const parcelliImage =
  "https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2021/03/parcelli.png";

export default function OfferSection() {
  return (
    <section
      id="happy-hours"
      className="relative z-10 h-auto w-full bg-white lg:h-[70vh]"
    >
      <div className="mx-auto flex h-full max-w-[1180px] items-center px-5 py-16 sm:px-8 lg:px-10 lg:py-0">
        <div className="mx-auto flex w-full max-w-[1000px] flex-col items-center justify-center gap-12 lg:flex-row lg:gap-14 xl:gap-16">
          {/* ---------------------------------------------------------------- */}
          {/* Left — Image                                                     */}
          {/* ---------------------------------------------------------------- */}

          <div className="relative h-[300px] w-full overflow-hidden shadow-[0_24px_60px_rgba(26,20,16,0.16)] sm:h-[330px] lg:h-[350px] lg:w-1/2 xl:h-[360px]">
            <img
              src={offerImage}
              alt="Friends enjoying wine together"
              className="h-full w-full object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.025]"
            />

            {/* Image Caption */}
            <div className="absolute inset-x-0 bottom-0 px-5 pb-5">
              <div className="mx-auto max-w-[260px] px-5 py-2.5">
                <p className="text-center font-body text-[10px] font-bold uppercase tracking-[0.28em] text-white sm:text-[11px]">
                  Good Food
                  <span className="mx-3 text-[#c87832]">|</span>
                  Good Wine
                </p>
              </div>
            </div>
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* Right — Content                                                   */}
          {/* ---------------------------------------------------------------- */}

          <div className="flex w-full items-center lg:w-1/2">
            <div className="w-full max-w-[500px]">
              {/* Decorative */}
              <div className="flex items-center gap-4">
                <img
                  src={parcelliImage}
                  alt=""
                  aria-hidden="true"
                  className="h-auto w-[82px] opacity-50 sm:w-[92px]"
                />

                <span className="h-px w-10 bg-[#c87832]/60" />
              </div>

              {/* Eyebrow */}
              <p className="mt-4 font-body text-[9px] font-semibold uppercase tracking-[0.36em] text-[#c87832] sm:text-[10px]">
                Wednesdays Means
              </p>

              {/* Heading */}
              <h2 className="mt-3 font-display text-[clamp(3.3rem,4.8vw,5.5rem)] font-semibold leading-[0.8] tracking-[-0.055em] text-[#1b1713]">
                Happy
                <br />
                <span className="italic">Hours!</span>
              </h2>

              {/* Offer */}
              <p className="mt-5 max-w-[470px] font-display text-[1.25rem] font-semibold leading-[1.06] tracking-[-0.025em] text-[#1b1713] sm:text-[1.45rem]">
                Half Price Bottles of Wine and Six Tasty Lunches for $9
              </p>

              {/* Description */}
              <p className="mt-4 max-w-[450px] font-body text-[12px] leading-6 text-[#756c62] sm:text-[13px] sm:leading-6">
                Congue, gravida. Placeat nibh sunt semper elementum anim!
                Integer lectus debitis auctor. Molestias vivamus eligendi ut,
                cupidatat nisl iaculis etiam!
              </p>

              {/* CTA */}
              <Link
                href="/menu"
                className="group mt-6 inline-flex items-center gap-4 rounded-full bg-[#c87832] px-5 py-3 font-body text-[9px] font-bold uppercase tracking-[0.2em] text-white shadow-[0_10px_26px_rgba(200,120,50,0.18)] transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.035] hover:bg-[#b86b29] hover:shadow-[0_16px_35px_rgba(200,120,50,0.28)]"
              >
                <span className="transition-transform duration-500 group-hover:translate-x-0.5">
                  Discover Offer
                </span>

                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/30 bg-white/10">
                  <ArrowUpRight
                    size={15}
                    strokeWidth={2.6}
                    className="text-white transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
