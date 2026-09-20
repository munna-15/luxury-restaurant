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

        <span className="absolute -bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#c87832]" />
      </div>

      {/* Review */}
      <p className="mt-5 max-w-[300px] font-display text-[1rem] font-medium italic leading-[1.38] tracking-[-0.01em] text-[#40372f] sm:text-[1.06rem]">
        "{review}"
      </p>

      {/* Name */}
      <p className="mt-4 font-body text-[8px] font-bold uppercase tracking-[0.28em] text-[#1b1713]">
        — {name}
      </p>
    </article>
  );
}

export default function HappyCustomers() {
  return (
    <section id="reviews" className="relative z-10 w-full bg-[#f4efe7]">
      <div className="mx-auto flex min-h-[700px] max-w-[1180px] items-center px-5 py-16 sm:px-8 lg:min-h-[68vh] lg:px-10 lg:py-20">
        <div className="mx-auto w-full max-w-[1020px]">
          {/* ---------------------------------------------------------------- */}
          {/* Testimonials                                                     */}
          {/* ---------------------------------------------------------------- */}

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_0.92fr] lg:items-center lg:gap-20">
            {/* ---------------------------------------------------------------- */}
            {/* LEFT                                                            */}
            {/* ---------------------------------------------------------------- */}

            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              {/* Parcelli */}
              <img
                src={parcelliImage}
                alt=""
                aria-hidden="true"
                className="h-auto w-[78px] opacity-45 sm:w-[88px]"
              />

              {/* Heading */}
              <h2 className="mt-5 font-display text-[clamp(3.5rem,5vw,5.4rem)] font-semibold leading-[0.8] tracking-[-0.055em] text-[#1b1713]">
                Happy
                <br />
                Customers!
              </h2>

              {/* Accent */}
              <div className="mt-5 h-px w-12 bg-[#c87832]" />

              {/* Shamika */}
              <div className="mt-7">
                <Testimonial
                  image={testimonials.shamika.image}
                  name={testimonials.shamika.name}
                  review={testimonials.shamika.review}
                />
              </div>
            </div>

            {/* ---------------------------------------------------------------- */}
            {/* RIGHT                                                           */}
            {/* ---------------------------------------------------------------- */}

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

          {/* ---------------------------------------------------------------- */}
          {/* REVIEWS CTA                                                      */}
          {/* ---------------------------------------------------------------- */}

          <div className="mt-14 flex flex-col items-center">
            <Link
              href="/reviews"
              className="group inline-flex items-center gap-3 border-b border-[#1b1713]/35 pb-2 font-body text-[9px] font-bold uppercase tracking-[0.24em] text-[#1b1713] transition-all duration-300 hover:border-[#c87832] hover:text-[#c87832]"
            >
              <span>Check Out Our Reviews</span>

              <ArrowUpRight
                size={15}
                strokeWidth={2.4}
                className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            {/* Social Icons */}
            <div className="mt-5 flex items-center gap-3">
              {/* Yelp */}
              <a
                href="#"
                aria-label="Yelp"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#c87832] text-white transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#b86b29]"
              >
                <span className="font-body text-[10px] font-bold">y</span>
              </a>

              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#c87832] text-white transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#b86b29]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[13px] w-[13px] fill-current"
                  aria-hidden="true"
                >
                  <path d="M14.5 8.5H17V5h-2.5C11.46 5 9.5 6.96 9.5 10v2H7v4h2.5v8h4v-8h3l.5-4h-3.5v-1.5c0-.55.45-1 1-1Z" />
                </svg>
              </a>

              {/* Twitter */}
              <a
                href="#"
                aria-label="Twitter"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#c87832] text-white transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#b86b29]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[12px] w-[12px] fill-current"
                  aria-hidden="true"
                >
                  <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.18L6.66 22H3.55l7.24-8.28L2.8 2h6.4l4.42 5.67L18.9 2Zm-1.1 17.8h1.73L8.27 4.08H6.42L17.8 19.8Z" />
                </svg>
              </a>

              {/* Google */}
              <a
                href="#"
                aria-label="Google"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#c87832] text-white transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#b86b29]"
              >
                <span className="font-body text-[11px] font-bold">G</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
