import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

const SubjectBar = observer(() => {
    const {subjects} = useContext(Context)

    return (
        <ListGroup className='mt-3'>
            {subjects.types.map(type =>
                <ListGroup.Item 
                style={{cursor: 'pointer'}}
                active={type.id === subjects.selectedType.id}
                onClick={() => subjects.setSelectedType(type)}
                key={type.id}
                >
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default SubjectBar;