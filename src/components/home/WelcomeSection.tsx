
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
          {/* Welcome Content */}
          <article className="flex items-center px-5 py-12 sm:px-8 lg:px-10 xl:px-14">
            <div className="w-full max-w-[500px]">
              {/* Normal text */}
              <p className="font-body text-[9px] font-normal uppercase tracking-[0.28em] text-[#d97706]">
                Country&apos;s Most Loved!
              </p>

              {/* Main display heading */}
              <h2 className="mt-4 font-display text-[clamp(3.4rem,4.6vw,5.2rem)] font-normal leading-[0.94] tracking-[-0.02em] text-[#1b1713]">
                Welcome
              </h2>

              <div className="mt-6 h-px w-12 bg-[#d97706]" />

              {/* Normal body heading */}
              <h3 className="mt-7 max-w-[470px] font-body text-[clamp(1.35rem,1.9vw,1.8rem)] font-normal leading-[1.35] tracking-normal text-[#1b1713]">
                We Are Locally Crafted Food &amp; Wine Serving Since 1978.
              </h3>

              {/* Normal text */}
              <p className="mt-5 max-w-[465px] font-body text-[13px] font-normal leading-7 tracking-normal text-[#756c62] sm:text-[14px]">
                Congue, gravida. Placeat nibh sunt semper elementum anim!
                Integer lectus debitis auctor. Molestias vivamus eligendi ut,
                cupidatat nisl iaculis etiam! Laboris aenean.
              </p>

              {/* Normal text */}
              <Link
                href="/about"
                className="group mt-7 inline-flex items-center gap-3 border-b border-[#1b1713]/40 pb-1 font-body text-[10px] font-normal uppercase tracking-[0.16em] text-[#1b1713] transition-colors duration-300 hover:border-[#d97706] hover:text-[#d97706]"
              >
                More About Us

                <span className="font-body text-[14px] font-normal transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </article>

          {/* Middle — Pizza Image */}
          <article className="relative h-[380px] overflow-hidden sm:h-[420px] lg:h-[430px]">
            <img
              src={pizzaImage}
              alt="Fresh Italian pizza"
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.025]"
            />
          </article>

          {/* Right — Hours Image */}
          <article className="relative h-[380px] overflow-hidden sm:h-[420px] lg:h-[430px]">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url("${hoursBackground}")`,
              }}
            />

            <div className="absolute inset-0 bg-black/30" />

            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_15%,rgba(0,0,0,0.18)_42%,rgba(0,0,0,0.76)_100%)]" />

            <div className="relative flex h-full flex-col justify-end p-7 text-white sm:p-8 lg:p-9 xl:p-10">
              {/* Normal text */}
              <p className="font-body text-[8px] font-normal uppercase tracking-[0.28em] text-white/70">
                Visit Us
              </p>

              {/* Main display heading */}
              <h3 className="mt-2 font-display text-[3.4rem] font-normal leading-[0.94] tracking-[-0.02em] text-white sm:text-[3.8rem]">
                Hours
              </h3>

              <div className="mt-6 max-w-[360px]">
                <div className="border-b border-white/25 pb-4">
                  {/* Normal text */}
                  <p className="font-body text-[9px] font-normal uppercase tracking-[0.12em] text-white/72">
                    Monday - Saturday
                  </p>

                  {/* Normal font + normal weight */}
                  <p className="mt-2 font-body text-[15px] font-normal leading-none tracking-normal text-white sm:text-[16px]">
                    9AM - 1PM
                  </p>
                </div>

                <div className="pt-4">
                  {/* Normal text */}
                  <p className="font-body text-[9px] font-normal uppercase tracking-[0.12em] text-white/72">
                    Saturday - Sunday
                  </p>

                  {/* Normal font + normal weight */}
                  <p className="mt-2 font-body text-[15px] font-normal leading-none tracking-normal text-white sm:text-[16px]">
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

