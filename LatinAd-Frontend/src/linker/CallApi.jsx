import axios from 'axios';

const urlBase = "https://challenge-front-7fw1.onrender.com"

export async function getListar(){
    try {
        const response = await axios.get(`${urlBase}/display`, {
            params: {
                pageSize: 10,
                offset: 0
            },
            headers: {
                'Authorization': "Bearer MTUtcm9tZXJvYWd1c3RpbjE0MDRAZ21haWwuY29t"
            }
        });
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}
