import { Entregable } from "./entregable";

export class Videojuego implements Entregable {

    protected TITULO: string = '';
    protected HORAS: number = 10;
	protected ENTREGADO: boolean = false;
    protected GENERO: string = '';
    protected COMPA: string = '';

	
    protected titulo = this.TITULO;
    protected horas = this.HORAS;
    protected entregado = this.ENTREGADO;
    protected genero = this.GENERO;
    protected compa = this.COMPA;

    constructor(titulo: string, horas: number, genero: string, compa: string){
        this.titulo = titulo;
        this.horas = horas;
        this.genero = genero;
        this.compa = compa;
    }

    entregar(): void {
        this.entregado = true;
    }
    devolver(): void {
        this.entregado = false;
    }
    isEntregado(): boolean {
        return this.entregado;
    }
    compareTO(a: Object): number {
        if (this.horas > (a as Videojuego).getHoras()) {
            return 1;
        }
        if (this.horas < (a as Videojuego).getHoras()) {
            return -1;
        }
        return 0;    
    }

    getTitulo(): string {
    return this.titulo;
    }
        
    setTitulo(titulo: string): void {
    this.TITULO = titulo;
    }
    
    getHoras(): number {
    return this.horas;
    }
        
    setHoras(horas: number): void {
    this.HORAS = horas;
    }

    getGenero(): string {
    return this.genero;
    }
            
    setGenero(genero: string): void {
    this.GENERO = genero;
    }
        
    getCompa(): string {
    return this.compa;
    }
            
    setCOMPA(compa: string): void {
    this.COMPA = compa;
    }
}    