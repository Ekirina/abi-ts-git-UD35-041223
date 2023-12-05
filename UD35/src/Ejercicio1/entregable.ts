export interface Entregable {
    entregar(): void;
    devolver(): void;
    isEntregado(): boolean;
    compareTO(a: Object): number;
}