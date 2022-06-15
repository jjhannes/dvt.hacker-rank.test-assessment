/*
{
    "id": "0",
    "name": "All",
    "picture": "https://api.deezer.com/genre/0/image",
    "picture_small": "https://e-cdns-images.dzcdn.net/images/misc//56x56-000000-80-0-0.jpg",
    "picture_medium": "https://e-cdns-images.dzcdn.net/images/misc//250x250-000000-80-0-0.jpg",
    "picture_big": "https://e-cdns-images.dzcdn.net/images/misc//500x500-000000-80-0-0.jpg",
    "picture_xl": "https://e-cdns-images.dzcdn.net/images/misc//1000x1000-000000-80-0-0.jpg",
    "type": "genre"
}
*/

export interface IGenre {
    id: string;
    name: string;
    picture: string;
    picture_small: string;
    picture_medium: string;
    picture_big: string;
    picture_xl: string;
    type: string;
}
