import { useEffect, useState } from "react";

const Home = () => {
  const [tracks, setTracks] = useState([]);

  const getTracks = async () => {
    const res = await fetch(
      "https://v1.nocodeapi.com/elliscaicedo/spotify/QhTyPPCIAngycdwZ/search?q=wwe&type=track"
    );
    const data = await res.json();
    setTracks(data.tracks.items);
  };

  useEffect(() => {
    getTracks();
  }, []);

  return (
    <>
     <div className="max-w-full bg-slate-600">
        <div className="grid grid-cols-3 gap-4 p-1">
           {tracks.map(track => (
            <div key={track.id} className="max-w-full bg-slate-600 shadow">
              <h1 className="text-white">{track.name}</h1>
              <p>{track.artists[0].name}</p>
              <img src={track.album.images[0].url} alt="tracks images" className="w-32 h-32" loading="lazy"/>
              <p>{track.album.name}</p>
              <p>{track.duration_ms}</p>
              <p>{track.explicit}</p>
              <p>{track.popularity}</p>
              <p>{track.release_date}</p>
              <p>{track.track_number}</p>
              <p>{track.type}</p>
              <audio src={track.preview_url} controls ></audio>
            </div>
           ))}
        </div>
       </div>
       </>
  )
}

export default Home