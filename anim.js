// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Hola ishiolaaaa, como estas??", time: 5 },
  { text: "esta cuulll esto verdad?? jiji", time: 8 },
  { text: "si te soy sincero todavia no se cmo funciona esto", time: 13 },
  { text: "pero lo hice con cariño para ti sabesssss", time: 16 },
  { text: "escogi esta canción porque eres la primera persona", time: 19 },
  { text: "que se me viene a la mente con tan solo escuchar esta melodia,", time: 22 },
  { text: "realmente siento esa electricidad recorriendo mi cuerpo", time: 25 },
  { text: "cada que te pienso.", time: 28 },
  { text: "Me gustaria ver tu cara en este momento reirme de ti", time: 30 },
  { text: "jijijijiji", time: 33 },
  { text: "siento que de alguna manera el mundo quiso que nuestros caminos", time: 35 },
  { text: "se crusaran", time: 37 },
  { text: "como iba a ser posible que tomabamos las mismas micros", time: 39 },
  { text: "y nunca nos vimoooosss, es como watafaaakk", time: 42 },
  { text: "aparte que pasabamos por las mismas partes", time: 45 },
  { text: "solo fue el destino sabes", time: 48 },
  { text: "cuando te veo llegar a la u me da tanta alegriaaa", time: 50 },
  { text: "pero me da un poquito de verguenza darte besitos cuando hay gente", time: 53 },
  { text: "pero eso no quiere decir que no te ame o que no quiera", time: 56 },
  { text: "solo me da cosita incomodar al resto", time: 59 },
  { text: "y en general me pasa, sobretodo cuando voy pa tu casa :((", time: 62 },
  { text: "pero soy un chavalin timido sabessss", time: 65 },
  { text: "te amo demasiado, realmente espero poder llegar a tener esa vida", time: 68 },
  { text: "que tanto deseamos juntos, con nuestra casita, nuestras cositas", time: 71 },
  { text: "cada cosa en su lugar, todo sera perfecto, lo se.", time: 74 },
  { text: "te amo de aqui hasta while(1).", time: 77 },
  { text: "(Osea que infinitamente.❤)", time: 81 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 9
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.2; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);