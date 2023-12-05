import { Persona } from "./persona";

export class Estudiante extends Persona {
	
	protected APROBADO: number = 5;
	protected EDAD_MAXIMA: number = 18;
	protected EDAD_MINIMA: number = 10;
	protected EDAD_DEFECTO: number = 12;
	protected CALIFICACION: number = 10;

    protected calificacion = this.CALIFICACION;
   
    constructor(nombre: string, edad: number, sexo: boolean, calificacion: number){
        super(nombre, edad, sexo);
        this.calificacion = calificacion;
    }

    public estudiante(calificacion: number){
        if(this.calificacion >= 0 && this.calificacion < 11){
            return calificacion;
        }else{  
        return this.APROBADO;
        }
    }
    
    public edadMinMax(edad: number){
        if(this.edad >= this.EDAD_MINIMA && this.edad <= this.EDAD_MAXIMA){
            return edad;
        }else{
            return this.EDAD_DEFECTO;
        }
    }

    public asistencia(){
        if (Math.random()> 0.5){
			return true;
		}else {
			return false;
		}
    }
}        