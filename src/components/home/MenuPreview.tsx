import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const parcelliImage =
  "https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2021/03/parcelli.png";

const menuBackground =
  "https://images.unsplash.com/photo-1686836715835-65af22ea5cd4?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const menuItems = [
  {
    name: "Ham and Fontina",
    description: "Roasted eggplant spread, marinated tomatoes and fresh basil.",
    price: "$29.5",
  },
  {
    name: "Chicken Italiano",
    description:
      "Tender chicken, seasonal herbs and a rich Italian-style sauce.",
    price: "$11",
  },
  {
    name: "Spaghetti Delle",
    description:
      "Rustic pasta with herb-garlic butter, parmesan and fresh herbs.",
    price: "$28",
  },
  {
    name: "Crumbled Sausage",
    description:
      "Natural unpressed ham, fontina, provolone, aioli and fresh tomato.",
    price: "$12.5",
  },
  {
    name: "Baked Meatballs",
    description:
      "Handmade meatballs baked in savory marinara with melted cheese.",
    price: "$32.5",
  },
];

const menuImages = [
  "https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2019/12/Menu-item-1.jpg",
  "https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2019/12/Menu-item-2.jpg",
  "https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2019/12/Menu-item-3.jpg",
  "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1200&q=92",
];

function MenuTextCard({ item }: { item: (typeof menuItems)[number] }) {
  return (
    <article className="flex aspect-square flex-col items-center justify-center bg-[#f8f2e8] px-6 py-8 text-center sm:px-9 lg:px-10">
      <span className="mb-5 h-px w-10 bg-[#c87832]" />

      <h3 className="font-display text-[clamp(1.85rem,2.45vw,2.7rem)] font-semibold leading-[0.92] tracking-[-0.035em] text-[#1b1713]">
        {item.name}
      </h3>

      <p className="mt-5 max-w-[275px] font-body text-[12px] leading-6 text-[#766d62] sm:text-[13px]">
        {item.description}
      </p>

      <p className="mt-5 font-display text-2xl font-semibold tracking-[-0.02em] text-[#c87832] sm:text-3xl">
        {item.price}
      </p>
    </article>
  );
}

function MenuImageCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="group aspect-square overflow-hidden bg-[#ddd2c3]">
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
      />
    </div>
  );
}

export default function MenuPreview() {
  return (
    <section className="relative z-10 overflow-hidden text-[#1b1713]">
      {/* ------------------------------------------------------------------ */}
      {/* MENU HEADER                                                        */}
      {/* ------------------------------------------------------------------ */}
      <div className="relative z-10 bg-[#f1ece3]">
        <div className="mx-auto max-w-[1380px] px-4 py-18 sm:px-6 sm:py-24 lg:px-8 lg:py-26">
          <div className="mx-auto flex max-w-[860px] flex-col items-center text-center">
            <img
              src={parcelliImage}
              alt=""
              aria-hidden="true"
              className="mb-8 h-auto w-[145px] opacity-65 sm:w-[175px] md:w-[140px]"
            />

            <p className="font-body text-[10px] font-semibold uppercase tracking-[0.38em] text-[#c87832]">
              Our Menu
            </p>

            <h2 className="mt-5 font-display text-[clamp(3.8rem,6vw,7.2rem)] font-semibold leading-[0.82] tracking-[-0.055em] text-[#1b1713]">
              Quality Ingredients,
              <br />
              <span className="italic">Tasty Meals.</span>
            </h2>

            <p className="mx-auto mt-7 max-w-[650px] font-body text-[14px] leading-7 text-[#766d62] sm:text-[15px] sm:leading-8">
              Congue, gravida. Placeat nibh sunt semper elementum anim! Integer
              lectus debitis auctor. Molestias vivamus eligendi ut, cupidatat
              nisl iaculis etiam! Laboris aenean.
            </p>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* FULL-WIDTH BACKGROUND AREA                                         */}
      {/* ------------------------------------------------------------------ */}
      <div className="relative isolate">
        {/* Cream space before background image */}
        <div className="absolute inset-x-0 top-0 z-0 h-[122px] bg-[#f1ece3]" />

        {/* Full viewport background image */}
        <div className="absolute inset-x-0 top-[122px] bottom-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url("${menuBackground}")`,
            }}
          />

          <div className="absolute inset-0 bg-black/14" />

          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,7,5,0.04)_0%,rgba(10,7,5,0.38)_100%)]" />
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* MOSAIC                                                           */}
        {/* ---------------------------------------------------------------- */}
        <div className="relative z-10 mx-auto max-w-[1380px] px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8 lg:pb-28">
          <div className="mx-auto max-w-[1180px]">
            <div className="grid grid-cols-1 gap-px border border-[#c87832] bg-[#c87832] sm:grid-cols-2 lg:grid-cols-3">
              {/* Row 1 */}
              <MenuTextCard item={menuItems[0]} />

              <MenuImageCard
                src={menuImages[0]}
                alt="Ham and Fontina Italian dish"
              />

              <MenuTextCard item={menuItems[1]} />

              {/* Row 2 */}
              <MenuImageCard src={menuImages[1]} alt="Chicken Italiano" />

              <MenuTextCard item={menuItems[2]} />

              <MenuImageCard src={menuImages[2]} alt="Spaghetti Delle" />

              {/* Row 3 */}
              <MenuTextCard item={menuItems[3]} />

              <MenuImageCard src={menuImages[3]} alt="Italian pasta dish" />

              <MenuTextCard item={menuItems[4]} />
            </div>

            {/* ---------------------------------------------------------------- */}
            {/* CTA                                                                */}
            {/* ---------------------------------------------------------------- */}
            <div className="relative z-10 mt-14 flex justify-center sm:mt-16">
              <Link
                href="/menu"
                className="group inline-flex items-center gap-4 rounded-full bg-[#c87832] px-7 py-4 font-body text-[10px] font-bold uppercase tracking-[0.22em] text-white shadow-[0_12px_32px_rgba(200,120,50,0.2)] transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.04] hover:bg-[#b96c2a] hover:shadow-[0_18px_42px_rgba(200,120,50,0.34)]"
              >
                <span className="transition-transform duration-500 ease-out group-hover:translate-x-0.5">
                  Discover Entire Menu
                </span>

                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/35 bg-white/10 transition-all duration-500 ease-out group-hover:rotate-6 group-hover:bg-white/15">
                  <ArrowUpRight
                    size={17}
                    strokeWidth={2.5}
                    className="text-white transition-transform duration-500 ease-out group-hover:translate-x-1 group-hover:-translate-y-1"
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
