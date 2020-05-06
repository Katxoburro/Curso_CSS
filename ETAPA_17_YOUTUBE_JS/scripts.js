// menu de YouTube
/*
modelo
	id: int = comienza en 1 y autoincremental
	icon: string = esto es la URL del icono
  name: string = esto el texto
  type: string = posibles valores: link, collapse, expand
  url: string = el enlace
*/

function getMenu(type) {
  var menu = [{
    section: 1,
    type: 'list',
    data: [{
      id: 1,
      icon: '../images/icons/youtube/paginaPrincipal.png',
      name: 'Página principal',
      type: 'link',
      url: 'https://www.youtube.com/'
    }, {
      id: 2,
      icon: '../images/icons/youtube/tendencias.png',
      name: 'Tendencias',
      type: 'link',
      url: 'https://www.youtube.com/feed/trending'
    }, {
      id: 3,
      icon: '../images/icons/youtube/subscription.png',
      name: 'Suscripciones',
      type: 'link',
      url: 'https://www.youtube.com/feed/subscriptions'
    }]
  }, {
    section: 2,
    type: 'list',
    data: [{
      id: 4,
      icon: '../images/icons/youtube/biblioteca.png',
      name: 'Biblioteca',
      type: 'link',
      url: 'https://www.youtube.com/feed/library'
    }, {
      id: 5,
      icon: '../images/icons/youtube/history.png',
      name: 'Historial',
      type: 'link',
      url: 'https://www.youtube.com/feed/history'
    }, {
      id: 6,
      icon: '../images/icons/youtube/tusVideos.png',
      name: 'Tus vídeos',
      type: 'link',
      url: 'https://www.youtube.com/feed/my_videos'
    }, {
      id: 7,
      icon: '../images/icons/youtube/verMasTarde.png',
      name: 'Ver más tarde',
      type: 'link',
      url: 'https://www.youtube.com/playlist?list=WL'
    }, {
      id: 8,
      icon: '../images/icons/youtube/videosQueMeGustan.png',
      name: 'Vídeos que me gustan',
      type: 'link',
      url: 'https://www.youtube.com/playlist?list=LLZ_BtTctsLFWZd9-XS-WRnA'
    }, {
      id: 9,
      icon: '../images/icons/youtube/mostrarMas.png',
      name: 'Mostar más',
      type: 'expand',
      url: null
    }, {
      id: 10,
      icon: '../images/icons/youtube/playlist-play.png',
      name: 'SIESTEANDO',
      type: 'link',
      url: 'https://www.youtube.com/playlist?list=PLBlJ-R5XVCfZlg75zbgQq8X9YEA5JKhBQ'
    }, {
      id: 11,
      icon: '../images/icons/youtube/playlist-play.png',
      name: 'Rock',
      type: 'link',
      url: 'https://www.youtube.com/playlist?list=PLBlJ-R5XVCfaW-J5Rr6xiuaZouo2005Pn'
    }, {
      id: 12,
      icon: '../images/icons/youtube/live.png',
      name: 'Mix: CREEP - Karen Souza',
      type: 'link',
      url: 'https://www.youtube.com/watch?v=yK5mhtaDK8g&list=RDyK5mhtaDK8g'
    }, {
      id: 13,
      icon: '../images/icons/youtube/playlist-play.png',
      name: 'REGGAE',
      type: 'link',
      url: 'https://www.youtube.com/playlist?list=PLBlJ-R5XVCfZfe9ux8DAQJuqWzVCGe26M'
    }, {
      id: 14,
      icon: '../images/icons/youtube/mostrarMenos.png',
      name: 'Mostrar menos',
      type: 'collapse',
      url: null
    }]
  }, {
    section: 3,
    type: 'list',
    data: [{
      id: 15,
      icon: '../images/icons/youtube/calero.jpg',
      name: 'Juan Francisco Calero - CLUB ONMOTOR',
      type: 'link',
      url: 'https://www.youtube.com/channel/UCeymXIrIhMYFmCNIlwrl9Lw'
    }, {
      id: 16,
      icon: 'https://yt3.ggpht.com/a/AATXAJwZ0YtvdbWjpeTHzk44-gmT9Es_Kbj7ESdntw=s144-c-k-c0xffffffff-no-rj-mo',
      name: 'JF CALERO / El cascarón de NUEZ',
      type: 'link',
      url: 'https://www.youtube.com/channel/UC71sOOBgRu5UL-opaFVFstw'
    }, {
      id: 17,
      icon: '../images/icons/youtube/explorarCanales.png',
      name: 'Explorar canales',
      type: 'link',
      url: 'https://www.youtube.com/feed/guide_builder'
    }]
  }, {
    section: 4,
    type: 'list',
    data: [{
      id: 18,
      icon: '../images/icons/youtube/youtubePremium.png',
      name: 'YouTube Premium',
      type: 'link',
      url: 'https://www.youtube.com/premium'
    }, {
      id: 19,
      icon: '../images/icons/youtube/peliculas de YT.png',
      name: 'Películas de YouTube',
      type: 'link',
      url: 'https://www.youtube.com/feed/storefront?bp=ogUCKAI%3D'
    }, {
      id: 20,
      icon: '../images/icons/youtube/videojuegos.png',
      name: 'Videojuegos',
      type: 'link',
      url: 'https://www.youtube.com/gaming'
    }, {
      id: 21,
      icon: '../images/icons/youtube/directo.png',
      name: 'Directo',
      type: 'link',
      url: 'https://www.youtube.com/channel/UC4R8DWoMoI7CAwX8_LjQHig'
    }, {
      id: 22,
      icon: '../images/icons/youtube/aprendizaje.png"',
      name: 'Aprendizaje',
      type: 'link',
      url: 'https://www.youtube.com/learning'
    }]
  }, {
    section: 5,
    type: 'list',
    data: [{
      id: 23,
      icon: '../images/icons/youtube/configuracion.png',
      name: 'Configuración',
      type: 'link',
      url: 'https://www.youtube.com/account'
    }, {
      id: 24,
      icon: '../images/icons/youtube/historialDeDenuncias.png',
      name: 'Historial de denuncias',
      type: 'link',
      url: 'https://www.youtube.com/reporthistory'
    }, {
      id: 25,
      icon: '../images/icons/youtube/ayuda.png',
      name: 'Ayuda',
      type: 'popup',
      url: null
    }, {
      id: 26,
      icon: '../images/icons/youtube/enviarSugerencias.png',
      name: 'Enviar sugerencias',
      type: 'popup',
      url: null
    }]
  }, {
    type: 'header',
    data: [{
      icon: '',
      type: 'button'
    }, {
      icon: '',
      type: 'logo',
      url: 'https://www.youtube.com/'
    }, {
      type: 'text',
      text: 'ES'
    }]
  }, {
    type: 'footer',
    data: [{
      type: 'list',
      data: [{
        name: 'Información',
        url: 'https://www.youtube.com/intl/es/about/'
      }, {
        name: 'Prensa',
        url: 'https://www.youtube.com/intl/es/about/press/'
      }, {
        name: 'Derechos de autor',
        url: 'https://www.youtube.com/intl/es/about/copyright/#support-and-troubleshooting'
      }, {
        name: 'Contacto',
        url: 'https://www.youtube.com/t/contact_us'
      }, {
        name: 'Creadores',
        url: 'https://www.youtube.com/intl/es/creators/'
      }, {
        name: 'Publicidad',
        url: 'https://www.youtube.com/intl/es/ads/'
      }, {
        name: 'Desarrolladores',
        url: 'https://developers.google.com/youtube'
      }]
    }, {
      type: 'list',
      data: [{
        name: 'Términos',
        url: 'https://www.youtube.com/t/terms'
      }, {
        name: 'Privacidad',
        url: 'https://policies.google.com/privacy?hl=es&gl=es'
      }, {
        name: 'Política y seguridad',
        url: 'https://www.youtube.com/intl/es/about/policies/#community-guidelines'
      }, {
        name: 'Probar funciones nuevas',
        url: 'https://www.youtube.com/new'
      }]
    }, {
      type: 'copyright',
      name: '© 2020 Google LLC YouTube, una empresa de Google'
    }]
  }];

  if (type === 'original') {
    return menu;
  } else if (type === 'transformado') {
    var nuevoMenu = [];

    

  } else {
    return false;
  }
};

console.log('esto es el menú ORIGINAL', getMenu('original'));
console.log('esto es el menú TRANSFORMADO', getMenu('transformado'));