export default {
  global: {
    componenteFormativo: 'Propuesta comercial de un producto o servicio',
    descripcionCurso:
      'Una propuesta comercial es un documento presentado al cliente con la información del producto o servicio; describiendo beneficios, plazos de entrega, alcance, formas de pago, entre otros. <br><br>Se abordarán sus principales componentes: identificación de necesidades, descripción del producto, condiciones de la propuesta y formas de presentación. Finalmente, se muestran técnicas de negociación y herramientas para la socialización de la propuesta.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    /*imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],*/
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'El cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Mercado de consumo',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: ' Mercados industriales',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Mercados de revendedores',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Mercados de gobierno',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Mercados internacionales',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Relación del mercadeo y los clientes',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Atraer clientes',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Retener clientes',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Fidelizar clientes',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Clasificación de clientes',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Prospección de los clientes',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1.1.	Comprender el mercado y al cliente',
      referencia:
        'QuestioPro. (s.f.). El mercado y las necesidades del cliente en la investigación (Parte I). ',
      tipo: 'Página web',
      link:
        'https://www.questionpro.com/blog/es/mercado-y-necesidades-del-cliente/',
    },
    {
      tema: '1.2.	Mezcla de mercadeo',
      referencia: 'Coll, F. (2021). Mezcla de mercadotecnia. Economipedia.',
      tipo: 'Página web',
      link:
        'https://economipedia.com/definiciones/mezcla-de-mercadotecnia.html ',
    },
    {
      tema: '1.2.3. Canales de distribución',
      referencia:
        'Rodríguez, I., Maraver, G. & Martínez, F. (s.f.). Canales de distribución. Universitat Oberta de Catalunya. ',
      tipo: 'Artículo',
      link:
        'http://cv.uoc.edu/annotation/e278f6575e9eb38a49450e18f778004e/607706/PID_00195275/PID_00195275.html ',
    },
    {
      tema: '1.2.3. Canales de distribución',
      referencia: 'Comercionista. (2020). Tipos de mayoristas.',
      tipo: 'Página web',
      link: 'https://www.comercionista.com/compras/que-es-un-mayorista-tipos/ ',
    },
    {
      tema: '2.	Mercados. ',
      referencia: 'Quiroga, M. (2020). Mercado. Economipedia. ',
      tipo: 'Página web',
      link: 'https://economipedia.com/definiciones/mercado.html ',
    },
    {
      tema: '2.4. Características del mercado.',
      referencia: 'Máxima, A. (2019). Características del mercado. ',
      tipo: 'Página web',
      link: 'https://www.caracteristicas.co/mercado/#ixzz74Q1rHzhJ ',
    },
    {
      tema: '2.7. Pasos para definir el mercado.',
      referencia:
        'WixBlog. (2020). Mercado meta: Qué es, como definirlo y ejemplos. ',
      tipo: 'Página web',
      link:
        'https://es.wix.com/blog/2020/12/mercado-meta-que-es-como-definirlo-y-ejemplos',
    },
    {
      tema: '3.	Segmentos del mercado.',
      referencia:
        'Núñez, V. (2019). ¿Qué es la segmentación del mercado y cómo potencia tu estrategia de marketing? ',
      tipo: 'Página web',
      link: 'https://vilmanunez.com/segmentacion-del-mercado/ ',
    },
    {
      tema: '4.	Técnicas de recolección de datos.',
      referencia:
        'QuestionPro. (s.f.). ¿Qué es la recolección de datos y cómo realizarla? ',
      tipo: 'Página web',
      link:
        'https://www.questionpro.com/blog/es/recoleccion-de-datos-para-investigacion/ ',
    },
    {
      tema: '4.1.	Técnicas',
      referencia:
        'Westreicher, G. (2021). Recolección de datos. Economipedia. ',
      tipo: 'Página web',
      link: 'https://economipedia.com/definiciones/recoleccion-de-datos.html ',
    },
    {
      tema: '4.1. Técnicas',
      referencia: 'QuestioPro. (s.f.). Encuesta. ',
      tipo: 'Página web',
      link: 'https://www.questionpro.com/es/una-encuesta.html#que_es_encuesta',
    },
    {
      tema: '4.2.	Instrumentos para la recolección de información',
      referencia:
        'Díaz-Bravo, L., Torruco-García, U., Martínez-Hernández, M., y Varela-Ruiz, M. (2013). La entrevista, recurso flexible y dinámico. Investigación en Educación Médica, 2(7), 162-167.',
      tipo: 'Artículo',
      link:
        'http://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S2007-50572013000300009 ',
    },
    {
      tema: '5.	Bases de datos.',
      referencia:
        'Nota Tecnológica. (s.f.). Estructura de una base de datos: normalización y más. ',
      tipo: 'Página web',
      link:
        'https://notatecnologica.com/tecnologia/estructura-de-una-base-de-datos/ ',
    },
  ],
  glosario: [
    {
      termino: 'Base de datos',
      significado:
        'herramienta fundamental en el entorno informático hoy en día y tienen aplicación en la práctica como los negocios, organizaciones y en la vida personal. Su aplicabilidad responde a la necesidad de gestionar datos que provean información pertinente.',
    },
    {
      termino: 'Encuesta',
      significado:
        '“Las encuestas son un método de investigación y recopilación de datos utilizadas para obtener información a un grupo de individuos sobre diversos temas” (QuestionPro, s.f.). ',
    },
    {
      termino: 'Entrevista',
      significado:
        'charla en la que una persona hace a otra una serie de preguntas sobre un tema determinado. ',
    },
    {
      termino: 'Mercadeo',
      significado:
        '“Es un proceso mediante el cual las empresas crean valor para sus clientes y generan fuertes relaciones con ellos para, en reciprocidad, captar valor de los clientes” (Kotler y Armstrong, 2013, p. 35).',
    },
    {
      termino: 'Mercado',
      significado:
        '“El mercado es un proceso que opera cuando hay personas que actúan como compradores y otras como vendedores de bienes y servicios, generando la acción del intercambio” (Quiroga, 2020).',
    },
    {
      termino: 'Observación',
      significado:
        '“Es una técnica que consiste en observar atentamente el fenómeno, hecho o caso, tomar información y registrarla para su posterior análisis” (Pereda, 2017).',
    },
    {
      termino: 'Posicionamiento',
      significado:
        '“Una posición de producto es la forma en que un producto está definido por los consumidores en atributos importantes, el lugar que ocupa en la mente de los consumidores respecto a los productos competidores” (Kotler y Armstrong, 2013).',
    },
    {
      termino: 'Segmentación',
      significado:
        'proceso de dividir un mercado en grupos de clientes potenciales con necesidades y/o características similares y que pueden requerir un producto diferente y/o una forma de comunicación diferente.',
    },
    {
      termino: 'Ventas',
      significado:
        'actividades relacionadas con la venta o la cantidad de bienes vendidos en un período de tiempo determinado. La entrega de un servicio por un costo también se considera una venta.',
    },
  ],
  referencias: [
    {
      referencia:
        'Arellano, C., R. (2010). Marketing enfoque América Latina. Pearson Prentice Hall.',
      link: '',
    },
    {
      referencia:
        'Caro, L. (2019). 7 Técnicas e Instrumentos para la Recolección de Datos. Lifeder.',
      link: 'https://www.lifeder.com/tecnicas-instrumentos-recoleccion-datos/ ',
    },
    {
      referencia:
        'Díaz-Bravo, L., Torruco-García, U., Martínez-Hernández, M., y Varela-Ruiz, M. (2013). La entrevista, recurso flexible y dinámico.',
      link:
        'http://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S2007-50572013000300009',
    },
    {
      referencia:
        'Fano, F. (2015). ¿Qué es estrategia? El pensamiento de Michael E. Porter. Mejora Competitiva.',
      link:
        'https://uv.unitec.edu/MarcoestrategicodeempresasMB74101/lectura/S101/3/',
    },
    {
      referencia: 'Goñi, Á., N. (2008). El precio. Pearson Prentice Hall.',
      link: '',
    },
    {
      referencia:
        'Kendall, K., y Kendall, J. (2011). Análisis y diseño de sistemas. Pearson Education. ',
      link: '',
    },
    {
      referencia:
        'Kerin. H., y Rudelius, W. (2014). Marketing. McGraw Hill Education. 11a Edición.',
      link: '',
    },
    {
      referencia:
        'Kotler, P., y Armstrong, G. (2013). Fundamentos de marketing. Pearson Prentice Hall.',
      link: '',
    },
    {
      referencia:
        'Kotler, P., y Armstrong, G. (2012). Marketing. Pearson Prentice Hall.',
      link: '',
    },
    {
      referencia: 'Pereda, G (2017). Métodos y técnicas de investigación.',
      link:
        'https://es.slideshare.net/guillermopereda/mtodos-y-tcnicas-de-investigacin-79785371',
    },
    {
      referencia: 'QuestioPro. (s.f.). Encuesta.',
      link: 'https://www.questionpro.com/es/una-encuesta.html#que_es_encuesta',
    },
    {
      referencia:
        'Santesmases, M., Valderrey, F., y Sánchez, A. (2014). Fundamentos de mercadotecnia. Grupo Editorial Patria.',
      link: '',
    },
    {
      referencia:
        'Stanton, W., Etzel, M., y Walker, B. (2007). Fundamentos de marketing. McGraw Hill Education.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Javier del Carmen Martínez Pérez',
          cargo: 'Instructor técnico',
          centro: 'Centro de Comercio y Servicio - Regional Bolívar',
        },
        {
          nombre: 'Zenith Chinchilla Ruedas',
          cargo: 'Diseñador instruccional',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Revisor metodológico y pedagógico',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Corrector de estilo',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'José Gabriel Ortiz Abella',
          cargo: 'Corrector de estilo',
          centro:
            'Centro de para la Comunicación de la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Carolina Jiménez Suescún',
          cargo: 'Evaluador instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmin Rocio Figueroa Pacheco',
          cargo: 'Diseñadora de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Leonardo Castellanos Rodriguez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productor multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
