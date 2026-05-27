# F5 JavaScript Ejercicio 2 - The word exist or not


## Descripcion del algoritmo 
1. En primer lugar quiero hacer todos las letras minusculas. 
2. Craer variable `let goal` para poner palabra "english".
3. Crear variable `let curIdx` para almacenar valor de posicion actual para funciona en el ciclo.
4. Crear un ciclo de todos las letras de palabra entregada. 
5. Dentro del ciclo comprobar con `if` si la letra actual es egual con `goal.at(curIdx)`.
    1. Si `true`: `curIdx += 1;` - para combpobar próxima letra de `goal` palabra. 
    2. Si `false`: `curIdx = 0;` -  esto significa que la palabra no coincide y que este contador debe reiniciarse.
6. Entonces despues de primer `if` dentro del ciclo añadimos `if (curIdx === goal.length) {return true}`.
7. Despues del ciclo tenemos que dejar `return false;` para indicar que la palabra no existe.



## Los tests:

![Test completed]("./assets/images/tests.png")


