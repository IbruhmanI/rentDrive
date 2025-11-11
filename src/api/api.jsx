import axios from 'axios'
export const api = axios.create({
    baseURL: 'https://era-motors.ru/api/v1'
})

export const requester = async(url)=>{
    try{
        const response = await api.get(url);
        return response.data
    } catch (error){
        console.log('error')
        throw error
    }
}

export const get={
    getAboutCompany:()=> requester('about-company/')
}