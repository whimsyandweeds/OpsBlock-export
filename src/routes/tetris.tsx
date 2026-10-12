import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { CORE, ADVANCED, type Block } from "@/data/blocks";

export const Route = createFileRoute("/tetris")({
  component: TetrisPage,
});

const COLS = 10;
const ROWS = 18;
const BLOCK = 28;

type Piece = {
  shape: number[][];
  color: string;
  name: string;
  tier: 1 | 2;
  x: number;
  y: number;
};

const SHAPES: { shape: number[][]; color: string; tier: 1 | 2 }[] = [
  { shape: [[1, 1, 1, 1]], color: "#22c55e", tier: 1 }, // I
  { shape: [[1, 1], [1, 1]], color: "#3b82f6", tier: 1 }, // O
  { shape: [[0, 1, 0], [1, 1, 1]], color: "#f59e0b", tier: 1 }, // T
  { shape: [[1, 1, 0], [0, 1, 1]], color: "#ef4444", tier: 2 }, // S
  { shape: [[0, 1, 1], [1, 1, 0]], color: "#a855f7", tier: 2 }, // Z
  { shape: [[1, 0, 0], [1, 1, 1]], color: "#06b6d4", tier: 2 }, // L
  { shape: [[0, 0, 1], [1, 1, 1]], color: "#f97316", tier: 2 }, // J
];

function randomPiece(blocks: Block[]): Piece {
  const def = SHAPES[Math.floor(Math.random() * SHAPES.length)];
  const block = blocks[Math.floor(Math.random() * blocks.length)];
  return {
    shape: def.shape,
    color: def.color,
    name: block.name,
    tier: block.layer === "core" ? 1 : 2,
    x: Math.floor(COLS / 2) - 1,
    y: 0,
  };
}

function TetrisPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  const [lines, setLines] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [running, setRunning] = useState(false);
  const grid = useRef<(string | null)[][]>(
    Array.from({ length: ROWS }, () => Array(COLS).fill(null))
  );
  const piece = useRef<Piece | null>(null);
  const dropTimer = useRef<number>(0);

  const allBlocks = [...CORE, ...ADVANCED];

  function spawn() {
    piece.current = randomPiece(allBlocks);
    if (collides(piece.current, 0, 0)) {
      setGameOver(true);
      setRunning(false);
    }
  }

  function collides(p: Piece, dx: number, dy: number): boolean {
    for (let y = 0; y < p.shape.length; y++) {
      for (let x = 0; x < p.shape[y].length; x++) {
        if (!p.shape[y][x]) continue;
        const nx = p.x + x + dx;
        const ny = p.y + y + dy;
        if (nx < 0 || nx >= COLS || ny >= ROWS) return true;
        if (ny >= 0 && grid.current[ny][nx]) return true;
      }
    }
    return false;
  }

  function lock() {
    const p = piece.current;
    if (!p) return;
    for (let y = 0; y < p.shape.length; y++) {
      for (let x = 0; x < p.shape[y].length; x++) {
        if (p.shape[y][x]) {
          const ny = p.y + y;
          const nx = p.x + x;
          if (ny >= 0) grid.current[ny][nx] = p.color;
        }
      }
    }
    clearLines();
    spawn();
  }

  function clearLines() {
    let cleared = 0;
    for (let y = ROWS - 1; y >= 0; y--) {
      if (grid.current[y].every((c) => c)) {
        grid.current.splice(y, 1);
        grid.current.unshift(Array(COLS).fill(null));
        cleared++;
        y++;
      }
    }
    if (cleared) {
      setLines((l) => l + cleared);
      setScore((s) => s + cleared * 100);
      // explosion effect
      const ctx = canvasRef.current?.getContext("2d");
      if (ctx) {
        ctx.fillStyle = "#fff";
        ctx.globalAlpha = 0.8;
        ctx.fillRect(0, 0, COLS * BLOCK, ROWS * BLOCK);
        ctx.globalAlpha = 1;
      }
    }
  }

  function draw() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.fillStyle = "#09090b";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // grid
    for (let y = 0; y < ROWS; y++) {
      for (let x = 0; x < COLS; x++) {
        if (grid.current[y][x]) {
          ctx.fillStyle = grid.current[y][x]!;
          ctx.fillRect(x * BLOCK + 1, y * BLOCK + 1, BLOCK - 2, BLOCK - 2);
        }
      }
    }

    // current piece
    const p = piece.current;
    if (p) {
      ctx.fillStyle = p.color;
      for (let y = 0; y < p.shape.length; y++) {
        for (let x = 0; x < p.shape[y].length; x++) {
          if (p.shape[y][x]) {
            ctx.fillRect((p.x + x) * BLOCK + 1, (p.y + y) * BLOCK + 1, BLOCK - 2, BLOCK - 2);
          }
        }
      }
      // name
      ctx.fillStyle = "#fff";
      ctx.font = "10px sans-serif";
      ctx.fillText(p.name.slice(0, 12), p.x * BLOCK, p.y * BLOCK - 4);
    }
  }

  useEffect(() => {
    if (!running) return;
    let raf: number;
    const loop = (t: number) => {
      if (t - dropTimer.current > 500) {
        dropTimer.current = t;
        if (piece.current && !collides(piece.current, 0, 1)) {
          piece.current.y++;
        } else if (piece.current) {
          lock();
        }
      }
      draw();
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [running]);

  function start() {
    grid.current = Array.from({ length: ROWS }, () => Array(COLS).fill(null));
    setScore(0);
    setLines(0);
    setGameOver(false);
    setRunning(true);
    spawn();
  }

  function move(dx: number) {
    if (!running || !piece.current) return;
    if (!collides(piece.current, dx, 0)) piece.current.x += dx;
  }

  function drop() {
    if (!running || !piece.current) return;
    if (!collides(piece.current, 0, 1)) piece.current.y++;
    else lock();
  }

  function rotate() {
    if (!running || !piece.current) return;
    const p = piece.current;
    const newShape = p.shape[0].map((_, i) => p.shape.map((row) => row[i]).reverse());
    const old = p.shape;
    p.shape = newShape;
    if (collides(p, 0, 0)) p.shape = old;
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-2">OpsBlock Tetris</h1>
      <p className="text-sm text-gray-400 mb-4">Tier 1 (core) and Tier 2 (advanced) pieces. Clear lines. Gaps explode.</p>

      <div className="flex gap-4 mb-4 text-sm">
        <div>Score: {score}</div>
        <div>Lines: {lines}</div>
      </div>

      <canvas
        ref={canvasRef}
        width={COLS * BLOCK}
        height={ROWS * BLOCK}
        className="border border-zinc-700"
      />

      <div className="mt-4 flex gap-2">
        {!running && !gameOver && (
          <button onClick={start} className="bg-green-600 px-6 py-3 rounded">
            Start
          </button>
        )}
        {gameOver && (
          <button onClick={start} className="bg-red-600 px-6 py-3 rounded">
            Game Over — Retry
          </button>
        )}
        {running && (
          <>
            <button onClick={() => move(-1)} className="bg-zinc-700 px-4 py-3 rounded">←</button>
            <button onClick={rotate} className="bg-zinc-700 px-4 py-3 rounded">↻</button>
            <button onClick={() => move(1)} className="bg-zinc-700 px-4 py-3 rounded">→</button>
            <button onClick={drop} className="bg-zinc-700 px-4 py-3 rounded">↓</button>
          </>
        )}
      </div>

      <div className="mt-6 text-xs text-gray-500 max-w-md text-center">
        Core services (Tier 1) and advanced services (Tier 2) fall as pieces. Stack them. Clear full rows for explosions.
      </div>
    </div>
  );
}
