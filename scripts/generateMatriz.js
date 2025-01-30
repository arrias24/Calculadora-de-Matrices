const generateMatriz = () => {
    const num_m = document.getElementById('num_matriz');
    const container_m_a = document.getElementById('form-matriz-a');
    const container_m_b = document.getElementById('form-matriz-b');

    // Limpiar contenedores antes de generar la nueva matriz
    container_m_a.innerHTML = '';
    container_m_b.innerHTML = '';

    // Obtener el tamaño de la matriz desde el input
    const num = parseInt(num_m.value);

    // Validar que el número esté entre 2 y 5
    if (num >= 2 && num <= 5) {

        for (let i = 0; i < num; i++) {
            for (let j = 0; j < num; j++) {
                const inputCell = document.createElement('input');
                inputCell.type = 'number';
                inputCell.className = 'input-cell cell';
                container_m_a.appendChild(inputCell);
            }

        }

        for (let i = 0; i < num; i++) {
            for (let j = 0; j < num; j++) {
                const inputCell = document.createElement('input');
                inputCell.type = 'number';
                inputCell.className = 'input-cell cell';
                container_m_b.appendChild(inputCell);
            }
        }
    } 
}

// Escuchar cambios en el input de tamaño de matriz
document.getElementById('num_matriz').addEventListener('input', generateMatriz);
