<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 La prospección de clientes es un proceso esencial para el desarrollo de negocios y ventas, que implica la identificación y selección de posibles clientes para una empresa. Este componente abarca actividades clave, como la identificación de clientes potenciales usando herramientas y técnicas como bases de datos, redes sociales, ferias comerciales y referencias. Además, la segmentación del mercado es fundamental, ya que permite dividir el mercado en segmentos más pequeños y específicos con características comunes, facilitando así un enfoque más efectivo en los esfuerzos de marketing. La investigación de mercado juega un papel crucial en este proceso, ya que permite analizar el comportamiento del consumidor y las tendencias del mercado para adaptar las estrategias de prospección. En cuanto a la tipología de los clientes, es vital comprender los diferentes tipos de clientes y sus necesidades específicas para poder atraerlos de manera efectiva. Las estrategias utilizadas para atraer, retener y fidelizar a los clientes incluyen el marketing de contenidos, el uso de tecnologías de automatización de marketing, programas de fidelización y un servicio al cliente excepcional. La combinación de estas actividades y estrategias asegura que la empresa no solo pueda captar nuevos clientes, sino también mantener y fortalecer las relaciones con los clientes actuales, promoviendo así un crecimiento sostenible y rentable.

    .row.justify-content-center
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
