
import './App.css';
import Person from './Models/Person';
import {City} from './Models/City/City';

const  App = () => {

/**
 * @description create list of people to show into screen
 * @param {void}
 * @returns {Array<Person>}
 */
  const getCity = (): String =>{
     let bogota = new City('Bogota','Español'); 
      bogota.addItem(new Person(1,'Willy','Avila', 32));
      bogota.addItem(new Person(2,'Jess','Gomez', 30));
      bogota.addItem(new Person(1,'Emily','Avila', 5));
      bogota.addItem(new Person(1,'Celeste','Avila', 2));
   return bogota.showNum();
  }

  return (
    <div className="App">
      {getCity()}
    </div>
  );
}

export default App;
