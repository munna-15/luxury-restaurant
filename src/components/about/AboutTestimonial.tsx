const customerImage =
  "https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2018/10/pic49-free-img.png";

const reviewLogos = [
  {
    name: "Tripadvisor",
    image:
      "https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2018/10/tripadvisorlogo1-free-img.png",
  },
  {
    name: "Yelp",
    image:
      "https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2018/10/yelp-free-img.png",
  },
  {
    name: "Google Reviews",
    image:
      "https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2018/10/google-reviews-free-img.png",
  },
  {
    name: "Facebook",
    image:
      "https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2018/10/fb-free-imng.png",
  },
  {
    name: "Twitter",
    image:
      "https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2018/10/tweet-free-img.png",
  },
];

export default function AboutTestimonial() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f4efe7]">
      <div className="mx-auto flex min-h-[680px] max-w-[1180px] items-center justify-center px-5 py-24 sm:px-8 sm:py-28 lg:min-h-[68vh] lg:px-10 lg:py-32">
        <div className="flex w-full max-w-[820px] flex-col items-center text-center">
          {/* ------------------------------------------------------------ */}
          {/* Customer Quote                                               */}
          {/* ------------------------------------------------------------ */}

          <blockquote className="max-w-[780px] font-display text-[clamp(1.65rem,3vw,2.65rem)] font-medium italic leading-[1.3] tracking-[-0.025em] text-[#40372f]">
            "Aliquip habitant ea suscipit ea varius cras habitasse ligula
            doloremque cepteur vehicula iste nibh, mattis assumenda massa."
          </blockquote>

          {/* Accent */}
          <div className="mt-8 h-px w-12 bg-[#c87832]" />

          {/* ------------------------------------------------------------ */}
          {/* Customer Image                                               */}
          {/* ------------------------------------------------------------ */}

          <div className="mt-9 h-[82px] w-[82px] overflow-hidden rounded-full border border-[#c87832]/30 p-1">
            <img
              src={customerImage}
              alt="Shamika Smith"
              className="h-full w-full rounded-full object-cover"
            />
          </div>

          {/* Customer Name */}
          <p className="mt-5 font-body text-[9px] font-bold uppercase tracking-[0.3em] text-[#1b1713]">
            - Shamika Smith
          </p>

          {/* ------------------------------------------------------------ */}
          {/* Recommended By                                                */}
          {/* ------------------------------------------------------------ */}

          <div className="mt-20 flex flex-col items-center">
            <h2 className="font-display text-[clamp(2.4rem,3.8vw,3.8rem)] font-semibold leading-[0.86] tracking-[-0.045em] text-[#1b1713]">
              Recommended By
            </h2>

            <div className="mt-5 h-px w-10 bg-[#c87832]" />

            {/* Review Logos */}
            <div className="mt-9 flex flex-wrap items-center justify-center gap-x-10 gap-y-7 sm:gap-x-12">
              {reviewLogos.map((logo) => (
                <div
                  key={logo.name}
                  className="flex h-[42px] w-[110px] items-center justify-center"
                >
                  <img
                    src={logo.image}
                    alt={logo.name}
                    className="max-h-full max-w-full object-contain opacity-75 transition-opacity duration-300 hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
