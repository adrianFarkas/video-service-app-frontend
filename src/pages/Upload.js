import React, {useContext} from 'react';
import styled, {ThemeProvider} from "styled-components";
import UploadForm from "../components/upload/UploadForm";
import {ThemeContext} from "../contexts/ThemeContext";

const UploadContainer = styled.div`
    width: 80%;
    margin: 80px auto;
    background-color: ${props => props.theme.cardBg};
    border: 1px solid ${props => props.theme.syntax};
    border-radius: 10px;
    z-index: 0;
`;

const Title = styled.div`
    font-size: 20px;
    font-weight: 400;
    padding: 20px 10px;
    color: ${props => props.theme.syntax};
    text-transform: uppercase;
    margin-bottom: 20px;
    border-bottom: 1px solid ${props => props.theme.transparentSyntax};
`;

function Upload() {
    const {theme} = useContext(ThemeContext);

    return (
        <ThemeProvider theme={theme}>
            <UploadContainer className={"upload-form-cont transition"}>
                <Title className={"transition"}>Video uploading</Title>
                <UploadForm/>
            </UploadContainer>
        </ThemeProvider>
    );
}

export default Upload;