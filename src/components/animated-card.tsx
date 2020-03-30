import React, { ReactNode } from 'react'
import { useSpring, animated } from 'react-spring';

interface PropTypes {
    children: ReactNode;
    className?: string;
}

const AnimatedCard = (props: PropTypes) => {
  const calc = (x: number, y: number) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 80, 1.1]
  const trans = (x: number, y: number, s: number) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  const [spring, setSpring] = useSpring(() => ({ 
    xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } 
  }));

  const handleMouseMove = (e: any) => {
    const event = e as MouseEvent;
    setSpring({xys: calc(event.clientX, event.clientY)});
  }

  const handleMouseLeave = (e: any) => {
    setSpring({xys: [0, 0, 1]});
  }

    return (
        <animated.div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
            style={{ transform: spring.xys.interpolate(trans as any) }} className={props.className}>
            {props.children}
        </animated.div>
    )
}

export default AnimatedCard
