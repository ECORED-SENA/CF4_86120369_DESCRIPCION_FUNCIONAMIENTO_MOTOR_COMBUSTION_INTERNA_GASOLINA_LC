<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Calibración de válvulas

    .row.justify-content-center.align-items-center.mb-4
      .col-lg
        p(data-aos="fade-up").mb-4 A continuación, lo invitamos a conocer diferentes tipos de calibraciones de válvulas.

      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/1.svg", alt="alt", style="max-width: 190px;").mx-auto

    Separador
    #t_1_1
    .titulo-segundo.color-primario
      h2 1.1 Calibración de válvulas con pastilla calibrada

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7
        p(data-aos="fade-up").mb-4 Cuando el eje de levas se ha instalado sobre las válvulas y la propulsión de este movimiento se quiere realizar de la manera más directa, se utilizan propulsores entre el eje de levas y la válvula.

        .bg-color-3.px-4.py-3.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src="@/assets/curso/tema1/2.svg", alt="alt", style="max-width: 190px;")

            .col-lg
              p(data-aos="fade-up")
                | Para poder calibrar la holgura que se necesita, este ‘vaso’ propulsor que aloja a una rodela plana de acero que tiene un cierto espesor y que al mismo tiempo sirve de superficie de fricción de la leva.


        p(data-aos="fade-up").mb-4 Ya que la distancia entre el eje de levas y la válvula resulta difícil de regular, esta rodela puede ser reemplazada con diferentes espesores; de tal manera que una rodela de menor espesor dará una mayor distancia de calibración y una de mayor espesor reducirá la holgura.

        .bg-color-14.px-4.py-3.mb-4.mb-lg-0
          p(data-aos="fade-up").mb-0 En estos sistemas es muy importante tomar en cuenta que una rectificación del asiento de la válvula o de la misma superficie cónica de la cabeza de la válvula reducirá esta holgura, pudiendo llegar a los límites en los cuales los espesores mínimos de las rodelas serán insuficientes para dejar la holgura necesaria, lo que implica cambiar al asiento y calibrar esta altura. 

      .col-lg-5
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 1.
          span Conjunto engranaje de mando final

        .bg-color-1.pt-4.pe-4
          figure
            img(src='@/assets/curso/tema1/f1.png', alt='Imagen que presenta la calibración de válvulas con pastilla calibrada.', style="max-width: 400px;").m-auto
        figcaption.mt-2 #[b Nota.] Conjunto engranaje de mando final. (s.f.). [Imagen].

    Separador
    #t_1_2
    .titulo-segundo.color-primario
      h2 1.2 Calibración de válvulas con tornillo cónico en propulsor

    p(data-aos="fade-up").mb-4 Este sistema ha sido reemplazado por un tornillo cónico, instalado en un propulsor doble, que en su parte superior recibe el impulso del eje de levas; luego, para regular la distancia entre este eje y el vástago de la válvula, el tornillo cónico empuja a otro sector bajo del propulsor. Cuando el tornillo se ajusta, el sector bajo del propulsor se acerca a la válvula, reduciéndose la holgura, pero al desajustar el tornillo la holgura aumentará.

    .row.justify-content-center.align-items-center
      .col-lg-7.mb-4.mb-lg-0
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 2.
          span Conjunto engranaje de mando final

        .bg-color-1.p-4
          figure
            img(src='@/assets/curso/tema1/f2.png', alt='Imagen que presenta la calibración de válvulas con tornillo cónico en propulsor.', style="max-width: 520px;").mx-auto
        figcaption.mt-2.mb-4 #[b Nota.] Conjunto engranaje de mando final. (s.f.). [Imagen].

        .bg-color-4
          .p-4
            .row.justify-content-center.align-items-center
              .col-lg-auto.d-none.d-lg-block
                figure
                  img(src="@/assets/curso/tema1/4.svg", alt="alt", style="max-width: 190px;")

              .col-lg
                p(data-aos="fade-up").mb-0
                  | Para que el técnico pueda regular el tornillo, en el propulsor se debe realizar un orificio lateral, de manera que una llave hexagonal ingrese en la cabeza del tornillo. 

      .col-lg-5
        figure
          img(src="@/assets/curso/tema1/3.png", alt="alt", style="max-width: 430px;").m-auto

    Separador
    #t_1_3
    .titulo-segundo.color-primario
      h2 1.3 Calibración válvulas con pastillas sobre vástago

    p(data-aos="fade-up").mb-4 Un sistema muy similar al concepto de calibración con propulsores revisados anteriormente ha sido diseñado, pero reemplazando a la rodela de espesor calibrable por una pequeña pastilla, instalada sobre el vástago de la válvula y cercana a la parte baja del propulsor.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/5.png", alt="alt", style="max-width: 430px;").m-auto

      .col-lg-8
        .bg-color-3.px-4.py-3.mb-4
          p(data-aos="fade-up").mb-0
            | Este cambio se ha debido especialmente, a que el peso de la rodela de acero, más el peso del mismo propulsor aumentan la inercia que se produce sobre la tensión del muelle de válvula, el cual debe empujar, además de la válvula, al propulsor en su carrera de regreso. Este fenómeno que se produce aumentará significativamente con el incremento de las revoluciones del motor.

        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 3.
          span Calibración válvulas con pastillas sobre vástago

        .bg-color-1.px-4
          figure
            img(src='@/assets/curso/tema1/f3.png', alt='Imagen que presenta la calibración válvulas con pastillas sobre vástago.', style="max-width: 650px;", data-aos="zoom-in").mx-auto
        figcaption.mt-2 #[b Nota.] Calibración válvulas con pastillas sobre vástago. (s.f.). [Imagen].

    .bg-full-width.bg-color-5
      .p-4
        .row.justify-content-center.align-items-center
          .col-lg-auto
            figure
              img(src="@/assets/curso/tema1/4.svg", alt="", style="max-width: 90px;", data-aos="zoom-in").mx-auto.mb-4.mb-lg-0
          .col-lg
            p(data-aos="fade-up").mb-0.text-white
              | Con esta pequeña pastilla de calibración instalada sobre el vástago de la válvula se reduce totalmente este defecto, aunque se complica el proceso de calibración, ya que el técnico deberá retirar el eje de levas y los propulsores para tener acceso a la pastilla y reemplazarla por una de diferente espesor, llegando a la holgura que requiere. 

</template>

<script>
export default {
  name: 'Tema1',
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
