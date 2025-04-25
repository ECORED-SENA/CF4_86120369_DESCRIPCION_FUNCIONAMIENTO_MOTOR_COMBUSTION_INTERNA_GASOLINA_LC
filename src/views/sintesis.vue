<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      p.mb-5 A continuación, se presenta una síntesis de la temática estudiada en el componente formativo. 
      .row.justify-content-center
        .col-lg-12.mb-5
          figure.bg-color-sintesis.p-5.tarjeta
            img(src="@/assets/curso/sintesis.svg", alt="Esquema general del componente formativo, que enuncia las temáticas desarrolladas y destaca aspectos clave estudiados. Tema central: calibración de válvulas, propulsores, nuevos sistemas. Temas integradores: calibración de válvulas, propulsores hidráulicos y sistema de variación del avance en eje de levas de admisión.")
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
