<template>
  <div style="position: relative; width: 100%;">
    <HeaderDefault />
    <Nuxt />
    <FooterDefault />
  </div>
</template>

<script>
import HeaderDefault from '../components/layout/HeaderDefault'
import FooterDefault from '../components/layout/FooterDefault'
export default {
  components: {
    HeaderDefault,
    FooterDefault
  }
}
</script>

<style>
html {
  font-family:
    'Noto Sans TC',
    'Manrope',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;

  font-family:
    'Noto Sans TC',
    'Manrope',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;

  letter-spacing: 0.05em;
  font-weight: bold;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

a {
  text-decoration-line: none;
  color: inherit;
}

a:hover {
  text-decoration-line: none;
  color: inherit;
}

.text-color-shopp {
  color: #ee4d2d;
}

h1, h2, h3 {
  margin: 0;
  font-weight: bold;
}

p {
  margin: 0;
}
</style>
