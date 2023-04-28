const Track = (track) => {
  return (
    <div
      key={track.id}
      className="max-w-full bg-black shadow-md text-white grid place-content-center text-center py-1"
    >
      <h1 className="text-white">{track.name}</h1>
      <p>{track.artists[0].name}</p>
      <img
        src={track.album.images[0].url}
        alt="tracks images"
        className="w-32 h-32 my-0 mx-auto"
        loading="lazy"
      />
      <p>{track.album.name}</p>
      <p>{track.duration_ms}</p>
      <p>{track.explicit}</p>
      <p>{track.popularity}</p>
      <p>{track.release_date}</p>
      <p>{track.track_number}</p>
      <p>{track.type}</p>
      <audio src={track.preview_url} controls></audio>
    </div>
  );
};

export default Track;
