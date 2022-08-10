import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';



const Header = (props) => {
  return (
    <div className='header-contenedor'>
        <Container>
            <Navbar variant="dark" bg="success">
            <Container>
                <Navbar.Brand href="#">{props.titulo}</Navbar.Brand>
            </Container>
            </Navbar>
        </Container>
    </div>
  );
}


export default Header;