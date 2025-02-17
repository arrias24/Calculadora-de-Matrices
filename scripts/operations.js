const sumar = () => {
    const container_m_a = document.getElementById('form-matriz-a');
    const container_m_b = document.getElementById('form-matriz-b');
    const container_m_r = document.getElementById('form-r');

  
    container_m_r.innerHTML = '';

    const inputsA = container_m_a.querySelectorAll('input');
    const inputsB = container_m_b.querySelectorAll('input');

    const size = Math.sqrt(inputsA.length); 

    // Creamos la matriz resultante

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {

             // Obtenemos el índice del input correspondiente

            const index = i * size + j;

            // Obtenemos los valores de las matrices A y B

            const valueA = parseFloat(inputsA[index].value) || 0;
            const valueB = parseFloat(inputsB[index].value) || 0;

            // Calculamos la suma

            const sum = valueA + valueB;

            // Creamos un nuevo input para la matriz resultante

            const resultCell = document.createElement('input');
            resultCell.type = 'number';
            resultCell.className = 'output-cell cell';
            resultCell.value = sum; 

            // Añadimos el input a la matriz resultante

            container_m_r.appendChild(resultCell);
        }

        // Agregamos un salto de línea después de cada fila

        container_m_r.appendChild(document.createElement('br'));
    }
};

const restar = () => {

    const container_m_a = document.getElementById('form-matriz-a');
    const container_m_b = document.getElementById('form-matriz-b');
    const container_m_r = document.getElementById('form-r');

    container_m_r.innerHTML = '';

    const inputsA = container_m_a.querySelectorAll('input');
    const inputsB = container_m_b.querySelectorAll('input');


    const size = Math.sqrt(inputsA.length);

    // Creamos la matriz resultante

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {

            // Obtener el índice del input correspondiente

            const index = i * size + j;

            // Obtenemos los valores de las matrices A y B

            const valueA = parseFloat(inputsA[index].value) || 0; 
            const valueB = parseFloat(inputsB[index].value) || 0; 

            // Calculamos la resta

            const difference = valueA - valueB;

            // Crearmos un nuevo input para la matriz resultante

            const resultCell = document.createElement('input');
            resultCell.type = 'number';
            resultCell.className = 'output-cell cell';
            resultCell.value = difference; 


            container_m_r.appendChild(resultCell);
        }

        // Agregamos un salto de línea después de cada fila

        container_m_r.appendChild(document.createElement('br'));
    }
};

const multiplicar = () => {

    const container_m_a = document.getElementById('form-matriz-a');
    const container_m_b = document.getElementById('form-matriz-b');
    const container_m_r = document.getElementById('form-r');

    // Limpiamos la matriz resultante

    container_m_r.innerHTML = '';

    // Obtenemos todos los inputs de la matriz A

    const inputsA = container_m_a.querySelectorAll('input');
    const inputsB = container_m_b.querySelectorAll('input');

    // Determinamos el tamaño de las matrices

    const sizeA = Math.sqrt(inputsA.length);
    const sizeB = Math.sqrt(inputsB.length);


    // Creamos la matriz resultante

    const resultSize = sizeA;
    let resultMatrix = new Array(resultSize);
    for (let i = 0; i < resultSize; i++) {
        resultMatrix[i] = new Array(resultSize).fill(0);
    }

    // Realizamos la multiplicación

    for (let i = 0; i < resultSize; i++) {
        for (let j = 0; j < resultSize; j++) {
            for (let k = 0; k < sizeB; k++) {
                const valueA = parseFloat(inputsA[i * sizeA + k].value) || 0;
                const valueB = parseFloat(inputsB[k * sizeB + j].value) || 0;
                resultMatrix[i][j] += valueA * valueB;
            }
        }
    }

    // Añadir los resultados a la matriz resultante en el DOM

    for (let i = 0; i < resultSize; i++) {
        for (let j = 0; j < resultSize; j++) {
            const resultCell = document.createElement('input');
            resultCell.type = 'number';
            resultCell.className = 'output-cell cell';
            resultCell.value = resultMatrix[i][j]; 

            // Añadimos el input a la matriz resultante

            container_m_r.appendChild(resultCell);
        }

        // Agregamos un salto de línea después de cada fila
        container_m_r.appendChild(document.createElement('br'));
    }
};

