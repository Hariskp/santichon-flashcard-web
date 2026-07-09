"use client";

import { useId } from "react";
import { type Pose } from "@/lib/solat";

// Cute chibi "little Muslim" character: white thobe + white kufi cap, rounded
// limbs, soft shading, calm closed eyes. All original artwork.

const C = {
  robe: "#ffffff",
  robeShade: "#e6ebf1",
  robeLine: "#cbd4de",
  hem: "#3bb28f",
  cap: "#ffffff",
  capBand: "#e7ebf2",
  skin: "#f3caa4",
  skinShade: "#e4ad82",
  cheek: "#f4a89f",
  face: "#4b3a30",
  matA: "#c78f34",
  matB: "#ecc069",
  arch: "#a9761f",
};

/* ---- reusable bits ---------------------------------------------------- */

function Eyes({ cx, cy, side = false }: { cx: number; cy: number; side?: boolean }) {
  return (
    <g stroke={C.face} strokeWidth={2.2} strokeLinecap="round" fill="none">
      {side ? (
        <path d={`M${cx - 5} ${cy} q2.5 3.6 5 0`} />
      ) : (
        <>
          <path d={`M${cx - 9} ${cy} q3 4 6 0`} />
          <path d={`M${cx + 3} ${cy} q3 4 6 0`} />
        </>
      )}
    </g>
  );
}

function Face({ cx, cy, side = false }: { cx: number; cy: number; side?: boolean }) {
  return (
    <g>
      <Eyes cx={cx} cy={cy} side={side} />
      {side ? (
        <circle cx={cx - 1} cy={cy + 5} r={3} fill={C.cheek} opacity={0.5} />
      ) : (
        <>
          <circle cx={cx - 12} cy={cy + 5} r={3.6} fill={C.cheek} opacity={0.5} />
          <circle cx={cx + 12} cy={cy + 5} r={3.6} fill={C.cheek} opacity={0.5} />
        </>
      )}
      <path
        d={side ? `M${cx - 5} ${cy + 7} q4 4 8 0` : `M${cx - 6} ${cy + 8} q6 5 12 0`}
        stroke={C.face}
        strokeWidth={2.2}
        strokeLinecap="round"
        fill="none"
      />
    </g>
  );
}

function Head({ cx, cy, r = 24, robe }: { cx: number; cy: number; r?: number; robe: string }) {
  const cw = r * 1.9;
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill={C.skin} stroke={C.skinShade} strokeWidth={1} />
      {/* kufi cap */}
      <path
        d={`M${cx - cw / 2} ${cy - r * 0.2}
            Q${cx - cw / 2 + 2} ${cy - r * 1.35} ${cx} ${cy - r * 1.4}
            Q${cx + cw / 2 - 2} ${cy - r * 1.35} ${cx + cw / 2} ${cy - r * 0.2}
            Q${cx} ${cy - r * 0.02} ${cx - cw / 2} ${cy - r * 0.2} Z`}
        fill={robe}
        stroke={C.robeLine}
        strokeWidth={1.4}
      />
      <path
        d={`M${cx - cw / 2} ${cy - r * 0.2} Q${cx} ${cy - r * 0.02} ${cx + cw / 2} ${cy - r * 0.2}`}
        stroke={C.capBand}
        strokeWidth={2.4}
        fill="none"
      />
    </g>
  );
}

/* rounded-capsule limb */
function Limb(p: { x: number; y: number; w: number; h: number; fill: string; rot?: number; cx?: number; cy?: number }) {
  const t = p.rot ? `rotate(${p.rot} ${p.cx ?? p.x + p.w / 2} ${p.cy ?? p.y + p.h / 2})` : undefined;
  return (
    <rect
      x={p.x}
      y={p.y}
      width={p.w}
      height={p.h}
      rx={p.w / 2}
      fill={p.fill}
      stroke={p.fill === C.skin ? C.skinShade : C.robeLine}
      strokeWidth={1.2}
      transform={t}
    />
  );
}

