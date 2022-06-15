/*
{
    "id": 27,
    "name": "Daft Punk",
    "link": "https://www.deezer.com/artist/27",
    "share": "https://www.deezer.com/artist/27?utm_source=deezer&utm_content=artist-27&utm_term=0_1655287897&utm_medium=web",
    "picture": "https://api.deezer.com/artist/27/image",
    "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg",
    "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg",
    "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg",
    "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg",
    "nb_album": 34,
    "nb_fan": 4283823,
    "radio": true,
    "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
    "type": "artist"
}
*/

export interface IArtist {
    id: number;
    name: string;
    link: string;
    share: string;
    picture: string;
    picture_small: string;
    picture_medium: string;
    picture_big: string;
    picture_xl: string;
    nb_album: number | null;
    nb_fan: number | null;
    radio: boolean;
    tracklist: string;
    type: string;
    role: string;
}
