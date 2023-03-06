
//   Apis Fakes
const api1 = `{"Historia":"O Mario Bros é conhecido por sua jogabilidade divertida gráficos coloridos e inovadores e trilha sonora memorável Até hoje, o jogo é jogado e apreciado por muitos fãs de jogos em todo o mundo. Se você nunca jogou o Mario Bros é definitivamente um jogo a ser experimentado!"}`;

const api2 = `{"Historia":"A série Star Wars é uma franquia de filmes de ficção científica e aventura criada por George Lucas. Ela começou com o filme Star Wars Episode IV  A New Hope em 1977 e desde então, expandiu-se para incluir uma série de filmes, programas de televisão, jogos  quadrinhos e muito mais. A franquia é conhecida por sua mitologia rica personagens memoráveis e sua trilha sonora emblemtica. Star Wars é uma das franquias de filmes mais bem-sucedidas e influentes de todos os tempos"}`;

const api3 = `{"Historia":"Mortal Kombat é uma série de jogos de luta que foi iniciada em 1992. A série é conhecida por sua violência gráfica e seus personagens únicos, além de seu sistema de combate envolvente e jogabilidade profunda. Mortal Kombat tem sido uma das franquias de jogos de luta mais bem-sucedidas e influentes de todos os tempos, com uma legião de fãs dedicados e uma série de adaptações para filmes, programas de televisão e muito mais. Além disso, a franquia tem sido responsável por introduzir várias inovações e mecânicas revolucionárias no gênero de jogos de luta."}`;


function mario() {
  const a = JSON.parse(api1);
  document.getElementById("mario").style.display = "block"
  document.getElementById("result_1").innerHTML = a.Historia;
  document.getElementById("imagem-mario").src = 'imagens/mario-background.png'
  document.getElementById("star").src = 'imagens/star.png'

}
function starWars() {
  document.getElementById("starWars").style.display = "block"
  const b = JSON.parse(api2);
  document.getElementById("result_2").innerHTML = b.Historia;
  document.getElementById("imagem-star").src = 'imagens/LetreiroStar.png'

}
function mortalKombat() {
  document.getElementById("mortalKombat").style.display = "block"
  const c = JSON.parse(api3);
  document.getElementById("result_3").innerHTML = c.Historia;
  document.getElementById("imagem-mk").src = 'imagens/subzero.png'
  document.getElementById("mortal").src = 'imagens/mk-mark.svg'


}

//transição de imagens
const slides = document.querySelectorAll('.slide');

setInterval(() => {
  const activeSlide = document.querySelector('.slide.active');

  activeSlide.classList.remove('active');

  let nextSlide = activeSlide.nextElementSibling;

  if (!nextSlide) {
    nextSlide = slides[0];
  }

  nextSlide.classList.add('active');
}, 5000);

//Header fixado
var cabecalho = document.getElementById("header");
var offsetTopCabecalho = cabecalho.offsetTop;

window.onscroll = function () {
  if (window.pageYOffset > offsetTopCabecalho) {
    cabecalho.classList.add('fixado');
  } else {
    cabecalho.classList.remove('fixado');
  }
}



