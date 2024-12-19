<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Servicio al cliente
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-4.col-8.mb-3
        img(src='@/assets/curso/temas/Tema4/img1.png', alt='')
      .col-lg-8 
        p No hay una fórmula sencilla para cuidar a los clientes, pero tampoco se trata de un gran misterio. Según el director general de L. L. Bean, “Muchas personas tienen cosas curiosas que decir acerca del servicio al cliente… pero solo se trata de una actividad diaria, continua, interminable, persistente, perseverante y compasiva”. De acuerdo con este concepto, podemos decir que el servicio al cliente son actividades que ofrece una empresa o quien provee el producto, hacia el consumidor, con el fin de satisfacer sus necesidades complementarias alrededor del producto adquirido y así, asegurar su correcto uso.
    
    separador
    #t_4_1.titulo-segundo.mb-4
      h2 4.1. Atributos del servicio

    p.mb-5 Los atributos del servicio son la filosofía o principios fundamentales que soportan el proceso de interacción entre el prestador de servicio con el cliente y consolidarlo sobre la base de la confianza y la ética. Entre los atributos tenemos:
        
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-2.col-5.mb-3
        img(src='@/assets/curso/temas/Tema4/1.png', alt='')
      .col-lg-2.col-5.mb-3
        img(src='@/assets/curso/temas/Tema4/2.png', alt='')
      .col-lg-2.col-5.mb-3
        img(src='@/assets/curso/temas/Tema4/3.png', alt='')
      .col-lg-2.col-5.mb-3
        img(src='@/assets/curso/temas/Tema4/4.png', alt='')
      .col-lg-2.col-5.mb-3
        img(src='@/assets/curso/temas/Tema4/5.png', alt='')
      .col-lg-2.col-5.mb-3
        img(src='@/assets/curso/temas/Tema4/6.png', alt='')
    
    separador
    #t_4_2.titulo-segundo.mb-4
      h2 4.2. Características del servicio
    
    p Aunque muchos de los conceptos relacionados con el servicio al cliente son perceptuales y pueden ser adaptados de acuerdo con cada cliente, siempre encontraremos características comunes, entre ellas:
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left", alt='La tabla posee dos columnas y  8 filas, se definen las características del servicio: disponible, accesible, cortés, ágil, competente, confiable y con buena comunicación.')
      .col-lg-10
        .titulo-sexto.color-secundario.mb-5
          h5 Tabla 2.
          | Características del servicio
        .tabla-a.color-primario.mb-5
          table.color-primario
            thead
              tr
                th Característica
                th Descripción
            tbody
              tr
                td.text-center Disponible
                td Que se encuentre al alcance cuando el cliente lo necesite.

              tr
                td.text-center Accesible
                td Hace referencia al grado de contacto con el proveedor en el período de disponibilidad.

              tr
                td.text-center Cortes
                td Es el comportamiento cortés y profesional del proveedor en la prestación del servicio.

    
              tr
                td.text-center Ágil
                td Rapidez y eficiencia en la prestación del servicio.
          
              
              tr
                td.text-center Competente
                td Es la habilidad demostrada al prestar un servicio.
              tr
                td.text-center Confiable
                td Se genera confianza cuando hay habilidad para prestar el servicio de forma precisa.

              tr
                td.text-center Con buena comunicación
                td Es la fluidez y claridad en el intercambio de información entre el prestador de servicio y el cliente.
    
    separador
    #t_4_3.titulo-segundo.mb-4
      h2 4.3. Tipos de servicio al cliente

    p.mb-5 La forma de estar en contacto con los clientes dependerá de los canales, herramientas y estrategias que aplique la empresa para garantizar su plena satisfacción. De acuerdo con lo anterior, podemos representar las formas de atención al cliente, así:
   
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-8
        .titulo-sexto.color-secundario.mb-5
          h5 Figura 9. 
          | Tipos de Servicio al cliente
        img(src='@/assets/curso/temas/Tema4/img03.svg', alt='En la figura se definen los siguientes conceptos: -Presencial: Es la más tradicional. Es el contacto cara a cara y es común en supermercados o almacenes. -Telefónica: Esta siempre será una estrategia efectiva. Juega un papel importante el tono de voz, la fluidez y claridad para dar la información. -Virtual: Con el auge de las TICs, el contacto por email, chat, redes sociales y  otros canales digitales se ha convertido en una estrategia imprescindible para toda organización. -Proactiva/reactiva: está relacionado con el contacto con el cliente. Proactivo es cuando la empresa se comunica con el cliente. Reactivo es cuando es el cliente quien solicita atención en cualquier momento(PQRS)')
    
    
    
    
    
    




</template>

<script>
export default {
  name: 'Tema4',
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
