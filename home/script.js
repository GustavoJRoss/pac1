// scripts.js
let slideIndex = 0;
showSlide(slideIndex);

function nextSlide() {
    showSlide(slideIndex += 1);
}

function prevSlide() {
    showSlide(slideIndex -= 1);
}

function showSlide(index) {
    const slides = document.querySelectorAll('.feature');
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach((slide, i) => {
        slide.style.display = 'none';
        slide.classList.remove('active');
    });

    slides[slideIndex].style.display = 'block';
    slides[slideIndex].classList.add('active');
}


document.getElementById("myInput").addEventListener("input", function() {
    var input = this.value;
    if (!input) {
        document.getElementById("autocomplete-list").innerHTML = "";
        return;
    }
    // Lista de sugestões para o exemplo
    var suggestions = ["Arduino", "Bibliotecas C", "Componentes Arduino", "Condicional", "Laços de Repetição", "Entrada e Saída", "Linguagem C", "Lógica", "Simuladores de Robótica", "Variáveis"];
    
    var listContainer = document.getElementById("autocomplete-list");
    listContainer.innerHTML = "";
    
    suggestions.forEach(function(item) {
        if (item.toLowerCase().includes(input.toLowerCase())) {
            var listItem = document.createElement("div");
            listItem.classList.add("autocomplete-item");
            listItem.innerHTML = "<strong>" + item.substr(0, input.length) + "</strong>";
            listItem.innerHTML += item.substr(input.length);
            
            listItem.addEventListener("click", function() {
                document.getElementById("myInput").value = item;
                listContainer.innerHTML = "";
                
                // Switch case para redirecionamento
                switch (item) {
                    case "Arduino":
                        window.location.href = "../arduino/index.html";
                        break;
                    case "Bibliotecas C":
                        window.location.href = "../bibliotecasC/index.html";
                        break;
                    case "Componentes Arduino":
                        window.location.href = "../componentesarduino/index.html";
                        break;
                    case "Condicional":
                        window.location.href = "../condicional/index.html";
                        break;
                    case "Laços de Repetição":
                        window.location.href = "../lacosrepeticao/index.html";
                        break;
                    case "Entrada e Saída":
                        window.location.href = "../entradasaida/index.html";
                        break;
                    case "Linguagem C":
                        window.location.href = "../linguagemC/index.html";
                        break;
                    case "Lógica":
                        window.location.href = "../logica/index.html";
                        break;
                    case "Simuladores de Robótica":
                        window.location.href = "../simuladoresrobotica/index.html";
                        break;
                    case "Variáveis":
                        window.location.href = "../variaveis/index.html";
                        break;
                    default:
                        break;
                }
            });
            
            listContainer.appendChild(listItem);
        }
    });
});