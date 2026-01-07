'use client';

import { useState } from "react";
import RandomFox from "@/components/RandomFox";
import { MouseEventHandler } from "react";


const random = () => Math.floor(Math.random() * 123) + 1;
const generatedId = () => Math.random().toString(36).substring(2, 9);

export default function Home() {
  const [images, setImages] = useState<ImageItems[]>([]);

  const addNewFox: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    const newFox: ImageItems = {
      id: generatedId(),
      url: `https://randomfox.ca/images/${random()}.jpg`,
    };
    setImages((prevImages) => [...prevImages, newFox]);
  }

  return (
    <main>
      <h1>Welcome to Next.js!</h1>
      <button onClick={addNewFox}>Add new fox</button>
      {images.map(({ id, url }) => (
        <div key={id} className="p-4">
          <RandomFox image={url} />
        </div>
      ))}
    </main>
  );
}