/* ---- poses ------------------------------------------------------------ */

function Body({ pose, robe }: { pose: Pose; robe: string }) {
  const foot = (x: number, y = 182) => (
    <ellipse cx={x} cy={y} rx={9} ry={5} fill={C.skin} stroke={C.skinShade} strokeWidth={1} />
  );

  switch (pose) {
    case "stand":
    case "takbir":
    case "qiyam": {
      return (
        <g>
          {foot(111)}
          {foot(129)}
          <Limb x={104} y={150} w={13} h={34} fill={robe} />
          <Limb x={123} y={150} w={13} h={34} fill={robe} />
          {/* torso */}
          <path
            d="M97 102 Q120 92 143 102 Q150 130 146 156 Q120 164 94 156 Q90 130 97 102 Z"
            fill={robe}
            stroke={C.robeLine}
            strokeWidth={1.4}
          />
          <path d="M99 150 Q120 158 141 150" stroke={C.hem} strokeWidth={2.4} fill="none" opacity={0.7} />
          {pose === "stand" && (
            <>
              <Limb x={85} y={106} w={12} h={42} fill={robe} rot={8} />
              <Limb x={143} y={106} w={12} h={42} fill={robe} rot={-8} />
            </>
          )}
          {pose === "qiyam" && (
            <>
              <Limb x={84} y={106} w={12} h={34} fill={robe} rot={12} />
              <Limb x={144} y={106} w={12} h={34} fill={robe} rot={-12} />
              <ellipse cx={120} cy={126} rx={17} ry={9} fill={C.skin} stroke={C.skinShade} strokeWidth={1} />
            </>
          )}
          {pose === "takbir" && (
            <>
              <Limb x={90} y={64} w={12} h={46} fill={robe} rot={-6} />
              <Limb x={138} y={64} w={12} h={46} fill={robe} rot={6} />
              <ellipse cx={95} cy={62} rx={8} ry={10} fill={C.skin} stroke={C.skinShade} strokeWidth={1} />
              <ellipse cx={145} cy={62} rx={8} ry={10} fill={C.skin} stroke={C.skinShade} strokeWidth={1} />
            </>
          )}
          <Head cx={120} cy={70} robe={robe} />
          <Face cx={120} cy={72} />
        </g>
      );
    }

    case "ruku": {
      return (
        <g>
          {foot(110)}
          {foot(130)}
          {/* legs */}
          <Limb x={104} y={120} w={13} h={62} fill={robe} />
          <Limb x={123} y={120} w={13} h={62} fill={robe} />
          {/* horizontal back */}
          <path
            d="M50 116 Q56 100 108 102 Q140 103 142 120 Q142 138 108 138 Q56 138 50 128 Q45 122 50 116 Z"
            fill={robe}
            stroke={C.robeLine}
            strokeWidth={1.4}
          />
          {/* two short arms resting on knees */}
          <Limb x={98} y={128} w={11} h={30} fill={robe} rot={6} />
          <Limb x={114} y={128} w={11} h={28} fill={robe} rot={-4} />
          <ellipse cx={104} cy={157} rx={7} ry={5} fill={C.skin} stroke={C.skinShade} strokeWidth={1} />
          <ellipse cx={121} cy={155} rx={7} ry={5} fill={C.skin} stroke={C.skinShade} strokeWidth={1} />
          {/* head */}
          <Head cx={48} cy={116} r={18} robe={robe} />
          <Face cx={44} cy={116} side />
        </g>
      );
    }

    case "sujud": {
      return (
        <g>
          {/* folded legs / feet at back */}
          <Limb x={128} y={150} w={15} h={28} fill={robe} rot={8} />
          <ellipse cx={140} cy={178} rx={9} ry={4} fill={C.skin} stroke={C.skinShade} strokeWidth={1} />
          {/* rounded back mound */}
          <path
            d="M58 178 Q66 128 118 136 Q158 142 164 178 Z"
            fill={robe}
            stroke={C.robeLine}
            strokeWidth={1.4}
          />
          {/* arms flat to the ground beside head */}
          <Limb x={66} y={150} w={10} h={26} fill={robe} rot={18} />
          <ellipse cx={74} cy={177} rx={9} ry={4} fill={C.skin} stroke={C.skinShade} strokeWidth={1} />
          {/* head down */}
          <Head cx={54} cy={160} r={16} robe={robe} />
          <Face cx={50} cy={161} side />
        </g>
      );
    }

    case "sit":
    case "tashahhud":
    case "salam": {
      const turned = pose === "salam";
      const fx = turned ? 128 : 120;
      return (
        <g>
          {/* pooled base */}
          <path
            d="M84 156 Q120 144 156 156 Q166 178 152 184 Q120 191 88 184 Q74 178 84 156 Z"
            fill={robe}
            stroke={C.robeLine}
            strokeWidth={1.4}
          />
          {/* torso */}
          <path
            d="M99 108 Q120 98 141 108 Q150 134 148 158 Q120 166 92 158 Q90 134 99 108 Z"
            fill={robe}
            stroke={C.robeLine}
            strokeWidth={1.4}
          />
          {/* arms on thighs */}
          <Limb x={82} y={120} w={12} h={38} fill={robe} rot={16} />
          <Limb x={146} y={120} w={12} h={38} fill={robe} rot={-16} />
          <ellipse cx={92} cy={156} rx={7} ry={5} fill={C.skin} stroke={C.skinShade} strokeWidth={1} />
          <ellipse cx={148} cy={156} rx={7} ry={5} fill={C.skin} stroke={C.skinShade} strokeWidth={1} />
          {pose === "tashahhud" && (
            <rect x={146} y={138} width={5} height={18} rx={2.5} fill={C.skin} stroke={C.skinShade} strokeWidth={1} />
          )}
          <Head cx={120} cy={82} robe={robe} />
          <Face cx={fx} cy={84} side={turned} />
          {turned && (
            <g stroke={C.robeLine} strokeWidth={1.8} strokeLinecap="round" opacity={0.6}>
              <path d="M152 80 l5 -3" />
              <path d="M153 86 l6 0" />
              <path d="M152 92 l5 3" />
            </g>
          )}
        </g>
      );
    }
  }
}

