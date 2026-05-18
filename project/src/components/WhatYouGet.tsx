import { useEffect, useRef, useState } from 'react';
const card1Image = '/imagens/card_1.png';
const card2Image = '/imagens/card_2.png';
const card3Image = '/imagens/card_3.png';
const card4Image = '/imagens/card_4.png';
const card5Image = '/imagens/card_5.png';

type ModuleCard = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
};

const modules: ModuleCard[] = [
  {
    id: '01',
    title: '',
    subtitle: '',
    image: card1Image,
  },
  {
    id: '02',
    title: '',
    subtitle: '',
    image: card2Image,
  },
  {
    id: '03',
    title: '',
    subtitle: '',
    image: card3Image,
  },
  {
    id: '04',
    title: '',
    subtitle: '',
    image: card4Image,
  },
  {
    id: '05',
    title: '',
    subtitle: '',
    image: card5Image,
  },
];

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);
const lerp = (start: number, end: number, alpha: number) => start + (end - start) * alpha;

export default function WhatYouGet() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const dragStartXRef = useRef(0);
  const dragStartYRef = useRef(0);
  const dragStartProgressRef = useRef(0);
  const isDraggingRef = useRef(false);
  const isPointerDownRef = useRef(false);
  const progressRef = useRef(0);
  const targetRef = useRef(0);
  const maxScrollRef = useRef(0);
  const snapPointsRef = useRef<number[]>([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const computeMetrics = () => {
      const track = trackRef.current;

      if (!track) {
        return;
      }

      const overflowDistance = Math.max(track.scrollWidth - window.innerWidth, 0);
      maxScrollRef.current = overflowDistance;

      const snapPoints =
        modules.length > 1
          ? Array.from({ length: modules.length }, (_, index) => index / (modules.length - 1))
          : [0];

      snapPointsRef.current = snapPoints;
    };

    const animate = () => {
      const track = trackRef.current;
      const current = progressRef.current;
      const next = lerp(current, targetRef.current, 0.09);
      const settled = Math.abs(next - targetRef.current) < 0.0006;
      const output = settled ? targetRef.current : next;

      progressRef.current = output;

      if (track) {
        track.style.transform = `translate3d(${-maxScrollRef.current * output}px, 0, 0)`;
      }

      setProgress((previous) => (Math.abs(previous - output) > 0.001 ? output : previous));
      frameRef.current = window.requestAnimationFrame(animate);
    };

    computeMetrics();
    frameRef.current = window.requestAnimationFrame(animate);

    const resizeObserver =
      typeof ResizeObserver !== 'undefined'
        ? new ResizeObserver(() => {
            computeMetrics();
          })
        : null;

    if (trackRef.current && resizeObserver) {
      resizeObserver.observe(trackRef.current);
    }

    window.addEventListener('resize', computeMetrics);

    return () => {
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }

      resizeObserver?.disconnect();
      window.removeEventListener('resize', computeMetrics);
    };
  }, []);

  const snapToNearest = () => {
    const snapPoints = snapPointsRef.current;
    if (snapPoints.length === 0) {
      return;
    }

    const snapped = snapPoints.reduce((closest, point) =>
      Math.abs(point - targetRef.current) < Math.abs(closest - targetRef.current) ? point : closest,
    );

    targetRef.current = snapped;
  };

  const beginDrag = (clientX: number, clientY: number) => {
    dragStartXRef.current = clientX;
    dragStartYRef.current = clientY;
    dragStartProgressRef.current = targetRef.current;
    isDraggingRef.current = false;
    isPointerDownRef.current = true;
  };

  const updateDrag = (clientX: number, clientY: number) => {
    if (!isPointerDownRef.current) {
      return;
    }

    const deltaX = dragStartXRef.current - clientX;
    const deltaY = dragStartYRef.current - clientY;

    if (!isDraggingRef.current) {
      const hasHorizontalIntent = Math.abs(deltaX) > 26 && Math.abs(deltaX) > Math.abs(deltaY) * 1.8;
      if (!hasHorizontalIntent) {
        return;
      }

      isDraggingRef.current = true;
    }

    const overflowDistance = Math.max(maxScrollRef.current, 1);
    const deltaProgress = deltaX / overflowDistance;
    targetRef.current = clamp(dragStartProgressRef.current + deltaProgress, 0, 1);
  };

  const endDrag = () => {
    const wasDragging = isDraggingRef.current;
    isDraggingRef.current = false;
    isPointerDownRef.current = false;

    if (!wasDragging) {
      return;
    }

    snapToNearest();
  };

  return (
    <section className="relative overflow-clip pt-20 sm:pt-24 md:pt-32">
      <div className="absolute inset-0 bg-transparent" />
      <div
        className="absolute inset-0 "
        style={{
          background:
            'radial-gradient(circle at 18% 30%, rgba(196, 169, 110, 0.10), transparent 30%), radial-gradient(circle at 82% 66%, rgba(196, 169, 110, 0.08), transparent 28%), linear-gradient(180deg, rgba(11,11,13,0.08) 0%, rgba(11,11,13,0.28) 100%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(244,241,236,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(244,241,236,0.4) 1px, transparent 1px)',
          backgroundSize: '120px 120px',
        }}
      />

      <div className="relative w-full pb-16 sm:pb-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 md:px-10">
          <div className="max-w-2xl space-y-4 sm:space-y-5">
            <p className="section-label">Explore o Sistema</p>
            
            
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-brand-bg to-transparent sm:w-20 md:w-28" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-brand-bg to-transparent sm:w-20 md:w-28" />

            <div
              ref={trackRef}
              className="flex w-max gap-4 pb-6 will-change-transform cursor-grab active:cursor-grabbing touch-pan-y sm:gap-6 md:gap-8"
              onPointerDown={(event) => {
                beginDrag(event.clientX, event.clientY);
              }}
              onPointerMove={(event) => {
                updateDrag(event.clientX, event.clientY);
              }}
              onPointerUp={() => {
                endDrag();
              }}
              onPointerCancel={() => {
                endDrag();
              }}
              onLostPointerCapture={() => {
                endDrag();
              }}
            >
              {modules.map((module, index) => {
                const distance = Math.abs(progress * (modules.length - 1) - index);
                const focus = clamp(1 - distance, 0, 1);
                const cardOpacity = 0.82 + focus * 0.18;
                const cardScale = 0.94 + focus * 0.06;
                const cardTranslateY = (1 - focus) * 24;
                const imageScale = 1 + focus * 0.03;
                const imageTranslateX = (0.5 - focus) * 10;
                const imageBlur = (1 - focus) * 1.2;

                return (
                  <article
                    key={module.id}
                    className="group relative isolate h-[68vh] min-h-[480px] w-[82vw] max-w-[360px] overflow-hidden rounded-[28px] border border-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.45)] sm:h-[72vh] sm:max-w-[420px] md:h-[74vh] md:w-[42vw] md:max-w-[520px] lg:w-[34vw] xl:w-[30vw]"
                    style={{
                      opacity: cardOpacity,
                      transform: `translate3d(0, ${cardTranslateY}px, 0) scale(${cardScale})`,
                      transition: 'opacity 180ms linear',
                    }}
                  >
                    <div className="absolute inset-0 rounded-[28px] border border-brand-gold/10 opacity-55" />
                    <div
                      className="absolute -inset-[1px] rounded-[28px] opacity-45"
                      style={{
                        background:
                          'linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.015) 18%, rgba(255,255,255,0) 40%)',
                      }}
                    />
                    <div
                      className="absolute inset-0 rounded-[28px] opacity-65"
                      style={{
                        boxShadow: `0 0 ${20 + focus * 28}px rgba(196, 169, 110, ${0.03 + focus * 0.08})`,
                      }}
                    />

                    <div className="absolute inset-0 overflow-hidden">
                      <img
                        src={module.image}
                        alt={module.title}
                        className="h-full w-full object-contain will-change-transform"
                        style={{
                          transform: `translate3d(${imageTranslateX}px, 0, 0) scale(${imageScale})`,
                          objectPosition: 'center top',
                          filter: `saturate(${0.96 + focus * 0.1}) blur(${imageBlur}px) brightness(${0.96 + focus * 0.04})`,
                          transition: 'filter 220ms linear',
                        }}
                      />
                    </div>

                    <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 md:p-7">
                      <div className="mb-5 flex items-center justify-between">
                        <span className="rounded-full border border-white/10 px-3 py-1 font-sans text-[10px] tracking-[0.28em] text-brand-gold">
                          MODULO {module.id}
                        </span>
                        <span className="font-serif text-4xl font-light text-white/12 sm:text-5xl">{module.id}</span>
                      </div>

                      <div className="space-y-3">
                        <h3 className="font-serif text-2xl font-light leading-[1.02] tracking-tight text-brand-text sm:text-[2rem]">
                          {module.title}
                        </h3>
                        <p className="max-w-[28ch] font-sans text-sm font-light leading-[1.7] text-brand-textMuted sm:text-[15px]">
                          {module.subtitle}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
