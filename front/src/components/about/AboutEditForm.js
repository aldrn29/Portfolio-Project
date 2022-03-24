import React, { useState } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";

import "react-bootstrap-typeahead/css/Typeahead.css";

// import * as Api from "../../api";

function AboutEditForm({ userAbout, setIsEditing, setUserAbout }) {
    const [blog, setBlog] = useState(userAbout.blog);
    const [skill, setSkill] = useState(userAbout.skill);
    const [position, setPosition] = useState(userAbout.position);
    const [hobby, setHobby] = useState(userAbout.hobby);

    const options = [
        "Java",
        "JavaScript",
        "TypeScript",
        "Python",
        "C",
        "C++",
        "C#",
        "AngularJS",
        "ReactJS",
        "VueJS",
        "ExpressJS",
        "NodeJS",
        "Flutter",
        "Flask",
        "Django",
        "Spring",
    ];

    const handleSubmit = async (event) => {
        event.preventDefault();

        const updatedAbout = {
            blog,
            skill,
            position,
            hobby,
        };
        // try {
        //     const res = await Api.put("abouts", newAbout);

        //     setUserAbout(res.data);
        // } catch (err) {
        //     console.log("관련사항 수정에 실패하였습니다.", err);
        // }

        //! 테스트용
        setUserAbout(updatedAbout);
        setIsEditing(false);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="aboutEditBlog" className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="블로그"
                    value={blog}
                    onChange={(event) => setBlog(event.target.value)}
                    size="sm"
                />
            </Form.Group>

            <Form.Group controlId="aboutEditSkill" className="mb-3">
                <Typeahead
                    id="about-skill-multiple"
                    multiple
                    onChange={setSkill}
                    options={options}
                    placeholder="해당하는 기술스택을 선택하세요"
                    selected={skill}
                    size="sm"
                    emptyLabel="해당하는 기술이 없습니다 영어로 검색하세요"
                />
            </Form.Group>

            <Form.Group controlId="aboutEditPosition" className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="포지션"
                    value={position}
                    onChange={(event) => setPosition(event.target.value)}
                    size="sm"
                />
            </Form.Group>

            <Form.Group controlId="aboutEditHobby">
                <Form.Control
                    type="text"
                    placeholder="취미"
                    value={hobby}
                    onChange={(event) => setHobby(event.target.value)}
                    size="sm"
                />
            </Form.Group>

            <Form.Group as={Row} className="mt-3 text-center">
                <Col sm={{ span: 20 }}>
                    <Button variant="primary" type="submit" className="me-3">
                        확인
                    </Button>
                </Col>
            </Form.Group>
        </Form>
    );
}

export default AboutEditForm;
