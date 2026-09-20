const lunchBackground =
  "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=2200&q=92";

const lunchItems = [
  {
    name: "Bruschetta Classico",
    description: "Roasted eggplant spread, marinat",
    image:
      "https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2021/03/dumplings.png",
  },
  {
    name: "Parmesan Bread",
    description: "Ratione, nostrum mus hic harum aptent at quae sapien illo",
    image:
      "https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2021/03/noodles.png",
  },
  {
    name: "Banana Waffles",
    description: "Ratione, nostrum mus hic harum aptent at quae sapien illo",
    image:
      "https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2021/03/strawberry-waffles.png",
  },
  {
    name: "Cheese Garlic Bread",
    description: "Roasted eggplant spread, marinat",
    image:
      "https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2021/03/garlic-bread.png",
  },
  {
    name: "Cottage Cheese Fusilli",
    description:
      "Roasted eggplant spread, marinated tomatoes with garlic & fresh basil 8",
    image:
      "https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2021/03/cheese-fillings.png",
  },
  {
    name: "Whole Grain Pasta",
    description:
      "Roasted eggplant spread, marinated tomatoes with garlic & fresh basil 8",
    image:
      "https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2021/03/pizza.png",
  },
];

function LunchItem({
  name,
  description,
  image,
}: {
  name: string;
  description: string;
  image: string;
}) {
  return (
    <article className="group flex items-center gap-6 py-7 text-left sm:gap-8">
      {/* Food Image */}
      <div className="flex h-[82px] w-[105px] shrink-0 items-center justify-center sm:h-[95px] sm:w-[120px]">
        <img
          src={image}
          alt={name}
          className="max-h-full max-w-full object-contain transition-transform duration-500 ease-out group-hover:-translate-y-1 group-hover:scale-[1.04]"
        />
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <h3 className="font-display text-[1.3rem] font-semibold leading-none tracking-[-0.025em] text-white sm:text-[1.45rem]">
          {name}
        </h3>

        <p className="mt-2.5 max-w-[260px] font-body text-[11px] leading-5 text-white/70 sm:text-[12px] sm:leading-6">
          {description}
        </p>

        {/* Underline */}
        <span className="mt-4 block h-px w-full max-w-[220px] bg-white/25 transition-all duration-500 group-hover:max-w-[250px] group-hover:bg-[#c87832]" />
      </div>
    </article>
  );
}

function LunchPanel({ items }: { items: typeof lunchItems }) {
  return (
    <div className="relative flex-1 overflow-hidden rounded-[28px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("${lunchBackground}")`,
        }}
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* 3 Items — Vertical Grid */}
      <div className="relative z-10 grid grid-cols-1 px-7 py-5 sm:px-9 lg:px-10">
        {items.map((item, index) => (
          <div
            key={item.name}
            className={
              index !== items.length - 1 ? "border-b border-white/10" : ""
            }
          >
            <LunchItem
              name={item.name}
              description={item.description}
              image={item.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LunchSection() {
  const firstThree = lunchItems.slice(0, 3);
  const lastThree = lunchItems.slice(3, 6);

  return (
    <section className="relative w-full overflow-hidden bg-[#f4efe7]">
      <div className="mx-auto max-w-[1180px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        {/* Heading */}
        <div className="flex flex-col items-center text-center">
          <h2 className="font-display text-[clamp(3.8rem,6vw,6.3rem)] font-semibold leading-[0.82] tracking-[-0.055em] text-[#1b1713]">
            Six Tasty
            <br />
            <span className="italic">Lunches for $9</span>
          </h2>

          <div className="mt-6 h-px w-14 bg-[#c87832]" />
        </div>

        {/* Two Panels — FLEX */}
        <div className="mt-12 flex flex-col gap-6 lg:mt-14 lg:flex-row lg:items-stretch">
          {/* Left Panel */}
          <LunchPanel items={firstThree} />

          {/* Right Panel */}
          <LunchPanel items={lastThree} />
        </div>
      </div>
    </section>
  );
}
