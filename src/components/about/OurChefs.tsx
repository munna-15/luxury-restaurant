import Link from "next/link";
import { ArrowUpRight, CarFront, Cigarette, Music2, Wifi } from "lucide-react";

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
    <article className="group relative h-[270px] overflow-hidden border border-[#c87832] sm:h-[290px] lg:h-[300px]">
      <img
        src={image}
        alt={name}
        className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.035]"
      />

      <div className="absolute inset-0 bg-black/48 transition-all duration-500 group-hover:bg-black/38" />

      <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-6">
        <span className="block h-px w-9 bg-[#c87832] transition-all duration-500 group-hover:w-14" />

        <h3 className="mt-3 font-display text-[1.55rem] font-semibold leading-[0.9] tracking-[-0.04em] text-white sm:text-[1.7rem]">
          {name}
        </h3>

        <p className="mt-2 font-body text-[8px] font-semibold uppercase tracking-[0.25em] text-white/68">
          {role}
        </p>
      </div>
    </article>
  );
}

function InternCard() {
  return (
    <article className="group relative h-[270px] overflow-hidden border border-[#c87832] sm:h-[290px] lg:h-[300px]">
      <img
        src={ctaImage}
        alt="Restaurant team"
        className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.035]"
      />

      <div className="absolute inset-0 bg-black/56 transition-all duration-500 group-hover:bg-black/46" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white sm:px-8">
        <p className="font-body text-[8px] font-semibold uppercase tracking-[0.3em] text-[#d8a06a]">
          Join Our Team
        </p>

        <h3 className="mt-3 max-w-[250px] font-display text-[clamp(1.9rem,2.8vw,2.7rem)] font-semibold leading-[0.88] tracking-[-0.045em]">
          Looking For
          <br />
          Management Interns
        </h3>

        <div className="mt-5 h-px w-10 bg-[#c87832]" />

        <Link
          href="#"
          className="group/button mt-5 inline-flex items-center gap-3 rounded-full bg-[#c87832] px-4 py-2.5 font-body text-[8px] font-bold uppercase tracking-[0.2em] text-white shadow-[0_10px_24px_rgba(0,0,0,0.22)] transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.03] hover:bg-[#b86b29]"
        >
          <span>Apply Today!</span>

          <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/25 bg-white/10">
            <ArrowUpRight
              size={14}
              strokeWidth={2.5}
              className="transition-transform duration-500 group-hover/button:translate-x-1 group-hover/button:-translate-y-1"
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
        {/* Background Image
            Ends 90px BEFORE the bottom of the last chef row */}
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
          {/* Header                                                        */}
          {/* ------------------------------------------------------------ */}

          <div className="bg-[#171310]/30">
            <div className="mx-auto flex max-w-[1280px] flex-col items-center px-5 py-16 text-center sm:px-8 sm:py-20 lg:px-10 lg:py-22">
              <img
                src={frillImage}
                alt=""
                aria-hidden="true"
                className="mb-6 h-auto w-[135px] opacity-75 sm:w-[155px]"
              />

              <h2 className="font-display text-[clamp(3.4rem,5.4vw,6rem)] font-semibold leading-[0.82] tracking-[-0.055em] text-white">
                Our Chefs
              </h2>
            </div>
          </div>

          {/* ------------------------------------------------------------ */}
          {/* Chef Mosaic — NO GAPS                                         */}
          {/* ------------------------------------------------------------ */}

          <div className="mx-auto max-w-[1060px] px-5 sm:px-8 lg:px-10">
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
      {/* RESTAURANT AMENITIES                                              */}
      {/* ================================================================ */}

      <div className="relative z-10 bg-[#f1ece3]">
        <div className="mx-auto max-w-[1180px] px-5 py-12 sm:px-8 lg:px-10 lg:py-14">
          {/* Amenities Heading — LEFT */}
          <div className="max-w-[480px]">
            <h2 className="font-display text-[clamp(2.7rem,3.8vw,4.4rem)] font-semibold leading-[0.84] tracking-[-0.05em] text-[#1b1713]">
              Restaurant Amenities
            </h2>

            <div className="mt-4">
              <img
                src={dividerImage}
                alt=""
                aria-hidden="true"
                className="h-auto w-[90px] opacity-70"
              />
            </div>
          </div>

          {/* Amenities */}
          <div className="mt-8 flex max-w-[850px] flex-col sm:flex-row">
            {amenities.map((amenity, index) => {
              const Icon = amenity.icon;

              return (
                <div
                  key={amenity.name}
                  className={`flex flex-1 items-center gap-3 py-4 sm:flex-col sm:items-start sm:justify-center sm:px-5 sm:py-2 ${
                    index !== 0
                      ? "border-t border-[#1b1713]/10 sm:border-l sm:border-t-0"
                      : ""
                  }`}
                >
                  <Icon
                    size={18}
                    strokeWidth={1.8}
                    className="shrink-0 text-[#c87832]"
                  />

                  <h3 className="font-display text-[1.15rem] font-semibold leading-none tracking-[-0.02em] text-[#1b1713]">
                    {amenity.name}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
