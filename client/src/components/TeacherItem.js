import React from "react";
import Col from "react-bootstrap/Col"
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import { useNavigate } from "react-router-dom";
import { TEACHER_PAGE_ROUTE } from "../utils/consts";
import Star from "../assets/star.png"

const TeacherItem = ({teacher}) => {
    const navigate = useNavigate()

    return (
        <Col md={"12"} onClick={() => navigate(TEACHER_PAGE_ROUTE + '/' + teacher.id)}>
            <Card style={{cursor: 'pointer'}} className="mb-3 p-3">
                <div className="d-flex">
                    <Image width={150} height={200} src={"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"} />
                    <div className="p-4">
                        <h3>
                            {teacher.name}
                        </h3>
                        <h6>
                            {teacher.sub}
                        </h6>
                        <div className="d-flex pl-3 pr-3">
                            <div style={{fontSize: "20px"}}  className="mr-3">5</div>
                            <Image style={{aspectRatio: 1/1}} width={25} src={Star}/>
                        </div>
                        <artile>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </artile>
                    </div>
                </div>
            </Card>
        </Col>
    );
};

export default TeacherItem;