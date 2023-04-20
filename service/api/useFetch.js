import { useEffect, useState } from "react"
import { API_KEY } from '@env';
import axios from "axios";
//custom hook function 
//this gonna be a function class which help to fetch data from API
//endpoint gonna come into as prop

const api = API_KEY;
const useFetch = (endpoint, query) => {

    // init useState with default value
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        //template string to make it more dynamic
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': api,
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        //make it as object and spread passed into it
        params: { ...query },

    };

    //logic to begin fetch data
    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request(options);

            //once get the response then store into variable
            setData(response.data.data);

        } catch (err) {
            setError(err);
            alert('Error happened while requesting');
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();

    }, [])

    //doing some re-fetch for data by triggering from button or something
    const refetch = () => {
        setIsLoading(false);
        fetchData();
    }

    //return the object from this class to make it accessible
    return { data, isLoading, error, refetch }
}