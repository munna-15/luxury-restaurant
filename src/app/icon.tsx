
import { ImageResponse } from "next/og";

export const size = {
  width: 74,
  height: 74,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "transparent",
      }}
    >
      <svg
        width="74"
        height="74"
        viewBox="7 7 60 56"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ====================================================== */}
        {/* STEAM                                                   */}
        {/* ====================================================== */}

        <path
          d="M25 9C20.5 13.5 20.5 18.5 25 23C29.5 27.5 29.5 32.5 25 37"
          fill="none"
          stroke="#d97706"
          strokeWidth="3.8"
          strokeLinecap="round"
        />

        <path
          d="M37 7C32.5 11.5 32.5 17 37 21.5C41.5 26 41.5 31 37 35.5"
          fill="none"
          stroke="#d97706"
          strokeWidth="4"
          strokeLinecap="round"
        />

        <path
          d="M49 10C45 14 45 18.5 49 22.5C53 26.5 53 31 49 35"
          fill="none"
          stroke="#d97706"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* ====================================================== */}
        {/* FOOD / CENTER                                            */}
        {/* ====================================================== */}

        <ellipse cx="37" cy="39" rx="14" ry="7" fill="#1d1814" />

        <ellipse cx="37" cy="37.5" rx="11" ry="4.7" fill="#d97706" />

        {/* Food detail */}
        <circle cx="32" cy="37" r="1.8" fill="#f4efe7" />

        <circle cx="38" cy="35.5" r="1.7" fill="#f4efe7" />

        <circle cx="43" cy="37.5" r="1.7" fill="#f4efe7" />

        {/* ====================================================== */}
        {/* LARGE PREMIUM PLATE                                     */}
        {/* ====================================================== */}

        <ellipse cx="37" cy="49" rx="27" ry="10.5" fill="#d97706" />

        {/* Inner plate */}
        <ellipse cx="37" cy="47.5" rx="22.5" ry="7.2" fill="#f4efe7" />

        {/* Plate inner amber rim */}
        <ellipse
          cx="37"
          cy="47.5"
          rx="19"
          ry="5.4"
          fill="none"
          stroke="#d97706"
          strokeWidth="1.8"
        />

        {/* Lower plate contour */}
        <path
          d="
              M11 49
              C16 57
              26 61
              37 61
              C48 61
              58 57
              63 49
            "
          fill="none"
          stroke="#1d1814"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Amber lower accent */}
        <path
          d="
              M16 53
              C22 58
              29 59.5
              37 59.5
              C45 59.5
              52 58
              58 53
            "
          fill="none"
          stroke="#d97706"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* ====================================================== */}
        {/* SMALL PREMIUM ACCENT                                   */}
        {/* ====================================================== */}

        <circle cx="17" cy="45" r="1.7" fill="#d97706" />

        <circle cx="57" cy="45" r="1.7" fill="#d97706" />
      </svg>
    </div>,
    {
      ...size,
    },
  );
}

