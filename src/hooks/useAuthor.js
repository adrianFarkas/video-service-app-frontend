import {useEffect, useState} from 'react';
import axios from "axios";

function useAuthor(initialState, id) {
    const emptyUser = {firstName: "", lasName: "", profileImg: ""};
    const [user, setUser] = useState(initialState ? initialState : emptyUser);

    useEffect(() => {
        if (id) {
            axios.get(`/user/${id}`)
                .then(res => setUser(res.data))
        }
    }, [id]);

    return user;
}

export default useAuthor;
