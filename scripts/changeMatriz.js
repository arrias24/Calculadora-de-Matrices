const changeMatriz = () => {

    const matriz_a = document.getElementById('matriz-a');
    const matriz_b = document.getElementById('matriz-b');


    if (matriz_a.classList.contains('flex-active')) {
        
        matriz_a.style.animationName = "slide-back";
        matriz_a.style.animationDuration = "1s";
        matriz_a.style.animationTimingFunction = "ease-in-out"; 
        matriz_a.classList.remove('flex-active');
        matriz_a.classList.add('flex-none');
        
        matriz_b.style.animationName = "slide-next";
        matriz_b.style.animationDuration = "1s";
        matriz_b.style.animationTimingFunction = "ease-in-out";
        matriz_b.classList.remove('flex-none');
        matriz_b.classList.add('flex-active');

    } else if (matriz_b.classList.contains('flex-active')) {

        matriz_b.style.animationName = "slide-back";
        matriz_b.style.animationDuration = "1s";
        matriz_b.style.animationTimingFunction = "ease-in-out";
        matriz_b.classList.remove('flex-active');
        matriz_b.classList.add('flex-none');

        matriz_a.style.animationName = "slide-next";
        matriz_a.style.animationDuration = "1s";
        matriz_a.style.animationTimingFunction = "ease-in-out";
        matriz_a.classList.remove('flex-none');
        matriz_a.classList.add('flex-active');
    }
}
