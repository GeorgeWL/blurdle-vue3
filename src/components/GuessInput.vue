<script lang="ts" setup>
import { useGuessStore } from '@/stores/guesses';
import { ref } from 'vue';

const input = ref('');
const showErrorMsg = ref(false)
const store = useGuessStore();

const onSubmit = () => {
  store.submitGuess(input.value);
  if (store.isWinState === undefined) {
    showErrorMsg.value = true
    setTimeout(() => {
      showErrorMsg.value = false
    }, 3000)
    input.value = ''
  }
}
</script>

<template>
  <div class="guesses">
    <div class="flex-row">
      <h3>Guesses: {{ store.count }}</h3>
      <span class="error incorrect" v-if="showErrorMsg">Incorrect</span>
    </div>
    <div class="flex-row">
      <label for="guess-input">Guess</label>
      <input v-model="input" id="guess-input" />
      <button @click="onSubmit">Submit</button>
    </div>
  </div>
</template>

<style scoped>
.guesses {
  margin: 2rem 0;
}

.incorrect {
  margin: 0 .25rem;
}

label,
input {
  margin: .5rem 0;
  margin-right: .5rem;
}
</style>
