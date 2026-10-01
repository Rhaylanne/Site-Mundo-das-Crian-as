
document.addEventListener("DOMContentLoaded", function () {

    // =====================================
    // MODO ESCURO
    // =====================================

    const darkMode = document.getElementById("darkMode");

    if (darkMode) {

        darkMode.addEventListener("click", function () {

            document.body.classList.toggle("dark");

            if (document.body.classList.contains("dark")) {
                darkMode.textContent = "☀️";
                localStorage.setItem("modoEscuro", "ativado");
            } else {
                darkMode.textContent = "🌙";
                localStorage.setItem("modoEscuro", "desativado");
            }

        });

        // Recupera preferência
        if (localStorage.getItem("modoEscuro") === "ativado") {
            document.body.classList.add("dark");
            darkMode.textContent = "☀️";
        }
    }


    // =====================================
    // FILTRO DE ALIMENTAÇÃO
    // =====================================

    const filtroComida =
        document.getElementById("filtroComida");

    const comidas =
        document.querySelectorAll(".food-card");

    if (filtroComida) {

        filtroComida.addEventListener("change", function () {

            const categoria = this.value;

            comidas.forEach(function (comida) {

                if (
                    categoria === "todos" ||
                    comida.dataset.category === categoria
                ) {
                    comida.style.display = "";
                } else {
                    comida.style.display = "none";
                }

            });

        });

    }


    // =====================================
    // BOTÕES "QUERO BRINCAR!"
    // =====================================

    const botoesBrincadeira =
        document.querySelectorAll(".game-btn");

    const gameMessage =
        document.getElementById("gameMessage");


    botoesBrincadeira.forEach(function (botao) {

        botao.addEventListener("click", function () {

            const brincadeira =
                botao.getAttribute("data-game");


            if (gameMessage) {

                gameMessage.textContent =
                    "🎉 " +
                    brincadeira +
                    " escolhida! Vamos começar a brincadeira!";

                gameMessage.style.display = "block";

            }

        });

    });


    // =====================================
    // FORMULÁRIO
    // =====================================

    const form =
        document.getElementById("contactForm");

    const formMessage =
        document.getElementById("formMessage");


    if (form) {

        form.addEventListener("submit", function (event) {

            event.preventDefault();

            const nome =
                document.getElementById("nome").value.trim();


            if (formMessage) {

                formMessage.textContent =
                    "💚 Obrigado, " +
                    nome +
                    "! Sua sugestão foi enviada com sucesso.";

                formMessage.style.color = "#62a87c";

            }

            form.reset();

        });

    }

});
```
