import { ArrowUpRight } from "lucide-react";

const locations = [
  "Park Street, 12th floor, NY Lane 2",
  "123 Fifth Avenue, New York, NY 10160",
  "2nd Bougainvillea, New York, NY 10160",
];

export default function ContactInfo() {
  return (
    <section className="relative w-full overflow-hidden bg-[#e9dfd2]">
      <div className="mx-auto max-w-[1180px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid items-start gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          {/* ============================================================ */}
          {/* LEFT — CONTENT                                               */}
          {/* ============================================================ */}

          <div className="flex h-full flex-col">
            {/* Locations */}
            <div>
              <p className="font-body text-[9px] font-medium uppercase tracking-[0.32em] text-[#c87832]">
                Find Us
              </p>

              <h2 className="mt-3 font-display text-[clamp(2.8rem,4vw,4.5rem)] font-normal leading-[0.92] tracking-[-0.025em] text-[#241d18]">
                Our Locations
              </h2>

              <div className="mt-6 space-y-3">
                {locations.map((location) => (
                  <p
                    key={location}
                    className="font-body text-[13px] font-normal leading-6 text-[#756c62] sm:text-[14px]"
                  >
                    {location}
                  </p>
                ))}
              </div>
            </div>

            {/* Online Inquiries */}
            <div className="mt-12">
              <h3 className="font-display text-[clamp(2.2rem,3.1vw,3.4rem)] font-normal leading-[0.92] tracking-[-0.025em] text-[#241d18]">
                For Online Inquiries
              </h3>

              <p className="mt-5 max-w-[420px] font-body text-[13px] font-normal leading-7 text-[#756c62] sm:text-[14px] sm:leading-8">
                Excepteur, porttitor provident repudiandae nisi nisi. Lorem
                cupiditate.
              </p>
            </div>

            {/* Social Icons */}
            <div className="mt-11 flex items-center gap-3">
              {/* Yelp */}
              <a
                href="#"
                aria-label="Yelp"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#c87832] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#b86b29]"
              >
                <span className="font-body text-[11px] font-medium">y</span>
              </a>

              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#c87832] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#b86b29]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[13px] w-[13px] fill-current"
                  aria-hidden="true"
                >
                  <path d="M14.5 8.5H17V5h-2.5C11.46 5 9.5 6.96 9.5 10v2H7v4h2.5v8h4v-8h3l.5-4h-3.5v-1.5c0-.55.45-1 1-1Z" />
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="#"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#c87832] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#b86b29]"
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
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#c87832] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#b86b29]"
              >
                <span className="font-body text-[11px] font-medium">G</span>
              </a>
            </div>
          </div>

          {/* ============================================================ */}
          {/* RIGHT — FORM CARD                                            */}
          {/* ============================================================ */}

          <div className="rounded-[24px] border border-white/60 bg-[#fbf8f3] p-7 shadow-[0_25px_70px_rgba(39,29,21,0.10)] sm:p-9 lg:p-10">
            <div className="mb-8">
              <p className="font-body text-[9px] font-medium uppercase tracking-[0.32em] text-[#c87832]">
                Get In Touch
              </p>

              <h2 className="mt-3 font-display text-[clamp(2.8rem,4.2vw,4.6rem)] font-normal leading-[0.9] tracking-[-0.025em] text-[#241d18]">
                Send Us A Message
              </h2>
            </div>

            <form className="w-full">
              <div className="grid grid-cols-1 gap-x-7 gap-y-6 sm:grid-cols-2">
                {/* Name */}
                <label className="flex flex-col gap-2">
                  <span className="font-body text-[9px] font-medium uppercase tracking-[0.18em] text-[#6f665d]">
                    Your Name
                  </span>

                  <input
                    type="text"
                    placeholder="Your name"
                    className="h-12 w-full rounded-[10px] border border-[#d9cfc2] bg-white px-4 font-body text-[13px] font-normal text-[#241d18] outline-none placeholder:text-[#8c837a] transition-all duration-300 focus:border-[#c87832] focus:ring-2 focus:ring-[#c87832]/10"
                  />
                </label>

                {/* Email */}
                <label className="flex flex-col gap-2">
                  <span className="font-body text-[9px] font-medium uppercase tracking-[0.18em] text-[#6f665d]">
                    Email Address
                  </span>

                  <input
                    type="email"
                    placeholder="Your email"
                    className="h-12 w-full rounded-[10px] border border-[#d9cfc2] bg-white px-4 font-body text-[13px] font-normal text-[#241d18] outline-none placeholder:text-[#8c837a] transition-all duration-300 focus:border-[#c87832] focus:ring-2 focus:ring-[#c87832]/10"
                  />
                </label>

                {/* Phone */}
                <label className="flex flex-col gap-2">
                  <span className="font-body text-[9px] font-medium uppercase tracking-[0.18em] text-[#6f665d]">
                    Phone Number
                  </span>

                  <input
                    type="tel"
                    placeholder="+880"
                    className="h-12 w-full rounded-[10px] border border-[#d9cfc2] bg-white px-4 font-body text-[13px] font-normal text-[#241d18] outline-none placeholder:text-[#8c837a] transition-all duration-300 focus:border-[#c87832] focus:ring-2 focus:ring-[#c87832]/10"
                  />
                </label>

                {/* Subject */}
                <label className="flex flex-col gap-2">
                  <span className="font-body text-[9px] font-medium uppercase tracking-[0.18em] text-[#6f665d]">
                    Subject
                  </span>

                  <input
                    type="text"
                    placeholder="How can we help?"
                    className="h-12 w-full rounded-[10px] border border-[#d9cfc2] bg-white px-4 font-body text-[13px] font-normal text-[#241d18] outline-none placeholder:text-[#8c837a] transition-all duration-300 focus:border-[#c87832] focus:ring-2 focus:ring-[#c87832]/10"
                  />
                </label>

                {/* Message */}
                <label className="flex flex-col gap-2 sm:col-span-2">
                  <span className="font-body text-[9px] font-medium uppercase tracking-[0.18em] text-[#6f665d]">
                    Message
                  </span>

                  <textarea
                    rows={5}
                    placeholder="Write your message..."
                    className="w-full resize-none rounded-[10px] border border-[#d9cfc2] bg-white px-4 py-3 font-body text-[13px] font-normal leading-6 text-[#241d18] outline-none placeholder:text-[#8c837a] transition-all duration-300 focus:border-[#c87832] focus:ring-2 focus:ring-[#c87832]/10"
                  />
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group mt-8 inline-flex items-center gap-4 rounded-full bg-[#c87832] px-6 py-3.5 font-body text-[9px] font-medium uppercase tracking-[0.2em] text-white shadow-[0_10px_24px_rgba(200,120,50,0.16)] transition-all duration-500 hover:-translate-y-1 hover:bg-[#b86b29] hover:shadow-[0_16px_32px_rgba(200,120,50,0.24)]"
              >
                <span>Send Message</span>

                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-white/10">
                  <ArrowUpRight
                    size={15}
                    strokeWidth={2.3}
                    className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
