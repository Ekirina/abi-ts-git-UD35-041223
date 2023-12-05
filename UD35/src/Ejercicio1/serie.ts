import { Entregable } from "./entregable";

export class Serie implements Entregable{
    
    protected TITULO: string = '';
    protected N_TEMPORADAS: number = 3;
	protected ENTREGADO: boolean = false;
    protected GENERO: string = '';
    protected CREADOR: string = '';
	
	protected titulo = this.TITULO;	
	protected n_temporadas = this.N_TEMPORADAS;
	protected entregado = this.ENTREGADO;
	protected genero = this.GENERO;
	protected creador = this.CREADOR;

    constructor(titulo: string, creador: string){
        this.titulo = titulo;
        this.creador = creador;
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
        if (this.n_temporadas > (a as Serie).getN_temporadas()) {
            return 1;
        }
        if (this.n_temporadas < (a as Serie).getN_temporadas()) {
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

    getN_temporadas(): number {
    return this.n_temporadas;
    }
    
    setN_temporadas(n_temporadas: number): void {
    this.N_TEMPORADAS = n_temporadas;
    }
    
    getEntregado(): boolean {
    return this.entregado;
    }
        
    setEntregado(entregado: boolean): void {
    this.ENTREGADO = entregado;
    }

    getGenero(): string {
    return this.genero;
    }
        
    setGenero(genero: string): void {
    this.GENERO = genero;
    }
    
    getCreador(): string {
    return this.creador;
    }
        
    setCreador(creador: string): void {
    this.CREADOR = creador;
    }
}