import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
const Footer = (props) => {
    return (
      <div>
        <Container>
            <div className='bajada'>
                <p>{props.titulo}</p>   
                <Button variant="warning" href="https//:www.google.cl" target="_blank">{props.boton}</Button>
            </div>
        </Container>
      </div>
    );
}    

export default Footer;
