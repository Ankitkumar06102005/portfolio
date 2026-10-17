import {
  FileText,
  Bot,
  BrainCircuit,
  Scale,
  Mic,
  GitFork,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Database,
  Search,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';
import { Project } from '../types';

interface ProjectVisualMockupProps {
  project: Project;
}

export function ProjectVisualMockup({ project }: ProjectVisualMockupProps) {
  if (project.visualType === 'contexta') {
    return (
      <div className="relative w-full overflow-hidden rounded-2xl border border-[#43334F] bg-[#0B0710] p-4 text-xs text-white shadow-[0_18px_55px_rgba(67,30,94,0.22)] sm:p-5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(168,85,247,0.18),transparent_60%)]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:28px_28px]" />
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <BrainCircuit className="h-4 w-4 text-fuchsia-300" />
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-white sm:text-[11px]">Contexta AI · RAG pipeline</span>
          </div>
          <span className="rounded-full border border-white/15 bg-white/5 px-2 py-1 font-mono text-[9px] text-white/55">Architecture illustration</span>
        </div>
        <div className="relative z-10 py-5 [perspective:1000px]">
          <div className="grid grid-cols-2 gap-3 transition-transform duration-700 [transform:rotateX(5deg)_rotateY(-4deg)] hover:[transform:rotateX(0deg)_rotateY(0deg)] sm:grid-cols-4">
            <div className="relative min-h-[112px] rounded-xl border border-sky-300/25 bg-gradient-to-br from-sky-400/15 to-slate-950/80 p-3 shadow-[0_12px_24px_rgba(14,165,233,0.10)]">
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg border border-sky-200/20 bg-sky-300/10"><FileText className="h-4 w-4 text-sky-200" /></div>
              <p className="text-[11px] font-semibold text-white">Document</p><p className="mt-1 text-[9px] leading-relaxed text-white/50">Parse & chunk</p>
              <span className="absolute -right-2 top-1/2 hidden h-px w-4 bg-gradient-to-r from-sky-300/70 to-fuchsia-300/70 sm:block" />
            </div>
            <div className="relative min-h-[112px] rounded-xl border border-violet-300/25 bg-gradient-to-br from-violet-400/15 to-slate-950/80 p-3 shadow-[0_12px_24px_rgba(139,92,246,0.10)]">
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg border border-violet-200/20 bg-violet-300/10"><Database className="h-4 w-4 text-violet-200" /></div>
              <p className="text-[11px] font-semibold text-white">FAISS search</p><p className="mt-1 text-[9px] leading-relaxed text-white/50">Rank candidates</p>
              <span className="absolute -right-2 top-1/2 hidden h-px w-4 bg-gradient-to-r from-violet-300/70 to-fuchsia-300/70 sm:block" />
            </div>
            <div className="relative min-h-[112px] rounded-xl border border-fuchsia-300/25 bg-gradient-to-br from-fuchsia-400/15 to-slate-950/80 p-3 shadow-[0_12px_24px_rgba(217,70,239,0.10)]">
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg border border-fuchsia-200/20 bg-fuchsia-300/10"><ShieldCheck className="h-4 w-4 text-fuchsia-200" /></div>
              <p className="text-[11px] font-semibold text-white">Evidence gate</p><p className="mt-1 text-[9px] leading-relaxed text-white/50">Filter or abstain</p>
              <span className="absolute -right-2 top-1/2 hidden h-px w-4 bg-gradient-to-r from-fuchsia-300/70 to-emerald-300/70 sm:block" />
            </div>
            <div className="relative min-h-[112px] rounded-xl border border-emerald-300/25 bg-gradient-to-br from-emerald-400/15 to-slate-950/80 p-3 shadow-[0_12px_24px_rgba(16,185,129,0.10)]">
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg border border-emerald-200/20 bg-emerald-300/10"><CheckCircle2 className="h-4 w-4 text-emerald-200" /></div>
              <p className="text-[11px] font-semibold text-white">Grounded answer</p><p className="mt-1 text-[9px] leading-relaxed text-white/50">Source references</p>
            </div>
          </div>
          <div className="pointer-events-none absolute left-[12%] top-2 h-20 w-20 rounded-full border border-sky-300/15 [transform:translateZ(22px)] motion-safe:animate-[spin_18s_linear_infinite]" />
          <div className="pointer-events-none absolute right-[8%] bottom-0 h-14 w-14 rounded-full border border-fuchsia-300/20 motion-safe:animate-[spin_12s_linear_infinite_reverse]" />
        </div>
        <div className="relative z-10 flex items-center justify-between gap-3 border-t border-white/10 pt-3">
          <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-white/45">Retrieval → verification → response</span>
          <span className="inline-flex items-center gap-1.5 text-[10px] font-medium text-emerald-200"><span className="h-1.5 w-1.5 rounded-full bg-emerald-300" /> Grounding-first design</span>
        </div>
      </div>
    );
  }
  if (project.visualType === 'junsono') {
    return (
      <div className="w-full bg-[#FAFAF9] rounded-xl border border-[#E8E8E8] p-4 text-xs font-mono space-y-3 shadow-2xs overflow-hidden select-none">
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-[#E8E8E8] pb-2.5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-[#111111] text-[11px] uppercase tracking-wide">
              Junsono Triage Engine
            </span>
          </div>
          <span className="text-[10px] bg-white px-2 py-0.5 rounded border border-[#E8E8E8] text-[#686868]">
            FastAPI · PostgreSQL · pgvector
          </span>
        </div>

        {/* Illustrative complaint workflow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {/* Multilingual Audio Intake */}
          <div className="bg-white p-3 rounded-lg border border-[#E8E8E8] space-y-2">
            <div className="flex items-center justify-between text-[11px] text-[#686868]">
              <span className="flex items-center gap-1.5 font-medium text-[#111111]">
                <Mic className="w-3.5 h-3.5 text-[#245CFF]" />
                Sarvam AI Intake
              </span>
              <span className="text-[9px] text-[#245CFF] font-semibold bg-[#245CFF]/10 px-1.5 py-0.5 rounded">
                saaras:v3
              </span>
            </div>
            <div className="text-[11px] font-sans text-[#111111] italic bg-[#F7F7F5] p-2 rounded border border-[#E8E8E8]">
              "सड़क पर गहरा गड्ढा है जिससे जलभराव हो रहा है..."
            </div>
            <div className="text-[10px] text-[#686868]">
              Auto-translated & transcribed to normalized grievance record.
            </div>
          </div>

          {/* pgvector duplicate detection */}
          <div className="bg-white p-3 rounded-lg border border-[#E8E8E8] space-y-2">
            <div className="flex items-center justify-between text-[11px] text-[#686868]">
              <span className="flex items-center gap-1.5 font-medium text-[#111111]">
                <Database className="w-3.5 h-3.5 text-[#245CFF]" />
                pgvector Deduplication
              </span>
              <span className="text-[9px] font-semibold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                Example match
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-[#F0F0EE] h-2 rounded-full overflow-hidden">
                <div className="bg-[#245CFF] h-full rounded-full w-[70%]" />
              </div>
              <span className="text-[10px] text-[#111111] font-semibold">Illustrative</span>
            </div>
            <div className="text-[10px] text-amber-700 bg-amber-50/80 p-1.5 rounded flex items-center gap-1">
              <AlertTriangle className="w-3 h-3 shrink-0" />
              <span>Possible duplicate · sample data</span>
            </div>
          </div>
        </div>

        {/* Gemini Reasoning & Department Auto-Routing */}
        <div className="bg-white p-3 rounded-lg border border-[#E8E8E8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-[10px] text-[#686868]">
              <Sparkles className="w-3 h-3 text-[#245CFF]" />
              <span>Gemini 2.5 Flash Triaging</span>
            </div>
            <div className="text-xs font-sans font-semibold text-[#111111]">
              Category: Municipal Infrastructure & Drainage
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-1 rounded bg-red-50 text-red-700 border border-red-200 text-[10px] font-semibold">
              Priority: Review
            </span>
            <span className="px-2 py-1 rounded bg-blue-50 text-[#245CFF] border border-blue-200 text-[10px] font-semibold flex items-center gap-1">
              <span>Routing example</span>
              <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (project.visualType === 'genie') {
    return (
      <div className="w-full bg-[#FAFAF9] rounded-xl border border-[#E8E8E8] p-4 text-xs font-mono space-y-3 shadow-2xs overflow-hidden select-none">
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-[#E8E8E8] pb-2.5">
          <div className="flex items-center gap-2">
            <FileText className="w-3.5 h-3.5 text-[#245CFF]" />
            <span className="font-semibold text-[#111111] text-[11px]">
              Multi-Agent RAG Pipeline · ChromaDB
            </span>
          </div>
          <span className="text-[10px] bg-white px-2 py-0.5 rounded border border-[#E8E8E8] text-[#686868]">
            Gemini API · Python
          </span>
        </div>

        {/* 4 Agent Orchestration Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          <div className="bg-white p-2.5 rounded-lg border border-[#245CFF]/30 space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-[9px] text-[#686868] uppercase font-semibold">Dispatcher</span>
              <GitFork className="w-3 h-3 text-[#245CFF]" />
            </div>
            <div className="font-semibold text-[11px] text-[#111111]">Router Agent</div>
            <div className="text-[9px] text-[#686868]">Keyword classifier</div>
          </div>

          <div className="bg-white p-2.5 rounded-lg border border-[#E8E8E8] space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-[9px] text-[#686868] uppercase font-semibold">Pedagogy</span>
              <Bot className="w-3 h-3 text-emerald-600" />
            </div>
            <div className="font-semibold text-[11px] text-[#111111]">Teacher Agent</div>
            <div className="text-[9px] text-[#686868]">Contextual Q&A</div>
          </div>

          <div className="bg-white p-2.5 rounded-lg border border-[#E8E8E8] space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-[9px] text-[#686868] uppercase font-semibold">Synthesis</span>
              <Sparkles className="w-3 h-3 text-purple-600" />
            </div>
            <div className="font-semibold text-[11px] text-[#111111]">Summary Agent</div>
            <div className="text-[9px] text-[#686868]">Executive briefs</div>
          </div>

          <div className="bg-white p-2.5 rounded-lg border border-[#E8E8E8] space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-[9px] text-[#686868] uppercase font-semibold">Assessment</span>
              <CheckCircle2 className="w-3 h-3 text-amber-600" />
            </div>
            <div className="font-semibold text-[11px] text-[#111111]">Quiz Genie</div>
            <div className="text-[9px] text-[#686868]">Auto-generated test</div>
          </div>
        </div>

        {/* Live Document chunk & Quiz generated preview */}
        <div className="bg-white p-3 rounded-lg border border-[#E8E8E8] space-y-2">
          <div className="flex items-center justify-between text-[10px] text-[#686868]">
            <span className="flex items-center gap-1.5 font-medium text-[#111111]">
              <Search className="w-3 h-3 text-[#245CFF]" />
              ChromaDB Vector Retrieval
            </span>
            <span className="font-mono text-[#245CFF] font-semibold">k=3 chunks / 42ms</span>
          </div>
          <div className="bg-[#F7F7F5] p-2 rounded text-[10px] text-[#111111] font-sans border border-[#E8E8E8]">
            <span className="font-semibold text-[#245CFF] font-mono mr-1">[QuizGenie #1]:</span>
            "What mathematical objective function balances dense semantic proximity with sparse lexical match?"
          </div>
        </div>
      </div>
    );
  }

  if (project.visualType === 'resumeiq') {
    return (
      <div className="w-full bg-[#FAFAF9] rounded-xl border border-[#E8E8E8] p-4 text-xs font-mono space-y-3 shadow-2xs overflow-hidden select-none">
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-[#E8E8E8] pb-2.5">
          <div className="flex items-center gap-2">
            <BrainCircuit className="w-3.5 h-3.5 text-[#245CFF]" />
            <span className="font-semibold text-[#111111] text-[11px]">
              Hybrid Matching Engine · TF-IDF + MiniLM
            </span>
          </div>
          <div className="flex items-center gap-1.5 bg-[#245CFF] text-white px-2 py-0.5 rounded font-mono font-bold text-[10px]">
            <span>F1: 0.81</span>
          </div>
        </div>

        {/* Dual feature visualizer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <div className="bg-white p-3 rounded-lg border border-[#E8E8E8] space-y-1.5">
            <div className="flex items-center justify-between text-[10px]">
              <span className="text-[#686868]">Lexical TF-IDF Matrix</span>
              <span className="font-semibold text-[#111111]">Sparse N-grams</span>
            </div>
            <div className="w-full bg-[#F0F0EE] h-1.5 rounded-full overflow-hidden">
              <div className="bg-[#111111] h-full w-[78%]" />
            </div>
            <div className="text-[9px] text-[#686868]">Exact skill/keyword frequency match</div>
          </div>

          <div className="bg-white p-3 rounded-lg border border-[#E8E8E8] space-y-1.5">
            <div className="flex items-center justify-between text-[10px]">
              <span className="text-[#686868]">MiniLM Sentence Embeddings</span>
              <span className="font-semibold text-[#245CFF]">384-Dim Dense</span>
            </div>
            <div className="w-full bg-[#F0F0EE] h-1.5 rounded-full overflow-hidden">
              <div className="bg-[#245CFF] h-full w-[91%]" />
            </div>
            <div className="text-[9px] text-[#686868]">Semantic role & experience alignment</div>
          </div>
        </div>

        {/* XGBoost classifier inference */}
        <div className="bg-white p-2.5 rounded-lg border border-[#E8E8E8] flex items-center justify-between">
          <div className="space-y-0.5">
            <div className="text-[10px] text-[#686868]">Model Classifier: XGBoost</div>
            <div className="text-xs font-semibold text-[#111111]">Match Confidence: Qualified (0.87)</div>
          </div>
          <div className="text-right">
            <span className="text-[9px] font-mono bg-[#F7F7F5] border border-[#E8E8E8] text-[#111111] px-2 py-1 rounded">
              FastAPI + Streamlit
            </span>
          </div>
        </div>
      </div>
    );
  }

  // LegalLens
  return (
    <div className="w-full bg-[#FAFAF9] rounded-xl border border-[#E8E8E8] p-4 text-xs font-mono space-y-3 shadow-2xs overflow-hidden select-none">
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-[#E8E8E8] pb-2.5">
        <div className="flex items-center gap-2">
          <Scale className="w-3.5 h-3.5 text-[#245CFF]" />
          <span className="font-semibold text-[#111111] text-[11px]">
            LegalLens NLP Information Extraction
          </span>
        </div>
        <span className="text-[10px] bg-white px-2 py-0.5 rounded border border-[#E8E8E8] text-[#686868]">
          Python · NLP Pipeline
        </span>
      </div>

      {/* Contract section & Token highlighter visual */}
      <div className="bg-white p-3 rounded-lg border border-[#E8E8E8] space-y-2">
        <div className="text-[10px] text-[#686868] uppercase tracking-wider font-semibold">
          Source Document Stream
        </div>
        <div className="font-sans text-[11px] text-[#111111] leading-relaxed bg-[#F7F7F5] p-2.5 rounded border border-[#E8E8E8]">
          "This Agreement is entered into by and between{' '}
          <span className="bg-blue-100 text-[#245CFF] font-mono px-1 py-0.5 rounded font-semibold text-[10px]">
            [PARTY: Alpha Corp]
          </span>{' '}
          and{' '}
          <span className="bg-blue-100 text-[#245CFF] font-mono px-1 py-0.5 rounded font-semibold text-[10px]">
            [PARTY: Beta Inc]
          </span>{' '}
          effective as of{' '}
          <span className="bg-emerald-100 text-emerald-800 font-mono px-1 py-0.5 rounded font-semibold text-[10px]">
            [DATE: 2024-Q3]
          </span>
          . Maximum aggregate liability shall not exceed{' '}
          <span className="bg-amber-100 text-amber-800 font-mono px-1 py-0.5 rounded font-semibold text-[10px]">
            [LIMIT: $500,000]
          </span>
          ."
        </div>
      </div>

      {/* Structured Output Extraction Chips */}
      <div className="grid grid-cols-3 gap-2">
        <div className="bg-white p-2 rounded border border-[#E8E8E8] text-center">
          <div className="text-[9px] text-[#686868] uppercase font-semibold">Entities</div>
          <div className="text-[11px] font-semibold text-[#111111] mt-0.5">Parties Isolated</div>
        </div>
        <div className="bg-white p-2 rounded border border-[#E8E8E8] text-center">
          <div className="text-[9px] text-[#686868] uppercase font-semibold">Clauses</div>
          <div className="text-[11px] font-semibold text-[#111111] mt-0.5">Boundaries Set</div>
        </div>
        <div className="bg-white p-2 rounded border border-[#E8E8E8] text-center">
          <div className="text-[9px] text-[#686868] uppercase font-semibold">Format</div>
          <div className="text-[11px] font-semibold text-[#245CFF] mt-0.5">Normalized JSON</div>
        </div>
      </div>
    </div>
  );
}

