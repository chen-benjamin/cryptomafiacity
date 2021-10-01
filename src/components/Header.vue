<template>
  <header>
    <nav class="navbar navbar-dark navbar-expand-lg fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="../assets/logo-small.png" width="88" height="40" alt="" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li>
                <a class="nav-link nav-icon" href="https://twitter.com/cryptomafiacity" target="_blank"><img src="../assets/twitter-brands.png" width="32" height="32"></a>
            </li>
            <li>
                <a class="nav-link nav-icon" href="https://discord.com/invite/snZCThjQyT" target="_blank"><img src="../assets/discord-brands.png" width="32" height="32"></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#gangs">Gangs</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#detail">Detail</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#team">Team</a>
            </li>
            <li>
              <button type="button" class="btn bg-transparent" @click="connect">{{ address ? address : 'Connect Wallet' }}</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { ConnectWallet } from "../services/wallet"

export default {
  name: "Header",
  data: () => {
    return {
      address: null
    }
  },
  methods: {
    connect: function() {
      ConnectWallet()
        .then(data => {
          this.address = data.replace(data.substring(4, data.length -4), '...')
          this.$store.commit('setAddress', data)
        })
        .catch(err => {
          this.$swal(err.message, '', 'error')
        })
    }
  }
};
</script>

<style scoped>
.navbar {
  font-size: 24px;
  padding: 1rem 3rem;
  background-color: black;
}

@media screen and (max-width: 992px){
  .navbar {
    padding: 0 1rem;
  }
}

.nav-icon {
  padding: 5px;
}

.nav-link {
  margin: 0 0 0 40PX;
}

.btn {
  margin: 0 0 0 40PX;
  font-size: 24px;
  border: #FBDA64 solid 1px;
  color: #FBDA64;
}
</style>
