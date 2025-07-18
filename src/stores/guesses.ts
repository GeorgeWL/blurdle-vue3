import { getProperNoun } from '@/handlers/getRandomProperNoun'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useGuessStore = defineStore('counter', () => {
  const nounOfTheDay = getProperNoun()

  const count = ref(0)
  const isWinState = ref<boolean | undefined>(undefined)

  const isMaxGuesses = computed(() => count.value === 20)

  function setGameEnd(winState: boolean) {
    isWinState.value = winState
  }

  function submitGuess(guess: string): void {
    if (guess === nounOfTheDay) {
      setGameEnd(true)
      return
    }
    if (isMaxGuesses.value) {
      setGameEnd(false)
      return
    }
    count.value++
  }

  return { count, submitGuess, nounOfTheDay, isWinState }
})
