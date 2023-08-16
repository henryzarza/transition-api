import type { Artist, Track } from "./types";

export async function getData(method: string, limit = '') : Promise<any> {
  const res = await fetch(`${import.meta.env.API_URL}&method=${method}&api_key=${import.meta.env.API_KEY}&limit=${limit}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export function checkImage(
  image: { '#text': string }[],
  positionToCheck: number,
  defaultImgConfig = '200'
  ) : string {
  const imgUrl = ((image.length > positionToCheck + 1) && image[positionToCheck] && image[positionToCheck]['#text']) || '';

  // this URL is a generic image provided by Last.fm APi
  // I don't like that default image that's the reason I'm changing it :)
  return imgUrl.includes('https://lastfm.freetls.fastly.net/i/u/') ? `https://picsum.photos/${defaultImgConfig}` : imgUrl;
}

export function filterArtistsData(data: Artist[], itemsToSlice: number) {
  return data.filter(artist => artist.mbid).slice(0, itemsToSlice);
}

export function filterTrackData(data: Track[], itemsToSlice: number) {
  return data.filter(track => track.mbid).slice(0, itemsToSlice);
}
