import { useEffect, useState } from "react";
import Room from "./room";
import { FormattedMessage } from "react-intl";

function RoomsList(props) {
  const [allRooms, setAllRooms] = useState([]);
  const [selectedRooms, setSelectedRooms] = useState([]);

  useEffect(() => {
    const url =
      "https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json";
    async function fetchRooms() {
      return await (await fetch(url)).json();
    }

    async function fetchGuardarInfo() {
      const rooms = await fetchRooms();
      setAllRooms(rooms);
      localStorage.setItem("rooms", rooms);
      let temSelectedRooms = [];
      for (let i = 0; i < rooms.length; i++) {
        if (rooms[i].homeId === props.spaceId) {
          temSelectedRooms[i] = rooms[i];
        }
      }
      setSelectedRooms(temSelectedRooms);
      localStorage.setItem("rooms", temSelectedRooms);
    }

    if (!navigator.onLine) {
      if (localStorage.getItem("rooms") === null) {
        setSelectedRooms([]);
      } else {
        const cacheRooms = allRooms;
        let temSelectedRooms = [];
        for (let i = 0; i < cacheRooms.length; i++) {
          if (cacheRooms[i].homeId === props.spaceId) {
            temSelectedRooms[i] = cacheRooms[i];
          }
        }
        setSelectedRooms(temSelectedRooms);
        localStorage.setItem("rooms", temSelectedRooms);
      }
    } else {
      fetchGuardarInfo();
    }
  }, [allRooms, props.spaceId]);

  return (
    <div>
      <h1><FormattedMessage 
      id="MyRooms"/></h1>
      <div class="row">
        {selectedRooms.map((r, i) => (
          <Room key={i + 1} spaceId={props.spaceId} onClick={props.roomClicked} room={r} />
        ))}
      </div>
    </div>
  );
}

export default RoomsList;
