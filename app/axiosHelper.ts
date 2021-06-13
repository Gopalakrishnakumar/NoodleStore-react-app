import axios from "axios";

axios.interceptors.response.use(res => {
    if (res.status == 200) {
        return res.data;
    }
    else {
        console.log('ERROR- ', res);
        return Promise.reject(res);
    }
}, err => {
    console.log('ERROR- ', err);
    return Promise.reject(err);
});

const getNoodles = () => axios.get("https://s3-ap-southeast-1.amazonaws.com/he-public-data/TopRamen8d30951.json");

const getImages = () => axios.get("https://s3-ap-southeast-1.amazonaws.com/he-public-data/noodlesec253ad.json");

export { getNoodles, getImages };