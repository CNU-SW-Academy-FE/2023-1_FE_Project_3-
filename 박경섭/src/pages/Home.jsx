import styled from "@emotion/styled";
import { PosterSlider } from "../component/domain";
import { useEffect, useState } from "react";
import axios from "axios";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const Container = styled.div`
  height: 100%;
  overflow: auto;
`;

export default function Home() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const { data, status } = await axios.get(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=ko&page=1&region=kr`
        );
        if (status < 200 || status >= 300) {
          throw new Error("API 호출 오류");
        }

        setData(data.results);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };

    setLoading(true);
    fetchNowPlaying();
  }, []);

  return (
    <Container>
      {loading ? (
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <Skeleton height={900} />
        </SkeletonTheme>
      ) : (
        <PosterSlider data={data} />
      )}
    </Container>
  );
}
