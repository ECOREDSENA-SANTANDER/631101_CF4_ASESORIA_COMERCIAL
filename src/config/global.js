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
        'Negocios en Tu Mundo, negocios en TM. (2012). Emprendedores a diferenciar sus productos Nada de commodities. [Video]. YouTube.',
      tipo: 'Video ',
      link: 'https://youtu.be/GGAGkqStMJw',
    },
    {
      tema: '2. El producto ',
      referencia:
        'Negocios en Tu Mundo, negocios en TM. (2012). Qué es y que no es el valor agregado. [Video]. YouTube.',
      tipo: 'Video ',
      link: 'https://youtu.be/FpnYS2jtKJk',
    },
  ],
  glosario: [
    {
      termino: '<i>Online</i>',
      significado:
        'En español, “en línea”, que se accede mediante una conexión a internet o que se encuentra en internet.',
    },
    {
      termino: 'Deseos de datos',
      significado:
        'Forma que adopta la necesidad” convertida en un elemento tangible.',
    },
    {
      termino: 'Envase',
      significado:
        'Objeto que permite el almacenamiento y el transporte de determinados productos.',
    },
    {
      termino: 'Embalaje',
      significado:
        'Material utilizado para recubrir y proteger un producto o conjunto de productos que será transportado.',
    },
    {
      termino: 'Empaque',
      significado:
        'Conjunto de materiales que forman la envoltura y armazón de los paquetes, como papeles, telas, cuerdas, cintas, etc.',
    },
    {
      termino: 'Etiqueta',
      significado:
        'Señal, marca o rótulo que se adhiere a un objeto para su identificación, clasificación o valoración.',
    },
    {
      termino: 'Necesidades',
      significado:
        'Estados de carencia que percibe el ser humano ante diferentes situaciones. Elementos constantes y que tienen un origen biológico, inherentes al ser humano.',
    },
    {
      termino: 'Proactivo',
      significado:
        'Persona que tiene iniciativa y capacidad para anticiparse a problemas o necesidades futuras.',
    },
    {
      termino: 'Producto',
      significado:
        'conjunto de elementos tangibles e intangibles que son percibidos por el cliente como los satisfactores de sus necesidades. ',
    },
    {
      termino: 'Reactivo',
      significado:
        'Persona que actúa reaccionando a las circunstancias externas.',
    },
    {
      termino: '<i>Stock</i>',
      significado:
        'Conjunto de mercancías o productos que se tienen almacenados en espera de su venta o comercialización.',
    },
  ],
  referencias: [
    {
      referencia:
        'Amador Araujo, Lourdes, L., Pineda Ayala, E. & Kotler. P. (2017). Fundamentos De Marketing. Decimotercera ed. México: Pearson Prentice Hall. Print. Área: Administración.',
      link: '',
    },
    {
      referencia:
        'Ávila M., F. (2008). Tácticas para la Negociación Internacional. (2da. Ed.). ISBN: 9682480841. México D.F., México: Editorial Trillas, pp. 29, 195-196.',
      link: '',
    },
    {
      referencia:
        'Díez de Castro, E.C, Landa Bercebal, F.J., Navarro García, A. (2006). Merchandising. Teoría y práctica. Pirámide, Madrid',
      link: '',
    },
    {
      referencia:
        'Lira Mejía, M. C. (2009). ¿Cómo puedo mejorar el servicio al cliente? Técnicas para perfeccionar la actitud en el servicio al cliente',
      link:
        'https://www.academia.edu/19788867/COMO_PUEDO_MEJORAR_EL_SERVICIO_A_CLIENTE',
    },
    {
      referencia:
        'Muñiz G., R. (2008). Marketing en el siglo XXI. (2da. Ed.). ISBN: 8445410911. España: Centro de estudios Financieros.',
      link: '',
    },
    {
      referencia:
        'Negocios en Tu Mundo, negocios en TM. (2012). Emprendedores a diferenciar sus productos Nada de commodities.',
      link: 'https://youtu.be/GGAGkqStMJw',
    },
    {
      referencia:
        'Negocios en Tu Mundo, negocios en TM. (2012). Qué es y que no es el valor agregado. (2007). Maslows Hierarchy of Needs.',
      link: 'https://www.simplypsychology.org/maslow.html',
    },
    {
      referencia:
        'Palomares, B. (2009). Merchandising. Teoría, práctica y estrategia. ESIC, Madrid.',
      link: '',
    },
    {
      referencia:
        'Parra, J. B., Santiago, E., Murillo, M. & Atonal, C. (2010). Estrategia para negociaciones exitosas. e-Gnosis, 8.',
      link: '',
    },
    {
      referencia:
        'Solís Buendía, L. (2015). Importancia del surtido en la estrategia minorista: un análisis empírico en el contexto de tiendas de ropa.',
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
          nombre: 'Laura Paola Gelvez Manosalva',
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
