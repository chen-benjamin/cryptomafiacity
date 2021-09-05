<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="../assets/logo.png" width="110" height="50" alt="" />
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
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#gangs">Gangs</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#detail">Detail</a>
            </li>
            <li>
                <a class="nav-link" href="#"><img src="../assets/discord-brands.png" class="svgIcon" width="28" height="28"></a>
            </li>
            <li>
                <a class="nav-link" href="#"><img src="../assets/twitter-brands.png" class="svgIcon" width="28" height="28"></a>
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
<style scoped></style>
