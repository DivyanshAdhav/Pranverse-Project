import React from 'react';
import { Button, Table, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';

function Registration() {
    const navigate = useNavigate();

    const handleAddClick = () => {
        navigate('/add-registration');
    };

    return (
        <Container fluid>
            <div className="d-flex justify-content-end mb-3">
                <Button variant="primary" onClick={handleAddClick}>
                    Add Registration
                </Button>
            </div>

            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Alice</td>
                        <td>alice@example.com</td>
                        <td>
                            <Button variant="primary" size="sm" className="me-2">
                                <FaEdit />
                            </Button>
                            <Button variant="danger" size="sm">
                                <FaTrash />
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Bob</td>
                        <td>bob@example.com</td>
                        <td>
                            <Button variant="primary" size="sm" className="me-2">
                                <FaEdit />
                            </Button>
                            <Button variant="danger" size="sm">
                                <FaTrash />
                            </Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
}

export default Registration;
