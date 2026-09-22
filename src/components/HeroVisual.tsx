import { useEffect, useRef, useState } from 'react';
import { Maximize2, Minimize2 } from 'lucide-react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  label?: string;
  isSpecial?: boolean;
}

export function HeroVisual() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeEmbedding, setActiveEmbedding] = useState<{ id: string; dim: string; sim: number }>({
    id: 'query_vector',
    dim: '384-dim (MiniLM)',
    sim: 0.942,
  });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsFullscreen(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isFullscreen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isFullscreen]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = container.clientWidth);
    let height = (canvas.height = container.clientHeight);

    const handleResize = () => {
      width = canvas.width = container.clientWidth;
      height = canvas.height = container.clientHeight;
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    const labels = [
      'pgvector',
      'MiniLM-L6',
      'FastAPI',
      'ChromaDB',
      'RAG',
      'Gemini 2.5',
      'XGBoost',
      'Embeddings',
      'STT (Sarvam)',
      'CosineSim',
      'TF-IDF',
      'Multi-Agent',
    ];

    const nodes: Node[] = [];
    for (let i = 0; i < 28; i++) {
      const isSpecial = i < labels.length;
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: isSpecial ? 3.5 : 2.2,
        label: isSpecial ? labels[i] : undefined,
        isSpecial,
      });
    }

    let mouse = { x: -1000, y: -1000, active: false };

    const onMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse = { x: event.clientX - rect.left, y: event.clientY - rect.top, active: true };
    };

    const onMouseLeave = () => {
      mouse = { x: -1000, y: -1000, active: false };
    };

    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);

    let tick = 0;
    const render = () => {
      tick++;
      ctx.clearRect(0, 0, width, height);

      const gridSize = 48;
      ctx.strokeStyle = '#F0F0EE';
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let x = 0; x < width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x <= 16 || node.x >= width - 16) node.vx *= -1;
        if (node.y <= 16 || node.y >= height - 16) node.vy *= -1;
        node.x = Math.max(16, Math.min(width - 16, node.x));
        node.y = Math.max(16, Math.min(height - 16, node.y));

        if (mouse.active) {
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 120 && distance > 0) {
            const force = (120 - distance) / 120;
            node.x -= (dx / distance) * force * 1.2;
            node.y -= (dy / distance) * force * 1.2;
          }
        }
      });

      const maxDistance = 110;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < maxDistance) {
            const alpha = (1 - distance / maxDistance) * 0.45;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = a.isSpecial && b.isSpecial
              ? `rgba(36, 92, 255, ${alpha * 1.2})`
              : `rgba(200, 200, 200, ${alpha})`;
            ctx.lineWidth = a.isSpecial && b.isSpecial ? 1.2 : 0.8;
            ctx.stroke();
          }
        }
      }

      if (mouse.active) {
        nodes.forEach((node) => {
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 130) {
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(node.x, node.y);
            ctx.strokeStyle = `rgba(36, 92, 255, ${(1 - distance / 130) * 0.7})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });

        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#245CFF';
        ctx.fill();
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 14, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(36, 92, 255, 0.3)';
        ctx.stroke();
      }

      nodes.forEach((node, index) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.isSpecial ? node.radius + Math.sin(tick * 0.04 + index) * 1.5 + 2 : node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.isSpecial ? 'rgba(36, 92, 255, 0.08)' : '#888888';
        ctx.fill();
        if (node.isSpecial) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
          ctx.fillStyle = '#245CFF';
          ctx.fill();
          if (node.label) {
            ctx.font = '500 10px "Geist Mono", monospace';
            ctx.fillStyle = '#111111';
            ctx.fillText(node.label, node.x + 8, node.y + 3);
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();
    const metricInterval = setInterval(() => {
      const sims = [0.942, 0.961, 0.887, 0.923, 0.955];
      setActiveEmbedding((previous) => ({
        ...previous,
        sim: sims[Math.floor(Math.random() * sims.length)],
      }));
    }, 3200);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearInterval(metricInterval);
      resizeObserver.disconnect();
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <>
      {isFullscreen && <div className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm" aria-hidden="true" />}
      <div
        ref={containerRef}
        id="hero-interactive-canvas"
        className={`relative group overflow-hidden border border-[#E8E8E8] bg-[#FAFAF9] shadow-sm transition-all duration-300 ${
          isFullscreen
            ? 'fixed inset-4 z-50 h-[calc(100vh-2rem)] w-[calc(100vw-2rem)] rounded-2xl sm:inset-6 sm:h-[calc(100vh-3rem)] sm:w-[calc(100vw-3rem)]'
            : 'h-[380px] w-full rounded-2xl sm:h-[440px] lg:h-[480px]'
        }`}
      >
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full cursor-crosshair" />

        <div className="absolute left-4 top-4 pointer-events-none rounded-lg border border-[#E8E8E8] bg-white/95 px-3.5 py-2.5 shadow-xs backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 animate-ping rounded-full bg-[#245CFF]" />
            <span className="text-[11px] font-mono font-medium uppercase tracking-wider text-[#686868]">Vector Field Simulation</span>
          </div>
          <p className="mt-0.5 text-xs font-mono font-semibold text-[#111111]">Cosine Similarity Engine</p>
        </div>

        <div className="absolute right-4 top-4 flex items-center gap-2 rounded-lg border border-[#E8E8E8] bg-white/95 px-3 py-1.5 shadow-xs backdrop-blur-md">
          <span className="text-[10px] font-mono text-[#686868]">DIM:</span>
          <span className="text-[11px] font-mono font-medium text-[#111111]">{activeEmbedding.dim}</span>
          <span className="text-[#D4D4D0]">|</span>
          <span className="text-[10px] font-mono text-[#686868]">SIM:</span>
          <span className="text-[11px] font-mono font-semibold text-[#245CFF]">{activeEmbedding.sim.toFixed(3)}</span>
        </div>

        <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3 pointer-events-none">
          <div className="rounded-md border border-[#E8E8E8] bg-white/95 px-3 py-1.5 text-[11px] font-mono text-[#686868] shadow-xs backdrop-blur-md">
            <span className="font-medium text-[#245CFF]">Hover & drag</span> to probe node vector space
          </div>
          <div className="rounded-md border border-[#E8E8E8] bg-white/95 px-3 py-1.5 text-[11px] font-mono font-medium text-[#111111] shadow-xs backdrop-blur-md">
            28 Active Vectors · pgvector
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsFullscreen((fullscreen) => !fullscreen)}
          className="absolute bottom-4 right-4 z-10 inline-flex items-center gap-2 rounded-md border border-[#E8E8E8] bg-white/95 px-3 py-2 text-[11px] font-mono font-medium text-[#111111] opacity-0 shadow-xs backdrop-blur-md transition-opacity duration-200 group-hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#245CFF]"
          aria-label={isFullscreen ? 'Exit fullscreen vector engine' : 'Open vector engine fullscreen'}
          title={isFullscreen ? 'Exit fullscreen (Esc)' : 'Open fullscreen'}
        >
          {isFullscreen ? <Minimize2 className="h-3.5 w-3.5" /> : <Maximize2 className="h-3.5 w-3.5" />}
          <span>{isFullscreen ? 'Exit fullscreen' : 'Fullscreen'}</span>
        </button>

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#111111]/80 p-6 text-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <div className="max-w-md rounded-xl border border-white/20 bg-white/95 p-5 shadow-xl backdrop-blur-md">
            <p className="mb-2 text-xs font-mono font-semibold uppercase tracking-widest text-[#245CFF]">What is this?</p>
            <p className="text-sm leading-relaxed text-[#111111]">
              This interactive vector space visualizes how AI compares meaning. Each point represents an embedding, and cosine similarity measures how close two vectors are—helping search and recommendation systems find the most relevant results.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
