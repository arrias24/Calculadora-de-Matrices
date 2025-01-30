const changeMatriz = () =>{

    const matriz_a = document.getElementById('matriz-a');
    const matriz_b = document.getElementById('matriz-b');


    if (matriz_a.style.display === 'flex') {

        matriz_a.style.animationName = "slide-back";
        matriz_a.style.animationDuration = "1s";
        matriz_a.style.animationDelay = "ease-in-out";
        matriz_a.style.display = "none";

        matriz_b.style.animationName = "slide-next";
        matriz_b.style.animationDuration = "1s";
        matriz_b.style.animationDelay = "ease-in-out"
        matriz_b.style.display = "flex";
    } else {

        matriz_a.style.display = 'flex';
        matriz_a.style.animationName = "slide-next";
        matriz_a.style.animationDuration = "1s";
        matriz_a.style.animationDelay = "ease-in-out";

        matriz_b.style.animationName = "slide-back";
        matriz_b.style.animationDuration = "1s";
        matriz_b.style.animationDelay = "ease-in-out"
        matriz_b.style.display = 'none';
    }
}