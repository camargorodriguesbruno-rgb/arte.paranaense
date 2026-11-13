const botoesCurtir = document.querySelectorAll(".curtir");

botoesCurtir.forEach(function (botao) {
    botao.addEventListener("click", function ()) {
        const contador = botao.querySelector("span");

        let quantidade = Number(contador.textContent);

        if (botao.classList.contains("curtido")) {
            quantidade--;
            botao.classList.remove("curtido");
            botao.innerHTML = `❤️ Curtir <span>${0}</span>`;
        } else {
            quantidade++;
            botao.classList.add("curtido");
            botao.innerHTML = `❤️ Curtir <span>${0}</span>`;
        }
}
});
const botaoTema = document.querySelector(".btn-tema");

botaoTema.addEventListener("click", () => {
    document.body.classList.toggle("modo-escuro");
    if (document.body.classList.contains("modo-escuro")) {
        botaoTema.textContent = "☀️";
    } else {
        botaoTema.textContent = "🌙";
    }
});
     
     
