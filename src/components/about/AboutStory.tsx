const parcelliImage =
  "https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2021/03/parcelli.png";

const servingChefImage =
  "https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/elementor/thumbs/Serving-chef-oi0astk6nghnyuecvvcnt5rykkia9bojiq7x4xk93k.jpg";

const redWineImage =
  "https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/elementor/thumbs/Red-wine-img-oi0ax5le5ycf75e9wdefnj8f9aw7dn02gr1co2i16w.jpg";

const pic34Image =
  "https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/elementor/thumbs/pic34-free-img-o8mber8yudr26qzmrtm45h9j0sz2g5ol7km7c8jeko.jpg";

export default function AboutStory() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f4efe7]">
      <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.82fr_0.68fr] lg:gap-10 xl:gap-12">
          {/* ---------------------------------------------------------------- */}
          {/* Left — Content                                                  */}
          {/* ---------------------------------------------------------------- */}

          <div className="w-full max-w-[500px]">
            {/* Parcelli */}
            <img
              src={parcelliImage}
              alt=""
              aria-hidden="true"
              className="h-auto w-[78px] opacity-45 sm:w-[86px]"
            />

            {/* Heading */}
            <h2 className="mt-5 max-w-[500px] font-display text-[clamp(2.2rem,3.6vw,3.9rem)] font-semibold leading-[0.92] tracking-[-0.045em] text-[#1b1713]">
              Our Restaurant Is A Collective Of Amazing People Striving To Build
              Delightful Italian Cuisine.
            </h2>

            {/* Divider */}
            <div className="mt-5 h-px w-11 bg-[#c87832]" />

            {/* Paragraph 1 */}
            <p className="mt-5 max-w-[490px] font-body text-[12px] leading-6 text-[#756c62] sm:text-[13px] sm:leading-7">
              Lectus fringilla occaecat iste pretium fugiat convallis a, veniam
              conubia qui leo quod sodales! Nemo hendrerit laborum, error!
              Reiciendis, voluptas officiis, placerat ratione blanditiis!
              Habitasse dui proin cupidatat fringilla, ipsum dolor quidem,
              convallis nam, nulla quis optio, iure pellentesque sociosqu saepe
              explicabo similique placeat odit tempore tenetur litora, impedit
              sollicitudin mus deleniti, recusandae anim quo.
            </p>

            {/* Paragraph 2 */}
            <p className="mt-4 max-w-[490px] font-body text-[12px] leading-6 text-[#756c62] sm:text-[13px] sm:leading-7">
              Rel nulla pulvinar montes suspendisse, turpis. Elementum nibh,
              autem nulla ullam, proident, hac ratione platea! Libero nam, harum
              quisque turpis fames sollicitudin blanditiis est aliquam aptent
              blandit class, occaecat! Fames.
            </p>
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* Middle — Large Image                                             */}
          {/* ---------------------------------------------------------------- */}

          <div className="relative h-[520px] w-full sm:h-[600px] lg:h-[640px]">
            <div className="h-full w-full overflow-hidden rounded-[26px]">
              <img
                src={servingChefImage}
                alt="Chef serving food"
                className="h-full w-full object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.025]"
              />
            </div>
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* Right — Two Images                                               */}
          {/* ---------------------------------------------------------------- */}

          <div className="grid h-[520px] grid-rows-2 gap-6 sm:h-[600px] lg:h-[640px]">
            {/* Red Wine */}
            <div className="relative overflow-hidden rounded-[26px]">
              <img
                src={redWineImage}
                alt="Red wine"
                className="h-full w-full object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.025]"
              />
            </div>

            {/* Pic 34 */}
            <div className="relative overflow-hidden rounded-[26px]">
              <img
                src={pic34Image}
                alt="Italian restaurant"
                className="h-full w-full object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.025]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
