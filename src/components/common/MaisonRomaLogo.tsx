
export default function MaisonLogo() {
  return (
    <svg
      viewBox="0 0 350 90"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="maison-logo-title"
      className="h-[52px] w-auto shrink-0 sm:h-[56px]"
    >
      <title id="maison-logo-title">maison</title>

      {/* ============================================================ */}
      {/* WORDMARK — MAIS                                               */}
      {/* ============================================================ */}

      <text
        x="0"
        y="74"
        fill="#1d1814"
        fontFamily="var(--font-display), cursive"
        fontSize="78"
        fontWeight="400"
        letterSpacing="-2.8"
        textLength="176"
        lengthAdjust="spacingAndGlyphs"
      >
        mais
      </text>

      {/* ============================================================ */}
      {/* PREMIUM ROUND PIZZA — REPLACES "O"                           */}
      {/* ============================================================ */}

      <g transform="translate(178 14)">
        {/* Outer crust */}
        <circle
          cx="30"
          cy="31"
          r="29"
          fill="#d97706"
        />

        {/* Subtle crust highlight */}
        <circle
          cx="30"
          cy="31"
          r="26.5"
          fill="none"
          stroke="#b45309"
          strokeWidth="1.4"
          opacity="0.9"
        />

        {/* Cheese */}
        <circle
          cx="30"
          cy="31"
          r="23.5"
          fill="#f4efe7"
        />

        {/* Cheese edge */}
        <circle
          cx="30"
          cy="31"
          r="23.5"
          fill="none"
          stroke="#e2d5c4"
          strokeWidth="1"
        />

        {/* ======================================================== */}
        {/* CUT / LIFTED SLICE                                       */}
        {/* ======================================================== */}

        <path
          d="
            M30 31
            L51.5 10.5
            A29 29 0 0 1 59 29.5
            C58.5 31 58.2 32 58 33
            Z
          "
          fill="#d97706"
        />

        <path
          d="
            M30 31
            L49.5 12.3
            A23.5 23.5 0 0 1 54.5 29
            C54.4 30 54.2 31 54 31.8
            Z
          "
          fill="#f4efe7"
        />

        {/* Visible cut line */}
        <path
          d="M49.5 9.8C54.5 14.5 57.5 21.5 58.5 29"
          fill="none"
          stroke="#fff8ef"
          strokeWidth="2.4"
          strokeLinecap="round"
        />

        {/* ======================================================== */}
        {/* PREMIUM TOPPINGS                                         */}
        {/* ======================================================== */}

        <circle
          cx="20"
          cy="20.5"
          r="2.5"
          fill="#1d1814"
        />

        <circle
          cx="34.5"
          cy="17.5"
          r="2.3"
          fill="#1d1814"
        />

        <circle
          cx="18.5"
          cy="34.5"
          r="2.2"
          fill="#1d1814"
        />

        <circle
          cx="32.5"
          cy="37"
          r="2.5"
          fill="#1d1814"
        />

        <circle
          cx="43"
          cy="27.5"
          r="2"
          fill="#1d1814"
        />

        {/* Basil leaf */}
        <path
          d="
            M25.5 27
            C23 23.5 25.5 20.5 29 22
            C30.2 24.8 28.7 27.2 25.5 27
            Z
          "
          fill="#1d1814"
        />

        {/* Small basil accent */}
        <path
          d="
            M39 35
            C40.5 32.5 43.5 32.8 44 35.4
            C42.8 37.2 40.8 37.3 39 35
            Z
          "
          fill="#1d1814"
        />

        {/* ======================================================== */}
        {/* CRUST DETAIL                                             */}
        {/* ======================================================== */}

        <path
          d="
            M8.5 42
            A29 29 0 0 0 52 49
          "
          fill="none"
          stroke="#1d1814"
          strokeWidth="1.8"
          strokeLinecap="round"
          opacity="0.85"
        />

        {/* ======================================================== */}
        {/* SLICE LIFT ACCENT                                        */}
        {/* ======================================================== */}

        <path
          d="M49 7L54 3"
          stroke="#d97706"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        <path
          d="M54 10L59 7"
          stroke="#d97706"
          strokeWidth="1.1"
          strokeLinecap="round"
          opacity="0.75"
        />
      </g>

      {/* ============================================================ */}
      {/* WORDMARK — N                                                 */}
      {/* ============================================================ */}

      <text
        x="239"
        y="74"
        fill="#1d1814"
        fontFamily="var(--font-display), cursive"
        fontSize="78"
        fontWeight="400"
        letterSpacing="-2.8"
      >
        n
      </text>
    </svg>
  );
}

