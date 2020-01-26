import React, {useContext} from 'react';
import styled from "styled-components";
import UploadForm from "../components/upload/UploadForm";
import {ThemeContext} from "../contexts/ThemeContext";

function Upload() {
    const {theme} = useContext(ThemeContext);

    const UploadContainer = styled.div`
        width: 80%;
        margin: 80px auto;
        background-color: ${theme.cardBg};
        border: 1px solid ${theme.syntax};
        border-radius: 10px;
        z-index: 0;    
     `;

    const Title = styled.div`
        font-size: 20px;
        font-weight: 400;
        padding: 20px 10px;
        color: ${theme.syntax};
        text-transform: uppercase;
        margin-bottom: 20px;
        border-bottom: 1px solid ${theme.transparentSyntax};
    `;

    return (
        <UploadContainer className={"upload-form-cont"}>
            <Title>Video uploading</Title>
            <UploadForm/>
        </UploadContainer>
    );
}

export default Upload;