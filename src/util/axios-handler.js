import axios from "axios";

const getUploadData = (title) => axios.get(`/upload/data?title=${title}`);

const storeVideo = (data) => axios.post("/videos", data);

const uploadVideo = (url, file, progress) => axios.put(url, file, {
    onUploadProgress: progressEvent => progress(progressEvent.total, progressEvent.loaded),
});

const uploadImage = (url, file) => axios.put(url, file);

export const upload = (videoFile, imageFile, title, description, onProgress) => new Promise(resolve => {
    getUploadData(title)
        .then(res => {
            const {videoUploadUrl, imageUploadUrl, videoFileName, imageFileName} = res.data;
            axios.all([
                uploadVideo(videoUploadUrl, videoFile, onProgress),
                uploadImage(imageUploadUrl, imageFile)
            ])
                .then(() =>
                    storeVideo({title, description, videoFileName, imageFileName})
                        .then(res => resolve(res))
                )
        })
});