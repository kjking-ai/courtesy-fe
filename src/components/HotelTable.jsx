import React from 'react'
import '../App.css'
import { Table } from 'react-bootstrap'
import RoomCard from './RoomCard'

export default class HotelTable extends React.Component {

    render() {
        return (
            <Table responsive>
                <tbody>
                    <tr>
                        <td>King Rooms</td>
                        {Array.from({ length: 4 }).map((_, index) => (
                            <td key={index}>
                                <RoomCard />
                            </td>
                        ))}
                    </tr>
                    {/* <tr>
                        <td>Queen Rooms</td>
                        {Array.from({ length: 4 }).map((_, index) => (
                            <td key={index}>
                                        Table cell 
                                    {index}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Test</td>
                        {Array.from({ length: 4 }).map((_, index) => (
                            <td key={index}>Table cell {index}</td>
                        ))}
                    </tr> */}
                </tbody>
            </Table>
        )
    }
}