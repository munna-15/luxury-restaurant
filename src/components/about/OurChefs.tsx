
import Link from "next/link";

import {
  ArrowUpRight,
  CarFront,
  Cigarette,
  Music2,
  Wifi,
} from "lucide-react";

const frillImage =
  "https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2018/09/frill-free-img.png";

const dividerImage =
  "https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2018/09/divider-free-img.png";

const chefsBackground =
  "https://images.unsplash.com/photo-1686836715835-65af22ea5cd4?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const chefImages = [
  "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=92",
  "https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=1200&q=92",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=92",
  "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?auto=format&fit=crop&w=1200&q=92",
];

const ctaImage =
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1400&q=92";

const chefs = [
  {
    name: "Charles Davis",
    role: "Head Chef",
    image: chefImages[0],
  },
  {
    name: "Vincent Green",
    role: "Sous Chef",
    image: chefImages[1],
  },
  {
    name: "Samuel Sims",
    role: "Restaurant Manager",
    image: chefImages[2],
  },
  {
    name: "David Butler",
    role: "Pasta Expert",
    image: chefImages[3],
  },
];

const amenities = [
  {
    name: "Free WiFi",
    icon: Wifi,
  },
  {
    name: "Smoking Zone",
    icon: Cigarette,
  },
  {
    name: "Live Music",
    icon: Music2,
  },
  {
    name: "Parking",
    icon: CarFront,
  },
];

function ChefCard({
  name,
  role,
  image,
}: {
  name: string;
  role: string;
  image: string;
}) {
  return (
    <article className="group relative h-[340px] overflow-hidden border border-[#d97706] sm:h-[370px] lg:h-[400px]">
      <img
        src={image}
        alt={name}
        className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.035]"
      />

      <div className="absolute inset-0 bg-black/46 transition-all duration-500 group-hover:bg-black/36" />

      {/* Bottom Center Content */}
      <div className="absolute inset-x-0 bottom-0 z-10 flex justify-center px-6 pb-7 text-center sm:pb-8 lg:pb-9">
        <div className="flex flex-col items-center">
          <span className="h-px w-9 bg-[#d97706] transition-all duration-500 group-hover:w-14" />

          <h3 className="mt-3 font-body text-[1.15rem] font-bold leading-[1.2] tracking-normal text-white sm:text-[1.25rem] lg:text-[1.35rem]">
            {name}
          </h3>

          <p className="mt-2 font-display text-[1.2rem] font-normal leading-none tracking-normal text-white/92 sm:text-[1.3rem] lg:text-[1.4rem]">
            {role}
          </p>
        </div>
      </div>
    </article>
  );
}

function InternCard() {
  return (
    <article className="group relative h-[340px] overflow-hidden border border-[#d97706] sm:h-[370px] lg:h-[400px]">
      <img
        src={ctaImage}
        alt="Restaurant team"
        className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.035]"
      />

      <div className="absolute inset-0 bg-black/56 transition-all duration-500 group-hover:bg-black/45" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center sm:px-8">
        <p className="font-body text-[8px] font-semibold uppercase tracking-[0.3em] text-[#e0ab79]">
          Join Our Team
        </p>

        <h3 className="mt-2 whitespace-nowrap font-body text-[1rem] font-normal leading-none tracking-normal text-white sm:text-[1.08rem] lg:text-[1.18rem]">
          Looking For Management Interns
        </h3>

        <div className="mt-4 h-px w-10 bg-[#d97706]" />

        <Link
          href="#"
          className="group/button mt-4 inline-flex items-center gap-3 rounded-full border border-[#d97706]/70 bg-[#d97706] px-5 py-2.5 font-body text-[9px] font-semibold uppercase tracking-[0.18em] text-white shadow-[0_10px_30px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-1 hover:border-[#b45309] hover:bg-[#b45309] hover:shadow-[0_14px_34px_rgba(0,0,0,0.34)]"
        >
          <span>Apply Today</span>

          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/30 bg-white/10 transition-colors duration-300 group-hover/button:bg-white/15">
            <ArrowUpRight
              size={14}
              strokeWidth={2}
              className="transition-transform duration-300 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5"
            />
          </span>
        </Link>
      </div>
    </article>
  );
}

