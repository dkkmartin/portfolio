'use client';
import { cn } from '@/lib/utils';
import React, { useState, useEffect, useRef, RefObject, useCallback, MouseEvent } from 'react';

interface StarProps {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  twinkleSpeed: number | null;
  vx: number; // Velocity in x direction
  vy: number; // Velocity in y direction
  initialX: number; // Initial x position
  initialY: number; // Initial y position
  waveOffset: number;
}

interface StarBackgroundProps {
  starDensity?: number;
  allStarsTwinkle?: boolean;
  twinkleProbability?: number;
  minTwinkleSpeed?: number;
  maxTwinkleSpeed?: number;
  className?: string;
}

export const StarsBackground: React.FC<StarBackgroundProps> = ({
  starDensity = 0.0002,
  allStarsTwinkle = true,
  twinkleProbability = 0.7,
  minTwinkleSpeed = 0.5,
  maxTwinkleSpeed = 1,
  className,
}) => {
  const [stars, setStars] = useState<StarProps[]>([]);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>();
  const mousePosRef = useRef<{ x: number; y: number }>();
  const canvasRef: RefObject<HTMLCanvasElement> = useRef<HTMLCanvasElement>(null);

  function handleMouseMove(event: MouseEvent) {
    if (!event) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    setMousePos({ x, y });
  }

  useEffect(() => {
    mousePosRef.current = mousePos;
  }, [mousePos]);

  const generateStars = useCallback(
    (width: number, height: number): StarProps[] => {
      const area = width * height;
      const numStars = Math.floor(area * starDensity);
      const stars: StarProps[] = [];

      for (let i = 0; i < numStars; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        stars.push({
          x,
          y,
          radius: Math.random() * 0.5 + 0.5,
          opacity: Math.random() * 0.5 + 0.5,
          twinkleSpeed:
            allStarsTwinkle || Math.random() < twinkleProbability
              ? minTwinkleSpeed + Math.random() * (maxTwinkleSpeed - minTwinkleSpeed)
              : null,
          vx: 0,
          vy: 0,
          initialX: x,
          initialY: y,
          waveOffset: Math.random() * Math.PI * 2,
        });
      }

      return stars;
    },
    [starDensity, allStarsTwinkle, twinkleProbability, minTwinkleSpeed, maxTwinkleSpeed]
  );

  useEffect(() => {
    const updateStars = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const { width, height } = canvas.getBoundingClientRect();
        canvas.width = width;
        canvas.height = height;
        setStars(generateStars(width, height));
      }
    };

    updateStars();

    const resizeObserver = new ResizeObserver(updateStars);
    if (canvasRef.current) {
      resizeObserver.observe(canvasRef.current);
    }

    return () => {
      if (canvasRef.current) {
        resizeObserver.unobserve(canvasRef.current);
      }
    };
  }, [
    starDensity,
    allStarsTwinkle,
    twinkleProbability,
    minTwinkleSpeed,
    maxTwinkleSpeed,
    generateStars,
  ]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();

        if (mousePosRef.current) {
          const dx = star.x - mousePosRef.current.x;
          const dy = star.y - mousePosRef.current.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const triggerRadius = star.radius + 50;

          if (distance <= triggerRadius) {
            // Normalize the vector (dx, dy)
            const force = 0.05; // Adjust the force as needed
            const normalizedX = dx / distance;
            const normalizedY = dy / distance;

            // Apply the force to change the star's velocity
            star.vx += normalizedX * force;
            star.vy += normalizedY * force;
          }
        }

        // Add a small random velocity change to create a drifting effect
        star.vx += (Math.random() - 0.5) * 0.005;
        star.vy += (Math.random() - 0.5) * 0.005;

        // Update the star's position based on its velocity
        star.x += star.vx;
        star.y += star.vy;

        // Apply damping to the velocity to create a bouncing effect
        const damping = 0.99;
        star.vx *= damping;
        star.vy *= damping;

        // Interpolate the star's position towards its initial position
        const returnSpeed = 0.00005;
        star.vx += (star.initialX - star.x) * returnSpeed;
        star.vy += (star.initialY - star.y) * returnSpeed;

        if (star.twinkleSpeed !== null) {
          star.opacity = 0.5 + Math.abs(Math.sin((Date.now() * 0.001) / star.twinkleSpeed) * 0.5);
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [stars]);

  return (
    <canvas
      onMouseMove={handleMouseMove}
      ref={canvasRef}
      className={cn(
        'h-full w-full absolute inset-0',

        className
      )}
    />
  );
};
