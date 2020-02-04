import axios from "axios";
axios.defaults.withCredentials = true;
const baseUrl = process.env.REACT_APP_BACKEND_URL;

const getUploadData = (title) => axios.get(`${baseUrl}/upload/data?title=${title}`);

const storeVideo = (data) => axios.post(`${baseUrl}/videos`, data);

const uploadVideo = (url, file, progress) => axios.put(url, file, {
    withCredentials: false,
    onUploadProgress: progressEvent => progress(progressEvent.total, progressEvent.loaded),
});

const uploadImage = (url, file) => axios.put(url, file, {withCredentials: false});

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

export const getThumbnails = (data) => {
    return axios.post(`${baseUrl}/create/thumbnails`, data)
        .then(res => Promise.resolve(res.data));
};

export const getCountOfRates = (videoId) => {
    return axios.get(`${baseUrl}/rates/video/count?id=${videoId}`)
        .then(res => Promise.resolve(res.data))
};

export const getAuthenticatedUserRate = (videoId) => {
    return axios.get(`${baseUrl}/rates/user/video?id=${videoId}`)
        .then(res => Promise.resolve(res.data))
};

export const sendRate = (videoId, rate) => {
    return axios.post(`${baseUrl}/rates/video?id=${videoId}&rate=${rate}`)
        .then(res => Promise.resolve(res.data))
};

export const deleteRate = (videoId) => {
    return axios.delete(`${baseUrl}/rates/video?id=${videoId}`)
        .then(res => Promise.resolve(res.data))
};