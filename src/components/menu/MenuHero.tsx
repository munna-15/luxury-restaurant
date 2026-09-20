
const menuHeroImage =
  "https://images.unsplash.com/photo-1582363810396-2a539de692f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  

 const frillImage =
    "https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2018/09/frill-free-img.png";

export default function MenuHero() {
  return (
    <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("${menuHeroImage}")`,
          backgroundPosition: "center center",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="w-full px-6 pt-20 sm:px-10 lg:px-16 xl:px-24">
          <div className="flex max-w-[520px] flex-col items-start">
            <h1 className="font-display text-[clamp(4.5rem,8vw,5rem)] font-semibold leading-[0.78] tracking-[-0.06em] text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
              Menu.
            </h1>

            <img
              src={frillImage}
              alt=""
              aria-hidden="true"
              className="mt-7 h-auto w-[150px] opacity-90 sm:mt-8 sm:w-[175px] md:w-[195px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

