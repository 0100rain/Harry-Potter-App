import axios from "axios"

const fetchingData = async () => { 
    try {
        const response = await axios.get("https://harry-potter-api.onrender.com/personajes")
        return response.data
    }
    catch (error){
        throw error
    }
}


export {fetchingData}