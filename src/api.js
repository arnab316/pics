import axios from "axios";


const SerachImages = async(term) => {
 const response=await axios.get('https://api.unsplash.com/search/photos?page=1&query',{
    headers: {
        Authorization: 'Client-ID YeGFzJ4Dmj0SI1cjH0qmwuUU0AkRqfE_P7EBhceo2cY'
    }, 
    params: {
            query: term,
        },
        
    });
    return response.data.results;
};
export default SerachImages;