import React from 'react';
import styled from "styled-components";
import {colors} from "../theme";
import UploadForm from "../components/upload/UploadForm";

function Upload() {

    const UploadContainer = styled.div`
        width: 80%;
        margin: 80px auto;
        background-color: #fff;
        box-shadow: 1px 1px 5px rgba(104,104,104,0.8);
        border-radius: 10px;
        position: relative;
        z-index: 0;    
     `;

    const Title = styled.div`
        font-size: 20px;
        font-weight: 400;
        padding: 10px;
        color: ${colors.claret};
        margin-bottom: 20px;
        border-bottom: 1px solid #c3c3c3;
    `;

    return (
        <UploadContainer className={"upload-form-cont"}>
            <Title>Video uploading</Title>
            <UploadForm />
        </UploadContainer>
    );
}

export default Upload;