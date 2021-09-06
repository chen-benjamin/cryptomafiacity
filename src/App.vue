<template>
  <div id="app">
    <Header></Header>
    <About></About>
    <Gangs></Gangs>
    <Rule></Rule>
    <Bonus></Bonus>
    <Detail></Detail>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import About from "./components/About";
import Gangs from "./components/Gangs";
import Rule from "./components/Rule";
import Bonus from "./components/Bonus";
import Detail from "./components/Detail";
import Footer from "./components/Footer";

export default {
  name: 'App',
  components: {
    Header,
    About,
    Gangs,
    Rule,
    Bonus,
    Detail,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

section {
  margin: 100px 20px;
}

h1 {
  font-size: calc(1.4rem + 1.5vw);
}

p {
  font-size: 1.2rem;
}

.bg-black {
  background: black;
}
</style>
