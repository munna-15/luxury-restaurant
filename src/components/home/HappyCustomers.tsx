
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const parcelliImage =
  "https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2021/03/parcelli.png";

const testimonials = {
  shamika: {
    name: "Shamika Smith",
    image:
      "https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2018/10/pic49-free-img.png",
    review:
      "Aliquip habitant ea suscipit ea varius cras habitasse ligula doloremque cepteur vehicula iste nibh, mattis assumenda massa",
  },
  jose: {
    name: "Jose Hatts",
    image:
      "https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2018/10/pic50-free-img.png",
    review:
      "Aliquip habitant ea suscipit ea varius cras habitasse ligula doloremque. Fuga reprehenderit quis unde soluta.",
  },
  monica: {
    name: "Monica Tata",
    image:
      "https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2018/10/pic51-free-img.png",
    review:
      "Aliquip habitant ea suscipit ea varius cras habitasse ligula doloremque",
  },
};

function Testimonial({
  image,
  name,
  review,
}: {
  image: string;
  name: string;
  review: string;
}) {
  return (
    <article className="group flex flex-col items-center text-center">
      {/* Customer Image */}
      <div className="relative">
        <div className="h-[76px] w-[76px] overflow-hidden rounded-full sm:h-[84px] sm:w-[84px]">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        </div>

        <span className="absolute -bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#d97706]" />
      </div>

      {/* Client Message — Berkshire Swash */}
      <p className="mt-5 max-w-[350px] font-display text-[1rem] font-normal leading-[1.35] tracking-[-0.005em] text-[#40372f] sm:text-[1.4rem]">
        &ldquo;{review}&rdquo;
      </p>

      {/* Client Name — Raleway Normal */}
      <p className="mt-4 font-body text-[9px] font-normal uppercase tracking-[0.2em] text-[#1b1713]">
        — {name}
      </p>
    </article>
  );
}

export default function HappyCustomers() {
  return (
    <section
      id="reviews"
      className="relative z-10 w-full bg-[#f4efe7]"
    >
      <div className="mx-auto flex min-h-[700px] max-w-[1180px] items-center px-5 py-16 sm:px-8 lg:min-h-[68vh] lg:px-10 lg:py-20">
        <div className="mx-auto w-full max-w-[1020px]">
          {/* ==========================================================
              TESTIMONIALS
          ========================================================== */}
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_0.92fr] lg:items-center lg:gap-20">
            {/* ========================================================
                LEFT
            ======================================================== */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              {/* Parcelli */}
              <img
                src={parcelliImage}
                alt=""
                aria-hidden="true"
                className="h-auto w-[76px] opacity-45 sm:w-[84px]"
              />

              {/* Main Heading — Smaller + One Line */}
              <h2 className="mt-5 whitespace-nowrap font-display text-[clamp(2.55rem,3.4vw,3.8rem)] font-normal leading-[1] tracking-[-0.012em] text-[#1b1713]">
                Happy Customers!
              </h2>

              {/* Accent */}
              <div className="mt-5 h-px w-12 bg-[#d97706]" />

              {/* Shamika */}
              <div className="mt-7">
                <Testimonial
                  image={testimonials.shamika.image}
                  name={testimonials.shamika.name}
                  review={testimonials.shamika.review}
                />
              </div>
            </div>

            {/* ========================================================
                RIGHT
            ======================================================== */}
            <div className="flex flex-col items-center justify-center gap-10 lg:items-start lg:gap-11">
              {/* Jose */}
              <Testimonial
                image={testimonials.jose.image}
                name={testimonials.jose.name}
                review={testimonials.jose.review}
              />

              {/* Divider */}
              <span className="h-px w-16 bg-[#1b1713]/10" />

              {/* Monica */}
              <Testimonial
                image={testimonials.monica.image}
                name={testimonials.monica.name}
                review={testimonials.monica.review}
              />
            </div>
          </div>

          {/* ============================================================
              REVIEWS CTA
          ============================================================ */}
          <div className="mt-14 flex flex-col items-center">
            <Link
              href="/reviews"
              className="group inline-flex items-center gap-3 font-display text-[clamp(1.55rem,2.2vw,2.1rem)] font-normal leading-none tracking-[-0.008em] text-[#1b1713] transition-colors duration-300 hover:text-[#d97706]"
            >
              <span>Check Out Our Reviews</span>

              <ArrowUpRight
                size={18}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3">
              {/* Yelp */}
              <a
                href="#"
                aria-label="Yelp"
                className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#d97706] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#b45309]"
              >
                <span className="font-body text-[14px] font-semibold">
                  y
                </span>
              </a>

              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#d97706] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#b45309]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[17px] w-[17px] fill-current"
                  aria-hidden="true"
                >
                  <path d="M14.5 8.5H17V5h-2.5C11.46 5 9.5 6.96 9.5 10v2H7v4h2.5v8h4v-8h3l.5-4h-3.5v-1.5c0-.55.45-1 1-1Z" />
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="#"
                aria-label="Twitter"
                className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#d97706] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#b45309]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[15px] w-[15px] fill-current"
                  aria-hidden="true"
                >
                  <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.18L6.66 22H3.55l7.24-8.28L2.8 2h6.4l4.42 5.67L18.9 2Zm-1.1 17.8h1.73L8.27 4.08H6.42L17.8 19.8Z" />
                </svg>
              </a>

              {/* Google */}
              <a
                href="#"
                aria-label="Google"
                className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#d97706] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#b45309]"
              >
                <span className="font-body text-[15px] font-normal">
                  G
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

