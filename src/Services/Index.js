import axios from 'axios';

const URL_VUELOS = "http://127.0.0.1:8000/flights/flights/";
const URL_FILTROS = "";

const endpoints = {
    getVuelos: async (city_of_origin, destination_city, departure_date, return_date, adults) => {
        try {
            const config = {
                headers: {
                    accept: "*/*",
                    "Content-Type": "application/json",
                },
            };
            const response = await axios.get(URL_VUELOS, {
                params: {
                    city_of_origin,
                    destination_city,
                    departure_date,
                    return_date,
                    adults
                },
                ...config
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching flights:', error);
            throw error;
        }
    }
};

export { endpoints };
