

class Person  {
    id: number;
    name: String;
    lastName: String;
    age: Number;
    readonly meaning: String = "New Menaing";

    constructor(id: number,name: String, lastName: String,age: Number ){
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.age = age;
     
    }


}

export default Person;