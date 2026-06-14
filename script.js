function generar(){

let general=Math.floor(Math.random()*20)+180;
let roja=Math.floor(Math.random()*20)+180;
let x2=Math.floor(Math.random()*20)+160;
let x4=Math.floor(Math.random()*20)+140;

document.getElementById("resultado").innerText=

`👑 VIP CONFIG

GENERAL: ${general}

PUNTO ROJO: ${roja}

MIRA X2: ${x2}

MIRA X4: ${x4}

✅ LISTA`;
}

function copiarConfig(){

let texto=
document.getElementById("resultado").innerText;

navigator.clipboard.writeText(texto);

alert("✅ Configuración copiada");
}

function generarHUD(){

let disparo=Math.floor(Math.random()*20)+45;
let mira=Math.floor(Math.random()*20)+35;

document.getElementById("hudResultado").innerText=

`🎮 HUD PRO

🔫 Disparo: ${disparo}%

🎯 Mira: ${mira}%

✅ HUD LISTO`;
}

function generarCombo(){

let combos=[

"Kelly + Alok + Jota + Hayato",

"Alok + Moco + Kelly + Jota",

"Tatsuya + Hayato + Moco + Kelly",

"Homer + Alok + Jota + Shirou"

];

document.getElementById("comboResultado").innerText=
combos[Math.floor(Math.random()*combos.length)];
}

function calificar(estrellas){

document.getElementById("calificacion").innerText=
"⭐ Gracias por calificar con "+estrellas+" estrellas";
}  function generarTodo(){

let general=Math.floor(Math.random()*20)+180;
let roja=Math.floor(Math.random()*20)+180;
let x2=Math.floor(Math.random()*20)+160;
let x4=Math.floor(Math.random()*20)+140;

let disparo=Math.floor(Math.random()*15)+50;

let precision=Math.floor(Math.random()*10)+90;

let headshot=Math.floor(Math.random()*10)+90;

let combos=[
"Kelly + Alok + Jota + Hayato",
"Tatsuya + Kelly + Moco + Jota",
"Homer + Alok + Shirou + Hayato",
"Kelly + Dasha + Jota + Alok"
];

let combo=
combos[Math.floor(Math.random()*combos.length)];

document.getElementById("resultado").innerText=

`👑 CONFIG VIP

🎯 GENERAL: ${general}
🔴 ROJA: ${roja}
🔍 X2: ${x2}
🎯 X4: ${x4}

🎮 HUD
🔫 DISPARO: ${disparo}%

⚡ COMBO
${combo}

📊 ESTADÍSTICAS
PRECISIÓN: ${precision}%
HEADSHOT: ${headshot}%

✅ CONFIG LISTA`;
}

function copiarTodo(){

let texto=
document.getElementById("resultado").innerText;

navigator.clipboard.writeText(texto);

alert("✅ Configuración copiada");

}    function mostrarDispositivo(){

let dispositivo =
document.getElementById("dispositivo").value;

document.getElementById("infoDispositivo").innerText=

`📱 DISPOSITIVO SELECCIONADO

${dispositivo}

✅ Listo para generar configuración`;

}   function asistenteConfig(){

let telefono =
document.getElementById("telefono").value;

let dedos =
document.getElementById("dedos").value;

let estilo =
document.getElementById("estilo").value;

let gama="";

if(telefono.includes("Baja")){
gama="📱 GAMA BAJA";
}

if(telefono.includes("Media")){
gama="⚡ GAMA MEDIA";
}

if(telefono.includes("Alta")){
gama="🔥 GAMA ALTA";
}

let hud="";

if(dedos.includes("2")){

hud=
`✌️ HUD 2 DEDOS

🔫 Disparo: 58%
🎯 Mira: 42%
🧱 Gloo: 60%`;

}

if(dedos.includes("3")){

hud=
`🤟 HUD 3 DEDOS

🔫 Disparo: 55%
🎯 Mira: 40%
🧱 Gloo: 65%`;

}

if(dedos.includes("4")){

hud=
`🖖 HUD 4 DEDOS

🔫 Disparo: 50%
🎯 Mira: 38%
🧱 Gloo: 70%`;

}

document.getElementById("asistenteResultado").innerText=

`👑 CONFIG PERSONALIZADA

${gama}

🎮 ESTILO:
${estilo}

${hud}

✅ CONFIG RECOMENDADA`;
}    let niveles = [
"🥉 Bronce",
"🥈 Plata",
"🥇 Oro",
"💎 Diamante",
"🔥 Heroico",
"👑 Maestro"
];

let nivel = 0;

function subirRango(){

if(nivel < niveles.length-1){

nivel++;

document.getElementById("rangoActual").innerText =
niveles[nivel];

document.getElementById("historial").innerHTML +=
"<br>✅ Subiste a " + niveles[nivel];

}

}

function entrenar(){

let consejos = [

"🎯 Practica disparos a la cabeza 10 min",
"⚡ Haz 20 arrastres rápidos",
"🧱 Practica pared gloo",
"🏹 Entrena precisión con rifles",
"🔥 Juega 3 partidas clasificatoria"

];

let aleatorio =
Math.floor(Math.random()*consejos.length);

document.getElementById("entrenamiento").innerText =
consejos[aleatorio];

}  let niveles = [
"🥉 Bronce",
"🥈 Plata",
"🥇 Oro",
"💎 Diamante",
"🔥 Heroico",
"👑 Maestro"
];

let nivel = 0;

function subirRangoAdmin(){

let pass =
document.getElementById("adminPass").value;

if(pass !== "DYLANADMIN"){

alert("❌ Solo el administrador puede subir rangos");
return;

}

if(nivel < niveles.length-1){

nivel++;

document.getElementById("rangoActual").innerText =
niveles[nivel];

document.getElementById("historial").innerHTML +=
"<br>👑 Admin subió a " + niveles[nivel];

alert("✅ Rango actualizado");

}else{

alert("🏆 Rango máximo alcanzado");

}

}   function subirRango(){

document.getElementById("subirRangoEstado").innerText =

`🚧 FUNCIÓN EN PROCESO

👑 El sistema de rangos estará disponible
en una próxima actualización.

🔜 Próximamente...`;

}

function verHistorial(){

document.getElementById("historialEstado").innerText =

`🚧 HISTORIAL EN PROCESO

📜 El historial de progreso estará disponible
en una próxima actualización.

🔜 Próximamente...`;

}    function hablarMono(){

let consejos=[

"🐵 Usa General 195 si juegas Rush.",

"🐵 En iPhone prueba Roja 190.",

"🐵 Si fallas tiros, baja la General un poco.",

"🐵 HUD de 3 dedos mejora la velocidad.",

"🐵 Practica 10 minutos antes de clasificatoria.",

"🐵 Usa sensibilidad alta para headshots rápidos."

];

let aleatorio=
Math.floor(Math.random()*consejos.length);

document.getElementById("mensajeMono").innerText=
consejos[aleatorio];

}     function hablarMono(){

let consejos=[

"🐵 Usa General 195 para Rush.",

"🐵 Prueba HUD de 3 dedos.",

"🐵 Tu mejor opción es Headshot.",

"🐵 Practica pared gloo 10 minutos.",

"🐵 Tu sensibilidad parece muy baja."

];

let aleatorio=
Math.floor(Math.random()*consejos.length);

document.getElementById("mensajeMono").innerText=
consejos[aleatorio];

}
