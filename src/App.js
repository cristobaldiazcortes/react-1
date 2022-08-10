
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Carta from './components/Carta';
import Footer from './components/Footer';


function App() {
  return (
  <div>
      <Header titulo = "Simios del mundo" />
      <br></br>
      <div className='contenedor-carta'>
        < Carta
          imagen = "650VhBgF/chimpance.jpg"
          titulo = "Chimpancé"
          texto = "Mono antropomorfo , poco más bajo que el hombre , de brazos largos , pues las manos le llegan a las rodillas cuando el animal está en posición vertical . Tiene cabeza grande , barba y cejas prominentes , nariz aplastada y todo el cuerpo cubierto de pelo de color pardo negruzco ."
          boton = "ver hábitat"
        />
        <br></br>
        < Carta
          imagen = "FKQLtqM0/macaco.jpg"
          titulo = "Macaco"
          texto = "Es un macaco típico, común desde Afganistán al norte de la India y China meridional. Los machos crecen y alcanzan una altura de 60 cm, con una cola de unos 30 cm. Presentan dimorfismo sexual; los machos pueden pesar hasta 6 kg; las hembras hasta la mitad y medir 40 cm. Tienen un color que varía desde el marrón al gris, con la cara rosada. Tienen una expectativa de vida de cerca de 25 años. No se conocen subespecies."
          boton = "ver hábitat"
        />
        <br></br>
        < Carta
          imagen = "x8bmV21y/orangutan.jpg"
          titulo = "Orangután"
          texto = "Tienen el estilo de vida más solitario de todos los monos antropomorfos; únicamente existen lazos sociales duraderos entre madre y cría. No se quedan atrás, sin embargo, en cuanto a inteligencia. En su medio natural, fabrican y utilizan herramientas sofisticadas y muestran gran pericia construyendo nidos en los árboles. Se alimentan principalmente de fruta, aunque su dieta también incluye otros vegetales, miel, insectos, huevos de aves."
          boton = "ver hábitat"
        />
        <br></br>
        < Carta
          imagen = "3rvMbcZK/monito-del-monte.jpg"
          titulo = "Monito del monte"
          texto = "Los monitos de monte son animales pequeños, de unos 20-25 cm desde el hocico hasta la cola, de los cuales entre 9 y 13 cm son de la cola. Pesan entre 20 y 42 gramos. Poseen hocico corto y ojos grandes y oscuros. El color del pelo es marrón a pardo grisáceo en el dorso y blanco o gris en el vientre, los hombros y las patas. Las hembras poseen un marsupio con cuatro mamas en su interior. La cola es prensil."
          boton = "ver hábitat"
        />
      </div>
      <br></br>
      < Footer 
        titulo = "ningún derecho reservado"
        boton = "buscar mas información"
      />
  </div>
  );
  }
  export default App;
