import React from "react";
import conf from "../../conf/conf";

function Card({
  content: {
    title,
    name,
    poster,
    poster_path,
    media_type,
    release_date,
    first_air_date,
  },
}) {
  console.log(`${conf.posterImageSmall}${poster_path}`);
  return (
    <div className="border border-solid border-black  p-1 min-w-40 bg-black text-white flex flex-col items-center">
      <img
        className="rounded-3lg"
        src={`${conf.posterImageSmall}${poster_path}`}
        alt={title}
      />
      <div className="w-full flex flex-col items-center">
        <strong className="text-center">{title || name}</strong>
        <div className="w-full flex justify-between px-3 mr-2  text-sm">
          <div>{media_type || "NaN"}</div>
          <div>{release_date || first_air_date}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
