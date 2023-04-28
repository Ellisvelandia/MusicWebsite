import { useEffect, useState } from "react";
import Iframe from "../components/Iframe";
import { fetchFromAPI } from "../utils/fetchFromAPI";

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
console.log(trendings.map((trending) => trending.id.videoId));

  useEffect(() => {
    getTrending();
  }, []);

  return (
    <div className="w-full">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {trendings && trendings.length > 0 ? (
            trendings.map((trending) => (
              <div key={trending.id} className="p-2 rounded-lg ">
                <Iframe videoId={trending.id.videoId} />
              </div>
            ))
          ) : (
            <Iframe videoId="jV39oijHOpk" />
          )}
        </div>
      )}
    </div>
  );
};

export default Trending;
