<template>
  <header>
    <nav class="navbar navbar-expand-lg px-5">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="../assets/logo.png" width="88" height="40" alt="" />
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
                <a class="nav-link nav-icon" href="https://discord.com/invite/Gjjrm9JM4k" target="_blank"><img src="../assets/discord-brands.png" width="32" height="32"></a>
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
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.navbar {
  font-size: 24px;
}

.nav-icon {
  margin: 0 20PX 0 0;
  padding: 5px;
}

.nav-link {
  color: white;
}
</style>
