import { Form } from "react-bootstrap";
import ContenedorCardsNoticias from "./ContenedorCardsNoticias";

const FormularioNoticias = () => {
  return (
    <Form className="border px-5 py-5 rounded-1 bg-body-tertiary border-danger">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <div className="d-flex mb-3 align-items-center inputsColumna justify-content-evenly">
          <Form.Label>Buscar por categoría:</Form.Label>
          <Form.Select className="color-inputs anchoControls w-auto" required>
            <option disabled value={""}></option>
            <option>Comedia</option>
            <option>Drama</option>
            <option>Infantil</option>
          </Form.Select>
        </div>
      </Form.Group>
      <ContenedorCardsNoticias></ContenedorCardsNoticias>
    </Form>
  );
};

export default FormularioNoticias;
