import { type Pose } from "@/lib/solat";

const C = {
  halo: "#17a98a",
  robe: "#18a98a",
  robeShade: "#0e8d72",
  skin: "#f4caa3",
  cap: "#0b7a62",
  mat: "#d9a441",
  matTop: "#efc775",
  cheek: "#f2938a",
  face: "#33413a",
};

function FaceFront({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g>
      <circle cx={cx - 6} cy={cy} r={2} fill={C.face} />
      <circle cx={cx + 6} cy={cy} r={2} fill={C.face} />
      <circle cx={cx - 11} cy={cy + 4} r={3.4} fill={C.cheek} opacity={0.55} />
      <circle cx={cx + 11} cy={cy + 4} r={3.4} fill={C.cheek} opacity={0.55} />
      <path
        d={`M${cx - 5} ${cy + 6} Q${cx} ${cy + 11} ${cx + 5} ${cy + 6}`}
        stroke={C.face}
        strokeWidth={1.8}
        strokeLinecap="round"
        fill="none"
      />
    </g>
  );
}

function FaceSide({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g>
      <circle cx={cx - 5} cy={cy} r={1.9} fill={C.face} />
      <circle cx={cx + 3} cy={cy + 1} r={1.9} fill={C.face} />
      <circle cx={cx - 2} cy={cy + 5} r={3} fill={C.cheek} opacity={0.55} />
      <path
        d={`M${cx - 6} ${cy + 6} Q${cx - 2} ${cy + 9} ${cx + 2} ${cy + 6}`}
        stroke={C.face}
        strokeWidth={1.7}
        strokeLinecap="round"
        fill="none"
      />
    </g>
  );
}

function Body({ pose }: { pose: Pose }) {
  switch (pose) {
    case "stand":
    case "takbir":
    case "qiyam":
      return (
        <g>
          {/* feet */}
          <ellipse cx={107} cy={183} rx={11} ry={5} fill={C.robeShade} />
          <ellipse cx={133} cy={183} rx={11} ry={5} fill={C.robeShade} />
          {/* robe */}
          <path d="M103 88 Q120 80 137 88 L152 178 Q120 188 88 178 Z" fill={C.robe} />
          {/* head + cap */}
          <circle cx={120} cy={70} r={18} fill={C.skin} />
          <path d="M101 68 Q120 42 139 68 Q120 62 101 68 Z" fill={C.cap} />
          <circle cx={120} cy={49} r={4} fill={C.cap} />
          <FaceFront cx={120} cy={72} />
          {pose === "stand" && (
            <path d="M104 116 Q120 128 136 116 L133 129 Q120 137 107 129 Z" fill={C.robeShade} />
          )}
          {pose === "qiyam" && (
            <path d="M109 104 Q120 96 131 104 L129 118 Q120 124 111 118 Z" fill={C.skin} />
          )}
          {pose === "takbir" && (
            <g>
              <path d="M107 92 L101 60 L111 60 L117 94 Z" fill={C.robe} />
              <path d="M133 92 L139 60 L129 60 L123 94 Z" fill={C.robe} />
              <rect x={98} y={50} width={11} height={16} rx={5} fill={C.skin} />
              <rect x={131} y={50} width={11} height={16} rx={5} fill={C.skin} />
            </g>
          )}
        </g>
      );

    case "ruku":
      return (
        <g>
          {/* legs */}
          <path d="M110 140 L106 178 L119 178 L121 140 Z" fill={C.robeShade} />
          <path d="M124 140 L129 178 L142 178 L135 140 Z" fill={C.robe} />
          <ellipse cx={112} cy={181} rx={10} ry={4} fill={C.robeShade} />
          <ellipse cx={136} cy={181} rx={10} ry={4} fill={C.robeShade} />
          {/* horizontal torso */}
          <path
            d="M56 118 Q64 105 118 109 Q142 111 142 131 Q142 141 118 141 Q64 141 56 131 Q50 125 56 118 Z"
            fill={C.robe}
          />
          {/* arm to knee */}
          <path d="M78 130 L86 170 L95 168 L87 128 Z" fill={C.skin} />
          {/* head + cap */}
          <circle cx={54} cy={118} r={15} fill={C.skin} />
          <path d="M42 114 Q46 101 62 107 Q58 116 54 118 Z" fill={C.cap} />
          <FaceSide cx={50} cy={117} />
        </g>
      );

    case "sujud":
      return (
        <g>
          {/* back mound */}
          <path d="M58 178 Q70 126 120 137 Q160 143 166 178 Z" fill={C.robe} />
          {/* folded legs/feet right */}
          <path d="M146 156 Q168 158 166 178 L140 178 Z" fill={C.robeShade} />
          {/* hands on mat */}
          <ellipse cx={72} cy={174} rx={10} ry={4} fill={C.skin} />
          {/* head down */}
          <circle cx={56} cy={162} r={14} fill={C.skin} />
          <path d="M44 156 Q48 145 63 151 Q60 160 56 162 Z" fill={C.cap} />
          <FaceSide cx={52} cy={162} />
        </g>
      );

    case "sit":
    case "tashahhud":
    case "salam": {
      const turned = pose === "salam";
      const fx = turned ? 126 : 120;
      return (
        <g>
          {/* pooled base */}
          <path d="M90 152 Q120 141 150 152 Q162 174 150 180 Q120 188 90 180 Q78 174 90 152 Z" fill={C.robe} />
          {/* torso */}
          <path d="M104 112 Q120 104 136 112 L147 154 Q120 162 93 154 Z" fill={C.robe} />
          {/* hands on thighs */}
          <ellipse cx={101} cy={152} rx={6} ry={4} fill={C.skin} />
          <ellipse cx={139} cy={152} rx={6} ry={4} fill={C.skin} />
          {pose === "tashahhud" && <rect x={137} y={137} width={4} height={15} rx={2} fill={C.skin} />}
          {/* head + cap */}
          <circle cx={120} cy={90} r={17} fill={C.skin} />
          <path d="M102 88 Q120 63 138 88 Q120 82 102 88 Z" fill={C.cap} />
          <circle cx={120} cy={69} r={3.6} fill={C.cap} />
          {turned ? <FaceSide cx={fx} cy={92} /> : <FaceFront cx={fx} cy={92} />}
          {turned && (
            <g stroke={C.robeShade} strokeWidth={1.6} strokeLinecap="round" opacity={0.7}>
              <path d="M150 86 l5 -3" />
              <path d="M150 92 l6 0" />
              <path d="M150 98 l5 3" />
            </g>
          )}
        </g>
      );
    }
  }
}

export default function PrayerFigure({ pose }: { pose: Pose }) {
  return (
    <svg
      viewBox="0 0 240 210"
      className="w-full h-auto max-w-[280px]"
      role="img"
      aria-hidden
    >
      {/* soft halo */}
      <circle cx={120} cy={104} r={94} fill={C.halo} opacity={0.09} />
      {/* prayer mat */}
      <ellipse cx={120} cy={188} rx={86} ry={15} fill={C.mat} />
      <ellipse cx={120} cy={185} rx={86} ry={13} fill={C.matTop} />
      <path
        d="M120 178 q-6 -8 0 -14 q6 6 0 14 Z"
        fill={C.mat}
        opacity={0.7}
      />
      <circle cx={95} cy={188} r={2} fill={C.mat} opacity={0.7} />
      <circle cx={145} cy={188} r={2} fill={C.mat} opacity={0.7} />
      <Body pose={pose} />
    </svg>
  );
}
