var audio = new Audio("medias/Ali Gatie - It's You (Official Lyrics Video).mp3")
audio.volume = 0.5;
audio.currentTime = 3;

var colors = ['#16a085', 'gray', '#6A5ACD', '#2c3e50', 'black', "#77B1A9", "#73A857", "#4682B4", "#008B8B", "#2F4F4F"];
var cont = -1;
var frases = [
  {
    "frase": "Você faz o melhor pão do mundo!!",
    "autor": "De verdade..",
    "tamanho": "17pt"
  },
  {
    "frase": "Faz voz de fumante",
    "autor": "E nem fuma!!",
    "tamanho": "17pt"
  },
  {
    "frase": "Uma vez por semana faz as empresas de energia terem o maio lucro de todos",
    "autor": "Verídico isso",
    "tamanho": "17pt"
  },
  {
    "frase": "Porque sempre que eu te olho eu penso...",
    "autor": "Eu sou um cara de sorte por ter você",
    "tamanho": "17pt"
  },
  {
    "frase": "Porque você chora quando eu vou embora na chuva",
    "autor": "S2",
    "tamanho": "17pt"
  },
  {
    "frase": "Você me deixa vulnerável",
    "autor": "Me faz sentir coisas incríveis!!",
    "tamanho": "17pt"
  },
  {
    "frase": "Porque você me pede para ficar...",
    "autor": "S2",
    "tamanho": "17pt"
  },
  {
    "frase": "Porque eu sei que sempre vou poder contar com você",
    "autor": "E você pode contar comigo ;)",
    "tamanho": "17pt"
  },
  {
    "frase": "Você tem um jeito de falar que é muito fofu!!",
    "autor": "E eu sempre me derreto",
    "tamanho": "17pt"
  },
  {
    "frase": "No meio da semana eu só consigo pensar em quando vou te ver de novo...",
    "autor": "E no seu bumbum lindu também hihihi",
    "tamanho": "17pt"
  },
  {
    "frase": "Consegue passar horas comigo assistindo filmes, animes e até jogando!",
    "autor": "Minha parceira",
    "tamanho": "17pt"
  },
  {
    "frase": "Porque somos o NoJu",
    "autor": "Ficou muito bom issu!!",
    "tamanho": "17pt"
  },
  {
    "frase": "Faz de tudo para conseguir internet para poder conversar comigo S2",
    "autor": "Meu gadinho",
    "tamanho": "17pt"
  },
  {
    "frase": "Fica brava quando eu demoro para dar bom dia",
    "autor": "Fofis!!",
    "tamanho": "17pt"
  },
  {
    "frase": "Eu adoro o jeito que você olha para mim",
    "autor": "e como me faz sentir quando estamos juntos",
    "tamanho": "17pt"
  },
  {
    "frase": "Preciso de luz para acordar, um bom café para descontrair e seu amor para me alegrar logo pela manhã",
    "autor": "FELIZ DIA DOS NAMORAS!!",
    "tamanho": "17pt"
  }
];

function showText(quote, autor) {
  quote = quote.split("");
  var auxQuote = "";

  var interval = setInterval(function () {
    auxQuote += quote[0];
    document.getElementById('quote').innerHTML = auxQuote;
    quote.shift();

    if (quote.length <= 0) {
      clearInterval(interval);
      showCallback(autor);
    }
  }, 20);
}

function showCallback(quote) {
  quote = quote.split("");
  var auxQuote = "";

  var interval = setInterval(function () {
    auxQuote += quote[0];
    document.getElementById('autor').innerHTML = auxQuote;
    quote.shift();

    if (quote.length <= 0) {
      clearInterval(interval);
    }
  }, 50);
}

function newQuote() {
  if (audio.paused) 
    audio.play();

  // cont = Math.floor((Math.random() * 7));
  cont++;
  back_element = document.getElementById('back')
  textButton_element = document.getElementById('textButton')
  titulo_element = document.getElementById('titulo')
  color = colors[Math.floor((Math.random() * colors.length))]

  if (cont + 1 >= frases.length) {
    // cont = 0;
    audio.volume = 1;
    back_element.style.backgroundImage = "url('medias/s2.jpeg')";
    textButton_element.innerHTML = '❤💘💗💘💕💓💞';
    titulo_element.innerText = '😍😘😻';
    document.getElementById('botao').onclick = "";
    // document.getElementById('centro').style.backgroundColor = '#fff0f5';

    setTimeout(() => {
      document.getElementById('centro').style.visibility = "hidden";
      setTimeout(() => {
        document.getElementById('final').style.visibility = "visible";
        document.getElementById('final').start();
      }, 1500);
    }, 10500);
    
  } else {
    back_element.style.backgroundColor = color;
    textButton_element.innerText = 'Próximo →';
    titulo_element.innerHTML = `${cont + 1}º Motivo`;
  }

  document.getElementById('autor').innerHTML = "";
  document.getElementById('titulo').style.color = color;
  document.getElementById('textButton').style.color = color;
  // document.getElementById('botao').style.backgroundColor = colors[cont];
  // document.getElementById('botao').style.filter = 'saturate(70%)';
  

  // document.getElementById('quote').innerHTML= frases[cont].frase;
  showText(frases[cont].frase, frases[cont].autor);

  if (frases[cont].tamanho != "14px") {
    document.getElementById("quote").style.fontSize = frases[cont].tamanho;
  }
}