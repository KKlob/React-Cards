import { useState } from 'react';
import axios from 'axios';
import { v4 as uuid } from 'uuid';

const useFlip = (initialState = true) => {
    const [state, setState] = useState(initialState);
    const toggleState = () => {
        setState(state => !state);
    }
    return [state, toggleState]
}

const useAxios = (url) => {
    const [data, setData] = useState([]);
    const addData = async () => {
        const res = await axios.get(url);
        setData(data => [...data, { ...res.data, id: uuid() }]);
    }
    return [data, addData];
}

export { useFlip, useAxios };