const escalar = () => {

    const matriz_a = document.getElementById('matriz-a');
    const matriz_b = document.getElementById('matriz-b');

    const container_m_a = document.getElementById("form-matriz-a");
    const num_escalar_a = document.getElementById('num_escalar_a');

    const container_m_b = document.getElementById('form-matriz-b');
    const num_escalar_b = document.getElementById('num_escalar_b');

    const container_m_r = document.getElementById('form-r');
    container_m_r.innerHTML = "";
    
    if(matriz_a.classList.contains('flex-active')){

        const inputsA = container_m_a.querySelectorAll('input');
        const sizeA = Math.sqrt(inputsA.length);
    
        const escalarValue = parseFloat(num_escalar_a.value) || 0;
        const resultSize = sizeA;
    
        //Crear la matriz de resultado

        let resultMatrix = new Array(resultSize);
        for (let i = 0; i < resultSize; i++) {
          resultMatrix[i] = new Array(resultSize);
        }
    
        // Realizar la multiplicación escalar
    
        for (let i = 0; i < resultSize; i++) {
            for (let j = 0; j < resultSize; j++) {
                const valueA = parseFloat(inputsA[i * sizeA + j].value) || 0;
                resultMatrix[i][j] = valueA * escalarValue;
            }
        }
    
        for (let i = 0; i < resultSize; i++) {
            for (let j = 0; j < resultSize; j++) {
                const resultCell = document.createElement('input');
                resultCell.type = 'number';
                resultCell.className = 'output-cell cell';
                resultCell.value = resultMatrix[i][j];
    
                container_m_r.appendChild(resultCell);
            }
            container_m_r.appendChild(document.createElement('br'));
        }
    }

    else if (matriz_b.classList.contains('flex-active')){

        const inputsA = container_m_b.querySelectorAll('input');
        const sizeA = Math.sqrt(inputsA.length);
    
        const escalarValue = parseFloat(num_escalar_b.value) || 0;
        const resultSize = sizeA;
    
        //Crear la matriz de resultado

        let resultMatrix = new Array(resultSize);
        for (let i = 0; i < resultSize; i++) {
          resultMatrix[i] = new Array(resultSize);
        }
    
        // Realizar la multiplicación escalar
    
        for (let i = 0; i < resultSize; i++) {
            for (let j = 0; j < resultSize; j++) {
                const valueA = parseFloat(inputsA[i * sizeA + j].value) || 0;
                resultMatrix[i][j] = valueA * escalarValue;
            }
        }
    
        for (let i = 0; i < resultSize; i++) {
            for (let j = 0; j < resultSize; j++) {
                const resultCell = document.createElement('input');
                resultCell.type = 'number';
                resultCell.className = 'output-cell cell';
                resultCell.value = resultMatrix[i][j];
    
                container_m_r.appendChild(resultCell);
            }
            container_m_r.appendChild(document.createElement('br'));
        }
    }
}

const transponer = () => {
    const matriz_a = document.getElementById('matriz-a');
    const matriz_b = document.getElementById('matriz-b');

    if (matriz_a.classList.contains('flex-active')) {
        const container_m_a = document.getElementById('form-matriz-a');
        const container_m_r = document.getElementById('form-r');

        container_m_r.innerHTML = "";

        const inputsA = container_m_a.querySelectorAll('input');
        const size = Math.sqrt(inputsA.length);

        // Crear la matriz original a partir de los inputs

        let matrizOriginal = [];
        for (let i = 0; i < size; i++) {
            matrizOriginal[i] = [];
            for (let j = 0; j < size; j++) {
                const index = i * size + j;
                matrizOriginal[i][j] = parseFloat(inputsA[index].value) || 0;
            }
        }

        // Crear la matriz transpuesta

        let matrizTranspuesta = [];
        for (let i = 0; i < size; i++) {
            matrizTranspuesta[i] = [];
            for (let j = 0; j < size; j++) {
                matrizTranspuesta[i][j] = matrizOriginal[j][i]; // Intercambio de filas por columnas
            }
        }

        // Llenar el DOM con la matriz transpuesta

        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                const resultCell = document.createElement('input');
                resultCell.type = 'number';
                resultCell.className = 'output-cell cell';
                resultCell.value = matrizTranspuesta[i][j]; // Usar matrizTranspuesta[i][j]
                container_m_r.appendChild(resultCell);
            }
            container_m_r.appendChild(document.createElement('br'));
        }
    }

    else if (matriz_b.classList.contains('flex-active')) {
        const container_m_b = document.getElementById('form-matriz-b');
        const container_m_r = document.getElementById('form-r');

        container_m_r.innerHTML = "";

        const inputsA = container_m_b.querySelectorAll('input');
        const size = Math.sqrt(inputsA.length);

        // Crear la matriz original a partir de los inputs

        let matrizOriginal = [];
        for (let i = 0; i < size; i++) {
            matrizOriginal[i] = [];
            for (let j = 0; j < size; j++) {
                const index = i * size + j;
                matrizOriginal[i][j] = parseFloat(inputsA[index].value) || 0;
            }
        }

        // Crear la matriz transpuesta
        
        let matrizTranspuesta = [];
        for (let i = 0; i < size; i++) {
            matrizTranspuesta[i] = [];
            for (let j = 0; j < size; j++) {
                matrizTranspuesta[i][j] = matrizOriginal[j][i]; // Intercambio de filas por columnas
            }
        }

        // Llenar el DOM con la matriz transpuesta
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                const resultCell = document.createElement('input');
                resultCell.type = 'number';
                resultCell.className = 'output-cell cell';
                resultCell.value = matrizTranspuesta[i][j]; // Usar matrizTranspuesta[i][j]
                container_m_r.appendChild(resultCell);
            }
            container_m_r.appendChild(document.createElement('br'));
        }
    }
};

