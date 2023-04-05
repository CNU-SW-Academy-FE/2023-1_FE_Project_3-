import styled from "@emotion/styled"

const ImageWrapper = styled.div`
    border-radius: 4px;
    border: 0.2px solid white;

    &:hover {
        cursor: pointer;
        filter: brightness(120%);
    }
`;

export default function Card({
    src,
    alt = "No-Image",
    width = "270px",
    height = "480px",
    block = false,
    mode = "cover",
    ...props
}) {
    const CardStyle = {
        display: "inline-block",
        width: width,
        height: height,
        minWidth: width,
        minHeight: height,
        objectFit: mode
    };

    return (
        <ImageWrapper style={{display: block ? "block" : "inline-block"}}>
            <img src={src} alt={alt} style={{...props, ...CardStyle}} />
        </ImageWrapper>
    )
}