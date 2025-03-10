<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Optimización y control de sistemas de válvulas en motores de combustión interna',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> Fortalecer el conocimiento sobre las innovaciones tecnológicas en la gestión de válvulas y su influencia en la optimización del desempeño automotriz.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la principal razón por la que se deben calibrar las válvulas en un motor de combustión interna?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Para aumentar la velocidad del vehículo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Para mejorar la aerodinámica del motor.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Para mantener un rendimiento óptimo y evitar pérdidas por desgaste.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Para reducir la cantidad de combustible utilizado en cada ciclo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué sistema permite ajustar automáticamente las válvulas sin necesidad de calibraciones frecuentes?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Propulsor de pastilla calibrada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Propulsor con tornillo cónico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Propulsor hidráulico.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Propulsor de balancín fijo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es la función principal de los sistemas de variación del avance en el eje de levas?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Mantener una apertura fija de las válvulas en todo momento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Mejorar la estabilidad del motor en bajas revoluciones y aumentar la potencia en altas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Reducir la fricción en el motor para mejorar la eficiencia de combustible.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Controlar la cantidad de combustible inyectado en la cámara de combustión.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué sistema de control de válvulas fue desarrollado por Honda para mejorar la eficiencia del motor?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Vanos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Valvetronic.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'VTEC.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Camless.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál de los siguientes sistemas permite regular continuamente la carrera de las válvulas de admisión en los motores BMW?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Valvetronic.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'VTEC.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eje de levas deslizante cónico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Propulsor hidráulico dentro del balancín.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué componente es responsable de sincronizar el eje de levas con el cigüeñal en un motor de combustión interna?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La válvula solenoide.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El variador de fase.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La cadena o correa de distribución.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El propulsor hidráulico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cómo se logra la regulación en el sistema de eje de levas deslizante cónico utilizado por Ferrari?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mediante la variación de la altura del eje de levas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'A través de un propulsor hidráulico que regula la carrera de la válvula.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Por medio de un sensor de posición en la culata del motor.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Utilizando una válvula electrónica de ajuste de presión.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es una de las principales ventajas del sistema de Vanos en el eje de levas?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Permite una apertura simultánea de todas las válvulas en el motor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Mejora la estabilidad en bajas revoluciones y optimiza el llenado del cilindro en altas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Reduce la temperatura de combustión al mantener una mezcla rica en oxígeno.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Disminuye la velocidad del motor para mejorar la eficiencia del combustible.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué sistema permite el control total de las válvulas sin necesidad de un árbol de levas?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Valvetronic.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'VTEC.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Camless.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Eje de levas cónico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuál de las siguientes afirmaciones sobre el sistema de propulsión hidráulico es correcta?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Requiere calibraciones manuales constantes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Utiliza la presión del aceite del motor para ajustar automáticamente la holgura de las válvulas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Funciona únicamente en motores de alto rendimiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Depende de un sistema mecánico de ajuste con engranajes.',
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
}
</script>
