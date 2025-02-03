const generateMatrizA = () => {
    const num_m = document.getElementById('num_matriz_a');
    const container_m_a = document.getElementById('form-matriz-a');
    const container_m_b = document.getElementById('form-matriz-b');
    const container_m_r = document.getElementById('form-r');

    container_m_a.innerHTML = '';
    container_m_b.innerHTML = '';
    container_m_r.innerHTML = '';

    const num = parseInt(num_m.value);

    if (num >= 2 && num <= 5) {
        if(num === 2){

            container_m_a.style.width="40%";
            container_m_b.style.width="40%";
            container_m_r.style.width="40%";

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

            for (let i = 0; i < num; i++) {
                for (let j = 0; j < num; j++) {
                    const inputCell = document.createElement('input');
                    inputCell.type = 'number';
                    inputCell.className = 'input-cell cell .cell[type="number"]';
                    inputCell.style.borderBlockColor = "#1d2857"
                    container_m_r.appendChild(inputCell);
                }
            }
        }
        else if (num === 3){
            container_m_a.style.width="50%";
            container_m_b.style.width="50%";
            container_m_r.style.width="50%";

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

            for (let i = 0; i < num; i++) {
                for (let j = 0; j < num; j++) {
                    const inputCell = document.createElement('input');
                    inputCell.type = 'number';
                    inputCell.className = 'input-cell cell .cell[type="number"]';
                    inputCell.style.borderBlockColor = "#1d2857"
                    container_m_r.appendChild(inputCell);
                }
            }            
        }
        else if (num == 4){
            container_m_a.style.width="65%";
            container_m_b.style.width="65%";
            container_m_r.style.width="65%";

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
            
            for (let i = 0; i < num; i++) {
                for (let j = 0; j < num; j++) {
                    const inputCell = document.createElement('input');
                    inputCell.type = 'number';
                    inputCell.className = 'input-cell cell .cell[type="number"]';
                    inputCell.style.borderBlockColor = "#1d2857"
                    container_m_r.appendChild(inputCell);
                }
            }

        }
        else if (num == 5){
            container_m_a.style.width="85%";
            container_m_b.style.width="85%";
            container_m_r.style.width="85%";

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
            
            for (let i = 0; i < num; i++) {
                for (let j = 0; j < num; j++) {
                    const inputCell = document.createElement('input');
                    inputCell.type = 'number';
                    inputCell.className = 'input-cell cell cell[type="number"]';
                    inputCell.style.borderBlockColor = "#1d2857"
                    container_m_r.appendChild(inputCell);
                }
            }            
        }

    } 
}


document.getElementById('num_matriz_a').addEventListener('input', generateMatrizA);
