import SpotifyWebApi from "spotify-web-api-node";

const scopes = [
  "playlist-read-private",
  "playlist-read-collaborative",
  "user-read-private",
  "user-read-email",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-top-read",
  "user-read-playback-position",
  "streaming",
  "user-library-read",
  "user-follow-read",
].join(",");

const params = {
  scope: scopes,
};

const querParamString = new URLSearchParams(params);

const LOGIN_URL = `https://accounts.spotify.com/authorize?${querParamString.toString()}`;

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
});

export default spotifyApi;

export { LOGIN_URL };
