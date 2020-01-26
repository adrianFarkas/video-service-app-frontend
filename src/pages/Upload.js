import React, {useContext} from 'react';
import styled from "styled-components";
import UploadForm from "../components/upload/UploadForm";
import {ThemeContext} from "../contexts/ThemeContext";

const UploadContainer = styled.div`
    width: 80%;
    margin: 80px auto;
    background-color: ${props => props.cardBg};
    border: 1px solid ${props => props.syntax};
    border-radius: 10px;
    z-index: 0;
`;

const Title = styled.div`
    font-size: 20px;
    font-weight: 400;
    padding: 20px 10px;
    color: ${props => props.syntax};
    text-transform: uppercase;
    margin-bottom: 20px;
    border-bottom: 1px solid ${props => props.transparentSyntax};
`;

function Upload() {
    const {theme} = useContext(ThemeContext);

    return (
        <UploadContainer {...theme} className={"upload-form-cont transition"}>
            <Title className={"transition"} {...theme}>Video uploading</Title>
            <UploadForm theme={theme}/>
        </UploadContainer>
    );
}

export default Upload;