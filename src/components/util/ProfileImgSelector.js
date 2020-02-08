import React, {createRef, useContext, useState} from 'react';
import styled from "styled-components";
import {dataUrlToFile, fileToDataUrl, getCroppedImageDataUrl} from "../../util/util";
import ReactCrop from "react-image-crop";
import 'react-image-crop/dist/ReactCrop.css';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import BaseModal from "./BaseModal";
import {UserContext} from "../../contexts/UserContext";
import Loader from "./Loader";

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    & .MuiSvgIcon-root {
      font-size: 100px;
    }
    & img {
      width: 500px;
        @media (max-width: 500px) {
          width: 250px;
        }
    }
`;

const SelectButton = styled.label`
    padding: 10px 30px;
    margin: 15px;
    font-weight: bold;
    border: 2px solid;
    border-radius: 5px;
    text-transform: uppercase;
    cursor: pointer;
`;

const Save = styled.div`
    padding-top: 15px;
    margin-top: 20px;
    width: 100%;
    border-top: 1px solid ${props => props.theme.transparentSyntax};
`;

const SaveBtn = styled.div`
    padding: 10px 30px;
    width: 100px;
    text-align: center;
    font-weight: bold;
    border: 1px solid;
    border-radius: 5px;
    text-transform: uppercase;
    cursor: pointer;
`;

const CustomLoader = styled(Loader)`
    border-radius: 10px;
    display: ${props => !props.show && "none"};
`;

function ProfileImgSelector({open, handleClose}) {

    const {changeProfilePicture} = useContext(UserContext);
    const [changing, setChanging] = useState(false);
    const [imgSrc, setImgSrc] = useState(null);
    const [crop, setCrop] = useState({width: 250, aspect: 1});

    const cropRef = createRef();

    const onFileChange = (e) => {
        fileToDataUrl(e.target.files[0])
            .then(url => setImgSrc(url));
    };

    const onCropChange = (crop) => {
        setCrop(crop)
    };

    const close = () => {
        handleClose();
        setCrop({width: 250, aspect: 1});
        setImgSrc(null);
        setChanging(false);
    };

    const changeImage = () => {
        const image = cropRef.current.imageRef;
        const croppedImgUrl = getCroppedImageDataUrl(image, crop);
        const imageFile = dataUrlToFile(croppedImgUrl, "image/jpeg", "profile_picture");
        const data = new FormData();
        data.append("file", imageFile);
        setChanging(true);
        changeProfilePicture(data)
            .then(success => success && close())
    };

    const content = !imgSrc ? (
        <Content>
            <ImageSearchIcon/>
            <SelectButton htmlFor={"img-input"}>Select Image</SelectButton>
            <input
                id={"img-input"}
                type={"file"}
                accept={"image/jpeg"}
                style={{display: "none"}}
                onChange={onFileChange}
            />
        </Content>
    ) : (
        <Content>
            <ReactCrop
                src={imgSrc}
                crop={crop}
                onChange={onCropChange}
                ref={cropRef}
            />
            <Save>
                <SaveBtn onClick={changeImage}>Save</SaveBtn>
            </Save>
            <CustomLoader show={changing}/>
        </Content>
    );

    return (
        <BaseModal
            open={open}
            handleClose={close}
            title={"Change profile picture"}
        >
            {content}
        </BaseModal>
    );
}

export default ProfileImgSelector;