import React from "react";
import conf from "../../conf/conf";

function Card({ content: { title, name, poster, poster_path } }) {
  console.log(`${conf.posterImage}${poster_path}`);
  return (
    <div className="border border-solid  w-36 h-60 sm:w-56 sm:h-96">
      <img src={`${conf.posterImageSmall}${poster_path}`} alt="" />
      {title || name}
    </div>
  );
}

export default Card;
