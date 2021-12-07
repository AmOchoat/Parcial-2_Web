import { Card } from "react-bootstrap";

function Space(props) {
  

  return (
    <div class="col" onClick={() => props.onClick(props.space.id)}>
      <Card style={{ width: "18rem" }}>
        {/* <Card.Img variant="top" src={"./src/assets/casa.png"} /> */}
        <Card.Body>
          <Card.Title>{props.space.name}</Card.Title>
          <Card.Text>{props.space.address}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Space;
 