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
        titulo: 'Las necesidades y el deseo',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'El producto',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Atributos del producto ',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Niveles de productos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Clasificación de productos',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Características del producto',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Empaque',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Etiqueta',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'Envase',
            hash: 't_2_7',
          },
          {
            numero: '2.8',
            titulo: 'Embalaje',
            hash: 't_2_8',
          },
          {
            numero: '2.9',
            titulo: 'Portafolio de productos',
            hash: 't_2_9',
          },
          {
            numero: '2.10',
            titulo: 'Ciclo de vida',
            hash: 't_2_10',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'El surtido',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Estructura del surtido',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Dimensiones del surtido',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Clasificación del surtido',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Características',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Cualidades del surtido',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'El lineal',
            hash: 't_3_6',
          },
          {
            numero: '3.7',
            titulo: 'Implantación',
            hash: 't_3_7',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Servicio al cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Atributos del servicio',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Características del servicio',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Tipos de servicio al cliente',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Negociación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Características',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Etapas de la negociación ',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Tipos de negociación',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Aplicabilidad',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Propuesta comercial',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: ' Herramientas ofimáticas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: ' Clasificación',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Tipos de herramientas',
            hash: 't_7_2',
          },
        ],
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
      tema: '2. El producto ',
      referencia:
        'Amador Araujo, Lourdes, L., Pineda Ayala, E. & Kotler. P. (2017). Fundamentos De Marketing. Decimotercera ed. México: Pearson Prentice Hall. Print. Área: Administración. ',
      tipo: 'Libro ',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=4393 ',
    },
    {
      tema: '2. El producto ',
      referencia:
        'Amador Araujo, Lourdes, L., Pineda Ayala, E. & Kotler. P. (2016). Dirección De Marketing. Decimoquinta. Decimotercera ed. México: Pearson Prentice Hall. Print. Área: Administración. ',
      tipo: 'Libro ',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=4273  ',
    },
    {
      tema: '2. El producto ',
      referencia:
        'Negocios en Tu Mundo, negocios en TM. (2012). Emprendedores a diferenciar sus productos Nada de commodities. [Video]. YouTube. ',
      tipo: 'Video ',
      link: 'https://www.youtube.com/watch?v=GGAGkqStMJw ',
    },
    {
      tema: '2. El producto ',
      referencia:
        'Negocios en Tu Mundo, negocios en TM. (2012). Qué es y que no es el valor agregado. [Video]. YouTube. ',
      tipo: 'Video ',
      link: 'https://www.youtube.com/watch?v=FpnYS2jtKJk  ',
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
          nombre: 'Paolo Andrés Cantillo Largo ',
          cargo: 'Experto temático ',
          centro: 'Centro de comercio Regional Antioquia ',
        },
        {
          nombre: 'Zenith Chinchilla Ruedas ',
          cargo: 'Diseñador Instruccional ',
          centro: 'Regional Distrito Capital – Centro de Diseño y Metrología ',
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
