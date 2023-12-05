import { Persona } from "./persona";

export class Profesor extends Persona {
	
	protected MATERIA: string = "FISICA";

	protected materia = this.MATERIA;

    constructor(nombre: string, edad: number, sexo: boolean, materia: string){
        super(nombre, edad, sexo);
        this.materia = materia;
    }
    public profesor(){
        if(this.materia.toUpperCase()!="FISICA" || this.materia.toUpperCase()!="FILOSOFIA" || this.materia.toUpperCase()!="MATEMATICAS"){
            this.materia = this.materia
        }
    }

    public asistencia(){
        if(Math.random()>0.2){
            return true;
        }else{
            return false;
        }
    }
}