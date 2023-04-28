import axios from "axios";

const options = {
  method: "GET",
  url: "https://shazam-core.p.rapidapi.com/v1/search/multi",
  params: {
    query: "metallica",
    search_type: "SONGS_ARTISTS",
  },
  headers: {
    "content-type": "application/octet-stream",
    "X-RapidAPI-Key": "f7c77fb172msh1ef00876340a814p154163jsn8055208d264a",
    "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}
