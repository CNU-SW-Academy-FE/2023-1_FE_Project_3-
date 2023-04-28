import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import styled from "@emotion/styled";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: -6px 32px;
  flex-wrap: wrap;
  & > span {
    margin: 8px 4px;
  }
`;

export default function CardListSkeleton() {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <SkeletonContainer>
        <Skeleton height={400} width={270} borderRadius={15} />
        <Skeleton height={400} width={270} borderRadius={15} />
        <Skeleton height={400} width={270} borderRadius={15} />
        <Skeleton height={400} width={270} borderRadius={15} />
        <Skeleton height={400} width={270} borderRadius={15} />
        <Skeleton height={400} width={270} borderRadius={15} />
        <Skeleton height={400} width={270} borderRadius={15} />
        <Skeleton height={400} width={270} borderRadius={15} />
        <Skeleton height={400} width={270} borderRadius={15} />
        <Skeleton height={400} width={270} borderRadius={15} />
        <Skeleton height={400} width={270} borderRadius={15} />
        <Skeleton height={400} width={270} borderRadius={15} />
      </SkeletonContainer>
    </SkeletonTheme>
  );
}
