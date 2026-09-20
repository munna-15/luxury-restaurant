const hoursImage =
  "https://images.unsplash.com/photo-1611765083444-a3ce30f1c885?auto=format&fit=crop&w=1800&q=92";

export default function ContactLocation() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f4efe7]">
      <div className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-8">
          {/* ------------------------------------------------------------ */}
          {/* Left — Wide Map                                                */}
          {/* ------------------------------------------------------------ */}

          <div className="relative h-[380px] w-full overflow-hidden border border-[#1b1713]/10 bg-[#e8e1d7] sm:h-[430px] lg:h-[500px] lg:flex-[1.15]">
            <iframe
              title="Restaurant location"
              src="https://www.google.com/maps?q=Dhaka,Bangladesh&output=embed"
              className="absolute inset-0 h-full w-full border-0 grayscale-[18%]"
              loading="lazy"
              allowFullScreen
            />

            <div className="pointer-events-none absolute inset-0 border border-white/15" />
          </div>

          {/* ------------------------------------------------------------ */}
          {/* Right — Square Hours Image                                     */}
          {/* ------------------------------------------------------------ */}

          <div className="relative aspect-square w-full overflow-hidden lg:flex-1">
            <img
              src={hoursImage}
              alt="Restaurant interior"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-black/30" />

            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.03)_18%,rgba(0,0,0,0.72)_100%)]" />

            {/* Hours */}
            <div className="absolute inset-x-0 bottom-0 z-10 p-8 text-white sm:p-10">
              <p className="font-body text-[9px] font-medium uppercase tracking-[0.34em] text-white/65">
                Visit Us
              </p>

              <h2 className="mt-3 font-display text-[clamp(3rem,4.4vw,4.6rem)] font-normal leading-[0.84] tracking-[-0.04em] text-white">
                Hours
              </h2>

              <div className="mt-6">
                <div className="border-b border-white/20 pb-4">
                  <p className="font-body text-[9px] font-medium uppercase tracking-[0.15em] text-white/62">
                    Monday - Saturday
                  </p>

                  <p className="mt-2 font-body text-[16px] font-normal leading-none text-white">
                    9AM - 1PM
                  </p>
                </div>

                <div className="pt-4">
                  <p className="font-body text-[9px] font-medium uppercase tracking-[0.15em] text-white/62">
                    Saturday - Sunday
                  </p>

                  <p className="mt-2 font-body text-[16px] font-normal leading-none text-white">
                    9AM - 4AM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
