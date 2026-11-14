import { motion } from 'framer-motion';

type WordRevealProps = {
  text: string;
  delay?: number;
  className?: string;
};

const wordVariants = {
  hidden: { opacity: 0, y: '0.55em', rotateX: -45, filter: 'blur(5px)' },
  visible: { opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)' },
};

const WordReveal = ({ text, delay = 0, className }: WordRevealProps) => {
  const words = text.split(/\s+/);

  return <motion.span
    aria-label={text}
    className={className ? `word-reveal ${className}` : 'word-reveal'}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.7 }}
    variants={{ visible: { transition: { staggerChildren: 0.045, delayChildren: delay } }}}
  >
    {words.map((word, index) => (
      <motion.span
        key={`${word}-${index}`}
        aria-hidden="true"
        className="word-reveal__word"
        variants={wordVariants}
        transition={{ duration: 0.52, ease: [0.2, 0.75, 0.25, 1] }}
      >
        {word}{index < words.length - 1 ? '\u00a0' : ''}
      </motion.span>
    ))}
  </motion.span>;
};

export default WordReveal;
