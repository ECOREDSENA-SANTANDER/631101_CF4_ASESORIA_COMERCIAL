<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Herramientas ofimáticas
    
    p Las herramientas de ofimática son un conjunto de técnicas, aplicaciones y programas informáticos que se utilizan para optimizar, sistematizar y obtener una mayor eficiencia en diferentes tareas relacionadas con la oficina u otras actividades administrativas. 
    
    separador
    #t_7_1.titulo-segundo.mb-4
      h2 7.1. Clasificación

    p Las herramientas ofimáticas podemos clasificarlas así:
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        img(src='@/assets/curso/temas/Tema7/img01.svg', alt='')
      
    separador
    #t_7_2.titulo-segundo.mb-4
      h2 Entre las herramientas ofimáticas, encontramos:
   
    p Entre las herramientas ofimáticas, encontramos:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left", alt='La tabla posee tres columnas y 5 filas, donde se describen 5 tipos de herramientas ofimáticas: procesador de texto, hoja de cálculo, bases de datos, presentaciones.  De cada una de ellas hay una descripción y algunos ejemplos.')
      .col-lg-10
        .titulo-sexto.color-secundario.mb-5
          h5 Tabla 4.
          | Tipos de herramientas
        .tabla-a.color-primario.mb-5
          table.color-primario
            thead
              tr
                th Tipo
                th Descripción
                th Herramienta
            tbody
              tr
                td.text-center Procesador de texto
                td Usado para la redacción de informes, cartas, contenidos, memorandos, folletos sencillos, manuales, tesis, etc. Si el documento es en línea, se pueden introducir animaciones, videos, entre otros.
                td.px-4
                  |Word (Office)
                  br
                  |Writer (Open office)
                  br
                  |Documentos (Google)
              tr
                td.text-center Hoja de cálculo
                td Su función principal es generar planillas con balances, control de gastos, estados de cuenta, manejos contables, etc.
                td.px-4
                  |Excel (Office)
                  br
                  |Calc (Open office)
                  br
                  |Hoja de cálculo (Google)
              
              tr
                td.text-center Bases de datos
                td Permite la creación y administración de datos del usuario, control de inventarios, consulta de registros, entre otras aplicaciones.
                td.px-4
                  |Access (Office)
                  br
                  |Base (Open Office)
              
              tr
                td.text-center Presentaciones
                td Permite la creación de presentaciones basadas en diapositivas o slides para la exposición de información, gráficos, infografías, videos, animaciones, gráficos, etc.
                td.px-4
                  |PowerPoint (Office)

                  br
                  |Impress (Open Office)
                  br
                  |Impress Presentaciones (Google)
          .py-2
            p #[b Nota.]  https://sites.google.com/site/navegadorestf/herramientas-ofimticas
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
