<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Propuesta comercial de un producto o servicio',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Apropiarse de los conocimientos asociados a la propuesta comercial de un producto o servicio, así mismo las técnicas de negociación y herramientas para la socialización de esta.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto:
            'Las necesidades básicas o fisiológicas tienen origen biológico, es decir, del ser humano y están orientadas a su propia supervivencia.',
          imagen: require('@/assets/componentes/pregunta_1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            'Las necesidades de estima o de reconocimiento son categorizadas por Maslow en un solo nivel, que hace referencia al respeto de los demás, tener un estatus, fama, reputación.',
          imagen: require('@/assets/componentes/pregunta_2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            'Según Diez de Castro (2006), las cualidades del surtido se pueden medir a través de cuatro factores: coherencia, rentabilidad, fidelidad y dinamismo.',
          imagen: require('@/assets/componentes/pregunta_3.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            'La forma de estar en contacto con los clientes dependerá de los canales, herramientas y estrategias que aplique la empresa para garantizar su plena satisfacción.',
          imagen: require('@/assets/componentes/pregunta_4.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            'Según Ávila (2008) la negociación es “un proceso en el que dos personas intercambian ideas con la intención de imponer sus relaciones, tendiente a satisfacer necesidades mutuas”.',
          imagen: require('@/assets/componentes/pregunta_1.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            'El precio de compra, los costos de operación, los costos de reparación, los costos extras, los costos de instalación, la rebaja por cambio y probable valor de reventa, tiene que ver con los atributos del producto de:',
          imagen: require('@/assets/componentes/pregunta_2.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Costo', esCorrecta: true },
            { id: 'b', texto: 'Rendimiento', esCorrecta: false },
            { id: 'c', texto: 'Social', esCorrecta: false },
            { id: 'd', texto: 'Disponibilidad', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            'Tipo de producto de consumo que tiene identificación de marca y hay esfuerzo por la compra.',
          imagen: require('@/assets/componentes/pregunta_3.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Convivencia', esCorrecta: false },
            { id: 'b', texto: 'Compra', esCorrecta: false },
            { id: 'c', texto: 'Especialidad', esCorrecta: true },
            { id: 'd', texto: 'No buscados', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            'Los artículos para reparación, mantenimiento y servicios de negocios son productos industriales de tipo:',
          imagen: require('@/assets/componentes/pregunta_4.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Capital', esCorrecta: false },
            { id: 'b', texto: 'Materiales', esCorrecta: false },
            { id: 'c', texto: 'Refacciones', esCorrecta: false },
            { id: 'd', texto: 'Suministro y servicios', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'Conjunto de mercancías o productos que se tienen almacenados en espera de su venta o comercialización.',
          imagen: require('@/assets/componentes/pregunta_1.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Productos de consumo', esCorrecta: false },
            { id: 'b', texto: 'Productos industriales', esCorrecta: false },
            { id: 'c', texto: 'Stock', esCorrecta: true },
            { id: 'd', texto: 'Productos', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'Son tres grandes elementos de una propuesta comercial, en su orden:',
          imagen: require('@/assets/componentes/pregunta_2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Pre-propuesta, desarrollo, seguimiento y cierre.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Pre-propuesta, desarrollo, cierre.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Desarrollo, seguimiento y cierre.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Propuesta, seguimiento y cierre.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
