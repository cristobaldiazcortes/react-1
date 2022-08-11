import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
const Footer = (props) => {
  return (
    <div>
      <Container>
        <div className="bajada">
          <p className="titulo-bajada">{props.titulo}</p>
          <Button variant="warning" type="submit">
            <a href="https://google.com" target="_blank" rel="noreferrer">  {props.boton}  </a>
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
