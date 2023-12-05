export class Libro{
	
    protected ISBN: string = '';
    protected PAGINAS: number = 0;
    protected TITULO: string = '';
    protected AUTOR: string = '';

    protected isbn = this.ISBN;
    protected paginas = this.PAGINAS;
    protected titulo = this.TITULO;
    protected autor = this.AUTOR;

    constructor(isbn: string, paginas: number, titulo: string, autor: string) {
        this.isbn = isbn;
        this.paginas = paginas;
        this.titulo = titulo;
        this.autor = autor;
    }

    getTitulo(): string {
    return this.titulo;
    }
            
    setTitulo(titulo: string): void {
    this.TITULO = titulo;
    }
        
    getPaginas(): number {
    return this.paginas;
    }
            
    setPaginas(paginas: number): void {
    this.PAGINAS = paginas;
    }
    
    getIsbn(): string {
    return this.isbn;
    }
                
    setIsbn(isbn: string): void {
    this.ISBN = isbn;
    }
            
    getAutor(): string {
    return this.autor;
    }
                
    setAutor(autor: string): void {
    this.AUTOR = autor;
    }
    
    public toString = () : string => {
        return "El libro " + this.titulo + " con ISBN " + this.isbn + " creado por el autor " + this.autor + " tiene " + this.paginas + " páginas" ;
    }
}


