const inversa = () => {

        const matriz_a = document.getElementById('matriz-a');
        const matriz_b = document.getElementById('matriz-b');

        const container_m_a = document.getElementById('form-matriz-a');
        const container_m_b = document.getElementById('form-matriz-b');
        const container_m_r = document.getElementById('form-r');
    
        container_m_r.innerHTML = '';
    
        if(matriz_a.classList.contains('flex-active')){

            const inputsA = container_m_a.querySelectorAll('input');
            const size = Math.sqrt(inputsA.length);

            // Crear la matriz original

            let matrizOriginal = [];
            for (let i = 0; i < size; i++) {
                matrizOriginal[i] = [];
                for (let j = 0; j < size; j++) {
                    const index = i * size + j;
                    matrizOriginal[i][j] = parseFloat(inputsA[index].value) || 0;
                }
            }
        
            // Crear la matriz identidad

            let matrizIdentidad = [];
            for (let i = 0; i < size; i++) {
                matrizIdentidad[i] = [];
                for (let j = 0; j < size; j++) {
                    matrizIdentidad[i][j] = (i === j) ? 1 : 0;
                }
            }
        
            // Crear la matriz aumentada [matrizOriginal | matrizIdentidad]

            let matrizAumentada = [];
            for (let i = 0; i < size; i++) {
                matrizAumentada[i] = matrizOriginal[i].concat(matrizIdentidad[i]);
            }
        
        
            // Aplicar el método de Gauss-Jordan

            for (let i = 0; i < size; i++) {

                // Pivoteo: buscar el elemento máximo en la columna i

                let maxFila = i;
                for (let k = i + 1; k < size; k++) {
                    if (Math.abs(matrizAumentada[k][i]) > Math.abs(matrizAumentada[maxFila][i])) {
                        maxFila = k;
                    }
                }
        
                // Intercambiar filas si es necesario

                if (maxFila !== i) {
                    [matrizAumentada[i], matrizAumentada[maxFila]] = [matrizAumentada[maxFila], matrizAumentada[i]];
                }
        
                // Hacer que el elemento diagonal sea 1 (dividir la fila por el elemento diagonal)

                let pivote = matrizAumentada[i][i];
                if (pivote === 0) {
                    alert("La matriz no tiene inversa.");
                }
        
                for (let j = 0; j < 2 * size; j++) {
                    matrizAumentada[i][j] /= pivote;
                }
        
                // Hacer que los elementos por encima y por debajo del pivote sean 0

                for (let k = 0; k < size; k++) {
                    if (k !== i) {
                        let factor = matrizAumentada[k][i];
                        for (let j = 0; j < 2 * size; j++) {
                            matrizAumentada[k][j] -= factor * matrizAumentada[i][j];
                        }
                    }
                }
            }
        
        
            // Extraer la matriz inversa

            let matrizInversa = [];
            for (let i = 0; i < size; i++) {
                matrizInversa[i] = matrizAumentada[i].slice(size); // Tomar la parte derecha de la matriz aumentada
            }
        
            // Mostrar la matriz inversa
            for (let i = 0; i < size; i++) {
                for (let j = 0; j < size; j++) {
                    const resultCell = document.createElement('input');
                    resultCell.type = 'number';
                    resultCell.className = 'output-cell cell';
                    resultCell.value = matrizInversa[i][j];
                    container_m_r.appendChild(resultCell);
                }
                container_m_r.appendChild(document.createElement('br'));
            }
        }
        else if (matriz_b.classList.contains('flex-active')){

            const inputsA = container_m_b.querySelectorAll('input');
            const size = Math.sqrt(inputsA.length);

            // Crear la matriz original

            let matrizOriginal = [];
            for (let i = 0; i < size; i++) {
                matrizOriginal[i] = [];
                for (let j = 0; j < size; j++) {
                    const index = i * size + j;
                    matrizOriginal[i][j] = parseFloat(inputsA[index].value) || 0;
                }
            }
        
            // Crear la matriz identidad

            let matrizIdentidad = [];
            for (let i = 0; i < size; i++) {
                matrizIdentidad[i] = [];
                for (let j = 0; j < size; j++) {
                    matrizIdentidad[i][j] = (i === j) ? 1 : 0;
                }
            }
        
            // Crear la matriz aumentada [matrizOriginal | matrizIdentidad]

            let matrizAumentada = [];
            for (let i = 0; i < size; i++) {
                matrizAumentada[i] = matrizOriginal[i].concat(matrizIdentidad[i]);
            }
        
        
            // Aplicar el método de Gauss-Jordan

            for (let i = 0; i < size; i++) {

                // Pivoteo: buscar el elemento máximo en la columna i

                let maxFila = i;
                for (let k = i + 1; k < size; k++) {
                    if (Math.abs(matrizAumentada[k][i]) > Math.abs(matrizAumentada[maxFila][i])) {
                        maxFila = k;
                    }
                }
        
                // Intercambiar filas si es necesario

                if (maxFila !== i) {
                    [matrizAumentada[i], matrizAumentada[maxFila]] = [matrizAumentada[maxFila], matrizAumentada[i]];
                }
        
                // Hacer que el elemento diagonal sea 1 (dividir la fila por el elemento diagonal)

                let pivote = matrizAumentada[i][i];
                if (pivote === 0) {
                    alert("La matriz no tiene inversa.");
                }
        
                for (let j = 0; j < 2 * size; j++) {
                    matrizAumentada[i][j] /= pivote;
                }
        
                // Hacer que los elementos por encima y por debajo del pivote sean 0

                for (let k = 0; k < size; k++) {
                    if (k !== i) {
                        let factor = matrizAumentada[k][i];
                        for (let j = 0; j < 2 * size; j++) {
                            matrizAumentada[k][j] -= factor * matrizAumentada[i][j];
                        }
                    }
                }
            }
        
        
            // Extraer la matriz inversa

            let matrizInversa = [];
            for (let i = 0; i < size; i++) {
                matrizInversa[i] = matrizAumentada[i].slice(size); // Tomar la parte derecha de la matriz aumentada
            }
        
            // Mostrar la matriz inversa
            for (let i = 0; i < size; i++) {
                for (let j = 0; j < size; j++) {
                    const resultCell = document.createElement('input');
                    resultCell.type = 'number';
                    resultCell.className = 'output-cell cell';
                    resultCell.value = matrizInversa[i][j];
                    container_m_r.appendChild(resultCell);
                }
                container_m_r.appendChild(document.createElement('br'));
            }
        }
};

