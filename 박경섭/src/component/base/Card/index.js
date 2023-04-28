import styled from "@emotion/styled";

const ImageWrapper = styled.div`
  box-sizing: border-box;
  border: 1px solid rgba(255, 255, 255, 0.4);
  overflow: hidden;

  transition: box-shadow 0.2s ease-in-out, filter 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 10px 2px white;
    filter: brightness(120%);
  }
`;

export default function Card({
  src,
  alt = "No-Image",
  width = "270",
  height = "480",
  block = false,
  mode = "cover",
  radius = 0,
  ...props
}) {
  width = Number(width);
  height = Number(height);

  const WrapperStyle = {
    display: block ? "block" : "inline-block",
    width: `${width}px`,
    height: `${height}px`,
    borderRadius: `${radius}px`,
    objectFit: mode,
  };

  const CardStyle = {
    display: "inline-block",
    width: `${width - 2}px`,
    height: `${height - 2}px`,
    objectFit: mode,
  };

  return (
    <ImageWrapper style={{ ...props, ...WrapperStyle }}>
      <img src={src} alt={alt} style={{ ...CardStyle }} />
    </ImageWrapper>
  );
}
