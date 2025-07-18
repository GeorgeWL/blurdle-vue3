<script lang="ts" setup>
import type { ErrorResponse } from 'pexels';
import getPexelsPhoto, { type ImageResponse, type PhotoSummary } from '../handlers/getPexelsPhoto'
import { computed } from 'vue';
import { useGuessStore } from '@/stores/guesses';

const store = useGuessStore()
const data: ImageResponse = await getPexelsPhoto(store.nounOfTheDay)
const { guesses } = defineProps({
  guesses: Number
})
const altText = computed(() => guesses === 10 ? (data as PhotoSummary).alt : `clue-${guesses}`)

</script>

<template>
  <div class="img-wrap">
    <p class="error" v-if="(data as ErrorResponse)?.error">Error: {{ (data as ErrorResponse)?.error }}</p>
    <img v-if="(data as PhotoSummary)?.src" :src="(data as PhotoSummary)?.src" :alt="altText" />
  </div>
</template>

<style>
.error {
  color: salmon;
}

img {
  width: 100%;
}

.img-wrap {
  width: 70vw;
}
</style>
