import Skeleton from "react-loading-skeleton";

export default function Movie() {
    return (
        <div>
            <Skeleton />
            <Skeleton count={5} />
        </div>
    );
}