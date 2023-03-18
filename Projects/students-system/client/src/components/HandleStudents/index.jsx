import { Container } from "./style";
import axios from"axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import { BsSearch } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import Modal from 'react-bootstrap/Modal';
import { FormUpdate } from "../FormUpdate";

export function HandleStudents() {
    const [listStudents, setListStudents] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [studentData, setStudentData] = useState({});
    const [searchStudent, setSearchStudent] = useState("")

    const filterStudents = listStudents.filter((student) => {
        return (
            String(student.id).toLowerCase().includes(searchStudent.toLowerCase()) ||
            student.name.toLowerCase().includes(searchStudent.toLowerCase()) ||
            student.city.toLowerCase().includes(searchStudent.toLowerCase())
        )
    })

    const modalOpen = (studentID) =>  { 
        setShowModal(true)
        const student = listStudents.findIndex(student => student.id == studentID);
        setStudentData(listStudents[student]);
    };

    const modalClose = () => setShowModal(false);

    const API = "http://localhost:3000/students";

    function fetchStudents() {
        axios.get(API)
            .then((res) => setListStudents(res.data))
            .catch((error) => alert(error));
    }

    useEffect(() => {
        fetchStudents();
    }, []);
    
    return (
        <Container>
            <article>
                <section className="titleSearch">
                    <h1>Alunos</h1>
                    <div className="inputSection">
                        <input
                            id="inputSearchStudent" 
                            type="text"
                            placeholder=" "
                            value={searchStudent}
                            onChange={(event) => setSearchStudent(event.target.value)}
                        />
                        <label htmlFor="inputSearchStudent" className="labelInputSearch">
                            Buscar aluno
                        </label>
                        <BsSearch className="searchIcon"/>
                    </div>
                </section>

                <section className="tableStudents">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Telefone</th>
                                <th>Cidade</th>
                                <th>Detalhes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listStudents && 
                                filterStudents.map((students) => {
                                    return (
                                        <tr key={students.id}>
                                            <td>{students.id}</td>
                                            <td>{students.name}</td>
                                            <td>{students.phone}</td>
                                            <td>{students.city}</td>
                                            <td>
                                                <BiEdit className="editIcon" onClick={() => modalOpen(students.id)}/>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </section>

                <section>
                    <Modal show={showModal} onHide={modalClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Aluno</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <FormUpdate 
                                modalClose={modalClose}
                                studentData={studentData} 
                                fetchStudents={fetchStudents}
                            />
                        </Modal.Body>
                    </Modal>
                </section>

            </article>
        </Container>
    )
}