"use client";

import { useId } from "react";
import { type Pose } from "@/lib/solat";

// Cute "little Muslim" style character: white thobe + white kufi cap, soft
// shading, calm closed eyes. Original artwork (not copied from any source).

const C = {
  robe: "#ffffff",
  robeShade: "#e4e9f0",
  robeLine: "#c9d2dd",
  cap: "#ffffff",
  capBand: "#e7ebf2",
  skin: "#f2c9a3",
  skinShade: "#e6b184",
  cheek: "#f3a79f",
  face: "#4b3a30",
  matA: "#d79a39",
  matB: "#ecc16a",
};

function Eyes({ cx, cy, side = false }: { cx: number; cy: number; side?: boolean }) {
  return (
    <g stroke={C.face} strokeWidth={2} strokeLinecap="round" fill="none">
      {side ? (
        <path d={`M${cx - 5} ${cy} q2.5 3.5 5 0`} />
      ) : (
        <>
          <path d={`M${cx - 9} ${cy} q3 4 6 0`} />
          <path d={`M${cx + 3} ${cy} q3 4 6 0`} />
        </>
      )}
    </g>
  );
}

function Cheeks({ cx, cy, side = false }: { cx: number; cy: number; side?: boolean }) {
  return side ? (
    <circle cx={cx - 1} cy={cy + 5} r={3} fill={C.cheek} opacity={0.5} />
  ) : (
    <>
      <circle cx={cx - 12} cy={cy + 5} r={3.6} fill={C.cheek} opacity={0.5} />
      <circle cx={cx + 12} cy={cy + 5} r={3.6} fill={C.cheek} opacity={0.5} />
    </>
  );
}

function Smile({ cx, cy, side = false }: { cx: number; cy: number; side?: boolean }) {
  return (
    <path
      d={side ? `M${cx - 5} ${cy} q4 4 8 0` : `M${cx - 6} ${cy} q6 5 12 0`}
      stroke={C.face}
      strokeWidth={2}
      strokeLinecap="round"
      fill="none"
    />
  );
}

