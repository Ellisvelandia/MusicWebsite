import { useEffect, useState } from "react";
import Iframe from "../components/Iframe";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { MdSubtitles } from "react-icons/md";
import Loading from "../components/Loading";

const Trending = () => {
  const [trendings, setTrendings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getTrending = async () => {
    try {
      const data = await fetchFromAPI(
        "search",
        "part=snippet&type=video&videoCategoryId=10&chart=mostPopular"
      );
      setTrendings(data.items);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      setTrendings([]);
    }
  };

  useEffect(() => {
    getTrending();
  }, []);

  const keyExtractor = (item) => item.id.videoId + item.id.channelId;

  return (
    <div className="w-full">
      {isLoading ? (
        <Loading/>
      ) : (
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 w-full md:p-4">
          {trendings && trendings.length > 0 ? (
            trendings.map((trending) => (
              <div
                key={keyExtractor(trending)}
                className="p-2 md:rounded-lg w-full drop-shadow-2xl bg-[rgb(189,33,33)] text-white md:text-sm text-xs text-left"
              >
                <Iframe videoId={trending.id.videoId} />
                <span className="font-bold p-1 inline-flex items-center ">
                  <MdSubtitles className="mr-1" /> {trending.snippet.title}
                </span>
              </div>
            ))
          ) : (
            <p className="text-center text-2xl">Not videos</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Trending;
