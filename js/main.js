class Persona {
    name="";
    email= "";
    age=0;
    resume="";
    constructor(name, email, age, resume){
        this.name=name;
        this.email=email.toLowerCase(); //para correos en minusculas
        this.age= (age<18)?18: age;
        this.resume= resume;
    }//constructor
    printInfo(){// metodo
        console.log(this.name, this.email, this.age, this.resume);
    }//printInfo
}// las clases para identificarlo con la primera en mayuscula y objetos en minuscula// class persona

class Employee extends Persona{
    departamento ="";
    salario = 0.0;
    constructor(name, email, age, resume, departamento, salario){
        super(name, email, age, resume);
        this.departamento=departamento;
        this.salario= this.salario;
    }//constructor 
}// class Employee

let maritere = new Employee("Maritere Hernandez", "maritere@gmail.com", 21, "Java FullStack Developer", "IT", 1255.20);
let dora = new Employee("Dora Garcia", "dorag@gmail.com", 26, "FullStack Developer", "Development", 1115.25);
maritere.printInfo();
dora.printInfo();