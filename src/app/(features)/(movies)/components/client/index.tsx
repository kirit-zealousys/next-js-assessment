"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MovieProps } from "../../types";

function Movie(movie: MovieProps) {
  const { id, title, poster_path } = movie;
  const router = useRouter();

  const getPosterURL = (poster_path: string) => {
    let path = `https://image.tmdb.org/t/p/w500/${poster_path}`;
    return path;
  };

  const handleClick = (id: number): void => {
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
        src={getPosterURL(poster_path)}
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
