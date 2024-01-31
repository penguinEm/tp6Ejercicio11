import { Container } from "react-bootstrap";
import Titulo from "./components/Titulo";
import FormularioNoticias from "./components/FormularioNoticias";

function App() {
  return (
    <>
      <Container className="main my-5">
        <Titulo></Titulo>
        <FormularioNoticias></FormularioNoticias>
      </Container>
    </>
  );
}

export default App;
