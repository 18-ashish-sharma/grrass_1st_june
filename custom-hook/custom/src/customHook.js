import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useFetch(url, req){
    const [response, setResponse] = useState([]);
    const [error, setError] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    async function fetchData() {
        try {
            const res = await axios.get(url);
            console.log(res);
            setResponse(res.data);
            setIsLoading(false);
            setError(false);
        } catch {
            setError(true);
            setIsLoading(false);
        }   
    }
    useEffect(() => {
        fetchData();
    }, []);

    return {
        isLoading,
        response,
        error
    }

}