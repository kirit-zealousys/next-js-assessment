"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Movie {
  id: number;
  title: string;
  image: string;
}

function Movie({ id, title, image }: Movie) {
  const router = useRouter();
  const handleClick = (id: number): void => {
    console.log("Movie id:" + id);
    router.push("/movies/" + String(id));
  };
  return (
    <div
      key={id}
      className="relative group"
      onClick={() => {
        handleClick(id);
      }}
    >
      <Image
        src={image}
        width={100}
        height={100}
        className="w-full h-auto rounded-lg"
        alt={title}
      />
      <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg">
        <p className="text-white text-lg font-bold">{title}</p>
      </div>
    </div>
  );
}

export default Movie;
