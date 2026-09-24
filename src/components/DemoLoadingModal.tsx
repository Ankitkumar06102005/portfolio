import { useEffect, useState } from 'react';
import { AlertTriangle, CheckCircle2, LoaderCircle, RefreshCw, X } from 'lucide-react';

interface DemoLoadingModalProps {
  url: string | null;
  title: string;
  onClose: () => void;
}

export function DemoLoadingModal({ url, title, onClose }: DemoLoadingModalProps) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    if (!url) return;
    setLoaded(false);
    setFailed(false);
    setElapsed(0);
  }, [url]);

  useEffect(() => {
    if (!url || loaded || failed) return;
    const timer = window.setInterval(() => setElapsed((value) => Math.min(value + 1, 30)), 1000);
    return () => window.clearInterval(timer);
  }, [url, loaded, failed]);

  if (!url) return null;

  const retry = () => {
    setLoaded(false);
    setFailed(false);
    setElapsed(0);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#08101dcc] p-4 backdrop-blur-md" role="dialog" aria-modal="true" aria-label={`Loading ${title} demo`}>
      <div className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-white/15 bg-[#101827] shadow-2xl">
        <button type="button" onClick={onClose} className="absolute right-4 top-4 z-20 rounded-full p-2 text-white/60 transition hover:bg-white/10 hover:text-white" aria-label="Close demo">
          <X className="h-5 w-5" />
        </button>

        {!loaded && !failed && (
          <div className="flex min-h-[360px] flex-col items-center justify-center px-6 py-12 text-center text-white">
            <div className="relative mb-8 flex h-24 w-24 items-center justify-center">
              <div className="absolute inset-0 animate-ping rounded-full border border-[#70a5ff]/40" />
              <div className="absolute inset-2 animate-[spin_8s_linear_infinite] rounded-full border border-dashed border-[#70a5ff]/70" />
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#245CFF]/20 text-[#8eb5ff] shadow-[0_0_45px_rgba(36,92,255,0.35)]">
                <LoaderCircle className="h-8 w-8 animate-spin" />
              </div>
            </div>
            <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.25em] text-[#8eb5ff]">Deployment handshake</p>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Waking up the experience...</h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/65">This demo is hosted on a free server that may take a few seconds to wake up. Your experience is loading — please hang tight.</p>
            <div className="mt-8 w-full max-w-sm">
              <div className="mb-2 flex justify-between font-mono text-[11px] text-white/50"><span>Initializing server</span><span>{elapsed}s / ~30s</span></div>
              <div className="h-1.5 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-gradient-to-r from-[#245CFF] to-[#8eb5ff] transition-all duration-1000" style={{ width: `${Math.max(4, (elapsed / 30) * 100)}%` }} /></div>
            </div>
            <p className="mt-6 text-xs text-white/40">Thanks for your patience ✨</p>
          </div>
        )}

        {failed && (
          <div className="flex min-h-[360px] flex-col items-center justify-center px-6 py-12 text-center text-white">
            <AlertTriangle className="mb-5 h-12 w-12 text-amber-300" />
            <h2 className="text-2xl font-bold">The demo is taking longer than expected</h2>
            <p className="mt-3 max-w-md text-sm text-white/65">The server did not respond. You can try again or close this window and return to the portfolio.</p>
            <button type="button" onClick={retry} className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#245CFF] px-5 py-3 text-sm font-semibold transition hover:bg-[#3970ff]"><RefreshCw className="h-4 w-4" /> Try again</button>
          </div>
        )}

        <iframe title={`${title} live demo`} src={url} className={`h-[75vh] min-h-[360px] w-full border-0 bg-white ${loaded ? 'block' : 'absolute h-px w-px opacity-0'}`} onLoad={() => setLoaded(true)} onError={() => setFailed(true)} />
        {loaded && <div className="pointer-events-none absolute left-4 top-4 rounded-full bg-emerald-500/90 px-3 py-1.5 text-xs font-semibold text-white"><CheckCircle2 className="mr-1 inline h-3.5 w-3.5" /> Demo ready</div>}
      </div>
    </div>
  );
}
