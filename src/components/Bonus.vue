<template>
  <section id="bonus">
    <ul class="list-group text-start">
      <li class="list-group-item bg-transparent bg-transparent">
        <img src="../assets/check-square.png" width="40" />
        10 Crypto Mafia City NFTs will be randomly airdropped to our twitter
        followers.
      </li>
      <li class="list-group-item bg-transparent bg-transparent">
        <img src="../assets/square.png" width="30" />
        10 Crypto Mafia City NFTs will be randomly airdropped to our discord
        members.
      </li>
      <li class="list-group-item bg-transparent bg-transparent">
        <img src="../assets/square.png" width="30" />
        We will put 100 Crypto Mafia City NFTs in prize pool.
      </li>
      <li class="list-group-item bg-transparent bg-transparent">
        <img src="../assets/square.png" width="30" />
        When you have at least 1 character in 6 different mafia groups (6
        characters total), we will be airdropping casino license, club license,
        sex industry license, drug dealing license, arm dealing and guarding
        license randomly, then you can receive Crypto Mafia City rewards without
        any costs.
      </li>
      <li class="list-group-item bg-transparent bg-transparent">
        <img src="../assets/square.png" width="30" />
        Our goal is to create our own cryptocurrency – MFC and to have it be
        traded on well-known cryptocurrency exchanges.
      </li>
      <li class="list-group-item bg-transparent bg-transparent">
        <img src="../assets/square.png" width="30" />
        Crypto Mafia City will return 65% of Royalties as a bonus to every Crypto
        Mafia City owner on the 15th of each month. 65% of Royalties are going to
        be transferred to every owner after handling fees.
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "Bonus",
};
</script>

<style scoped>
#bonus {
  padding: 50px;
  background-image: url("../assets/reel.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  text-shadow: 0 0 5px black, 0 0 5px black;
}

#bonus ul {
  padding: 100px 50px 100px 15%;
  font-size: 20px;
}

@media screen and (max-width: 992px){
  #bonus {
    padding: 50px;
    background-image: url("../assets/reel-straight.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  #bonus ul {
    padding: 100px 50px 10rem 15%;
    font-size: 20px;
  }
}

@media screen and (max-width: 576px){
  #bonus {
    padding: 10px;
    background-image: url("../assets/reel-straight.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  #bonus ul {
    padding: 100px 20px 15rem 10%;
    font-size: 20px;
  }
}

#bonus ul li {
  color: white;
  border: none;
}
</style>
