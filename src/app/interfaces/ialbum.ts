/*
{
  "id": "302127",
  "title": "Discovery",
  "upc": "724384960650",
  "link": "https://www.deezer.com/album/302127",
  "share": "https://www.deezer.com/album/302127?utm_source=deezer&utm_content=album-302127&utm_term=0_1655293218&utm_medium=web",
  "cover": "https://api.deezer.com/album/302127/image",
  "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/56x56-000000-80-0-0.jpg",
  "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/250x250-000000-80-0-0.jpg",
  "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/500x500-000000-80-0-0.jpg",
  "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/1000x1000-000000-80-0-0.jpg",
  "md5_image": "2e018122cb56986277102d2041a592c8",
  "genre_id": 113,
  "genres": {
    "data": []
  },
  "label": "Daft Life Ltd./ADA France",
  "nb_tracks": 14,
  "duration": 3660,
  "fans": 258642,
  "release_date": "2001-03-07",
  "record_type": "album",
  "available": true,
  "tracklist": "https://api.deezer.com/album/302127/tracks",
  "explicit_lyrics": false,
  "explicit_content_lyrics": 7,
  "explicit_content_cover": 0,
  "contributors": [
    {
      "id": 27,
      "name": "Daft Punk",
      "link": "https://www.deezer.com/artist/27",
      "share": "https://www.deezer.com/artist/27?utm_source=deezer&utm_content=artist-27&utm_term=0_1655293218&utm_medium=web",
      "picture": "https://api.deezer.com/artist/27/image",
      "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg",
      "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg",
      "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg",
      "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg",
      "radio": true,
      "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
      "type": "artist",
      "role": "Main"
    }
  ],
  "artist": {
    "id": "27",
    "name": "Daft Punk",
    "picture": "https://api.deezer.com/artist/27/image",
    "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg",
    "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg",
    "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg",
    "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg",
    "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
    "type": "artist"
  },
  "type": "album",
  "tracks": {
    "data": []
  }
}
*/

import { IArtist } from "./iartist";

export interface IAlbum {
    id: string;
    title: string;
    upc: string;
    link: string;
    share: string;
    cover: string;
    cover_small: string;
    cover_medium: string;
    cover_big: string;
    cover_xl: string;
    md5_image: string;
    genre_id: number;
    genres: any;
    label: string;
    nb_tracks: number;
    duration: number;
    fans: number;
    release_date: string;
    record_type: string;
    available: boolean;
    tracklist: string;
    explicit_lyrics: boolean;
    explicit_content_lyrics: number;
    explicit_content_cover: number;
    contributors: IArtist[];
    artist: IArtist;
    type: string;
    tracks: any;
}
