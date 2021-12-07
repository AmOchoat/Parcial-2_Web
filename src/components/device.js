import React from "react";

function Device(props) {

    return (
        <tr>
            <th scope="row">1</th>
            <td>{props.device.id}</td>
            <td>{props.device.name}</td>
            <td>{props.device.desired.value}</td>
        </tr>
    )
}

export default Device;