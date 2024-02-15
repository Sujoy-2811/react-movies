const conf = {
  tokenKey: String(import.meta.env.VITE_TMDB_TOKEN),
  url: String(import.meta.env.VITE_TMDB_URL),
  posterImageSmall: "https://image.tmdb.org/t/p/w300",
  posterImageLarge: "https://image.tmdb.org/t/p/w500",
};

export default conf;
