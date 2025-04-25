<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.px-4.px-md-5.pt-4.pt-md-5.mb-0.overflow-hidden
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .bg-full-width-2.bg-fondo-1
      .px-4.px-md-5.pb-4.pb-md-5
        .row
          .col-xl-9.mb-4.mb-xl-0(data-aos="fade-right")
            .row
              .col-xl-auto.px-xl-0.mb-4.mb-xl-0.d-none.d-xl-block
                figure
                  img(src='@/assets/curso/intro/1.png', alt='', style="width: 340px").m-auto
              .col-xl.bg-color-1
                .p-4
                  p.mb-3 En todo elemento mecánico que tiene trabajo constante, y más en el motor del vehículo, es indispensable recalibrar las partes que pueden haber cambiado el tiempo de funcionamiento, han perdido rendimiento por desgaste o uso; o bien, cuando el motor ha tenido un uso determinado y deterioro, necesita otros parámetros de funcionamiento para mantenerlo en forma. En la actualidad, los desarrollos en el campo automotriz han llevado a que los elementos sean monitoreados permanentemente y sus ajustes se realicen a través de personal calificado.

                  p.mb-0 #[strong ¡Muchos éxitos en esta experiencia de aprendizaje!]

          .col-xl-3(data-aos="fade-left")
            figure
              img(src="@/assets/curso/intro/2.png", alt="alt", style="max-width: 250px;").m-auto

</template>

<script>
export default {
  name: 'Introduccion',
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
