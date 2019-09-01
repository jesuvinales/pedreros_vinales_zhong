var trabajos = [{
    figure: "media/Celer v2.png",
    alt: "Celler",
    title: "CELLER",
    about: "Dispositivo de atletismo para personas con discapacidad visual",
    url:"https://www.youtube.com/watch?v=PuU5MXKQo-0"
}, {
    figure: "media/DSC_7463.png",
    alt: "Rum",
    title: "RUM",
    about: "Juguete móvil de plástico reciclado",
    url:"https://www.youtube.com/watch?v=vTa-lhEuP78"
}, {
    figure: "media/_MG_1218.jpg",
    alt: "Syl",
    title: "SYL",
    about: "Banca para Campus Lo Contador,FADEU",
    url:"https://www.instagram.com/p/B11ixp3FHHl/"
}, {
    figure: "media/WhatsApp Image 2019-08-21 at 14.54.01 (1).jpeg",
    alt: "Micelio",
    title: "MICELIO",
    about: "Plataforma web de intercambio de conocimientos para agricultures",
    url:"https://www.youtube.com/watch?v=50Nr1FRy4W4"
}, {
    figure: "media/virutex.png",
    alt: "Descripción de la imagen",
    title: "PARCHES QUITAMANCHAS VIRUTEX",
    about: "Parches para manchas de emergencia",
    url:"https://www.youtube.com/watch?v=DMVR3YH0l38"
}, {
    figure: "media/_DSC2609 (1).jpg",
    alt: "Maramba",
    title: "MARAMBA",
    about: "Enriquecimiento ambiental para servales del ZooMet",
    url:"https://youtu.be/g87nIo9oWxs"
}, {
    figure: "media/Captura de Pantalla 2019-08-25 a la(s) 14.15.28.png",
    alt: "Tumis",
    title: "TUMIS",
    about: "Contenedor de alimentos plegable",
    url:"https://youtu.be/cdVjH82LjoA "
}, {
      figure: "media/examen.300.png",
      alt: "Agrocinta",
      title: "AGROCINTA",
      about: "Sistema de sembrado directo",
      url:"https://youtu.be/OqRQvZgHrLk"
}, {
        figure: "media/Proyectos EMERGENCIA-7260.jpg",
        alt: "Nauca",
        title: "NAUCA",
        about: "Baño femenino de emergencia",
        url:"https://www.instagram.com/p/B12qyVGFw2U/"
}, {
        figure: "media/untitled.293.png",
        alt: "Exhibidor de vinos",
        title: "EXHIBIDOR DE VINOS",
        about: "Propueta de packaging de vinos con doble función para exhibidor",
        url:"https://www.instagram.com/p/B11fof0F3UX/"
}, {
        figure: "media/foto mash.jpg",
        alt: "Mash",
        title: "MASH",
        about: "blablablalbalb",
        url:"https://www.instagram.com/p/B12p3YIl__b/"
}, {
        figure: "media/Captura de Pantalla 2019-08-26 a la(s) 11.58.00.png",
        alt: "Lubtat",
        title: "LUBTAT",
        about: "Tatuaje inteligente para personas rebeldes",
        url:"https://www.instagram.com/p/B11f1tclUd7/"
}];
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '" alt="' + trabajos[i].alt + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    var cuatro = '<p><a href=" ' + trabajos[i].url + ' ">Ver más</a></p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + cuatro + '</div>')
});
