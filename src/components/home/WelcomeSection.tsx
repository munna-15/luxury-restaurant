import Link from "next/link";

const pizzaImage =
  "https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2019/12/Pizza-slice.jpg";

const hoursBackground =
  "https://images.unsplash.com/photo-1611765083444-a3ce30f1c885?auto=format&fit=crop&w=1800&q=90";

export default function WelcomeSection() {
  return (
    <section
      id="welcome"
      className="relative z-10 bg-[#f4efe7] px-4 py-10 sm:px-6 lg:px-8 lg:py-12"
    >
      <div className="mx-auto max-w-[1380px]">
        <div className="grid min-h-[60vh] grid-cols-1 gap-5 lg:grid-cols-[1.08fr_0.92fr_0.92fr] lg:items-center">
          {/* ---------------------------------------------------------------- */}
          {/* Welcome Content                                                  */}
          {/* ---------------------------------------------------------------- */}
          <article className="flex items-center px-5 py-14 sm:px-8 lg:px-10 xl:px-14">
            <div className="w-full max-w-[520px]">
              <p className="font-body text-[10px] font-semibold uppercase tracking-[0.34em] text-[#c87832]">
                Country&apos;s Most Loved!
              </p>

              <h2 className="mt-4 font-display text-[clamp(4.5rem,5.7vw,6.7rem)] font-semibold leading-[0.8] tracking-[-0.055em] text-[#1b1713]">
                Welcome
              </h2>

              <div className="mt-7 h-px w-14 bg-[#c87832]" />

              <h3 className="mt-8 max-w-[500px] font-display text-[clamp(1.9rem,2.6vw,2.45rem)] font-semibold leading-[1.04] tracking-[-0.03em] text-[#1b1713]">
                We Are Locally Crafted Food &amp; Wine Serving Since 1978.
              </h3>

              <p className="mt-6 max-w-[485px] font-body text-[14px] leading-7 text-[#756c62] sm:text-[15px] sm:leading-8">
                Congue, gravida. Placeat nibh sunt semper elementum anim!
                Integer lectus debitis auctor. Molestias vivamus eligendi ut,
                cupidatat nisl iaculis etiam! Laboris aenean.
              </p>

              <Link
                href="/about"
                className="group mt-8 inline-flex items-center gap-3 border-b border-[#1b1713]/45 pb-1 font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1b1713] transition-colors duration-300 hover:border-[#c87832] hover:text-[#c87832]"
              >
                More About Us
                <span className="text-[14px] transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </article>

          {/* ---------------------------------------------------------------- */}
          {/* Middle — Pizza Image                                             */}
          {/* ---------------------------------------------------------------- */}
          <article className="relative h-[380px] overflow-hidden sm:h-[420px] lg:h-[430px]">
            <img
              src={pizzaImage}
              alt="Fresh Italian pizza"
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.025]"
            />
          </article>

          {/* ---------------------------------------------------------------- */}
          {/* Right — Hours Image Background                                   */}
          {/* ---------------------------------------------------------------- */}
          <article className="relative h-[380px] overflow-hidden sm:h-[420px] lg:h-[430px]">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url("${hoursBackground}")`,
              }}
            />

            {/* Readability overlay */}
            <div className="absolute inset-0 bg-black/30" />

            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_15%,rgba(0,0,0,0.18)_42%,rgba(0,0,0,0.76)_100%)]" />

            {/* Hours */}
            <div className="relative flex h-full flex-col justify-end p-7 text-white sm:p-8 lg:p-9 xl:p-10">
              <p className="font-body text-[9px] font-semibold uppercase tracking-[0.34em] text-white/72">
                Visit Us
              </p>

              <h3 className="mt-3 font-display text-[4.4rem] font-semibold leading-[0.78] tracking-[-0.05em] text-white sm:text-[4.8rem]">
                Hours
              </h3>

              <div className="mt-7 max-w-[380px]">
                <div className="border-b border-white/25 pb-4">
                  <p className="font-body text-[10px] font-semibold uppercase tracking-[0.15em] text-white/75">
                    Monday - Saturday
                  </p>

                  <p className="mt-2 font-display text-[1.8rem] font-semibold leading-none tracking-[-0.02em] text-white sm:text-[1.95rem]">
                    9AM - 1PM
                  </p>
                </div>

                <div className="pt-4">
                  <p className="font-body text-[10px] font-semibold uppercase tracking-[0.15em] text-white/75">
                    Saturday - Sunday
                  </p>

                  <p className="mt-2 font-display text-[1.8rem] font-semibold leading-none tracking-[-0.02em] text-white sm:text-[1.95rem]">
                    9AM - 4AM
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
