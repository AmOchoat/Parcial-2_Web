import React, { useState } from "react";

import SpacesList from "./spaceList";
import RoomsList from "./roomList";
import DeviceList from "./deviceList";

function Main(){

    const [space, setSpace] = useState("");
    const [devices, setDevices] = useState([]);

    function updateSpace(id) {
        setSpace(id)
    }

    function updateDevices(devices) {
        setDevices(devices)
    }

    return(
        <div class="container-fluid">
            <div class="row">
                <SpacesList spaceClicked={updateSpace}/>
            </div>
            <div class="row">
                <div class="col-6">
                    <RoomsList spaceId={space} roomClicked={updateDevices}/>
                </div>
                <div class="col-6">
                    <DeviceList devicesList={devices}/>
                </div>
            </div>
        </div>
    )
}

export default Main;