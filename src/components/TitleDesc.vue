<template>
  <div class="greetings">
    <h1 class="title">Blurdle</h1>
    <p>
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
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
