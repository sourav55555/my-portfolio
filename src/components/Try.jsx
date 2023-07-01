import React, { useRef } from 'react';
import { useSpring, animated } from 'react-spring';

const NumberEffect = () => {
  const targetNumber = 10; // Define the fixed number
  const sectionRef = useRef(null);

  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });

    observer.observe(sectionRef.current);

    return () => {
      observer.unobserve(sectionRef.current);
    };
  }, []);

  const numberAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    config: { duration: 500 },
    onRest: () => console.log('Animation complete'),
  });

  return (
    <div ref={sectionRef} className="number-effect">
      <animated.span style={numberAnimation} className="number">
        {targetNumber}
      </animated.span>
    </div>
  );
};

export default NumberEffect;
