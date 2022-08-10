import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Carta = (props) => {
  return (
    <div className='estilo-carta'>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={`https://i.postimg.cc/${props.imagen}`} />
        <Card.Body>
            <Card.Title> {props.titulo} </Card.Title>
            <Card.Text> {props.texto} </Card.Text>
            <Button variant="danger">{props.boton}</Button>
        </Card.Body>
        </Card>
    </div>
  );
}

export default Carta;