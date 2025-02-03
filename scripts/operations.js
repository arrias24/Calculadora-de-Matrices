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



