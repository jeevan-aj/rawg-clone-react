import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'9f4475b14f2c47b2a4d866a442e3c842'
    }
})

