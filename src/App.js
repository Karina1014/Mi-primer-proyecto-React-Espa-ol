import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Mi primer proyecto en React</h1>
      <Testimonio 
        nombre='Karina Simbaña'
        pais='Ecuador'
        imagen='karina'
        cargo='Estudiante de Ingeniería en Sistemas'
        testimonio='Como estudiante de ingeniería, me esfuerzo cada día por aprender algo nuevo. Creo firmemente que dar lo mejor de mí no solo me acerca a mis metas, sino que también inspira a quienes me rodean a seguir creciendo. Cada desafío es una oportunidad para ser mejor.'
      />
       
       <Testimonio 
          nombre='Karina Simbaña'
          pais='Ecuador'
          imagen='icon-user'
          cargo='Apasionada por el aprendizaje continuo'
          testimonio='Mi pasión por la tecnología y la innovación me impulsa a seguir aprendiendo todos los días. En cada proyecto encuentro una oportunidad para mejorar y crecer. Aprender, no solo como estudiante, sino también como persona, es lo que me motiva a seguir adelante.'
        />
     </div>
    </div>
  );
}

export default App;
