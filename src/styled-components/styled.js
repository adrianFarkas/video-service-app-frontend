import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";

export const Container = styled.div`
    width: 80%;
    margin: 0 auto;
    @media (max-width: 480px) {
       width: unset;
    }
`;

export const VideoGrid = styled.div`
     display: grid;
     grid-template-rows: repeat(4, 1fr);
     height: 47vw;
     min-height: 270px;
`;

export const VidRow = styled.div`
     grid-row-end: span 3;
     min-height: 200px;
`;

export const Img = styled.img`
    width: 100%;
    height: auto;
`;

export const CustomIconButton = styled(IconButton)`
    color: ${props => props.theme.syntax} !important;
    &:disabled {
      color: ${props => props.theme.disabled} !important;
    }
`;