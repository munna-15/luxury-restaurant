const contactHeroImage =
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2400&q=95";

const frillImage =
  "https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2018/09/frill-free-img.png";

export default function ContactHero() {
  return (
    <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-65"
        style={{
          backgroundImage: `url("${contactHeroImage}")`,
          backgroundPosition: "center center",
        }}
      />

      {/* Soft Readability Layer */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center mt-16">
        <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-24">
          <div className="flex max-w-[620px] flex-col items-start">
            {/* Heading */}
            <h1 className="font-display text-[clamp(3rem,4.8vw,3rem)] font-normal leading-[0.9] tracking-[-0.02em] text-white drop-shadow-[0_12px_30px_rgba(0,0,0,0.28)]">
              Book A Table.
            </h1>

            {/* Accent */}
            <div className="mt-5 h-px w-12 bg-[#c87832]" />

            {/* Phone */}
            <a
              href="tel:+8801792960610"
              className="mt-6 font-body text-[clamp(2.8rem,5vw,4rem)] font-semibold leading-[0.95] tracking-[0.015em] drop-shadow-[0_10px_28px_rgba(0,0,0,0.25)] transition-opacity duration-300 hover:opacity-80"
              style={{ color: "#ffffff" }}
            >
              +88 0179-2960610
            </a>

            {/* Frill */}
            <img
              src={frillImage}
              alt=""
              aria-hidden="true"
              className="mt-6 h-auto w-[135px] opacity-90 sm:w-[155px] md:w-[170px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
