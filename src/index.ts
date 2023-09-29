/*
    Calculadora 

    se usa la convencion getter y setter:

    get : obtener, cuando se espera mostrar o recuperar un dato
    set : colocar, cuando vas a meter datos en una variable

    definición de variable: una variable es una palabra que se
    usa para referenciar un dato, piensa en las variables
    como una palabra que equivale a una caja, entonces puedes
    ver que hay dentro o agregarle cosas ;)
*/

import { $query, $update, float32, nat32 } from 'azle';

/* 
A continuación este es el dato que permanece en el tiempo
y es el que debe actualizarse con la funcion $update y su
valor debe ser mostrado con la funcion $query
*/
let pantalla: nat32 = 0; // este mismo

// La función para mostrar la pantalla
$query; // Palabra clave que significa 'consulta'
export function getPantalla(): nat32 {
    return pantalla; // al terminar la funcion siempre se debe devolver algo
    // usando la palabra clave 'return' que es 'devolver' en inglès seguido de
    // lo que se va a devolver. en este caso como se quiere mostrar la pantalla
    // la función no hace mas que devolverla, asi esa logica
    // aplica a todos los lenguajes de programación
}
/*
todas las funciones se declaran como
'export function nombre'parentesis y el tipo de dato 
que devuelve, en este caso siempre es float32(que acepta decimales 
y numeros negativos)  
*/

$update; // igual que arriba, solo que esta ves colocamos datos 
// y usamos la palabras clave update y set
export function setPantalla(numero: nat32): void {
    pantalla = numero; // cuando se quiere colocar un valor se usa
    // la logica de: ESTO 'es igual a' esto otro
}
/* 
en una función los parentesis son para meter cosas, 
en la primera funcion los parentesis estaban vacios pero
aqui necesitamos guardar un número (del 0 al 9)

y es lo que piensas
(7,8,9)
(4,5,6)
(1,2,3)
para saber que numero se debe guardar en la pantalla se usa
'numero' como palabra clave, ': float32' para decirle 
que es un tipo de dato numerico (que acepta comas y negativos)
*/

/* 
ahora tenemos una 'pantalla' que podemos mostrar que tiene con
'getPantalla' y meterle numeros con 'setPantalla'

recuerda: como es float32 ahora los numeros deber ser todos decimales
aunque sea un cero a la izquierda, porque azle es raro.

asi que 1 ahora es 1.0

para mostrar la pantalla tienes el comando:

dfx canister call azlecalc getPantalla

donde siempre sigue una estructura: 
dfx canister 'llamar'azlecal 'nombre de la funcion'

y para colocar numeros:
dfx canister call azlecalc setpantalla 1.0 

siempre con el cero a la izquierda en caso de ser un numero entero
*/

// habiendo entendido la introduccion hare la suma
// te toca hacer las otras operaciones, 
// no te preocupes por el punto, hasta a mi me cuesta esa cosa
export default function sumar(numero: float32): float32 {
    return pantalla + numero; // porque se suma el numero que ya estaba
    // en pantall con el nuevo
}

// restar -

// multiplicar *

// dividir /

// C que borrar la pantalla es darle un valor de 0