import React, {useContext, useState} from 'react';
import FileInputZone from "./FileInputZone";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import {makeStyles} from "@material-ui/core";
import {withRouter} from "react-router-dom";
import ThumbnailSelector from "./ThumbnailSelector";
import Progress from "../util/Progress";
import {ThemeContext} from "../../contexts/ThemeContext";
import {upload} from "../../util/axios-handler";
import {dataUrlToFile} from "../../util/util";

function UploadForm(props) {
    const {theme} = useContext(ThemeContext);
    const [videoFile, setVideoFile] = useState(null);
    const [selectedImageUrl, setImageUrl] = useState(null);
    const [texts, setTexts] = useState({title: "", description: ""});
    const [isUploading, setUploading] = useState(false);
    const [uploadStatus, setUploadStatus] = useState(0);

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
        const imageFile = dataUrlToFile(selectedImageUrl, "image/jpeg");
        setUploading(true);
        upload(videoFile, imageFile, texts.title, texts.description, onProgress)
            .then(res => props.history.push(`/video/${res.data}`))
    };

    const onProgress = (total, loaded) => {
        setUploadStatus(Math.round( (loaded * 100) / total));
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
            <Progress open={isUploading} value={uploadStatus}>
                <div>Upload in progress...</div>
                <div>Please wait!</div>
            </Progress>
        </div>
    );
}

export default withRouter(UploadForm);