import React from 'react'
import { Card, ListGroup, ListGroupItem, Form } from 'react-bootstrap'
import CheckBox from './CheckBox'

export default class RoomCard extends React.Component {

    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Text>
                        Room Type (1 Bed/ 1 Bath)
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Name: </ListGroupItem>
                    <ListGroupItem>
                        <Form.Group>
                            <Form.Control size="sm" as="select">
                                <option>Dirty</option>
                                <option>Clean</option>
                            </Form.Control>
                            <br />
                            <Form.Control size="sm" as="select">
                                <option>Vacant</option>
                                <option>Occupied</option>
                            </Form.Control>
                        </Form.Group>
                    </ListGroupItem>
                </ListGroup>
            </Card>
        )
    }
}