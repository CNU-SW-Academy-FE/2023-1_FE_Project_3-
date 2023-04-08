import { useApi } from "../../hooks/useApi";
import data from "../../data/dummy_data.txt";
import { useEffect, useState } from "react";
import { useData } from "./../../hooks/useData";

const Popular = () => {
    // const { data, loading, error } = useApi("/movie/popular");
    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>{error.message}</p>;
    const data = useData();
    console.log(data);
    return <div>Popular</div>;
};

export default Popular;
