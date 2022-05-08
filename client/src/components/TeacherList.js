import { observer } from "mobx-react-lite";
import React, {useContext} from "react";
import {Context} from "../index";
import Row from 'react-bootstrap/Row'
import TeacherItem from "./TeacherItem"

const TeacherList = observer(() => {
    const {subjects} = useContext(Context)
    const teachers = [
        {id: 1, name:"Marina Ivanova", sub: "Physics"},
        {id: 2, name:"Zarina Ivanova"},
        {id: 3, name:"Karina Ivanova"},
        {id: 4, name:"Darina Ivanova"}

    ]

    return (
        <Row className="d-flex mt-3">
            {teachers.map(teacher =>
                <TeacherItem key={teacher.id} teacher={teacher}/>
                )}
        </Row>
    );
});

export default TeacherList;