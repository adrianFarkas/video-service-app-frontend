import React, {useContext, useState} from 'react';
import FileInputZone from "./FileInputZone";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import styled from "styled-components";
import {makeStyles} from "@material-ui/core";
import {withRouter} from "react-router-dom";
import ThumbnailSelector from "./ThumbnailSelector";
import Loader from "../util/Loader";
import {ThemeContext} from "../../contexts/ThemeContext";

function UploadForm(props) {
    const {theme} = useContext(ThemeContext);
    const [videoFile, setVideoFile] = useState(null);
    const [selectedImageUrl, setImageUrl] = useState(null);
    const [texts, setTexts] = useState({title: "", description: ""});
    const [isUploading, setUploading] = useState(false);

    const useStyles = makeStyles({
        root: {
            width: "100%",
            color: theme.authFormContent,
            "& label, label.Mui-focused, .MuiInputBase-root": {
                color: theme.authFormContent,
            },
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderColor: theme.authFormContent,
                },
                '&:hover fieldset': {
                    borderColor: theme.authFormContent,
                },
                '&.Mui-focused fieldset': {
                    borderColor: theme.authFormContent,
                },
            },
        }
    });
    const classes = useStyles();

    const SubmitButton = styled.button`
        cursor: pointer;
        padding: 10px 40px;
        margin: 20px 0;
        border-radius: 8px;
        border: none;
        position: relative;
        font-weight: bold;
        z-index: ${props => props.disabled ? -1 : 0};
        color: ${props => props.disabled ? theme.transparentSyntax : theme.background};
        background-color: ${props => props.disabled ? theme.disabled : theme.button};
    `;

    const isReadyForUpload = !(videoFile && selectedImageUrl
        && texts.title !== "" && texts.description !== "");

    const changeText = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        setTexts({...texts, [field]: value});
    };

    const handleDrop = (accepted, rejected) => {
        const file = accepted[0];
        setVideoFile(file);
    };

    const selectImg = (e, url) => {
        setImageUrl(url);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("video", videoFile);
        data.append("thumbnail", imageDataUrlToFile(selectedImageUrl));
        data.append("title", texts.title);
        data.append("description", texts.description);
        setUploading(true);
        axios.post("/upload/video", data)
            .then(res => props.history.push(`/video/${res.data}`))
    };

    const imageDataUrlToFile = (dataUrl) => {
        let byteString = atob(dataUrl.split(',')[1]),
            n = byteString.length, u8arr = new Uint8Array(n);
        while(n--){
            u8arr[n] = byteString.charCodeAt(n);
        }
        return new File([new Blob([u8arr])], `${texts.title}.jpg`, {type: "image/jpeg"});
    };

    return (
        <div>
            <form id={"upload-form"} onSubmit={handleSubmit}>
                <div className={"upload-fields-container"}>
                    <FileInputZone
                        handleDrop={handleDrop}
                        file={videoFile}
                    />
                    <div className={"upload-text-cont"}>
                        <TextField
                            id="title"
                            className={classes.root}
                            label="Title"
                            name="title"
                            variant="outlined"
                            onChange={changeText}
                            value={texts.title}
                        />
                        <TextField
                            id="description"
                            className={classes.root}
                            label="Description"
                            name="description"
                            multiline
                            rows="10"
                            variant="outlined"
                            onChange={changeText}
                            value={texts.description}
                        />
                    </div>
                </div>
                <ThumbnailSelector
                    file={videoFile}
                    selectHandler={selectImg}
                    selected={selectedImageUrl}
                />
                <SubmitButton type={"submit"} disabled={isReadyForUpload}>Upload</SubmitButton>
            </form>
            <Loader isLoading={isUploading}>
                <div>Upload in progress...</div>
                <div>Please wait!</div>
            </Loader>
        </div>
    );
}

export default withRouter(UploadForm);