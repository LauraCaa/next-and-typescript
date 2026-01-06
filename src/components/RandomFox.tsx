import { useRef, useEffect, useState } from 'react';

const RandomFox = ({ image }: { image: string }) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const [src, setSrc] = useState("https://placehold.co/400");

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSrc(image);
        }
      });
    });

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }
    
    return () => {
      observer.disconnect();
    }

  },[image]);

  return (
    <img
      ref={imageRef}
      src={src}
      alt="Random Fox"
      width={300}
      height={300}
      className="rounded"
      style={{ width: 'auto', height: 'auto' }}
    />
  );
};

export default RandomFox;;
