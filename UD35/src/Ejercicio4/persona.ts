export class Persona {

	protected NOMBRE: string = '';
	protected EDAD: number = 0;
	protected SEXO: boolean = true;
    
    protected nombre = this.NOMBRE;
    protected edad = this.EDAD;
    protected sexo = this.SEXO;
    
    constructor (nombre: string, edad: number, sexo: boolean){
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }

    getNombre(): string {
    return this.nombre;
    }
            
    setTitulo(titulo: string): void {
    this.TITULO = titulo;
    }
        
    getEdad(): number {
    return this.edad;
    }
            
    setHoras(edad: number): void {
    this.EDAD = edad;
    }
    
    getSexo(): boolean {
    return this.sexo;
    }
                
    setSexo(sexo: boolean): void {
    this.SEXO = sexo;
    }
            
    
}