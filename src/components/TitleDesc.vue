<template>
  <div class="title-desc">
    <div class="title-wrapper">

      <h1 class="title">Blurdle</h1>
      <h3>The Blurry guessing game</h3>
    </div>
    <p class="description">
      After each guess the image will become less pixelated and blurred, each time a one word Proper Noun
      <br />(cat, dog, house, cardigan, train, etc)
    </p>
  </div>

</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
}

h3 {
  font-size: 1.2rem;
}

.title-desc h1,
.title-desc h3 {
  text-align: center;
}
.title-wrapper {
  margin-bottom: 2rem;
}

@media (min-width: 1024px) {

  .title-desc h1,
    .title-desc h3 {
    text-align: left;
  }
}
</style>
