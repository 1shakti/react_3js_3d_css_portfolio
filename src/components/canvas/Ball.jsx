import React, { Suspense, useEffect, useRef, useState } from 'react';
import CanvasLoader from "../Loader";

const Ball = ({ imgUrl }) => {
  return (
    <div className="rounded-full flex justify-center items-center border-gray-300 relative w-20 h-20 bg-gradient-to-br from-blue-200 to-purple-200 shadow-lg m-4">
      <div>
        <img
          src={imgUrl}
          alt={`Icon ${imgUrl}`}
          className="icon w-12 h-12 object-contain"
          loading='lazy'
        />
      </div>
    </div>
  );
};

const BallCanvas = ({ icon }) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ballRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(ballRef.current);
        }
      },
      { rootMargin: '0px', threshold: 0.5 }
    );

    observer.observe(ballRef.current);

    return () => {
      observer.unobserve(ballRef.current);
    };
  }, []);

  return (
    <div ref={ballRef}>
      {isIntersecting && (
          <Suspense fallback={<CanvasLoader />}>
            <Ball imgUrl={icon} />
          </Suspense>
      )}
    </div>
  );
};

export default BallCanvas;
