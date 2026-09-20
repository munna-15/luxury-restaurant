
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
          {/* ============================================================
              LEFT — IMAGE
          ============================================================ */}
          <div className="relative h-[300px] w-full overflow-hidden shadow-[0_24px_60px_rgba(26,20,16,0.16)] sm:h-[330px] lg:h-[350px] lg:w-1/2 xl:h-[360px]">
            <img
              src={offerImage}
              alt="Friends enjoying wine together"
              className="h-full w-full object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.025]"
            />

            {/* Bottom readability gradient */}
            <div className="absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

            {/* Image Caption */}
            <div className="absolute inset-x-0 bottom-0 px-5 pb-5 sm:pb-6">
              <div className="mx-auto flex max-w-[280px] items-center justify-center">
                <p className="font-body text-[10px] font-normal uppercase tracking-[0.22em] text-white sm:text-[11px]">
                  Good Food
                  <span className="mx-3 text-[#d97706]">|</span>
                  Good Wine
                </p>
              </div>
            </div>
          </div>

          {/* ============================================================
              RIGHT — CONTENT
          ============================================================ */}
          <div className="flex w-full items-center lg:w-1/2">
            <div className="w-full max-w-[500px]">
              {/* Decorative */}
              <div className="flex items-center gap-4">
                <img
                  src={parcelliImage}
                  alt=""
                  aria-hidden="true"
                  className="h-auto w-[78px] opacity-50 sm:w-[88px]"
                />

                <span className="h-px w-10 bg-[#d97706]/60" />
              </div>

              {/* Eyebrow — normal font */}
              <p className="mt-4 font-body text-[9px] font-normal uppercase tracking-[0.3em] text-[#d97706] sm:text-[10px]">
                Wednesdays Means
              </p>

              {/* Main Display Heading */}
              <h2 className="mt-3 font-display text-[clamp(3.25rem,4.6vw,5.2rem)] font-normal leading-[1] tracking-[-0.018em] text-[#1b1713]">
                Happy Hours!
              </h2>

              {/* Offer — normal font */}
              <p className="mt-6 max-w-[470px] font-body text-[15px] font-normal leading-7 tracking-normal text-[#1b1713] sm:text-[16px] sm:leading-7">
                Half Price Bottles of Wine and Six Tasty Lunches for $9
              </p>

              {/* Description — normal font */}
              <p className="mt-4 max-w-[450px] font-body text-[12px] font-normal leading-6 tracking-normal text-[#756c62] sm:text-[13px] sm:leading-7">
                Congue, gravida. Placeat nibh sunt semper elementum anim!
                Integer lectus debitis auctor. Molestias vivamus eligendi ut,
                cupidatat nisl iaculis etiam!
              </p>

              {/* CTA */}
              <Link
                href="/menu"
                className="group mt-7 inline-flex items-center gap-4 rounded-full bg-[#d97706] px-6 py-3.5 font-body text-[11px] font-normal uppercase tracking-[0.17em] !text-white shadow-[0_10px_26px_rgba(217,119,6,0.18)] transition-all duration-300 hover:bg-[#b45309] hover:shadow-[0_14px_32px_rgba(180,83,9,0.25)]"
              >
                <span>Discover Offer</span>

                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/35 bg-white/10">
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.7}
                    className="text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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

