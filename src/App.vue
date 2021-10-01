<template>
  <div id="app">
    <Header></Header>
    <About endTime="2021/10/03 06:00:00"></About>
    <Gangs></Gangs>
    <Rule></Rule>
    <Bonus></Bonus>
    <Detail></Detail>
    <Team></Team>
    <Info></Info>
    <Footer></Footer>
    <CountDown endTime="2021/10/03 06:00:00"></CountDown>
  </div>
</template>

<script>
import Header from "./components/Header";
import About from "./components/About";
import Gangs from "./components/Gangs";
import Rule from "./components/Rule";
import Bonus from "./components/Bonus";
import Detail from "./components/Detail";
import Team from "./components/Team";
import Info from "./components/Info";
import Footer from "./components/Footer";
import CountDown from "./components/CountDown";

export default {
  name: 'App',
  components: {
    Header,
    About,
    Gangs,
    Rule,
    Bonus,
    Detail,
    Team,
    Info,
    Footer,
    CountDown,
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
  font-family: 'Permanent Marker', cursive;
}

section {
  margin: 100px 20px;
}

section:first-of-type {
  margin: 50px 20px;
}

h1 {
  font-size: calc(1.4rem + 1.5vw);
}

p {
  font-size: 1.1rem;
}

.bg-black {
  background: black;
}
</style>
