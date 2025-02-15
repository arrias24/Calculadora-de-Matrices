const clearMatrizR = () => {

    const m_r = document.getElementById('matriz-r');

    const f_r = document.getElementById('form-r');
    const n_i = f_r.querySelectorAll('input[type="number"]');

    n_i.forEach(input => {
        input.value = '';
    });

    m_r.style.animationName = "none";
    m_r.offsetHeight;
    m_r.style.animationName = "clear-slide";
    m_r.style.animationDuration = "1s";
    m_r.style.animationTimingFunction = "ease-in-out";
};

const clearMatriz = () => {

    const m_a = document.getElementById("matriz-a");
    const m_b = document.getElementById("matriz-b"); 

    const n_i_a = m_a.querySelectorAll('input[type="number"]');
    const n_i_b = m_b.querySelectorAll('input[type="number"]');

    if(m_a.classList.contains('flex-active')){

        n_i_a.forEach(input => {
            input.value = '';
        });

        m_a.style.animationName = "none";
        m_a.offsetHeight;
        m_a.style.animationName = "clear-slide";
        m_a.style.animationDuration = "1s";
        m_a.style.animationTimingFunction = "ease-in-out";
    }
    else if(m_b.classList.contains('flex-active')){

        n_i_b.forEach(input => {
            input.value = '';
        });
    
        m_b.style.animationName = "none";
        m_b.offsetHeight;
        m_b.style.animationName = "clear-slide";
        m_b.style.animationDuration = "1s";
        m_b.style.animationTimingFunction = "ease-in-out";
    }

}
