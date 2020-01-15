import React, {createRef} from 'react';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Dropzone from "react-dropzone";
import styled from "styled-components";
import {colors} from "../../theme";

function FileInputZone({handleDrop, file}) {

    const dropZoneRef = createRef();

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
       border-color: ${props => getBorderColor(props)};
       background-color: ${props => getBackgroundColor(props)};
       transition: all .3s ease-in-out 0s;
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
        color: #fff;
        padding: 10px 30px;
        background-color: ${colors.claret};
        border-radius: 8px;
        border: none;
        
    `;

    const getBorderColor = (props) => {
        if (props.isDragAccept) return "rgba(0,141,255,0.3)";
        if (props.isDragReject) return "rgba(255,8,0,0.3)";
        else return "rgba(195,195,195,0.2)"
    };

    const getBackgroundColor = (props) => {
        if (props.isDragAccept) return "rgba(0,141,255,0.05)";
        if (props.isDragReject) return "rgba(255,8,0,0.05)";
        else return "rgba(235,235,235,0.2)"
    };

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
                <DropContainer {...getRootProps({isDragActive, isDragAccept, isDragReject})}
                               className={"drop-container"}
                >
                    <CloudUploadIcon style={{fontSize: "60px", color: colors.claret}}/>
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