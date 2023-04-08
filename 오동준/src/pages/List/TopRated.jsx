import { useApi } from "../../hooks/useApi";
import { useData } from "../../hooks/useData";

const TopRated = () => {
    // const { data, loading, error } = useApi(
    //     "/movie/top_rated?language=ko&region=KR"
    // );
    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>{error.message}</p>;
    const data = useData();
    console.log(data);
    return <div>Top Rated</div>;
};

export default TopRated;
