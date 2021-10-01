<template>
  <section id="about" class="text-white">
    <div class="container">
      <div class="row">
        <div class="col-12 text-start">
          <img src="../assets/city.png" width="100%" style="margin-bottom: 40px;opacity: 0.75;" />
        </div>
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
          <button type="button" class="btn btn-none" @click="buy"></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { BuyButtonPress } from "../services/wallet"

export default {
  name: "About",
  props: ['endTime'],
  methods: {
    async buy() {
      let t = new Date(this.endTime + ' GMT+08:00').getTime() - new Date().getTime();
      if (t > 0) {
        this.$swal({
          title: 'Minting will be on 10/3 6:00 AM',
          confirmButtonText: 'CLOSE'
        })
        return
      }

      const { value: amount } = await this.$swal({
        title: 'How many do you want to buy?',
        input: 'number',
        inputLabel: 'amount',
        inputAttributes: {
          min: 1,
          step: 1
        },
        inputValue: 1,
        confirmButtonText: 'Buy'
      });

      if (amount) {
        BuyButtonPress(this.$store.state.address, amount)
        .then(data => {
          console.log(data)
        })
        .catch(err => {
          this.$swal(err.message, '', 'error')
        })
      }
    }
  }
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

.buy-btn button {
  width: 300px;
  height: 115px;
  background-image: url("../assets/buy.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border: none;
  padding: 10px;
}

.buy-btn button:hover {
  background-image: url("../assets/buy-over.png");
}

.buy-btn button:focus {
  box-shadow: none;
}
</style>
