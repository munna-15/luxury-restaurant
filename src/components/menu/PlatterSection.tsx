const platterImage =
  "https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2019/12/platter-img.jpg";

const dividerImage =
  "https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2018/09/divider-free-img.png";

const platterItems = [
  {
    name: "Sautéed Spinach",
    description:
      "Netus integer minus fugit, animi accumsan adipisicing egestas aperiam",
    price: "$12.50",
  },
  {
    name: "Roasted Butternut Squash",
    description:
      "Roasted eggplant spread, marinated tomatoes with garlic & fresh basil",
    price: "$12.50",
  },
  {
    name: "Crumbled Sausage",
    description:
      "Rerum esse aliquid molestias diamlorem purus atque ante eget, nostra orci cum, condimentum euis",
    price: "$12.50",
  },
  {
    name: "Vegetable Sauté",
    description:
      "Eius nisl nihil corporis mauris debitis per aliquam laudantium officia ex",
    price: "$12.50",
  },
];

export default function PlatterSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f4efe7]">
      <div className="mx-auto max-w-[1180px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* ---------------------------------------------------------------- */}
          {/* Left — Premium Layered Platter Images                            */}
          {/* ---------------------------------------------------------------- */}

          <div className="relative min-h-[600px] w-full lg:min-h-[700px]">
            {/* Back Image */}
            <div className="absolute right-[-7%] top-[6%] h-[88%] w-[89%] overflow-hidden rounded-[28px]">
              <img
                src={platterImage}
                alt=""
                aria-hidden="true"
                className="h-full w-full object-cover object-center"
              />

              {/* Black opacity */}
              <div className="absolute inset-0 bg-black/55" />
            </div>

            {/* Front Image */}
            <div className="absolute left-[-2%] top-0 h-[96%] w-[90%] overflow-hidden rounded-[28px] shadow-[0_32px_80px_rgba(27,23,19,0.18)]">
              <img
                src={platterImage}
                alt="Italian platter"
                className="h-full w-full object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.025]"
              />
            </div>

            {/* Decorative Border */}
            <div className="pointer-events-none absolute bottom-[1%] left-[-4%] h-[84%] w-[87%] rounded-[28px] border border-[#c87832]/25" />
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* Right — Platter Menu                                             */}
          {/* ---------------------------------------------------------------- */}

          <div className="w-full max-w-[600px]">
            <h2 className="font-display text-[clamp(4rem,6vw,6.5rem)] font-semibold leading-[0.8] tracking-[-0.055em] text-[#1b1713]">
              Platter
            </h2>

            {/* Divider */}
            <div className="mt-6">
              <img
                src={dividerImage}
                alt=""
                aria-hidden="true"
                className="h-auto w-[120px] opacity-70"
              />
            </div>

            {/* Menu Items */}
            <div className="mt-9">
              {platterItems.map((item, index) => (
                <article
                  key={item.name}
                  className={`py-6 ${
                    index !== 0 ? "border-t border-[#1b1713]/10" : ""
                  }`}
                >
                  <div className="flex items-start justify-between gap-8">
                    <div className="min-w-0">
                      <h3 className="font-display text-[1.5rem] font-semibold leading-none tracking-[-0.025em] text-[#1b1713] transition-colors duration-300 hover:text-[#c87832] sm:text-[1.7rem]">
                        {item.name}
                      </h3>

                      <p className="mt-3 max-w-[450px] font-body text-[12px] leading-6 text-[#756c62] sm:text-[13px] sm:leading-6">
                        {item.description}
                      </p>
                    </div>

                    <span className="shrink-0 pt-0.5 font-display text-[1.3rem] font-semibold tracking-[-0.02em] text-[#1b1713] sm:text-[1.45rem]">
                      {item.price}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
