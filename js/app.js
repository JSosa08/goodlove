
/*===== INDEX SECCIONES =====*/
if(document.querySelector('.menu-secciones')){

    const tabLinks=document.querySelectorAll('.li-seccion');
    const tabsContent=document.querySelectorAll('.div-seccion');

    tabLinks[0].classList.add('active');

    if(document.querySelector('.div-seccion')){
        tabsContent[0].classList.add('seccion-activa');
    }
    

    for (let i = 0; i < tabLinks.length; i++) {
        
        tabLinks[i].addEventListener('click',()=>{

            
            tabLinks.forEach((tab) => tab.classList.remove('active'));
            tabLinks[i].classList.add('active');
            
            tabsContent.forEach((tabCont) => tabCont.classList.remove('seccion-activa'));
            tabsContent[i].classList.add('seccion-activa');
            
        });
        
    }

}

/*====== MENU MOVIL =====*/

const menu=document.querySelector('.icon-menu');
const menuClose=document.querySelector('.cerrar-menu');

menu.addEventListener('click',()=>{
    document.querySelector('.header-menu-movil').classList.add('active');
})

menuClose.addEventListener('click',()=>{
    document.querySelector('.header-menu-movil').classList.remove('active');
})

/*====== PRODUCTOS.HTML =====*/
// app.js
document.addEventListener('DOMContentLoaded', function() {
    const filtros = document.querySelectorAll('.filtro');
    const productos = document.querySelectorAll('.productos-producto');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitulo = document.getElementById('modal-titulo');
    const modalDescripcion = document.getElementById('modal-descripcion');
    const modalPrecio = document.getElementById('modal-precio');
    const modalColores = document.getElementById('modal-colores');
    const cerrar = document.querySelector('.cerrar');

    filtros.forEach(filtro => {
        filtro.addEventListener('click', function() {
            const categoria = this.getAttribute('data-categoria');
            productos.forEach(producto => {
                if (categoria === 'todos' || producto.getAttribute('data-categoria') === categoria) {
                    producto.style.display = 'block';
                } else {
                    producto.style.display = 'none';
                }
            });
        });
    });

    document.querySelectorAll('.ver-detalles').forEach(boton => {
        boton.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            const productos = {
                'F-01': {
                    img: 'img/ramoderosasygirasoles.jpg',
                    titulo: 'Flores Naturales',
                    descripcion: '3 flores rojas + 1 Girasol',
                    precio: 'S/ 25.00',
                    colores: 'Colores de Rosas: Rojas, Blancas, Rosadas, Amarillas.',
                },  'F-02': {
                    img: 'img/ramodeflores.jpg',
                    titulo: 'Rosas Naturales',
                    descripcion: '3 rosas rojas + 5 Girasoles + 3 Fotos',
                    precio: 'S/ 35.00',
                    colores: 'Colores de Rosas: Rojas, Blancas, Rosadas, Amarillas.',
                }, 'F-03': {
                    img: 'img/rosas04.jpg',
                    titulo: 'Duo Perzonalizado',
                    descripcion: '1 Peluche + 6 rosas eternas + 1 Lazo + 1 Tarjeta con dedicatoria.',
                    precio: 'S/ 55.00',
                    colores: 'El papel y las flores pueden variar segun la ocasión y/o disponibilidad.',
                },  'F-04': {
                    img: 'img/rosas03.jpg',
                    titulo: 'Rosa individual',
                    descripcion: '1 Rosa + Dedicatoria',
                    precio: 'S/ 10.00',
                    colores: 'Variedad de tipo de rosas según el gusto del cliente',
                },  'F-05': {
                    img: 'img/rosaseternas.jpg',
                    titulo: 'Rosas Eternas',
                    descripcion: '8 rosas rojas + 1 Mariposa + 1 Lazo',
                    precio: 'S/ 35.00',
                    colores: 'El papel y las rosas pueden variar segun la ocasión y/o disponibilidad.',
                },  'F-06': {
                    img: 'img/rosas05.jpg',
                    titulo: 'Arreglo de rosas',
                    descripcion: '1 Caja + 15 rosas rosas amarillas + Decoración con Lluvia flor + 1 Flor araña',
                    precio: 'S/ 35.00',
                    colores: 'Colores de rosas: Amarillas, Blancas, Celestes, Rosadas, Rojas.',
                },


                'P-01': {
                    img: 'img/peluches/bowie-perezoso.png',
                    titulo: 'Bowie Peresoso',
                    descripcion: 'Tierno peluche bowie perezoso (53 cm) en caja de regalo',
                    precio: 'S/ 45.00',
                    colores: 'Personalizado para cualquier tipo de evento'
                },  'P-02': {
                    img: 'img/peluches/1.jpg',
                    titulo: 'Box Stick',
                    descripcion: '1 Caja de madera + 1 Peluche Stick + 3 Globos decorativos + 2 latas de cerveza + Pack de fotos + Billetera',
                    precio: 'S/ 60.00',
                    colores: 'Personalizado para cualquier tipo de evento y peluche favorito'
                },  'P-03': {
                    img: 'img/peluches/2.jpg',
                    titulo: 'Box Corazón',
                    descripcion: '1 Caja corazón + 1 Caja chocalates X5 + Mini Peluche + Globo + Dulces',
                    precio: 'S/ 40.00',
                    colores: 'Personalizado para cualquier tipo de evento'
                },  'P-04': {
                    img: 'img/peluches/4.jpg',
                    titulo: 'Box Mamá',
                    descripcion: '1 Taza Personalizada + 1 Mini Peluche + 2 Globos + 1 Tarjeta + Dulces + 1 Rosa',
                    precio: 'S/ 30.00',
                    colores: 'Personalizado para cualquier tipo de evento'
                },  'P-05': {
                    img: 'img/peluches/6.jpg',
                    titulo: 'Box Cumpleaños',
                    descripcion: '1 Caja de madera + 1 Mini Peluche + 1 Pulcera + Dulces + 2 Globos',
                    precio: 'S/ 55.00',
                    colores: 'Personalizado para cualquier ocasión especial'
                },  'P-06': {
                    img: 'img/peluches/7.jpg',
                    titulo: 'Box Aniversario',
                    descripcion: '1 Caja de carton + 1 Caja chocalates X3 + 1 Pomito chocalates Princesas X5 + Pack de Fotos + 1 Mini Peluche + 1 Llavero',
                    precio: 'S/ 65.00',
                    colores: 'Personalizado para cualquier tipo de evento especial'
                },


                'Cu-01': {
                    img: 'img/cuadros/1.jpg',
                    titulo: 'Cuadro Columpio',
                    descripcion: '1 Cuadro columpio de madera + 4 Fotos + Lazo',
                    precio: 'S/ 50.00',
                    colores: '100% personalizado, con las fotos más importantes del cliente.'
                }, 'Cu-02': {
                    img: 'img/cuadros/2.jpg',
                    titulo: 'Cuadro Collage',
                    descripcion: '1 Cuadro de Madera (21 cm x 29.7 cm) + 8 Fotos + Mensaje o frase',
                    precio: 'S/ 45.00',
                    colores: 'El diseño es personalizado al gusto del cliente, el cuadro varia su color según el diseño'
                },  'Cu-03': {
                    img: 'img/cuadros/7.jpg',
                    titulo: 'Cuadro Dado',
                    descripcion: '1 Marco dado de Madera + 8 fotos.',
                    precio: 'S/ 55.00',
                    colores: 'Regalo perfecto para recordar tus mejores momentos.'
                },  'Cu-04': {
                    img: 'img/cuadros/5.jpg',
                    titulo: 'Collage Corazón',
                    descripcion: '1 Cuadro de Madera + Fotos en Diseño de Corazón + Dedicatoria',
                    precio: 'S/ 45.00',
                    colores: 'El diseño es personalizado al gusto del cliente, el cuadro varia su color según el diseño'
                },  'Cu-05': {
                    img: 'img/cuadros/6.jpg',
                    titulo: 'Cuadro Calendario',
                    descripcion: '1 Cuadro con doble Marco de madera + 4 fotos + Calendario',
                    precio: 'S/ 50.00',
                    colores: 'El diseño es personalizado y adaptable a tu empresa'
                },  'Cu-06': {
                    img: 'img/cuadros/8.jpg',
                    titulo: 'Cuadro de Año nuevo',
                    descripcion: '1 Cuadro + 4 Fotos + Pequeña dedicatoria',
                    precio: 'S/ 45.00',
                    colores: 'Regalo perfecto para empezar un nuevo año con tu familia, persona favorita o/u empresa'
                }, 

                'Com-01': {
                    img: 'img/complemento/1.jpg',
                    titulo: 'Llavero Personalizados',
                    descripcion: '1 Llavero Acrilico + Foto + Dedicatoria',
                    precio: 'S/ 6.00 c/u',
                    colores: '100% personalizado, con la foto según la ocasión.'
                }, 'Com-02': {
                    img: 'img/complemento/2.jpg',
                    titulo: 'Tazas personalizadas',
                    descripcion: '1 Taza + Caja + dedicatoria',
                    precio: 'S/ 30.00',
                    colores: 'El diseño es personalizado al gusto del cliente, según la ocasión'
                },  'Com-03': {
                    img: 'img/pulseraschipoderosas.jpg',
                    titulo: 'Pulcera Personalizada',
                    descripcion: 'Pulcera + Dedicatoria',
                    precio: 'S/ 10.00',
                    colores: 'Regalo perfecto para simbolizar, una amistad, pareja o aniversario.'
                },  'Com-04': {
                    img: 'img/complemento/3.jpg',
                    titulo: 'Recuerdo Personalizado',
                    descripcion: '1 adorno + 1 Foto',
                    precio: 'S/ 65.00',
                    colores: 'El recuerdo es de acuero a la ocasión.'
                },  'Com-05': {
                    img: 'img/complemento/7.jpg',
                    titulo: 'Lapicero Personalizado',
                    descripcion: '1 Lapicero + Letras + Adorno',
                    precio: 'S/ 10.00',
                    colores: 'El diseño es personalizado y adaptable a la ocasión'
                },  'Com-06': {
                    img: 'img/complemento/8.jpg',
                    titulo: 'Tomatodos Personalizados',
                    descripcion: '1 tomatodo personalizado',
                    precio: 'S/ 35.00',
                    colores: 'Regalo perfecto para engreir a tus seres queridos, u empresa'
                },

                'Oca-01': {
                    img: 'img/ocaciones/1.jpg',
                    titulo: 'Osito Mariachi',
                    descripcion: '2 Osos + Dedicatoria + Globos + Detalle + Borbujas + Bombarda + Musica',
                    precio: 'S/ 120.00',
                    colores: 'Regalo perfecto para sorprender en las fechas especiales'
                }, 'Oca-02': {
                    img: 'img/ocaciones/4.jpg',
                    titulo: 'Picnic',
                    descripcion: 'Mesita + Cogines + Frutas + Dulces + Vino + Frujos',
                    precio: 'S/ 140.00',
                    colores: 'Un momento junto a tu pareja o amistades, disfrutando del sonido de las olas del mar'
                },  'Oca-03': {
                    img: 'img/ocaciones/5.jpg',
                    titulo: 'Velada Romántica',
                    descripcion: 'Panel de fotos + letras con luces + Cogines + Velas + Cuadro + Vino + Mesita',
                    precio: 'S/ 200.00',
                    colores: 'Una velada perfecta para celebrar tus mejores aniversarios al lado de tu personita especial'
                },  'Oca-04': {
                    img: 'img/ocaciones/9.jpg',
                    titulo: 'Osito Sorpresa',
                    descripcion: 'Osita + Detalle + Globo + Dedicatoria',
                    precio: 'S/ 65.00',
                    colores: 'Regalo perfecto para sorprender en las fechas especiales'
                },  'Oca-05': {
                    img: 'img/ocaciones/12.jpg',
                    titulo: 'Osito Cumpleañero',
                    descripcion: 'Oso + Dedicatoria + Cuadro + Globos',
                    precio: 'S/ 80.00',
                    colores: 'Regalo perfecto para sorprender en las fechas especiales'
                },  'Oca-06': {
                    img: 'img/ocaciones/10.jpg',
                    titulo: 'Osita Sorpresa',
                    descripcion: 'Osito + Ramo de rosas eternas + dedicatoria + Globo',
                    precio: 'S/ 65.00',
                    colores: 'Regalo perfecto para sorprender en las fechas especiales'
                },

                'pan-01': {
                    img: 'img/paneles/1.jpg',
                    titulo: 'Cumpleaños Rey',
                    descripcion: '2 Paneles + 2 Arcos de Globo + Luces + 5 Mesas',
                    precio: 'S/ 320.00',
                    colores: 'Celebra con las mejores decoraciones en tus fechas de cumpleaños'
                }, 'pan-02': {
                    img: 'img/paneles/2.jpg',
                    titulo: 'Cumpleaños Goku',
                    descripcion: '2 Paneles + 2 Arcos de Globo + Alfombra + 3 Mesas Circulares + Letras',
                    precio: 'S/ 190.00',
                    colores: 'Celebra con las mejores decoraciones en tus fechas de cumpleaños'
                },  'pan-03': {
                    img: 'img/paneles/3.jpg',
                    titulo: 'Bodas de Oro',
                    descripcion: '1 panel Circular + 1 Arco de Globos + 3 mesas + 3 Floreros',
                    precio: 'S/ 240.00',
                    colores: 'Celebra con las mejores decoraciones en tus fechas de cumpleaños'
                },  'pan-04': {
                    img: 'img/paneles/8.jpg',
                    titulo: 'Quinceañero',
                    descripcion: '2 paneles + 1 Arco de Globos + 7 Mesas Circulares + Floreros + Letras + Alfombra',
                    precio: 'S/ 400.00',
                    colores: 'Celebra con las mejores decoraciones para la princesa de casa.'
                },  'pan-05': {
                    img: 'img/paneles/11.jpg',
                    titulo: 'Fiesta Navideña',
                    descripcion: '1 Panel + 2 Arcos de Globos + 6 Mesas Ciculares + Alfombra + Adornos navideños',
                    precio: 'S/ 365.00',
                    colores: 'Celebra con las mejores decoraciones para recibir al niño Jesús'
                },  'pan-06': {
                    img: 'img/paneles/5.jpg',
                    titulo: 'Fiesta de Graduación',
                    descripcion: '1 Panel + 2 Arcos de Globos + 5 Mesas Circulares + 1 Alfombra + Letras + Adornos',
                    precio: 'S/ 500.00',
                    colores: 'Celebra con las mejores decoraciones para tener un hermoso evento de recuerdo por el gran logro de tu profesión'
                },



            };
            const producto = productos[id];
            modalImg.src = producto.img;
            modalTitulo.textContent = producto.titulo;
            modalDescripcion.textContent = 'Incluye: ' + producto.descripcion;
            modalPrecio.textContent = producto.precio;
            modalColores.textContent = producto.colores;
            modal.style.display = 'block';
        });
    });

    cerrar.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
