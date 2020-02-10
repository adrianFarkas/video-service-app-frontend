import React from 'react';
import styled from "styled-components";
import UploadForm from "../components/upload/UploadForm";

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

    return (
        <UploadContainer className={"upload-form-cont transition"}>
            <Title className={"transition"}>Video uploading</Title>
            <UploadForm/>
        </UploadContainer>
    );
}

export default Upload;