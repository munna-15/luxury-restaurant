
const pizzaImage =
  "https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2018/10/pic62-free-img.jpg";

const dividerImage =
  "https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2018/09/divider-free-img.png";

const pizzaItems = [
  {
    name: "BBQ Special Pizza",
    description:
      "Roasted eggplant spread, marinated tomatoes with garlic & fresh basil",
    price: "$12.50",
  },
  {
    name: "Spe. Cheesy Cheese",
    description:
      "Roasted eggplant spread, marinated tomatoes with garlic & fresh basil",
    price: "$12.50",
  },
  {
    name: "Mushroom Chilly Pizza",
    description:
      "Roasted eggplant spread, marinated tomatoes with garlic & fresh basil",
    price: "$12.50",
  },
  {
    name: "Chicken BBQ Special",
    description:
      "Roasted eggplant spread, marinated tomatoes with garlic & fresh basil",
    price: "$25.50",
  },
];

export default function PizzaSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f4efe7]">
      <div className="mx-auto max-w-[1180px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          {/* ============================================================
              LEFT — PIZZA MENU
          ============================================================ */}
          <div className="order-2 w-full max-w-[610px] lg:order-1">
            {/* Main Display Heading */}
            <h2 className="font-display text-[clamp(3rem,4.4vw,4.8rem)] font-normal leading-[1] tracking-[-0.015em] text-[#1b1713]">
              Pizza
            </h2>

            {/* Divider */}
            <div className="mt-5">
              <img
                src={dividerImage}
                alt=""
                aria-hidden="true"
                className="h-auto w-[110px] opacity-65"
              />
            </div>

            {/* Menu Items */}
            <div className="mt-8">
              {pizzaItems.map((item, index) => (
                <article
                  key={item.name}
                  className={`py-6 sm:py-7 ${
                    index !== 0 ? "border-t border-[#1b1713]/10" : ""
                  }`}
                >
                  <div className="flex items-start justify-between gap-8">
                    <div className="min-w-0">
                      {/* Item Name — Large + Bold Sans Serif */}
                      <h3 className=" text-[24px] font-semibold leading-[1.2] tracking-normal text-[#1b1713] transition-colors duration-300 hover:text-[#d97706] sm:text-[28px]">
                        {item.name}
                      </h3>

                      {/* Description — Normal Sans Serif */}
                      <p className="mt-3 max-w-[460px] font-body text-[14px] font-normal leading-7 tracking-normal text-[#756c62] sm:text-[16px]">
                        {item.description}
                      </p>
                    </div>

                    {/* Price — Normal Sans Serif */}
                    <span className="shrink-0 pt-1 font-semibold text-[22px]  leading-6 tracking-normal text-black sm:text-[28px]">
                      {item.price}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* ============================================================
              RIGHT — PREMIUM LAYERED PIZZA IMAGES
          ============================================================ */}
          <div className="order-1 relative min-h-[670px] w-full sm:min-h-[710px] lg:order-2 lg:min-h-[760px]">
            {/* Back Image */}
            <div className="absolute left-[-9%] top-[5%] h-[91%] w-[94%] overflow-hidden rounded-[28px]">
              <img
                src={pizzaImage}
                alt=""
                aria-hidden="true"
                className="h-full w-full object-cover object-center"
              />

              <div className="absolute inset-0 bg-black/55" />
            </div>

            {/* Front Image */}
            <div className="absolute right-[-3%] top-0 h-[98%] w-[94%] overflow-hidden rounded-[28px] shadow-[0_36px_90px_rgba(27,23,19,0.2)]">
              <img
                src={pizzaImage}
                alt="Fresh Italian pizza"
                className="h-full w-full object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.025]"
              />
            </div>

            {/* Decorative Border */}
            <div className="pointer-events-none absolute bottom-[0.5%] right-[-5%] h-[87%] w-[91%] rounded-[28px] border border-[#d97706]/25" />
          </div>
        </div>
      </div>
    </section>
  );
}

