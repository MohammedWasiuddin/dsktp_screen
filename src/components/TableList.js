import { Table } from 'reactstrap';
import React from 'react';
import { Router, Link, NavLink } from 'react-router-dom';

function TableList() {
    return (
        <>
            <p>
                This is the latest 834 transaction information that you will be resending.
            </p>

            <div className='container table'>

                <Table striped bordered hover
                >
                    <thead>
                        <tr>
                            <th>Transaction Time</th>
                            <th>Event Type</th>
                            <th>Event Reason</th>
                            <th>Initiated By</th>
                            <th>Member ID</th>
                            <th>834 File Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>10/25/2020
                                2:15:14 PM
                            </td>
                            <td>Reinstatement</td>
                            <td>Re-enrollment</td>
                            <td>Jane Doe
                                (Supervisor)
                            </td>
                            <td>1234567890</td>
                            <td>to_27603_CA_834
                                _INDV_202009100
                                10001.2020.edi
                            </td>
                        </tr>
                    </tbody>
                </Table>
                &nbsp;
            </div>
        </>
    )
}

export default TableList