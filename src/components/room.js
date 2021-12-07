import { Card } from "react-bootstrap";

function Room(props) {
  return (
    <div class="col" onClick={() => props.onClick(props.room.devices)}>
      <Card>
        <Card.Body>
          <Card.Text>{props.room.name}</Card.Text>
          <Card.Text>{props.room.homeId}</Card.Text>
        </Card.Body>
        {/* <Card.Img variant="bottom" src="holder.js/100px180" /> */}
      </Card>
    </div>
  );
}

export default Room;