const identidad = () => {

        const matriz_a = document.getElementById('matriz-a');
        const matriz_b = document.getElementById('matriz-b');

        const container_m_a = document.getElementById('form-matriz-a');
        const container_m_b = document.getElementById('form-matriz-b');
        const container_m_r = document.getElementById('form-r');

        container_m_r.innerHTML = '';

        if(matriz_a.classList.contains('flex-active')){

            const size = Math.sqrt(container_m_a.querySelectorAll('input').length);
    
            // Creamos la matriz identidad
    
            for (let i = 0; i < size; i++) {
                for (let j = 0; j < size; j++) {
    
                    // Creamos un nuevo input para cada celda
    
                    const resultCell = document.createElement('input');
                    resultCell.type = 'number';
                    resultCell.className = 'output-cell cell';
        
                    // Asignamos el valor: 1 si i == j (diagonal), 0 en caso contrario
    
                    resultCell.value = (i === j) ? 1 : 0;
        
                    // Añadimos el input a la matriz resultante
                    container_m_r.appendChild(resultCell);
                }
        
                // Agregamos un salto de línea después de cada fila
                container_m_r.appendChild(document.createElement('br'));
            }
        }
        else if (matriz_b.classList.contains('flex-active')){

            const size = Math.sqrt(container_m_b.querySelectorAll('input').length);
    
            // Creamos la matriz identidad
    
            for (let i = 0; i < size; i++) {
                for (let j = 0; j < size; j++) {
    
                    // Creamos un nuevo input para cada celda
    
                    const resultCell = document.createElement('input');
                    resultCell.type = 'number';
                    resultCell.className = 'output-cell cell';
        
                    // Asignamos el valor: 1 si i == j (diagonal), 0 en caso contrario
    
                    resultCell.value = (i === j) ? 1 : 0;
        
                    // Añadimos el input a la matriz resultante
                    container_m_r.appendChild(resultCell);
                }
        
                // Agregamos un salto de línea después de cada fila
                container_m_r.appendChild(document.createElement('br'));
            } 
        }


};

