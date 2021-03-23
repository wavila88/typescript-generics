import Person from '../Person';
import {CrudGeneric} from '../../Generics/CrudGeneric';

export class City extends CrudGeneric<Person>{
    cityName: String;
    cityLanguaje: String;

    constructor(cityName: String, cityLanguaje: String ){
        super();
        this.cityName = cityName;
        this.cityLanguaje = cityLanguaje;
    }
}