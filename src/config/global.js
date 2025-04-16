export default {
  global: {
    Name: 'Calibración de válvulas, propulsores, nuevos sistemas',
    Description:
      'El componente formativo describe el funcionamiento de los componentes del motor de combustión interna, enfocándose en la calibración de válvulas y el uso de propulsores hidráulicos. Explica los sistemas de regulación del eje de levas, que optimizan el rendimiento del motor. También aborda innovaciones como el comando electrónico de válvulas para mejorar eficiencia y potencia.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal3.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
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
        titulo: 'Calibración de válvulas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Calibración de válvulas con pastilla calibrada',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Calibración de válvulas con tornillo cónico en propulsor',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Calibración válvulas con pastillas sobre vástago',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Propulsores hidráulicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Diseño del propulsor hidráulico',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Trabajo del propulsor hidráulico',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Propulsor hidráulico dentro de balancín',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Propulsor hidráulico dentro del vaso propulsor',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Sistema de variación del avance en eje de levas de admisión',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Sistemas de vanos en eje de levas de admisión',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Sistema de vanos en ejes de levas de admisión y escape',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Sistema de control de altura de la válvula',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Sistema combinado de Vanos e Hypervitec',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Sistema Vtec de Honda',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Sistema de balancín doble y cojín mando hidráulico',
            hash: 't_3_6',
          },
          {
            numero: '3.7',
            titulo: 'Sistema eje de levas deslizante cónico',
            hash: 't_3_7',
          },
          {
            numero: '3.8',
            titulo: 'Sistema Valvetronic BMW',
            hash: 't_3_8',
          },
          {
            numero: '3.9',
            titulo: 'Sistema de comando electrónico de válvulas',
            hash: 't_3_9',
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
        download: 'downloads/86120369_CF04_DU.pdf',
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
      tema: 'Calibración de válvulas',
      referencia:
        'Penagos, J. (2018). Cómo Calibrar válvulas del motor (video).',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=dfg_zVLAccc',
    },
  ],
  glosario: [
    {
      termino: 'Balancín',
      significado:
        'componente mecánico que transmite el movimiento del árbol de levas a las válvulas del motor, permitiendo su apertura y cierre en sincronización con el ciclo de combustión.',
    },
    {
      termino: 'Calibración de válvulas',
      significado:
        'procedimiento de ajuste que garantiza la correcta holgura entre la leva y la válvula, evitando pérdida de eficiencia y desgaste prematuro en el motor.',
    },
    {
      termino: 'Eje de levas',
      significado:
        'elemento rotativo del motor que controla la apertura y cierre de las válvulas, determinando el tiempo y la cantidad de mezcla aire-combustible que ingresa a la cámara de combustión.',
    },
    {
      termino: 'Propulsor hidráulico',
      significado:
        'dispositivo que utiliza la presión del aceite del motor para ajustar automáticamente la holgura de las válvulas, reduciendo la necesidad de calibraciones manuales.',
    },
    {
      termino: 'Sistema VTEC',
      significado:
        'tecnología desarrollada por Honda que optimiza la eficiencia del motor al modificar la apertura y cierre de las válvulas según el régimen de revoluciones, mejorando el rendimiento y el consumo de combustible.',
    },
  ],
  referencias: [
    {
      referencia:
        'Vaikii. (s.f.). El motor de gasolina: funcionamiento, elementos, refrigeración, combustible y engrase.',
      link: 'https://www.vaiiki.com/Capacitacion/Vista/Descargas/Motores.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Líder del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermudez Jaimes',
          cargo: 'Responsable de Línea de Producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carlos Edwin Abello Rubiano',
          cargo: 'Experto temático',
          centro:
            'Centro de Gestión de Mercados Logística y Tecnologías de la Información - Regional Distrito Capital.',
        },
        {
          nombre: 'PAna Catalina Córdoba Sus',
          cargo: 'Evaluadora Instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yerson Fabian Zarate Saavedra',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Leyson Fabian Castaño Perez',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete Lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete Lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Andrés Felipe Guevara Ariza',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Raúl Mosquera Serrano',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
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
}
