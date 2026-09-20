export default function FixedRestaurantBackground() {
  return (
    <>
      {/* Fixed Restaurant Background */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2400&q=92')",
          backgroundPosition: "center 48%",
        }}
      />

      {/* Overall Darkening */}
      <div className="fixed inset-0 z-[1] bg-[#120d09]/42" />

      {/* Left-to-right cinematic contrast */}
      <div className="fixed inset-0 z-[2] bg-[linear-gradient(90deg,rgba(14,10,7,0.72)_0%,rgba(14,10,7,0.42)_45%,rgba(14,10,7,0.2)_100%)]" />

      {/* Top-to-bottom contrast */}
      <div className="fixed inset-0 z-[3] bg-[linear-gradient(180deg,rgba(10,7,5,0.5)_0%,rgba(10,7,5,0.08)_35%,rgba(10,7,5,0.62)_100%)]" />

      {/* Subtle vignette */}
      <div className="pointer-events-none fixed inset-0 z-[4] bg-[radial-gradient(circle_at_center,transparent_25%,rgba(0,0,0,0.34)_100%)]" />
    </>
  );
}
