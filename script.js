document.addEventListener("DOMContentLoaded", () => {
  /* ================= SLIDER ================= */
  const imagens = ["/assets/img1.png", "/assets/img2.png"];
  let posicao = 0;

  const slide = document.getElementById("slide");
  const btnNext = document.getElementById("next");
  const btnPrev = document.getElementById("prev");

  if (slide && btnNext && btnPrev) {
    function trocarImagem(novaPosicao) {
      slide.style.opacity = 0;

      setTimeout(() => {
        posicao = novaPosicao;
        if (posicao >= imagens.length) posicao = 0;
        if (posicao < 0) posicao = imagens.length - 1;

        slide.src = imagens[posicao];
        slide.style.opacity = 1;
      }, 400);
    }

    setInterval(() => trocarImagem(posicao + 1), 3000);
    btnNext.addEventListener("click", () => trocarImagem(posicao + 1));
    btnPrev.addEventListener("click", () => trocarImagem(posicao - 1));
  }

  /* ================= BUSCA + SCROLL ================= */
  const searchInput = document.getElementById("searchInput");
  const products = Array.from(document.querySelectorAll(".product-embed"));
  const produtosSection = document.querySelector(".produtos");

  console.log("INPUT:", searchInput);
  console.log("PRODUTOS:", products.length);

  if (!searchInput || products.length === 0) return;

  function filterAndScroll() {
    const value = searchInput.value.toLowerCase().trim();
    let firstMatch = null;

    products.forEach((product) => {
      const name = (product.getAttribute("data-name") || "").toLowerCase();
      const match = value === "" || name.includes(value);

      product.classList.toggle("is-hidden", !match);

      // pega o primeiro que bate (somente quando há texto)
      if (!firstMatch && value !== "" && match) firstMatch = product;
    });

    console.log("BUSCA:", value, "MATCH:", firstMatch);

    // 1) sempre rola até a seção de produtos quando pesquisar algo
    if (value !== "" && produtosSection) {
      produtosSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    // 2) depois rola até o produto encontrado (com um pequeno delay pra garantir render)
    if (firstMatch) {
      setTimeout(() => {
        firstMatch.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 150);
    }
  }

  searchInput.addEventListener("input", filterAndScroll);

  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      filterAndScroll();
    }
  });

  filterAndScroll();
});