function Body({ pose, gid }: { pose: Pose; gid: string }) {
  const robeFill = `url(#robe-${gid})`;
  const stroke = { stroke: C.robeLine, strokeWidth: 1.4 };
  const skinStroke = { stroke: C.skinShade, strokeWidth: 1 };

  switch (pose) {
    case "stand":
    case "takbir":
    case "qiyam":
      return (
        <g>
          {/* bare feet */}
          <ellipse cx={108} cy={182} rx={11} ry={6} fill={C.skin} {...skinStroke} />
          <ellipse cx={132} cy={182} rx={11} ry={6} fill={C.skin} {...skinStroke} />
          {/* thobe (chubby bell) */}
          <path
            d="M99 100 Q120 90 141 100 Q152 150 150 176 Q120 186 90 176 Q88 150 99 100 Z"
            fill={robeFill}
            {...stroke}
          />
          {/* head */}
          <circle cx={120} cy={74} r={23} fill={C.skin} {...skinStroke} />
          {/* kufi cap */}
          <path d="M98 70 Q100 42 120 41 Q140 42 142 70 Q120 80 98 70 Z" fill={C.cap} {...stroke} />
          <path d="M98 70 Q120 78 142 70" stroke={C.capBand} strokeWidth={2.4} fill="none" />
          <Eyes cx={120} cy={76} />
          <Cheeks cx={120} cy={76} />
          <Smile cx={120} cy={86} />
          {pose === "stand" && (
            <path d="M100 120 Q120 132 140 120 L137 134 Q120 142 103 134 Z" fill={robeFill} {...stroke} />
          )}
          {pose === "qiyam" && (
            <path d="M106 108 Q120 100 134 108 L131 124 Q120 130 109 124 Z" fill={C.skin} {...skinStroke} />
          )}
          {pose === "takbir" && (
            <g>
              <path d="M103 104 L96 62 L108 62 L116 106 Z" fill={robeFill} {...stroke} />
              <path d="M137 104 L144 62 L132 62 L124 106 Z" fill={robeFill} {...stroke} />
              <ellipse cx={97} cy={56} rx={7} ry={9} fill={C.skin} {...skinStroke} />
              <ellipse cx={143} cy={56} rx={7} ry={9} fill={C.skin} {...skinStroke} />
            </g>
          )}
        </g>
      );

    case "ruku":
      return (
        <g>
          {/* legs */}
          <path d="M108 142 L104 180 L118 180 L120 142 Z" fill={robeFill} {...stroke} />
          <path d="M124 142 L128 180 L142 180 L136 142 Z" fill={robeFill} {...stroke} />
          <ellipse cx={111} cy={183} rx={10} ry={5} fill={C.skin} {...skinStroke} />
          <ellipse cx={135} cy={183} rx={10} ry={5} fill={C.skin} {...skinStroke} />
          {/* horizontal back */}
          <path
            d="M54 116 Q62 102 116 106 Q144 108 144 130 Q144 142 116 142 Q62 142 54 132 Q47 124 54 116 Z"
            fill={robeFill}
            {...stroke}
          />
          {/* arm to knee */}
          <path d="M76 130 L84 172 L94 170 L86 128 Z" fill={C.skin} {...skinStroke} />
          {/* head */}
          <circle cx={52} cy={116} r={18} fill={C.skin} {...skinStroke} />
          <path d="M38 110 Q40 92 56 96 Q60 110 52 116 Z" fill={C.cap} {...stroke} />
          <Eyes cx={48} cy={115} side />
          <Cheeks cx={48} cy={115} side />
          <Smile cx={44} cy={122} side />
        </g>
      );

    case "sujud":
      return (
        <g>
          {/* back mound */}
          <path d="M56 180 Q68 122 120 134 Q164 141 170 180 Z" fill={robeFill} {...stroke} />
          {/* folded feet */}
          <path d="M148 154 Q172 156 170 180 L142 180 Z" fill={robeFill} {...stroke} />
          <ellipse cx={158} cy={179} rx={9} ry={4} fill={C.skin} {...skinStroke} />
          {/* hands */}
          <ellipse cx={72} cy={176} rx={10} ry={4} fill={C.skin} {...skinStroke} />
          {/* head down */}
          <circle cx={54} cy={160} r={17} fill={C.skin} {...skinStroke} />
          <path d="M40 154 Q42 138 58 142 Q62 156 54 160 Z" fill={C.cap} {...stroke} />
          <Eyes cx={50} cy={160} side />
          <Cheeks cx={50} cy={160} side />
          <Smile cx={46} cy={166} side />
        </g>
      );

    case "sit":
    case "tashahhud":
    case "salam": {
      const turned = pose === "salam";
      const fx = turned ? 128 : 120;
      return (
        <g>
          {/* pooled base */}
          <path d="M86 152 Q120 140 154 152 Q166 176 152 182 Q120 190 88 182 Q74 176 86 152 Z" fill={robeFill} {...stroke} />
          {/* torso */}
          <path d="M100 110 Q120 100 140 110 L150 156 Q120 164 90 156 Z" fill={robeFill} {...stroke} />
          {/* hands */}
          <ellipse cx={99} cy={152} rx={7} ry={5} fill={C.skin} {...skinStroke} />
          <ellipse cx={141} cy={152} rx={7} ry={5} fill={C.skin} {...skinStroke} />
          {pose === "tashahhud" && <rect x={139} y={134} width={4.5} height={16} rx={2.2} fill={C.skin} {...skinStroke} />}
          {/* head */}
          <circle cx={120} cy={86} r={22} fill={C.skin} {...skinStroke} />
          <path d="M99 82 Q101 54 120 53 Q139 54 141 82 Q120 92 99 82 Z" fill={C.cap} {...stroke} />
          <path d="M99 82 Q120 90 141 82" stroke={C.capBand} strokeWidth={2.4} fill="none" />
          <Eyes cx={fx} cy={88} side={turned} />
          <Cheeks cx={fx} cy={88} side={turned} />
          <Smile cx={turned ? fx - 4 : fx} cy={97} side={turned} />
          {turned && (
            <g stroke={C.robeLine} strokeWidth={1.8} strokeLinecap="round" opacity={0.7}>
              <path d="M152 84 l5 -3" />
              <path d="M153 90 l6 0" />
              <path d="M152 96 l5 3" />
            </g>
          )}
        </g>
      );
    }
  }
}

export default function PrayerFigure({ pose }: { pose: Pose }) {
  const gid = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 240 210" className="w-full h-auto max-w-[300px]" role="img" aria-hidden>
      <defs>
        <linearGradient id={`robe-${gid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={C.robe} />
          <stop offset="1" stopColor={C.robeShade} />
        </linearGradient>
        <radialGradient id={`spot-${gid}`} cx="0.5" cy="0.45" r="0.55">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.55" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`mat-${gid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={C.matB} />
          <stop offset="1" stopColor={C.matA} />
        </linearGradient>
      </defs>
      {/* soft spotlight so the white robe reads on any theme */}
      <circle cx={120} cy={100} r={98} fill={`url(#spot-${gid})`} />
      {/* prayer mat */}
      <ellipse cx={120} cy={190} rx={90} ry={15} fill={C.matA} opacity={0.55} />
      <ellipse cx={120} cy={187} rx={88} ry={14} fill={`url(#mat-${gid})`} />
      <path d="M120 179 q-7 -8 0 -15 q7 7 0 15 Z" fill={C.matA} opacity={0.7} />
      <Body pose={pose} gid={gid} />
    </svg>
  );
}
