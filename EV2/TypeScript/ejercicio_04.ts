/*
EJERCICIO 04: Uso de Required<T>
• Define una interfaz Configuracion con propiedades opcionales: url?:
string, puerto?: number.
• Crea una función inicializarApp(config: Required<Configuracion>)
que reciba una configuración, pero ahora todas las propiedades
deben ser requeridas.
• Verifica que TypeScript te obligue a pasar valores para ambas
propiedades.
*/

interface Configuracion {
    url?: string;
    puerto?: number;
}   

function inicializarApp(config: Required<Configuracion>){
    console.log(`Inicializando aplicación con URL: ${config.url} y puerto: ${config.puerto}`);
}