const determinante = () => {

        const matriz_a = document.getElementById('matriz-a');
        const matriz_b = document.getElementById('matriz-b');

        const container_m_a = document.getElementById('form-matriz-a');
        const container_m_b = document.getElementById('form-matriz-b');
        const container_m_r = document.getElementById('form-r');
    
        container_m_r.innerHTML = '';
    
        if (matriz_a.classList.contains('flex-active')){
            const inputsA = container_m_a.querySelectorAll('input');
            const size = Math.sqrt(inputsA.length);
        
            // Crear la matriz a partir de los inputs
        
            let matriz = [];
            for (let i = 0; i < size; i++) {
                matriz[i] = [];
                for (let j = 0; j < size; j++) {
                    const index = i * size + j;
                    matriz[i][j] = parseFloat(inputsA[index].value) || 0;
                }
            }
        
            // Función recursiva para calcular el determinante
        
            function calcularDeterminante(matriz) {
                const n = matriz.length;
        
                if (n === 2) {
                    return matriz[0][0] * matriz[1][1] - matriz[0][1] * matriz[1][0];
                }
        
                let det = 0;
                for (let j = 0; j < n; j++) {
                    // Crear la submatriz
        
                    let submatriz = [];
                    for (let i = 1; i < n; i++) {
                        submatriz[i - 1] = [];
                        for (let k = 0; k < n; k++) {
                            if (k !== j) {
                                submatriz[i - 1].push(matriz[i][k]);
                            }
                        }
                    }
        
                    det += matriz[0][j] * Math.pow(-1, j) * calcularDeterminante(submatriz);
                }
        
                return det;
            }
        
            // Calcular el determinante
        
            const det = calcularDeterminante(matriz);
        
            // Mostrar el resultado
        
            const resultCell = document.createElement('input');
            resultCell.type = 'number';
            resultCell.className = 'output-cell cell';
            resultCell.value = det;
            container_m_r.appendChild(resultCell);
        }
        else if(matriz_b.classList.contains('flex-active')){
            const inputsA = container_m_b.querySelectorAll('input');
            const size = Math.sqrt(inputsA.length);
        
            // Crear la matriz a partir de los inputs
        
            let matriz = [];
            for (let i = 0; i < size; i++) {
                matriz[i] = [];
                for (let j = 0; j < size; j++) {
                    const index = i * size + j;
                    matriz[i][j] = parseFloat(inputsA[index].value) || 0;
                }
            }
        
            // Función recursiva para calcular el determinante
        
            function calcularDeterminante(matriz) {
                const n = matriz.length;
        
                if (n === 1) {
                    return matriz[0][0];
                }
        
                if (n === 2) {
                    return matriz[0][0] * matriz[1][1] - matriz[0][1] * matriz[1][0];
                }
        
                let det = 0;
                for (let j = 0; j < n; j++) {

                    // Crear la submatriz
        
                    let submatriz = [];
                    for (let i = 1; i < n; i++) {
                        submatriz[i - 1] = [];
                        for (let k = 0; k < n; k++) {
                            if (k !== j) {
                                submatriz[i - 1].push(matriz[i][k]);
                            }
                        }
                    }
        
                    det += matriz[0][j] * Math.pow(-1, j) * calcularDeterminante(submatriz);
                }
        
                return det;
            }
        
            // Calcular el determinante
        
            const det = calcularDeterminante(matriz);
        
            // Mostrar el resultado
        
            const resultCell = document.createElement('input');
            resultCell.type = 'number';
            resultCell.className = 'output-cell cell';
            resultCell.value = det;
            container_m_r.appendChild(resultCell);
        }


};
    

    





