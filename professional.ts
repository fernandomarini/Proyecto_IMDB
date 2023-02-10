
class Professional {
    // Declaracion de atributos en Constructor
    
    // Constructor 
    constructor(public name: string,
        public age: number,
        public weight: number,
        public height: number,
        public isRetired: boolean,
        public nationality: string,
        public oscarsNumber: number,
        public profession: string ){};


    // Metodos
    public printConsolePar( ):void {
        let strinProf: string = "";
        strinProf = (
            `            Name: ${this.name} \n
            Age: ${this.age} \n
            Weight: ${this.weight} \n
            Height: ${this.height} \n
            isRetired: ${this.isRetired} \n
            Nationality: ${this.nationality} \n
            Ocar: ${this.oscarsNumber} \n
            Profession : ${this.profession} \n`)
        //return strinProf;
        console.log(strinProf);
    };

};

let film1 = new Professional("Nombre1",43,52,21,true,"Frances",1,"Programador" );

film1.printConsolePar();


export { Professional }