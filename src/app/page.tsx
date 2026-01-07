'use client';

import { useState } from "react";
import { MouseEventHandler } from "react";
import RandomFox from "@/components/RandomFox";
import { random } from "lodash";


const myRandom = () => () => random(1, 123);
const generatedId = () => Math.random().toString(36).substring(2, 9);

export default function Home() {
  const [images, setImages] = useState<ImageItems[]>([]);

  const addNewFox: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    const newFox: ImageItems = {
      id: generatedId(),
      url: `https://randomfox.ca/images/${myRandom()}.jpg`,
    };
    setImages((prevImages) => [...prevImages, newFox]);
  }

  return (
    <main  className="text-center">
      <h1>Welcome to Next.js!</h1>
      <div className="m-4">
        <button 
          onClick={addNewFox}
          className="py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >Add new fox</button>
      </div>
      {images.map(({ id, url }) => (
        <div key={id} className="p-4">
          <RandomFox image={url} />
        </div>
      ))}
    </main>
  );
}
