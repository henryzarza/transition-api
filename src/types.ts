export type Artist = {
  name: string;
  mbid: string;
  image: {
    '#text': string;
  }[];
  playcount: string;
}

export type Track = {
  mbid: string;
  name: string;
  artist: {
    name: string;
    mbid: string;
    url: string;
  };
  image: {
    '#text': string;
  }[];
  duration: string;
  playcount: string;
  listeners: string;
  url: string;
}
