let divEmployees = document.getElementById("divEmployees");
class Persona {
    name="";
    email= "";
    age=0;
    resume="";
    id=0;
    static total =0;
    constructor(name, email, age, resume){
        this.name=name;
        this.email=email.toLowerCase(); //para correos en minusculas
        this.age= (age<18)?18: age;
        this.resume= resume;
        Persona.total ++;
        this.id = Persona.total;
    }//constructor persona
    static printTotal (){
        console.log(Persona.total);
    }//printTotal

    printInfo(div){// metodo
        div.insertAdjacentHTML("beforeend",
        `<div class="card border-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">${this.name}</div>
        <div class="card-body text-primary">
          <h5 class="card-title">${this.email}</h5>
          <p class="card-text"><strong>${this.age}</strong></p>
        </div>`
        );
        //console.log(this.name, this.email, this.age, this.resume);
    }//printInfo
}// las clases para identificarlo con la primera en mayuscula y objetos en minuscula// class persona

class Employee extends Persona{
    departamento ="";
    salario = 0.0;
    constructor(name, email, age, resume, departamento, salario){
        super(name, email, age, resume);
        this.departamento=departamento;
        this.salario=salario;
    }//constructor 
    calculateSalary(){//calcular salario x 30 dias y x 1.16 y el to fix es para las decimales
        return ((this.salario*30) *1.16).toFixed(2);
    }//Calcular Salario

    printInfo(div){
        super.printInfo(div);
        console.log(this.departamento, this.salario, this.calculateSalary());
    }//printInfo
}// class Employee

let maritere = new Employee("Maritere Hernandez", "maritere@gmail.com", 21, "Java FullStack Developer", "IT", 1255.20);
let dora = new Employee("Dora Garcia", "dorag@gmail.com", 26, "FullStack Developer", "Development", 1115.25);
let valeria = new Employee("Valeria", "valeri@gmail.com", 24, "Fullstack Java Developer", "Development", 1205.12);
maritere.printInfo(divEmployees);
dora.printInfo(divEmployees);
valeria.printInfo(divEmployees);
Persona.printTotal();// 3 personas