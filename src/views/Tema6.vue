<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Propuesta comercial
    
    p.mb-5 La propuesta comercial es un documento en el que el cliente tendrá toda la información sobre el producto o servicio que desea adquirir, incluyendo plazos de entrega, alcance de trabajo, valores y formas de pago. 
    
    .row.align-items-center.justify-content-center.mb-4(data-aos="zoom-in")
      .col-lg-10.col-md-12.col-sm-12
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.col-xl-11.m-auto(titulo="Elementos de una propuesta comercial")
            .row.justify-content-center(data-aos="fade-right")
              p Aunque existen varias posturas y corrientes que proponen elementos diversos para una propuesta comercial, es común identificar 3 grandes elementos que la componen:
              img(src='@/assets/curso/temas/Tema6/img01.svg', alt='')
             
          .row.col-xl-11.m-auto(titulo="Elaboración de una propuesta")
            .row.justify-content-center(data-aos="fade-right")
              p Crear la propuesta comercial puede representar un reto para algunos, porque no solo representa redactar bien los términos, sino también el diseño, la estructura, la extensión, entre otros elementos. Algunos de los elementos para tener en cuenta al momento de redactar una propuesta son:
              .col-lg-12.col-sm-12.col-md-12
                ul.lista-ul--color.fa-al.p-3
                  li.mb-0 
                    i.fas.fa-check-circle
                    span.mb-2 #[b El diseño y la presentación: ] presentar la propuesta comercial en una carpeta con identificación visual de la empresa, colores, material, papel membretado, entre otros aspectos. Son factores que llaman la atención como primera impresión de la propuesta.
                  li.mb-0 
                    i.fas.fa-check-circle
                    span.mb-2 #[b Incluir un índice:]  los índices ayudan a estructurar la información y le permitirá al cliente localizar fácilmente la información dentro de la propuesta.
                  li.mb-0 
                    i.fas.fa-check-circle
                    span.mb-2 #[b Excelente redacción:]  la propuesta debe redactarse de forma clara y concisa para que no genere inquietudes o vacíos en la información.

                  li.mb-0 
                    i.fas.fa-check-circle
                    span.mb-2 #[b Importancia del precio y la forma de pago:] para nadie es un secreto que el precio es un factor importante para la toma de decisiones; por consiguiente, la propuesta comercial debe presentar unos precios competitivos y una forma de pago que ayude al cierre de la venta.

                  li.mb-0 
                    i.fas.fa-check-circle
                    span.mb-2 #[b Cronograma:]  consecuente con el precio, se presenta el cronograma de actividades o de acciones, esto permite comparar qué tan competitiva es la propuesta, relacionando precio con el tiempo de desarrollo. Presentar fechas claras, genera confianza en la empresa que presenta la propuesta.

                  li.mb-0 
                    i.fas.fa-check-circle
                    span.mb-2 #[b Opciones:] presentar al cliente más de una opción para el desarrollo de la propuesta le dará criterios al cliente para comparar y tomar una mejor decisión.

          .row.col-xl-11.m-auto(titulo="Estructura de una propuesta")
            .row.justify-content-center(data-aos="fade-right") 
              p Una estructura común para las propuestas comerciales, presenta una serie de parámetros e información que le permite organizar las diferentes opciones que le presentará al cliente, encontrando:
              .col-lg-12.col-md-12.col-sm-12
                ul.lista-ul--color.fa-al.p-3
                  li.mb-0 
                    i.fas.fa-check-circle
                    span.mb-2 Índice o tabla de contenido.

                  li.mb-0 
                    i.fas.fa-check-circle
                    span.mb-2 Resumen de la propuesta.

                  li.mb-0 
                    i.fas.fa-check-circle
                    span.mb-2 Introducción o breve descripción de la propuesta.

                  li.d-flex.mb-0 
                    i.fas.fa-check-circle
                    span.mb-0 Información sobre la empresa que recibirá la propuesta: aquí usted puede escribir una corta descripción de la empresa a la cual se le enviará la propuesta. No es necesario toda la historia, pero por lo menos una indicación de los aspectos más importantes.
                  li.mb-0 
                    i.fas.fa-check-circle
                    span.mb-2 Argumento o descripción del problema.
                  li.mb-0 
                    i.fas.fa-check-circle
                    span.mb-2 Objetivos y alcances del proyecto.
                  li.mb-0 
                    i.fas.fa-check-circle
                    span.mb-2 Plan de acción o actividades que se desarrollarán.
                  li.mb-0 
                    i.fas.fa-check-circle
                    span.mb-2 Cronograma general para el desarrollo de la propuesta.
                  li.mb-0 
                    i.fas.fa-check-circle
                    span.mb-2 Costos de la propuesta.
                  li.mb-0 
                    i.fas.fa-check-circle
                    span.mb-2 Formas de pago propuestas o como base de la negociación.
                  li.mb-0 
                    i.fas.fa-check-circle
                    span.mb-2 Términos de confidencialidad (si los hay).

            p Finalmente, la propuesta debe cerrarse con información de la empresa que la presenta, esto con el fin de generar confianza con los términos que se expresan en el documento
            .col-lg-12.col-md-12.col-sm-12
                ul.lista-ul--color.fa-al.p-3
                  li.mb-0 
                    i.fas.fa-check-circle
                    span.mb-2 Acerca de nosotros (descripción de la empresa, misión y visión).


                  li.mb-0 
                    i.fas.fa-check-circle
                    span.mb-2 Nuestros clientes.


                  li.mb-0 
                    i.fas.fa-check-circle
                    span.mb-2 Equipo de especialistas o equipo de trabajo que conforma la empresa.

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
