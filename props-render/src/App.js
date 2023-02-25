import './App.css';
import Frieza from './components/Frieza';
import HocGamers from './components/gamers/HocGamers';
import Goku from './components/Goku';
import Vegeta from './components/Vegeta';

function App() {
  return (
    <div className='container bg-warning'>
      <h1 className='text-center fst-italic text-success fw-bold'>
        Props de rendu
      </h1>

      <div className='row'>
        <HocGamers
          render={(hits, addOne, saiyan) => {
            return (
              saiyan.vegeta && (
                <Vegeta hits={hits} addOne={addOne} name='Vegeta' />
              )
            );
          }}
        />
        <HocGamers
          render={(hits, addOne, saiyan) => {
            return (
              saiyan.goku && <Goku hits={hits} addOne={addOne} name='Goku' />
            );
          }}
        />
        <HocGamers
          render={(hits, addOne, saiyan) => {
            return (
              saiyan.frieza && (
                <Frieza hits={hits} addOne={addOne} name='Frieza' />
              )
            );
          }}
        />
      </div>
    </div>
  );
}

export default App;
