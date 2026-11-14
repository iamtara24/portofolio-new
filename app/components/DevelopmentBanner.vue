<script setup lang="ts">
const messages = [
  'Website ini sedang dalam tahap pengembangan',
  'This website is currently under development',
  'このウェブサイトは現在開発中です',
]
</script>

<template>
  <div
    class="relative w-full overflow-hidden bg-[#070E20]/95 backdrop-blur-md border-b border-white/10 text-[11px] sm:text-xs py-1.5 text-slate-300 select-none z-50"
  >
    <div class="marquee-track flex whitespace-nowrap">
      <!-- Looping track -->
      <div
        v-for="i in 2"
        :key="i"
        :aria-hidden="i === 2"
        class="marquee-content flex items-center shrink-0"
      >
        <span
          v-for="(text, index) in messages"
          :key="index"
          class="inline-flex items-center mx-6 gap-2"
        >
          <span class="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse"></span>
          <span class="font-medium text-slate-200">{{ text }}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee-scroll 28s linear infinite;
}

.marquee-track:hover {
  animation-play-state: paused;
}

@keyframes marquee-scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
