const Iframe = ({ videoId }) => {
  return (
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      rel="noopener"
      loading="lazy"
      className="md:rounded-lg w-full object-fill h-auto"
    ></iframe>
  );
};

export default Iframe;
