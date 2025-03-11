<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Sistema de variación del avance en eje de levas de admisión

      
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7

        .bg-color-6.px-4.py-3.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src="@/assets/curso/tema3/icon-1.svg", alt="alt", style="max-width: 190px;")

            .col-lg
              p(data-aos="fade-up").mb-0
                | La sincronización entre el eje cigüeñal y el eje de levas de un motor, tiene los puntos de referencia definidos por el fabricante, y que corresponden exactamente con el inicio de la apertura y del cierre de las válvulas con respecto a la posición que tiene cada pistón del motor.


        p(data-aos="fade-up").mb-4 Al dar un mayor ángulo al perfil de las levas, se incrementará el llenado del cilindro y con ello la potencia del motor, pero el motor perderá estabilidad en bajas revoluciones, ya que una apertura muy anticipada de la válvula hará que la mezcla intente regresar al colector, porque en este momento el pistón está subiendo en la etapa de escape.

        figure.d-none.d-lg-block
          img(src="@/assets/curso/tema3/1.png", alt="alt")

      .col-lg-5
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 9.
          span Ángulo de avance al perfil de las levas

        .bg-color-1
          figure
            img(src='@/assets/curso/tema3/f9.png', alt='Imagen que presenta el ángulo de avance al perfil de las levas.', style="max-width: 504px;", data-aos="zoom-in").mx-auto

    p(data-aos="fade-up").mb-4
      | Para lograr ambos efectos, es decir aumentar el llenado y la potencia del motor, así como mantenerlo muy estable en bajas revoluciones, se han diseñado sistemas de avance del eje de levas (principalmente para admisión), para que en bajas revoluciones esté el eje un tanto atrasado con la sincronización ideal y cuando el motor va incrementando sus revoluciones, se avance el eje de levas para lograr aumentar el llenado de los cilindros con la apertura anticipada de las válvulas.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7

        .bg-color-14.px-4.py-3.mb-4
          p(data-aos="fade-up").mb-0
            | Esta novedad tecnológica ya era utilizada desde los años 80 en algunas marcas de vehículos como Alfa Romeo, incorporando el sistema de avance para el eje de levas de admisión en sus motores, los mismos que ya tenían ejes de levas de mayores ángulos de ataque en sus levas, así como mayores alturas de ellas para empujar a las válvulas, de tal manera que, sin este procedimiento de avance, el motor trabajaba bastante inestable en Ralentí y en bajas revoluciones.

        p(data-aos="fade-up").mb-4 Para lograr girar en sentido de avance al eje de levas, un pistón es empujado hidráulicamente por la presión de aceite que ingresa a este ‘variador de fase’. Este pistón empuja a un piñón helicoidal, que, a su vez, se desliza dentro de un sector helicoidal externo, logrando con ello, y debido a la inclinación de sus dientes, a obligar a girar al eje de levas en un ángulo mayor en el sentido de avance, aunque la cadena se mantenga sincronizada con el piñón de mando de la distribución.

        figure.d-none.d-lg-block
          img(src="@/assets/curso/tema3/2.png", alt="alt")

      .col-lg-5
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 10.
          span Avance al eje de levas

        .bg-color-1.py-4.py-lg-5.mb-1
          figure
            img(src='@/assets/curso/tema3/f10.png', alt='Imagen que presenta el avance al eje de levas.', style="max-width: 504px;", data-aos="zoom-in").mx-auto

    p(data-aos="fade-up").mb-4
      | Una válvula solenoide es comandada por el computador del sistema de control del motor (ECU), la misma que al abrirse después de unas 1.800 RPM, permite el ingreso de la presión de aceite, presión que seguirá incrementándose con el mayor número de revoluciones del motor y con ello el avance.

    .bg-full-width.bg-color-5
      .p-4
        .row.justify-content-center.align-items-center
          .col-lg-auto
            figure
              img(src="@/assets/curso/tema2/icon-2.svg", alt="", style="max-width: 90px;", data-aos="zoom-in").mx-auto.mb-4.mb-lg-0
          .col-lg
            p(data-aos="fade-up").mb-2.text-white
              | Engine Control Unit (Unidad de Control Electrónico) que administra varios aspectos de la operación de combustión interna del motor. Las unidades de control de motor más simples sólo controlan la cantidad de combustible que es inyectado en cada cilindro en cada ciclo de motor. Las más avanzadas controlan el punto de ignición, el tiempo de apertura/cierre de las válvulas, el nivel de impulso mantenido por el turbocompresor, y control de otros periféricos. 
    
    Separador

    .titulo-segundo.color-primario
      h2 3.1 Sistemas de vanos en eje de levas de admisión

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7
        p(data-aos="fade-up").mb-4 Debido a que el sistema anterior generaba algunos problemas por el sistema de control básico y por ello el motor no podía acoplarse a las necesidades específicas en cada etapa de aceleración, desaceleración, aceleraciones bruscas y acople con el sistema de inyección y encendido del motor, que buscan una estabilidad en todo régimen y condición, se diseñó este nuevo sistema de Vanos, el cual es mucho más sencillo en su esquema, pero mucho más eficaz. El variador dispone de un rotor que está unido al eje de levas y es impulsado hacia el lado izquierdo para retardar la posición del eje de levas o hacia el lado derecho (sentido de las manecillas del reloj) para avanzar de su posición básica de sincronización.

        .bg-color-3.px-4.py-3.mb-4
          p(data-aos="fade-up").mb-0
            | Cuando una válvula solenoide es controlada por el Computador del motor (ECU), permite el ingreso de presión de aceite hasta las cámaras formadas entre el rotor y el cuerpo, cuerpo que es al mismo tiempo el piñón de mando engranado con la cadena o banda de distribución.

        p(data-aos="fade-up").mb-4
          | La presión obligará al rotor a girar hacia el lado necesario.


      .col-lg-5
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 11.
          span Sistema de Vanos

        .bg-color-1.py-4.py-lg-5.mb-1
          figure
            img(src='@/assets/curso/tema3/f11.png', alt='Imagen que presenta un sistema de Vanos.', style="max-width: 457px;", data-aos="zoom-in").mx-auto

    Separador

    .titulo-segundo.color-primario
      h2 3.2 Sistema de vanos en ejes de levas de admisión y escape

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5
        figure
          img(src='@/assets/curso/tema3/3.png', alt='', style="max-width: 100%;", data-aos="zoom-in").mx-auto.mb-4.mb-lg-0

      .col-lg-7
        p(data-aos="fade-up").mb-4 Este sistema de Vanos, instalado inicialmente en el eje de levas de admisión, logra posicionar angularmente a las levas en cada etapa de aceleración, para que el llenado del cilindro sea el más efectivo y acorde a cada condición del motor y en cada régimen de revoluciones.

        p(data-aos="fade-up").mb-4 Esta nueva tecnología que brinda una gran ayuda en el sistema de admisión, ha sido incluida por muchos fabricantes en sus motores; pero algunos de ellos han decidido incluirla también en los ejes de levas de escape, para que el trabajo combinado de los dos ejes logre resultados increíbles, mucho mejores a los ya logrados anteriormente.

        .bg-color-6.px-4.py-3.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src="@/assets/curso/tema3/icon-1.svg", alt="alt", style="max-width: 190px;")

            .col-lg
              p(data-aos="fade-up").mb-0
                | Al instalar el sistema de Vanos en los ejes de escape, se está aprovechando no solamente el mejor llenado del cilindro que permite instalarse para obtener una óptima combustión y potencia del motor, sino que se puede desalojar los gases quemados de mejor manera. Lo que reduce incluso, con ello, las emisiones a la atmósfera; perfeccionando aún más la eficiencia del motor. 

    Separador

    .titulo-segundo.color-primario
      h2 3.3 Sistema de control de altura de la válvula


    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7
        p(data-aos="fade-up").mb-4
          | Cuando la válvula solenoide está cerrada y no ingresa presión a la cámara del pistón, el propulsor es empujado por la leva, y ya que el vástago de la válvula está apoyado sobre el canto del pistón, el recorrido de la válvula será el máximo; es decir, la alzada de la leva que la impulsa.
        
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 12.
          span Sistema de control de altura de la válvula

        .bg-color-1.py-4
          figure
            img(src='@/assets/curso/tema3/f12.png', alt='Imagen que presenta un sistema de control de altura de la válvula.', style="max-width: 358px;", data-aos="zoom-in").mx-auto

      .col-lg-5
        figure.d-none.d-lg-block
          img(src='@/assets/curso/tema3/4.png', alt='', style="max-width: 100%;", data-aos="zoom-in").mx-auto 


    .bg-full-width.bg-color-5
      .p-4
        .row.justify-content-center.align-items-center
          .col-lg-auto
            figure
              img(src="@/assets/curso/tema2/icon-2.svg", alt="", style="max-width: 90px;", data-aos="zoom-in").mx-auto.mb-4.mb-lg-0
          .col-lg
            p(data-aos="fade-up").mb-2.text-white
              | Al ingresar la presión cuando la válvula solenoide abre este paso, el pistón es empujado hidráulicamente hasta su tope interno. El propulsor empieza a atacar, pero parte de este empuje se ‘desperdicia’, ya que el propulsor recorre mayor espacio para empujar a la válvula, reduciéndose su recorrido, que es menor que el recorrido anterior.
    
    Separador

    .titulo-segundo.color-primario
      h2 3.4 Sistema combinado de Vanos e Hypervitec


    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7

        .bg-color-3.px-4.py-3.mb-3
          p(data-aos="fade-up").mb-0
            | Cuando utilizamos el sistema de Vanos, el cual se encarga de avanzar el giro básico del eje de levas, combinándolo con el sistema de control de la altura para impulsar un mayor recorrido o altura de las válvulas, se consigue una altísima eficiencia del motor.

        p(data-aos="fade-up").mb-3
          | Este espacio entre levas permite alojar a un sistema hidráulico de pistón, para que se encargue de la variación de la altura de empuje de la válvula. En ese sentido, esta combinación le permitirá al motor mantener una gran estabilidad y control, así como un alto torque y potencia en todas las gamas de aceleración y en todas las condiciones de trabajo.

        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 13.
          span Sistema combinado de Vanos e Hypervitec

        .bg-color-1.py-4
          figure
            img(src='@/assets/curso/tema3/f13.png', alt='Imagen que presenta un sistema combinado de Vanos e Hypervitec.', style="max-width: 358px;", data-aos="zoom-in").mx-auto

      .col-lg-5
        figure.d-none.d-lg-block
          img(src='@/assets/curso/tema3/5.png', alt='', style="max-width: 457px;", data-aos="zoom-in").mx-auto


    .bg-full-width.bg-color-5
      .p-4
        .row.justify-content-center.align-items-center
          .col-lg-auto
            figure
              img(src="@/assets/curso/tema2/icon-2.svg", alt="", style="max-width: 90px;", data-aos="zoom-in").mx-auto.mb-4.mb-lg-0
          .col-lg
            p(data-aos="fade-up").mb-2.text-white
              | Primer sistema de Vanos en el eje de levas, cuando cada leva impulsa a una válvula y el variador se encarga de avanzar el ángulo de tenía la sincronización básica. 
    
    Separador

    .titulo-segundo.color-primario
      h2 3.5 Sistema Vtec de Honda

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7
        p(data-aos="fade-up").mb-3
          | La Fábrica de vehículos japonesa Honda, basada en su gran experiencia y pruebas en motores de motocicletas y en sus novedosas innovaciones tecnológicas en motores de vehículos, diseñó desde los años 80, otro sistema de control del recorrido de las válvulas, también basándose en la ayuda y control hidráulicos.

        p(data-aos="fade-up").mb-3
          | Este sistema, a diferencia del sistema anterior, dispone de tres levas y tres balancines en las primeras versiones y de dos levas y dos balancines en las más modernas, llamadas i-Vtec.

        .bg-color-6.px-4.py-3.mb-3
          p(data-aos="fade-up").mb-0
            | Entre dos balancines está insertado un pistón, el cual al recibir presión hidráulica se desplaza, convirtiendo a los dos balancines sólidos entre sí. Uno de los balancines abre una de las dos válvulas de admisión y el otro balancín a la otra válvula, pero la leva para cada balancín tiene diferente altura y puede tener también diferente ángulo o perfil, por lo que inicialmente se abrirá menos una de las válvulas (bajas revoluciones) y en el momento de convertirse en solidarios los balancines, las dos válvulas se abrirán mucho más (altas revoluciones), debido al empuje de la leva más alta. 

        p(data-aos="fade-up").mb-3
          | Esta apertura de válvulas es controlada por el computador del motor (ECU), cuando comanda la electro válvula que abre el paso de la presión de aceite al pistón de trabado de los balancines.

      .col-lg-5
        figure
          img(src='@/assets/curso/tema3/6.png', alt='', style="max-width: 100%;", data-aos="zoom-in").mx-auto

    Separador

    .titulo-segundo.color-primario
      h2 3.6 Sistema de balancín doble y cojín mando hidráulico

    .row.justify-content-center.align-items-start.mb-4
      .col-lg-7


        .bg-color-3.px-4.py-4.mb-4
          p(data-aos="fade-up").mb-0
            | Otro procedimiento interesante para empujar a las válvulas tiene que ver con dos recorridos diferentes. Uno menor de la válvula que podrá dar un llenado suficiente para el motor, pero con mucha estabilidad de funcionamiento en bajas revoluciones. Y un mayor recorrido o apertura de la válvula que a su vez, permitirá un considerable llenado del cilindro en altas y permitirá generar una gran potencia del motor.

        p(data-aos="fade-up").mb-4
          | El primer sistema utiliza una leva con dos perfiles de diferentes alturas y atacan al balancín que le permite utilizar el perfil bajo cuando no ingresa presión hidráulica a un pistón interior y permite utilizar el perfil alto de la otra leva cuando se deja entrar presión hidráulica.


        figure.d-none.d-lg-block
          img(src='@/assets/curso/tema3/7.png', alt='', style="max-width: 100%;", data-aos="zoom-in").mx-auto


      .col-lg-5
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 14.
          span Figura 14. Sistema que utiliza una leva con dos perfiles de diferentes alturas

        .bg-color-1.py-4
          figure
            img(src='@/assets/curso/tema3/f14.png', alt='Imagen que presenta un sistema que utiliza una leva con dos perfiles de diferentes alturas.', style="max-width: 270px;", data-aos="zoom-in").mx-auto

    .bg-full-width.bg-color-5.my-5
      .p-4
        .row.justify-content-center.align-items-center
          .col-lg-auto
            figure
              img(src="@/assets/curso/tema2/icon-2.svg", alt="", style="max-width: 90px;", data-aos="zoom-in").mx-auto.mb-4.mb-lg-0
          .col-lg
            p(data-aos="fade-up").mb-2.text-white
              | El otro sistema trabaja con un solo perfil de leva, pero el balancín tiene un pistón hidráulico de apoyo de la leva y otro pistón hidráulico que actúa como una cuña, para bloquear al pistón y permitir que la leva empuje un mayor recorrido a la válvula.


    .titulo-sexto.color-acento-contenido.mb-3
      h5 Figura 15.
      span Sistema que trabaja con un solo perfil de leva

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5

        .bg-color-1.py-4
          figure
            img(src='@/assets/curso/tema3/f15.png', alt='Imagen que presenta un sistema que trabaja con un solo perfil de leva.', style="max-width: 320px;", data-aos="zoom-in").mx-auto

      .col-lg-7
        figure.d-none.d-lg-block
          img(src='@/assets/curso/tema3/8.png', alt='', style="max-width: 100%;", data-aos="zoom-in").mx-auto


    Separador

    .titulo-segundo.color-primario
      h2 3.7 Sistema eje de levas deslizante cónico

    p(data-aos="fade-up").mb-4
      | Un sistema muy novedoso que la firma Italiana Ferrari utilizó como un procedimiento único, fue variar la altura del desplazamiento de las válvulas; pero en este sistema hidráulico no es el propulsor quien realiza este cambio de altura, sino la conicidad de las levas del eje de levas.

    .row.justify-content-center.align-items-start.mb-4
      .col-lg-7
        .bg-color-6.px-4.py-4.mb-4
          p(data-aos="fade-up").mb-0
            | Para que este principio funcione debidamente, es el mismo eje de levas que además de girar en su eje, se desplaza longitudinalmente impulsado por un pistón hidráulico, el mismo que lo empuja un menor o mayor recorrido basado en el incremento de las revoluciones del motor.

        p(data-aos="fade-up").mb-4
          | El eje de levas dispone de levas cónicas, que permiten ir variando la altura que se empuja a las válvulas, de acuerdo al sector cónico que roza la leva con el propulsor.


        figure.d-none.d-lg-block
          img(src='@/assets/curso/tema3/9.png', alt='', style="max-width: 100%;", data-aos="zoom-in").mx-auto


      .col-lg-5
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 16.
          span Levas cónicas

        .bg-color-1.py-4
          figure
            img(src='@/assets/curso/tema3/f16.png', alt='Imagen que presenta un sistema que utiliza una leva con dos perfiles de diferentes alturas.', style="max-width: 270px;", data-aos="zoom-in").mx-auto

    .bg-full-width.bg-color-5.my-5
      .p-4
        .row.justify-content-center.align-items-center
          .col-lg-auto
            figure
              img(src="@/assets/curso/tema2/icon-2.svg", alt="", style="max-width: 90px;", data-aos="zoom-in").mx-auto.mb-4.mb-lg-0
          .col-lg
            p(data-aos="fade-up").mb-2.text-white
              | El otro sistema trabaja con un solo perfil de leva, pero el balancín tiene un pistón hidráulico de apoyo de la leva y otro pistón hidráulico que actúa como una cuña, para bloquear al pistón y permitir que la leva empuje un mayor recorrido a la válvula.

    Separador

    .titulo-segundo.color-primario
      h2 3.8 Sistema Valvetronic BMW


    .row.justify-content-center.align-items-start.mb-4
      .col-lg-7
        p(data-aos="fade-up").mb-4
          | Valvetronic de BMW es un sistema de regulación continua de la carrera de las válvulas de admisión. En este, el árbol de levas no actúa directamente sobre el balancín, sino que lo hace sobre una palanca intermedia, que está dotada en el centro de un rodillo y en contacto con la leva (árbol de levas). El extremo inferior de la palanca está apoyado sobre el rodillo de la palanca de arrastre, mientras que en la parte superior está apoyada de un eje excéntrico dotado a su vez, de un segundo rodillo.

        .bg-color-3.px-4.py-4.mb-4
          p(data-aos="fade-up").mb-0
            | Cuando gira el árbol de levas, la palanca intermedia ejecuta un movimiento pendular. Sólo cuando la parte en ángulo actúa sobre el rodillo de la palanca de arrastre presionándola hacia abajo, se abre la válvula.

        p(data-aos="fade-up").mb-4.mb-lg-0
          | El árbol de excéntrica accionado por un motor eléctrico, el mismo que cambia el punto de apoyo de la palanca y en consecuencia, cambia también de modo continuo la carrera de la válvula de admisión, teóricamente desde las posiciones completamente cerrada hasta completamente abierta.


      .col-lg-5
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 17.
          span Sistema Valvetronic de BMW


        .bg-color-1.py-4
          figure
            img(src='@/assets/curso/tema3/f17.png', alt='Imagen que presenta el sistema Valvetronic de BMW.', style="max-width: 389px;", data-aos="zoom-in").mx-auto

    .bg-full-width.bg-color-5.my-5
      .p-4
        .row.justify-content-center.align-items-center
          .col-lg-auto
            figure
              img(src="@/assets/curso/tema2/icon-2.svg", alt="", style="max-width: 90px;", data-aos="zoom-in").mx-auto.mb-4.mb-lg-0
          .col-lg
            p(data-aos="fade-up").mb-2.text-white
              | La alzada de las válvulas puede variar desde los 0,01 a los 9,7 milímetros, en función del aire necesario para la combustión. En este caso, es el computador del motor (ECU) quien controla el movimiento del motor eléctrico y que pone a estos actuadores intermedios, en la posición requerida. 

    Separador

    .titulo-segundo.color-primario
      h2 3.9 Sistema de comando electrónico de válvulas


    .row.justify-content-center.align-items-start.mb-4

      .col-lg-5
        figure.mb-4.mb-lg-0
          img(src='@/assets/curso/tema3/10.png', alt='', style="max-width: 100%;", data-aos="zoom-in").mx-auto

      .col-lg-7
        p(data-aos="fade-up").mb-4
          | Valeo presentó en el Salón de Frankfurt 2005, su última tecnología en comando electrónico de las válvulas del motor de combustión, que no es más que un sistema que adopta Smart Valve Actual (SVA), en lugar del funcionamiento de las válvulas del motor empujadas por el perfil de levas, àrbol de levas y propulsores hidráulicos.

        .bg-color-6.px-4.py-4.mb-4
          p(data-aos="fade-up").mb-0
            | En un motor sin eje de levas, cada válvula del motor es operada individualmente por un actuador, que se pone en la superficie superior de la culata del cilindro, directamente encima de las guías de la válvula. Cada válvula es empujada por la acción de un intenso campo magnético creado en electroimanes, comandados por la acción del computador del motor. 

        p(data-aos="fade-up").mb-0
          | El primero se llama #[em camless completo] ya que gestiona las válvulas tanto en el lado de admisión y de escape del motor. El segundo se llama #[em camless medio], ya que gestiona las válvulas de admisión solamente.

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
