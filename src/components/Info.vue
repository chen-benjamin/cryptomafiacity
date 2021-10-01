<template>
  <section id="detail" class="text-start text-white px-5">
    <h1>Game Info</h1>
    <hr />
    <p>Once you receive a license, you can start your journey in our game. All the characters are put into 3 different ranks with relative activation value.</p>
    <div class="row">
      <div class="col-md-12 col-lg-6" style="">
        <div class="row">
          <div class="col-12" style="font-size: 24px; padding-right: 0">
            <ul>
              <li>Top class: 3 activation value</li>
              <li>Middle class: 2 activation value</li>
              <li>Bottom class: 1 activation value</li>
            </ul>
          </div>
          <div class="col-12" style="font-size: 24px; padding-right: 0">
            <h2>Correspondence between licenses and gangs:</h2>
            <ul>
              <li>Casino License:「Wah Ching」</li>
              <li>Club: 「Russian mafia」 </li>
              <li>Sex Industry:「Yakuza」 </li>
              <li>Arm Dealing:「Mafia」</li>
              <li>Drug Dealing:「Los zetas」</li>
              <li>Guarding: 「MS-13」</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-12 col-lg-6" style="padding-left: 0">
        <img src="../assets/info.png" :class="photoClass" />
      </div>
      <div class="col-12" style="padding-right: 0">
        <p>When you activate a license which has an activation value greater or equal to 3, you will be eligible to share the royalty bonus in return. According to the previous month prize pool, the royalty bonus will be distributed equally on the 15th of every month.</p>
      </div>
      <div class="col-12" style="padding-right: 0">
        <p>Prize pool will be collected from 65% of the total royalties on secondary markets. In the near future, more tasks and elements are going to be put into the game to make larger prize pool. Daily task will be available to everyone, so you can have a lot more fun! Finally, players can check the power map and fight over any free open resources with others.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Info",
  computed: {
    photoClass: () => {
      let isOver1200 = window.innerWidth > 1200
      return {
        'w-100': !isOver1200,
        'w-75': isOver1200
      }
    }
  }
}
</script>

<style scoped>
</style>