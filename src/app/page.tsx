'use client';

import { useEffect, useState } from "react";
import RandomFox from "@/components/RandomFox";

type ImageItems = { id: string; url: string };

const random = () => Math.floor(Math.random() * 123) + 1;
const generatedId = () => Math.random().toString(36).substring(2, 9);

export default function Home() {
  const [images, setImages] = useState<ImageItems[]>([]);

  useEffect(() => {
    const newImages = Array.from({ length: 4 }).map(() => ({
      id: generatedId(),
      url: `https://randomfox.ca/images/${random()}.jpg`,
    }));

    setImages(newImages);
    // eslint-disable-next-line

  }, []); 

  return (
    <main>
      <h1>Welcome to Next.js!</h1>

      {images.map(({ id, url }) => (
        <div key={id} className="p-4">
          <RandomFox image={url} />
        </div>
      ))}
    </main>
  );
}
