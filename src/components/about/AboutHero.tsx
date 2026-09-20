const aboutHeroImage =
  "https://images.unsplash.com/photo-1653259038915-7cf0b7a4dd6c?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const frillImage =
  "https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2018/09/frill-free-img.png";

export default function AboutHero() {
  return (
    <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-65"
        style={{
          backgroundImage: `url("${aboutHeroImage}")`,
          backgroundPosition: "center 55%",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-24">
          <div className="flex max-w-[500px] flex-col items-start">
            {/* Heading */}
            <h1 className="font-display text-[clamp(3.6rem,6vw,5.8rem)] font-bold leading-[0.82] tracking-[-0.055em] text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.32)]">
              About Us.
            </h1>

            {/* Frill */}
            <img
              src={frillImage}
              alt=""
              aria-hidden="true"
              className="mt-6 h-auto w-[170px] opacity-90 sm:w-[190px] md:w-[205px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
