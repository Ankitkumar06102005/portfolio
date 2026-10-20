import { useEffect } from 'react';
import { motion, useReducedMotion } from 'motion/react';

type WelcomeIntroProps = {
  onComplete: () => void;
};

const welcome = 'WELCOME';
const name = 'ANKIT KUMAR';

function RollingLine({ text, delay = 0 }: { text: string; delay?: number }) {
  const reducedMotion = useReducedMotion();

  return (
    <span className="welcome-rolling-line" aria-label={text}>
      {Array.from(text).map((character, index) => (
        <span className="welcome-letter-window" key={`${character}-${index}`} aria-hidden="true">
          <motion.span
            className={`welcome-letter ${character === ' ' ? 'welcome-letter-space' : ''}`}
            initial={reducedMotion ? false : { y: '115%', rotateX: -75, opacity: 0 }}
            animate={{ y: '0%', rotateX: 0, opacity: 1 }}
            transition={{
              duration: reducedMotion ? 0 : 0.72,
              delay: reducedMotion ? 0 : delay + index * 0.045,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {character === ' ' ? '\u00a0' : character}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export function WelcomeIntro({ onComplete }: WelcomeIntroProps) {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    // Leave the finished welcome screen visible long enough to read before entering the portfolio.
    const duration = reducedMotion ? 250 : 6500;
    const timeout = window.setTimeout(onComplete, duration);
    return () => window.clearTimeout(timeout);
  }, [onComplete, reducedMotion]);

  return (
    <motion.section
      className="welcome-intro"
      role="dialog"
      aria-label="Welcome to Ankit Kumar's portfolio"
      aria-modal="true"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.55, ease: 'easeInOut' } }}
    >
      <div className="welcome-intro-grain" aria-hidden="true" />
      <div className="welcome-intro-top">
        <span className="welcome-intro-mark">AK<span>.</span></span>
        <span className="welcome-intro-index">PORTFOLIO / 2026</span>
      </div>

      <div className="welcome-intro-center">
        <motion.p
          className="welcome-intro-eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          A LITTLE SPACE ON THE INTERNET
        </motion.p>

        <div className="welcome-intro-welcome">
          <RollingLine text={welcome} delay={0.18} />
        </div>

        <h1 className="welcome-intro-name">
          <RollingLine text={name} delay={0.48} />
        </h1>

        <motion.p
          className="welcome-intro-subtitle"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 1.35 }}
        >
          COMPUTER SCIENCE · AI · SOFTWARE
        </motion.p>
      </div>

      <div className="welcome-intro-bottom">
        <span>DESIGNED TO THINK. BUILT TO SHIP.</span>
        <div className="welcome-intro-progress" aria-hidden="true">
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: reducedMotion ? 0 : 6.1, ease: 'linear' }}
          />
        </div>
        <span className="welcome-intro-loading">ENTERING<span> PORTFOLIO</span></span>
      </div>

      <button className="welcome-intro-skip" onClick={onComplete} type="button">
        SKIP INTRO <span aria-hidden="true">↗</span>
      </button>
    </motion.section>
  );
}
