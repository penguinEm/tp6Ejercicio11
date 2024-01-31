import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";

const Noticia = () => {
  return (
    <Card className="mt-5 px-0 shadow" style={{ width: "18rem" }}>
      <Card.Header>
        <Card.Title>Título de la noticia</Card.Title>
        <Card.Subtitle className="text-secondary">Diario Z</Card.Subtitle>
      </Card.Header>
      <Card.Body className="cardScrool">
        <Card.Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad ipsa
          error doloremque nobis rem nisi, quis illo incidunt consequuntur
          eveniet dolorem harum, assumenda cumque sint quas a accusantium.
          Quibusdam, cumque.
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-end">
        <Button variant="danger">Ver mas</Button>
      </Card.Footer>
    </Card>
  );
};

export default Noticia;
