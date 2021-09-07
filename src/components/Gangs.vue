<template>
  <section id="gangs" class="text-white text-center">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-4">
          <div class="row gang">
            <div class="col-12">
              <img src="../assets/ms13.png" />
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="row gang">
            <div class="col-12">
              <img src="../assets/yakuza.png" />
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="row gang">
            <div class="col-12">
              <img src="../assets/mafia.png" />
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-4">
          <div class="row gang">
            <div class="col-12">
              <img src="../assets/los-zetas.png" />
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="row gang">
            <div class="col-12">
              <img src="../assets/wah-ching.png" />
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="row gang">
            <div class="col-12">
              <img src="../assets/russian.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Gangs",
};
</script>

<style scoped>
.gang {
  padding: 10px;
}

.gang img {
  width: 100%;
}

.gang h2 {
  padding: 20px 0;
}

.gang p {
  text-align: left;
}

.description {
  margin: 20px 0;
}
</style>
