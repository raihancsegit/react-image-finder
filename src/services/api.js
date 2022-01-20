import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const API_KEY = '25295536-c0e6df128b72d649e5d8cfe12';

export const getImages = async (text, count) => {
    try{
        const data = await axios.get(`${URL}/?key=${API_KEY}&q=${text}&image_type=photo&per_page=${count}&safesearch=true`)
        return data;
    }catch(error){
        console.log(error)
    }
}