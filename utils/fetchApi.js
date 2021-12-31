import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
                'x-rapidapi-key': 'a0b235c575msh6b6911bc8928ab9p116993jsnac85cbf17f82'
        }
    });

    return data;
}