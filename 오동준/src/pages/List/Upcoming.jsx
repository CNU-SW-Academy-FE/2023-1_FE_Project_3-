import { useApi } from "../../hooks/useApi";
import { useData } from "../../hooks/useData";

const Upcoming = () => {
    // const { data, loading, error } = useApi(
    //     "/movie/upcoming?language=ko&region=KR"
    // );
    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>{error.message}</p>;
    const data = useData();
    console.log(data);
    return <div>Upcoming</div>;
};

export default Upcoming;
