<template>
  <section id="about" class="text-white">
    <div class="container">
      <div class="row">
        <!-- <div class="col-12 col-md-6">
          <img src="../assets/Logo.png" class="logo" />
        </div> -->
        <div class="col-12 text-start">
          <img src="../assets/Logo.png" class="logo" />
          <h1>Welcome to Crypto Mafia City</h1>
          <hr />
          <p>
            In 2045, countries around the globe have overprinted banknotes (fiat
            currency) and caused hyperinflation. People no longer trust their
            governments and start to lose interests in using banknotes. Instead
            of using banknotes, cryptocurrency – MFC has become more popular
            than ever. People start to fight over cryptocurrency because its
            lack of availability. All the Mafias have started to rise as people
            are losing their faith and hope in the governments. Different Mafias
            use their own unique abilities to control economy in new era.
          </p>
          <p>Join Crypto Mafia City now and start to build your own mafia legacy.</p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 buy-btn">
          <h1>Buy Here!</h1>
          <button type="button" class="btn btn-light">Buy Mafia</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
h1 {
  color: #FBDA64;
  font-size: 2.3rem;
}

.logo {
  width: 40%;
  padding: 5px 30px 20px 0;
  float: left;
}

@media screen and (max-width: 992px){
  .logo {
    width: 100%;
    padding-bottom: 30px;
  }
}

.buy-btn {
  padding: 100px 0 50px 0;
}
</style>
