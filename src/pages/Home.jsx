import { useState, useEffect } from "react";
import Loading from "../components/Loading";
import axios from "axios";
import { BsPlayCircle } from "react-icons/bs";

const Home = () => {
  const [tracks, setTracks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentTrack, setCurrentTrack] = useState(null);

  const search = async () => {
    const options = {
      method: "GET",
      url: "https://shazam-core.p.rapidapi.com/v1/search/multi",
      params: {
        query: "blackpink",
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
      setTracks(response.data.tracks.hits);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const playTrack = (track) => {
    setCurrentTrack(track);
  };

  console.log(tracks)
  useEffect(() => {
    search();
  }, []);

  return (
    <div className="w-full">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 p-1">
          {tracks.map((track) => (
            <div
              key={track.track.key}
              className="h-auto relative p-2 md:rounded-lg w-full drop-shadow-2xl bg-[rgb(189,33,33)] text-white md:text-sm text-xs text-left"
            >
              <p>{track.track.subtitle}</p>
              <img
                src={track.track.images.coverart}
                className="w-full h-auto"
                alt="tracks images cover"
                loading="lazy"
              />
              <BsPlayCircle
                size={50}
                className="absolute top-1/2 left-1/2 bg-red-600 rounded-full transform -translate-x-1/2 -translate-y-1/2"
                style={{ color: "white" }}
                onClick={() => playTrack(track)}
              />
              <h2 className="text-center">{track.track.title}</h2>
            </div>
          ))}
          {currentTrack && (
            <div className="sticky h-auto p-2 md:rounded-lg w-full bottom-0 left-0 right-0 bg-[rgb(189,33,33)]  md:text-sm text-xs text-left">
              <audio
                src={currentTrack.track.hub.actions[1].uri}
                controls
                autoPlay
                className="spotify-style"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
