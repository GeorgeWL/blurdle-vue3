<script setup lang="ts">
import TitleDescription from './components/TitleDesc.vue'
import AsyncImage from './components/AsyncImage.vue';
import GuessInput from './components/GuessInput.vue';
import { useGuessStore } from './stores/guesses';
const store = useGuessStore();
</script>

<template>
  <header>

    <div class="wrapper">
      <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
      <TitleDescription />
    </div>
  </header>

  <main>
    <GuessInput />
    <Transition mode="out-in">
      <KeepAlive>
        <Suspense>
          <AsyncImage :guesses="0" />
          <template #fallback>
            Loading...
          </template>
        </Suspense>
      </KeepAlive>
    </Transition>
    <Teleport to="body">
      <div v-if="store.isWinState !== undefined" class="modal">
        <p v-if="store.isWinState">Winner!</p>
        <p v-if="!store.isWinState">Out of guesses!</p>
      </div>
    </Teleport>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}.modal {
  position: absolute;
  width: 90%;
  height: 90%;
  top: 5%;
  left: auto;
  border-radius: calc(var(--section-gap) / 4);
  background: var(--color-background-soft);
  display: flex;
  flex-direction: column;
  place-items: center;
}
</style>
