
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const parcelliImage =
  "https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2021/03/parcelli.png";

const menuBackground =
  "https://images.unsplash.com/photo-1686836715835-65af22ea5cd4?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const menuItems = [
  {
    name: "Ham and Fontina",
    description: "Roasted eggplant spread, marinated tomatoes.",
    price: "$29.5",
  },
  {
    name: "Chicken Italiano",
    description: "Tristique perferen possimus neque fermentum vel.",
    price: "$11",
  },
  {
    name: "Spaghetti Delle",
    description:
      "Rustic baguette toasted with herb-garlic butter & parmesan",
    price: "$28",
  },
  {
    name: "Crumbled Sausage",
    description:
      "Natural unpressed ham, fontina, provolone, aioli, fresh tomato",
    price: "$12.5",
  },
  {
    name: "Baked Meatballs",
    description:
      "Our handmade meatballs baked in savory marinara with melted cheese",
    price: "$32.5",
  },
];

const menuImages = [
  "https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2019/12/Menu-item-1.jpg",
  "https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2019/12/Menu-item-2.jpg",
  "https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2019/12/Menu-item-3.jpg",
  "https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2019/12/Menu-item-4.jpg",
];

function MenuTextCard({
  item,
}: {
  item: (typeof menuItems)[number];
}) {
  return (
    <article className="flex aspect-square w-full flex-col items-center justify-center border border-[#d97706] bg-[#f8f2e8] px-5 text-center sm:px-7 lg:px-9">
      <span className="mb-4 h-px w-8 shrink-0 bg-[#d97706] sm:w-9 lg:mb-5 lg:w-10" />

      <h3 className="max-w-[230px] font-display text-[clamp(1.5rem,2vw,2.3rem)] font-normal leading-[1.04] tracking-[-0.008em] text-[#1b1713]">
        {item.name}
      </h3>

      <p className="mt-4 max-w-[245px] font-body text-[11px] font-normal leading-6 tracking-normal text-[#766d62] sm:text-[12px] sm:leading-7">
        {item.description}
      </p>

      <p className="mt-4 font-body text-[15px] font-normal leading-none tracking-normal text-[#d97706] sm:text-[16px]">
        {item.price}
      </p>
    </article>
  );
}

function MenuImageCard({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="group relative aspect-square w-full overflow-hidden border border-[#d97706] bg-[#ddd2c3]">
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
      />
    </div>
  );
}

export default function MenuPreview() {
  return (
    <section className="relative z-10 overflow-hidden text-[#1b1713]">
      {/* ============================================================
          MENU HEADER
      ============================================================ */}
      <div className="relative z-10 bg-[#f1ece3]">
        <div className="mx-auto max-w-[1380px] px-4 py-18 sm:px-6 sm:py-22 lg:px-8 lg:py-24">
          <div className="mx-auto flex max-w-[850px] flex-col items-center text-center">
            <img
              src={parcelliImage}
              alt=""
              aria-hidden="true"
              className="mb-7 h-auto w-[135px] opacity-65 sm:w-[150px]"
            />

            <p className="font-body text-[9px] font-normal uppercase tracking-[0.3em] text-[#d97706]">
              Our Menu
            </p>

            <h2 className="mt-5 max-w-[780px] font-display text-[clamp(3.4rem,5vw,5.8rem)] font-normal leading-[1.04] tracking-[-0.012em] text-[#1b1713]">
              Quality Ingredients,
              <br />
              <span>Tasty Meals.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-[620px] font-body text-[13px] font-normal leading-7 tracking-normal text-[#766d62] sm:text-[14px]">
              Congue, gravida. Placeat nibh sunt semper elementum anim! Integer
              lectus debitis auctor. Molestias vivamus eligendi ut, cupidatat
              nisl iaculis etiam! Laboris aenean.
            </p>
          </div>
        </div>
      </div>

      {/* ============================================================
          FULL-WIDTH BACKGROUND AREA
      ============================================================ */}
      <div className="relative isolate">
        <div className="absolute inset-x-0 top-0 z-0 h-[122px] bg-[#f1ece3]" />

        <div className="absolute inset-x-0 bottom-0 top-[122px] z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url("${menuBackground}")`,
            }}
          />

          <div className="absolute inset-0 bg-black/14" />

          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,7,5,0.04)_0%,rgba(10,7,5,0.38)_100%)]" />
        </div>

        {/* ============================================================
            MOSAIC
        ============================================================ */}
        <div className="relative z-10 mx-auto max-w-[1380px] px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8 lg:pb-28">
          <div className="mx-auto max-w-[1140px]">
            <div className="grid grid-cols-2 lg:grid-cols-3">
              {/* Row 1 */}
              <MenuTextCard item={menuItems[0]} />

              <MenuImageCard
                src={menuImages[0]}
                alt="Ham and Fontina"
              />

              <MenuTextCard item={menuItems[1]} />

              {/* Row 2 */}
              <MenuImageCard
                src={menuImages[1]}
                alt="Chicken Italiano"
              />

              <MenuTextCard item={menuItems[2]} />

              <MenuImageCard
                src={menuImages[2]}
                alt="Spaghetti Delle"
              />

              {/* Row 3 */}
              <MenuTextCard item={menuItems[3]} />

              <MenuImageCard
                src={menuImages[3]}
                alt="Crumbled Sausage"
              />

              <MenuTextCard item={menuItems[4]} />
            </div>

            {/* ==========================================================
                CTA
            ========================================================== */}
            <div className="relative z-10 mt-12 flex justify-center sm:mt-14">
              <Link
                href="/menu"
                className="group inline-flex items-center gap-4 rounded-full bg-[#d97706] px-8 py-4 font-body text-[12px] font-normal uppercase tracking-[0.16em] !text-white shadow-[0_12px_30px_rgba(217,119,6,0.2)] transition-all duration-300 hover:bg-[#b45309] hover:shadow-[0_16px_36px_rgba(180,83,9,0.25)]"
              >
                <span>Discover Entire Menu</span>

                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/35 bg-white/10">
                  <ArrowUpRight
                    size={17}
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

