<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.px-4.px-md-5.pt-4.pt-md-5.mb-0.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .bg-full-width-2.bg-fondo-1
      .px-4.px-md-5.pb-4.pb-md-5
        .row
          .col-lg-9

            .bg-color-1.mb-4(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto
                  figure
                    img(src='@/assets/curso/intro/1.png', alt='')
                .col-lg
                  .p-4
                    p.mb-3(data-aos="fade-up") En todo elemento mecánico que tiene trabajo constante, y más en el motor del vehículo, es indispensable recalibrar las partes que pueden haber cambiado el tiempo de funcionamiento, han perdido rendimiento por desgaste o uso; o bien, cuando el motor ha tenido un uso determinado y deterioro, necesita otros parámetros de funcionamiento para mantenerlo en forma. En la actualidad, los desarrollos en el campo automotriz han llevado a que la los elementos sean monitoreados permanente mente y sus ajuste se realice a través de personal calificado.

                    p.mb-0(data-aos="fade-up") #[strong ¡Muchos éxitos en esta experiencia de aprendizaje!]


          .col-lg-3
            figure
              img(src="@/assets/curso/intro/2.png", alt="alt")

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
