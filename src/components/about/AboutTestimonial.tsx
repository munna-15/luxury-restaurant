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
      <div className="mx-auto flex min-h-[560px] max-w-[1180px] items-center justify-center px-5 py-16 sm:min-h-[600px] sm:px-8 sm:py-20 lg:min-h-[62vh] lg:px-10 lg:py-24">
        <div className="flex w-full max-w-[820px] flex-col items-center text-center">
          {/* ------------------------------------------------------------ */}
          {/* Customer Quote                                               */}
          {/* ------------------------------------------------------------ */}

          <blockquote className="max-w-[760px] font-body text-[18px] font-normal leading-[1.55] tracking-normal text-[#40372f] sm:text-[20px] lg:text-[20px]">
            "Aliquip habitant ea suscipit ea varius cras habitasse ligula
            doloremque cepteur vehicula iste nibh, mattis assumenda massa."
          </blockquote>

          {/* Accent */}
          <div className="mt-6 h-px w-12 bg-[#d97706]" />

          {/* ------------------------------------------------------------ */}
          {/* Customer Image                                               */}
          {/* ------------------------------------------------------------ */}

          <div className="mt-7 h-[120px] w-[120px] overflow-hidden rounded-full border border-[#d97706]/30 p-1">
            <img
              src={customerImage}
              alt="Shamika Smith"
              className="h-full w-full rounded-full object-cover"
            />
          </div>

          {/* Customer Name */}
          <p className="mt-4 font-body text-[16px] font-normal uppercase tracking-[0.24em] text-[#1b1713]">
            - Shamika Smith
          </p>

          {/* ------------------------------------------------------------ */}
          {/* Recommended By                                                */}
          {/* ------------------------------------------------------------ */}

          <div className="mt-14 flex w-full flex-col items-center">
            <h2 className="font-display text-[22px] font-normal leading-none tracking-normal text-[#1b1713]">
              Recommended By
            </h2>

            <div className="mt-4 h-px w-10 bg-[#d97706]" />

            {/* -------------------------------------------------------- */}
            {/* Review Logos — Single Row                                */}
            {/* -------------------------------------------------------- */}

            <div className="mt-12 flex w-full flex-nowrap items-center justify-center gap-3 overflow-hidden sm:gap-6 lg:gap-10">
              {reviewLogos.map((logo) => (
                <div
                  key={logo.name}
                  className="flex h-[52px] min-w-0 flex-1 items-center justify-center"
                >
                  <img
                    src={logo.image}
                    alt={logo.name}
                    className="max-h-[46px] w-auto max-w-full object-contain opacity-70 grayscale transition-all duration-400 ease-out hover:opacity-100 hover:grayscale-0 sm:max-h-[50px]"
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
