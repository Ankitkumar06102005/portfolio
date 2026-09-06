import { useEffect, useRef, useState } from 'react';

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
  const [activeEmbedding, setActiveEmbedding] = useState<{ id: string; dim: string; sim: number }>({
    id: 'query_vector',
    dim: '384-dim (MiniLM)',
    sim: 0.942,
  });

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
      if (!canvas || !container) return;
      width = canvas.width = container.clientWidth;
      height = canvas.height = container.clientHeight;
    };

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(container);

    // Initialize vector nodes
    const nodeCount = 28;
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
    for (let i = 0; i < nodeCount; i++) {
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

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const onMouseLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);

    let tick = 0;

    const render = () => {
      tick++;
      ctx.clearRect(0, 0, width, height);

      // Subtle background grid
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

      // Update positions
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;

        // Bounce
        if (n.x <= 16) {
          n.x = 16;
          n.vx *= -1;
        } else if (n.x >= width - 16) {
          n.x = width - 16;
          n.vx *= -1;
        }
        if (n.y <= 16) {
          n.y = 16;
          n.vy *= -1;
        } else if (n.y >= height - 16) {
          n.y = height - 16;
          n.vy *= -1;
        }

        // Mouse reaction
        if (mouse.active) {
          const dx = mouse.x - n.x;
          const dy = mouse.y - n.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120 && dist > 0) {
            const force = (120 - dist) / 120;
            n.x -= (dx / dist) * force * 1.2;
            n.y -= (dy / dist) * force * 1.2;
          }
        }
      }

      // Draw connection lines
      const maxDistance = 110;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.45;
            const isHighPriority = a.isSpecial && b.isSpecial;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = isHighPriority
              ? `rgba(36, 92, 255, ${alpha * 1.2})`
              : `rgba(200, 200, 200, ${alpha})`;
            ctx.lineWidth = isHighPriority ? 1.2 : 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw connections to mouse when active
      if (mouse.active) {
        for (let i = 0; i < nodes.length; i++) {
          const n = nodes[i];
          const dx = mouse.x - n.x;
          const dy = mouse.y - n.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(n.x, n.y);
            ctx.strokeStyle = `rgba(36, 92, 255, ${(1 - dist / 130) * 0.7})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Mouse center target
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#245CFF';
        ctx.fill();
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 14, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(36, 92, 255, 0.3)';
        ctx.stroke();
      }

      // Draw nodes and labels
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];

        // Pulsing glow for key nodes
        if (n.isSpecial) {
          const pulse = Math.sin(tick * 0.04 + i) * 1.5;
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.radius + pulse + 2, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(36, 92, 255, 0.08)';
          ctx.fill();

          ctx.beginPath();
          ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
          ctx.fillStyle = '#245CFF';
          ctx.fill();

          if (n.label) {
            ctx.font = '500 10px "Geist Mono", monospace';
            ctx.fillStyle = '#111111';
            ctx.fillText(n.label, n.x + 8, n.y + 3);
          }
        } else {
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
          ctx.fillStyle = '#888888';
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Interval to cycle embedding state for live telemetry
    const metricInterval = setInterval(() => {
      const sims = [0.942, 0.961, 0.887, 0.923, 0.955];
      const randomSim = sims[Math.floor(Math.random() * sims.length)];
      setActiveEmbedding((prev) => ({
        ...prev,
        sim: randomSim,
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
    <div
      ref={containerRef}
      id="hero-interactive-canvas"
      className="relative w-full h-[380px] sm:h-[440px] lg:h-[480px] rounded-2xl bg-[#FAFAF9] border border-[#E8E8E8] overflow-hidden group shadow-sm"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full cursor-crosshair" />

      {/* Top Left Header Card */}
      <div className="absolute top-4 left-4 pointer-events-none bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-lg border border-[#E8E8E8] shadow-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#245CFF] animate-ping" />
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#686868] font-medium">
            Vector Field Simulation
          </span>
        </div>
        <p className="text-xs font-mono font-semibold text-[#111111] mt-0.5">
          Cosine Similarity Engine
        </p>
      </div>

      {/* Top Right Live Telemetry */}
      <div className="absolute top-4 right-4 pointer-events-none hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#E8E8E8] shadow-xs">
        <span className="text-[10px] font-mono text-[#686868]">DIM:</span>
        <span className="text-[11px] font-mono font-medium text-[#111111]">{activeEmbedding.dim}</span>
        <span className="text-[#D4D4D0]">|</span>
        <span className="text-[10px] font-mono text-[#686868]">SIM:</span>
        <span className="text-[11px] font-mono font-semibold text-[#245CFF]">
          {activeEmbedding.sim.toFixed(3)}
        </span>
      </div>

      {/* Bottom Floating Control Bar */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
        <div className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-md border border-[#E8E8E8] text-[11px] font-mono text-[#686868]">
          <span className="text-[#245CFF] font-medium">Hover & drag</span> to probe node vector space
        </div>
        <div className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-md border border-[#E8E8E8] text-[11px] font-mono text-[#111111] font-medium">
          28 Active Vectors · pgvector
        </div>
      </div>
    </div>
  );
}

