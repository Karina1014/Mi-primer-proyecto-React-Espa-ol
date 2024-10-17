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
          imagen='amigos'
          cargo='Estudiante de Ingeniería en Sistemas'
          testimonio='Durante mis estudios en la Universidad Central, tuve la oportunidad de conocer a Will y Jessy. Ambos se convirtieron en grandes amigos y compañeros de estudio. Juntos compartimos aprendizajes y superamos muchos retos en nuestra carrera, lo que hizo de mi experiencia universitaria algo inolvidable.'
        />
     </div>
    </div>
  );
}

export default App;
