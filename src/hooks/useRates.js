import {useEffect, useState} from 'react';
import {getAuthenticatedUserRate, getCountOfRates} from "../util/axios-handler";

function useRates(videoId, isLoggedIn) {
    const [rates, setRates] = useState({UP: 0, DOWN: 0});
    const [userRate, setUserRate] = useState(null);

    useEffect(() => {
        if (videoId) {
                getCountOfRates(videoId)
                    .then(res => setRates(res));
            if(isLoggedIn)
                getAuthenticatedUserRate(videoId)
                    .then(res => setUserRate(res.rate))
        }
    }, [videoId, isLoggedIn]);

    return [rates, setRates, userRate, setUserRate];
}

export default useRates;