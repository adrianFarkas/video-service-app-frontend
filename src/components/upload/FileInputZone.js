import React, {createRef} from 'react';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Dropzone from "react-dropzone";
import styled from "styled-components";

const DropContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center; 
    align-items: center;
    width: 35%;
    border-width: 2px; 
    border-style: dashed;
    color: ${props => props.theme.syntax};
    border-color: ${props => getBorderColor(props)};
    background-color: ${props => getBackgroundColor(props)};
    transition: all .5s;
    & .MuiSvgIcon-root {
      font-size: 60px;
      color: ${props => props.theme.button};
    }
`;

const Text = styled.div`
    width: 80%;
    height: 40px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin: 15px;
`;

const BrowseButton  = styled.div`
    cursor: pointer;
    color: ${props => props.theme.background};
    font-weight: bold;
    padding: 10px 30px;
    background-color: ${props => props.theme.button};
    border-radius: 8px;
    border: none;
    transition: all .5s;
`;

const getBorderColor = (props) => {
    if (props.isDragAccept) return "rgba(0,141,255,0.3)";
    if (props.isDragReject) return "rgba(255,8,0,0.3)";
    else return props.transparentSyntax;
};

const getBackgroundColor = (props) => {
    if (props.isDragAccept) return "rgba(0,141,255,0.05)";
    if (props.isDragReject) return "rgba(255,8,0,0.05)";
    else return null;
};

function FileInputZone({handleDrop, file}) {

    const dropZoneRef = createRef();

    const openDialog = () => {
        if (dropZoneRef.current) {
            dropZoneRef.current.open()
        }
    };

    const text = !file ?
        <Text>
            <div>Drag and Drop file</div>
            <div>or</div>
        </Text>
        :
        <Text>{file.name}</Text>;

    return (
        <Dropzone
            multiple={false}
            accept="video/mp4"
            maxSize={1000000000}
            onDrop={handleDrop}
            noClick
            ref={dropZoneRef}
        >
            {({getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject}) => (
                <DropContainer
                    {...getRootProps({isDragActive, isDragAccept, isDragReject})}
                    className={"drop-container"}
                >
                    <CloudUploadIcon/>
                    {!isDragActive && text}
                    {isDragAccept && <Text>Drop here!</Text>}
                    {isDragReject && <Text>You can't upload this type or multiple file!</Text>}
                    <BrowseButton onClick={openDialog}>Browse</BrowseButton>
                    <input id={"input"} {...getInputProps()}/>
                </DropContainer>
            )}
        </Dropzone>
    );
}

export default FileInputZone;