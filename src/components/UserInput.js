import React, {useState} from 'react';
import { Input, InputGroup, Icon } from 'rsuite';
import useObserver from "../lib/useObserver";
import UserSubject from "../observers/UserList/subject";
import {ADD_USER} from "../observers/UserList/types";

const styles = {
    width: 300,
    marginBottom: 10
};

const UserInput = () => {

    const [data, setData] = useState('');
    const [subscribe, unsubscribe, notify] = useObserver(UserSubject);

    function handleAdd() {
        notify(ADD_USER, data);
        setData('');
    }

    return (
        <div>
            <InputGroup style={styles}>
                <Input value={data} onChange={setData}/>
                <InputGroup.Button onClick={handleAdd}>
                    <Icon icon="plus" />
                </InputGroup.Button>
            </InputGroup>
        </div>
    );
};

export default UserInput;