import React, { useState, useEffect } from 'react';
import { List } from 'rsuite';
import useObserver from './lib/useObserver';
import UserSubject from './observers/UserList/subject';
import {ADD_USER} from "./observers/UserList/types";

const UserList = () => {

    const [data, setData] = useState([]);
    const [subscribe] = useObserver(UserSubject);

    useEffect(() => {
        subscribe(ADD_USER, (item) => addItem(item));
    }, []);

    function addItem(item) {
        const tempList = data.slice();
        tempList.push(item);
        setData(tempList);
    }

    return (
        <List size="sm">
            {data.map((item, index) => (
                <List.Item key={index} index={index}>
                    {item}
                </List.Item>
            ))}
        </List>
    );
};

export default UserList;