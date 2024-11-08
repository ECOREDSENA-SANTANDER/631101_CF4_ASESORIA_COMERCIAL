<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Segmentación del mercado
    
    p.mb-3 Desde la perspectiva del mercadeo, existen dos grupos principales de clientes: los clientes actuales y los potenciales. Estos se explican a continuación: 

    .row.justify-content-center(data-aos="fade-left")
      .col-lg-6.col-md-10.mb-4
        .overflow-hidden.h-100.bg4.p-4
          img.img-a.img-t.mb-4(src='@/assets/curso/temas/Tema3/img01.png', alt='tema2')
          .row.justify-content-center.mb-3
            .col-12.mb-2
              .p-1 
                h3.text-center.mb-0 Clientes actuales
          p.mb-4.text-center Son todos los clientes que la empresa posee actualmente y por tanto representan un activo muy valioso; sobre todo para mantener el nivel de participación dentro del mercado total. Los clientes actuales se pueden mantener y aumentar su volumen de compra de la oferta de la empresa, con nuevos productos diferenciados para diversas necesidades; por ejemplo, Quala ofrece Frutiño, una bebida refrescante, pero también ofrece Nuti Bela para el cabello. Son dos necesidades diferentes que ayuda a aumentar sus ventas y el tamaño de su mercado.
          p Para conservar a los clientes actuales, las empresas deben lograr la plena satisfacción de sus clientes, no solo con la entrega de productos de excelente calidad, sino brindando un nivel de servicio que los mantenga satisfechos y compren siempre la marca.
      .col-lg-6.col-md-10.mb-4
        .overflow-hidden.h-100.bg4.p-4
          img.img-a.img-t.mb-4(src='@/assets/curso/temas/Tema3/img02.png', alt='tema2')
          .row.justify-content-center.mb-3
            .col-12.mb-2
              .p-1 
                h3.text-center.mb-0 Clientes potenciales
          p.mb-4.text-center Los clientes potenciales son aquellos que probablemente adquirirán alguno de los productos o servicios que son ofertados por la empresa, pero aún no deciden la compra. Para que una empresa logre el crecimiento esperado debe procurar atraer estos clientes y lograr así aumentar su cuota de mercado o participación en el mismo. Para atraer nuevos clientes la empresa debe tener un producto diferenciado que genere valor para los clientes y se diferencie y supere lo que ofrece la competencia.

    p De acuerdo con la Pursell (s.f.), de la revista HupSpot, los clientes potenciales se componen en:
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .fondo3.p-4
            SlyderA(tipo="b").p-2
              .row.justify-content-center.align-items-center.p-2
                .col-lg-8.py-3
                  h4.px-4 Clientes potenciales según su frecuencia de compra
                  p.px-4 El hábito de compra puede variar entre compra frecuente, compra habitual o compra ocasional. Los clientes de compra frecuente asisten a comprar en periodos regulares; los de compra habitual son menos asiduos, pero tienen alta probabilidad de convertirse en compradores frecuentes; y los de compra ocasional son aquellos que no acostumbran a hacer visitas regulares y su interés se enfoca en las promociones u ofertas. A estos últimos se les conoce también como clientes de oportunidades o necesidades.
                .col-lg-4.col-md-6.col-8
                  img(src='@/assets/curso/temas/Tema3/img03.png', alt='tema2') 
              .row.justify-content-center.align-items-center.p-2
                .col-lg-8.py-3
                  h4.px-4 Clientes potenciales según su volumen de compra
                  p.px-4 Estos clientes se determinan por la cantidad de lo que compran y se clasifican, en primer lugar, como clientes potenciales de alto volumen de compras. Ellos son capaces de consumir grandes cantidades de productos o servicios. Representan una gran fuente de ingresos para la empresa. La segunda clasificación se refiere a los clientes potenciales de volumen de compras promedio. Aunque no suelen comprar grandes cantidades, ellos siguen representando una buena fuente de ingresos. La tercera clasificación se aplica a los clientes potenciales de bajo volumen de compras. Estos consumidores suelen ser más frecuentes para la empresa, y a pesar de que no hacen grandes consumos, dan sustento continuo al negocio.
                .col-lg-4.col-md-6.col-8
                  img(src='@/assets/curso/temas/Tema3/img04.png', alt='tema2') 
              
              .row.justify-content-center.align-items-center.p-2
                .col-lg-8.py-3
                  h4.px-4 Clientes potenciales según su grado de influencia
                  p.px-4 Estos compradores son ideales para que la empresa crezca y es importante que estén informados acerca de los productos o servicios que ofrece. Las figuras públicas son altamente influyentes; los blogueros especializados, los críticos y reseñadores tienen una influencia regular. Por ejemplo, el 34 % de los consumidores de 18 a 34 años confía más en los influentes que en la publicidad.
                .col-lg-4.col-md-6.col-8
                  img(src='@/assets/curso/temas/Tema3/img05.png', alt='tema2') 
             
    
    

</template>

<script>
export default {
  name: 'Tema3',
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
