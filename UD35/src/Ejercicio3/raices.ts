export class Raices {

	protected A: number = 0;
	protected B: number = 0;
	protected C: number = 0;

    protected a = this.A;
    protected b = this.B;
    protected c = this.C;

    constructor(a: number, b: number, c: number){
        this.a = a;
        this.b = b;
        this.c = c;
    }

    public getDiscriminante(){

        return (this.b*this.b)-4*this.a*this.c;
    }

    public tieneRaices(){
        this.a;
        this.b;
        this.c;
        return this.getDiscriminante() > 0;
    }

    public tieneRaiz(){
        if (this.getDiscriminante()== 0) {
        	return true;
        }else {
        	return false;
        }
    }

    public calcular(){
        if (this.tieneRaices()) {
			return 2;
		}else {
			if (this.tieneRaiz()) {
				return 1;
				}
		}
		return 0;
    }

    public obtenerRaices(){
        var f1: number = 0;
        var f2: number = 0;
        f1 = (-this.b+ Math.sqrt(this.getDiscriminante()))/2*this.a;
        f2 = (-this.b- Math.sqrt(this.getDiscriminante()))/2*this.a;
		console.log("Las dos posibles soluciones son: " + f1 + ", "+f2);
    }

    public obtenerRaiz() {
        var f1: number = 0;
		f1 = (-this.b+ Math.sqrt(this.getDiscriminante()))/2*this.a;
		console.log("La solucion es: " + f1);
    }
}    