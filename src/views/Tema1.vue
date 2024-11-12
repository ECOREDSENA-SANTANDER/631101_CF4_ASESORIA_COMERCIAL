<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Las necesidades y el deseo
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-4.col-8.mb-2
        img(src='@/assets/curso/temas/Tema1/img1.png', alt='')
      .col-lg-8
        p Las necesidades en los seres humanos pueden caracterizarse como estados de carencia se perciben ante diferentes situaciones; las cuales pueden ser de comportamiento, de pensamiento o de adversidades que se presentan. Contrario a otras apreciaciones, las necesidades no son creadas por la publicidad o el mercadeo, pues estas hacen parte de los seres humanos. 
        p Por otra parte, los deseos, son la “forma que adopta la necesidad” convertida en un elemento tangible, por ejemplo: una persona tiene la necesidad de alimento, pero desea calmar esa necesidad con una hamburguesa de una marca en especial. O una familia necesita una casa, pero la desea en la zona más exclusiva de su región. 
        .cajon.color-acento-contenido.p-4.mb-4
          p Los deseos son influenciados por la sociedad en la que vive y se materializan en objetos que las satisfacen; es decir, los productos. En ese sentido, se puede decir que las necesidades son elementos constantes y que tienen un origen biológico, inherentes al ser humano. De otro lado los deseos son influenciados por la sociedad en la que vive y se materializan en objetos que los satisfacen. Son las necesidades convertidas en deseos, las que demandan los productos.
    
    p.mb-4 A continuación, se presenta una infografía en la que se presenta la escala de necesidades, en la que el ser humano satisface las necesidades de forma ascendente. Es decir; medida que satisface las básicas, busca por todos los medios satisfacer las siguientes, hasta llegar a la autorrealización: 
    h5 Pirámide de necesidades de Maslow
    p El psicólogo Maslow formula en su teoría una jerarquía de necesidades humanas y propone que conforme se satisfacen las necesidades más básicas (parte inferior de la pirámide), los seres humanos desarrollan necesidades y deseos más elevados (parte superior de la pirámide).
    p De acuerdo con la imagen, el ser humano satisface las necesidades de forma ascendente, a medida que satisface las básicas, busca por todos los medios satisfacer las siguientes, hasta llegar a la autorrealización.
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-5.mb-2
        img(src='@/assets/curso/temas/Tema1/img2.svg', alt='')
      .col-lg-7
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-1.col-2.mb-2
            img(src='@/assets/curso/temas/Tema1/1.png', alt='')
          .col-lg-11
            h5 Necesidades básicas.
            p Las necesidades básicas o fisiológicas, tienen origen biológico, es decir, del ser humano y están orientadas a su propia supervivencia. En esta primera escala (o base de la pirámide) se encuentra la necesidad de respirar, de tomar agua, comer, descansar o dormir, sexo o refugio.
          .col-lg-1.col-2.mb-2
            img(src='@/assets/curso/temas/Tema1/2.png', alt='')
          .col-lg-11
            h5 Necesidades de seguridad y protección.
            p Subiendo en la pirámide, encontramos las necesidades de seguridad personal, relacionadas directamente con el orden, seguridad física, empleabilidad e ingresos, seguridad familiar, de salud y la protección. Aquellas que permitan que la persona pueda sentirse segura.

          .col-lg-1.col-2.mb-2
            img(src='@/assets/curso/temas/Tema1/3.png', alt='')
          .col-lg-11
            h5 Necesidades de afiliación y afecto.
            p Las necesidades de amor, afecto y pertenencia a un grupo social o de filiación, se evidencian cuando se muestra el deseo de tener un novio o novia, contraer matrimonio, de tener una familia, de ser parte de un grupo o una comunidad, de pertenecer a una iglesia o club.
          
          .col-lg-1.col-2.mb-2
            img(src='@/assets/curso/temas/Tema1/4.png', alt='')
          .col-lg-11
            h5 Necesidades de estima.
            p Las necesidades de estima o de reconocimiento son categorizadas por Maslow en dos niveles: un nivel inferior que hace referencia al respeto de los demás, tener un estatus, fama, reputación y otra de nivel superior, determinado por la necesidad de respeto por sí mismo, aquí la  confianza, la independencia y libertad juegan un papel importante.

          .col-lg-1.col-2.mb-2
            img(src='@/assets/curso/temas/Tema1/5.png', alt='')
          .col-lg-11
            h5 Autorrealización o autoactualización.
            p Maslow describe estas necesidades como el cumplimiento de los ideales personales en una actividad específica. Autorrealizarse muchas veces implica la búsqueda de creatividad, talento, crecimiento, experiencias y descubrimiento (McLeod, 2007).

    
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
