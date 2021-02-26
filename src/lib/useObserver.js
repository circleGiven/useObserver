import React, {useState, useEffect} from 'react';

function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

const UseObserver = (Subject) => {

    const [id, setId] = useState(uuidv4());

    useEffect(() => {

        return () => {
            allUnsubscribe();
        }
    }, []);

    const subscribe = (type, callback) => {
        Subject.subscribe({
            id: id,
            type: type,
            callback: callback
        })
    }

    const unsubscribe = (type) => {

    }

    const allUnsubscribe = () => {
        Subject.allUnsubscribe(id);
    }

    const notify = (type, payload) => {
        Subject.notify(type, payload);
    }


    return [subscribe, unsubscribe, notify];
};
export default UseObserver;