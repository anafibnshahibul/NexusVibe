import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollReveal = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const page = document.querySelector('main');
    if (!page) return undefined;

    const elements = page.querySelectorAll<HTMLElement>([
      'section .section-heading',
      'section .service-tile',
      'section .project-tile',
      'section .process-step',
      'section .principle-card',
      'section .deliverable-card',
      'section .studio-cta',
      'section .service-detail-image',
      'section .about-image',
      'section .service-bottom-cta',
      'section .catalog-heading',
      'section .work-heading',
      'section .about-heading',
      'section .detail-heading',
      'section .contact-heading',
    ].join(', '));
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reducedMotion || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return undefined;
    }

    elements.forEach((element) => {
      element.classList.add('scroll-reveal');
      const siblingIndex = Array.from(element.parentElement?.children ?? []).indexOf(element);
      element.style.setProperty('--reveal-delay', `${Math.max(0, siblingIndex % 4) * 70}ms`);
    });

    let frame = 0;
    const revealVisibleElements = () => {
      frame = 0;
      const revealLine = window.innerHeight - 52;
      elements.forEach((element) => {
        if (element.classList.contains('is-visible')) return;
        const bounds = element.getBoundingClientRect();
        if (bounds.top < revealLine && bounds.bottom > 0) element.classList.add('is-visible');
      });
    };
    const scheduleRevealCheck = () => {
      if (!frame) frame = window.requestAnimationFrame(revealVisibleElements);
    };

    revealVisibleElements();
    window.addEventListener('scroll', scheduleRevealCheck, { passive: true });
    window.addEventListener('resize', scheduleRevealCheck, { passive: true });

    const tiltTargets = page.querySelectorAll<HTMLElement>([
      '.studio-showcase',
      '.service-tile',
      '.project-tile',
      '.service-detail-image',
      '.about-image',
      '.studio-cta',
    ].join(', '));

    const cleanups: Array<() => void> = [];
    if (!reducedMotion && window.matchMedia('(pointer: fine)').matches) {
      tiltTargets.forEach((element) => {
        const handleMove = (event: PointerEvent) => {
          const bounds = element.getBoundingClientRect();
          const x = (event.clientX - bounds.left) / bounds.width - 0.5;
          const y = (event.clientY - bounds.top) / bounds.height - 0.5;
          element.style.setProperty('--pointer-rotate-x', `${(x * 5).toFixed(2)}deg`);
          element.style.setProperty('--pointer-rotate-y', `${(-y * 5).toFixed(2)}deg`);
          element.style.setProperty('--pointer-x', `${((x + 0.5) * 100).toFixed(1)}%`);
          element.style.setProperty('--pointer-y', `${((y + 0.5) * 100).toFixed(1)}%`);
          element.classList.add('is-tilting');
        };
        const reset = () => {
          element.style.setProperty('--pointer-rotate-x', '0deg');
          element.style.setProperty('--pointer-rotate-y', '0deg');
          element.classList.remove('is-tilting');
        };
        element.addEventListener('pointermove', handleMove, { passive: true });
        element.addEventListener('pointerleave', reset, { passive: true });
        cleanups.push(() => {
          element.removeEventListener('pointermove', handleMove);
          element.removeEventListener('pointerleave', reset);
        });
      });
    }

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', scheduleRevealCheck);
      window.removeEventListener('resize', scheduleRevealCheck);
      cleanups.forEach((cleanup) => cleanup());
    };
  }, [pathname]);

  return null;
};

export default ScrollReveal;