export default function OurChefs() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f1ece3]">
      {/* ================================================================ */}
      {/* CHEF AREA                                                        */}
      {/* ================================================================ */}

      <div className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-x-0 top-0 bottom-[90px]">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url("${chefsBackground}")`,
              backgroundPosition: "center center",
            }}
          />

          <div className="absolute inset-0 bg-black/72" />
        </div>

        <div className="relative z-10">
          {/* ------------------------------------------------------------ */}
          {/* Header                                                       */}
          {/* ------------------------------------------------------------ */}

          <div className="bg-[#171310]/30">
            <div className="mx-auto flex max-w-[1280px] flex-col items-center px-5 py-13 text-center sm:px-8 sm:py-15 lg:px-10 lg:py-16">
              <h2 className="font-display text-[clamp(2.4rem,3.6vw,3.9rem)] font-normal leading-none tracking-[-0.01em] text-white">
                Our Chefs
              </h2>

              <img
                src={frillImage}
                alt=""
                aria-hidden="true"
                className="mt-8 h-auto w-[110px] opacity-75 sm:w-[225px]"
              />
            </div>
          </div>

          {/* ------------------------------------------------------------ */}
          {/* Chef Mosaic                                                  */}
          {/* ------------------------------------------------------------ */}

          <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
            {/* Top — 3 */}
            <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-3">
              <ChefCard
                name={chefs[0].name}
                role={chefs[0].role}
                image={chefs[0].image}
              />

              <ChefCard
                name={chefs[1].name}
                role={chefs[1].role}
                image={chefs[1].image}
              />

              <ChefCard
                name={chefs[2].name}
                role={chefs[2].role}
                image={chefs[2].image}
              />
            </div>

            {/* Bottom — 2 */}
            <div className="grid grid-cols-1 gap-0 sm:grid-cols-2">
              <ChefCard
                name={chefs[3].name}
                role={chefs[3].role}
                image={chefs[3].image}
              />

              <InternCard />
            </div>
          </div>
        </div>
      </div>

      {/* ================================================================ */}
      {/* RESTAURANT AMENITIES                                             */}
      {/* ================================================================ */}

      <div className="relative z-10 bg-[#f1ece3]">
        <div className="mx-auto max-w-[1280px] px-5 py-12 sm:px-8 lg:px-10 lg:py-28">
          {/* Amenities Header */}
          <div className="flex items-end justify-between gap-8">
            <div className="min-w-0">
              <h2 className="whitespace-nowrap font-display text-[clamp(2.2rem,3.1vw,3.5rem)] font-normal leading-none tracking-[-0.01em] text-[#1b1713]">
                Restaurant Amenities
              </h2>

              <div className="mt-12">
                <img
                  src={dividerImage}
                  alt=""
                  aria-hidden="true"
                  className="h-auto w-[180px] opacity-70"
                />
              </div>
            </div>
          </div>

          {/* Amenities */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4">
            {amenities.map((amenity, index) => {
              const Icon = amenity.icon;

              return (
                <div
                  key={amenity.name}
                  className={`flex items-center gap-3 border-[#1b1713]/10 py-4 sm:px-6 ${
                    index !== 0 ? "sm:border-l" : "sm:pl-0"
                  } ${index === 1 || index === 3 ? "pl-4" : "pr-4"}`}
                >
                  <Icon
                    size={32}
                    strokeWidth={3}
                    className="shrink-0 text-[#d97706]"
                  />

                  <span className="whitespace-nowrap font-display text-[22px] font-normal leading-none tracking-[-0.01em] text-[#1b1713] sm:text-[30px] lg:text-[24px]">
                    {amenity.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

