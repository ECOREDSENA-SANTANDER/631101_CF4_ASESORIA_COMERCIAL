<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 Para entender las características de una propuesta comercial de un producto, es necesario tener presente varios conceptos importantes que permiten darle un valor adicional al producto y no necesariamente hacen parte de él, pero si lo complementan. Identificar los atributos de un producto hasta la creación de su portafolio; entender el proceso desde la estructura del surtido hasta su implantación en el mercado, el servicio al cliente y la negociación, hacen parte de las competencias que debe adquirir un asesor comercial en el ámbito de propuestas comerciales. El siguiente diagrama, menciona los conceptos y temas más relevantes, tratados en este componente:

    .row.justify-content-center
      .col-lg-10.mb-5
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