/* ---- scene ------------------------------------------------------------ */

export default function PrayerFigure({ pose }: { pose: Pose }) {
  const gid = useId().replace(/:/g, "");
  const robe = `url(#robe-${gid})`;
  return (
    <svg viewBox="0 0 240 210" className="w-full h-auto max-w-[300px]" role="img" aria-hidden>
      <defs>
        <linearGradient id={`robe-${gid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={C.robe} />
          <stop offset="1" stopColor={C.robeShade} />
        </linearGradient>
        <radialGradient id={`spot-${gid}`} cx="0.5" cy="0.45" r="0.55">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.5" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`mat-${gid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={C.matB} />
          <stop offset="1" stopColor={C.matA} />
        </linearGradient>
      </defs>

      <circle cx={120} cy={100} r={98} fill={`url(#spot-${gid})`} />

      {/* prayer rug (simple perspective) */}
      <path d="M44 198 L66 176 L174 176 L196 198 Z" fill={C.matA} opacity={0.5} />
      <path d="M50 194 L70 178 L170 178 L190 194 Z" fill={`url(#mat-${gid})`} />
      {/* mihrab arch motif */}
      <path d="M114 189 Q114 181 120 180 Q126 181 126 189 Z" fill={C.arch} opacity={0.55} />
      <line x1="78" y1="192" x2="162" y2="192" stroke={C.arch} strokeWidth={1} opacity={0.4} />

      <Body pose={pose} robe={robe} />
    </svg>
  );
}
