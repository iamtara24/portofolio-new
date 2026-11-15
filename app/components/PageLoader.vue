<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isLoading = ref(true)
const isPageLoaded = useState('isPageLoaded', () => false)
const progress = ref(0)

onMounted(() => {
  // Kunci scroll body saat loading aktif
  document.body.style.overflow = 'hidden'

  const startTime = performance.now()
  const minDuration = 2000

  // Animasi progress bar naik bertahap
  const updateProgress = (currentTime: number) => {
    const elapsed = currentTime - startTime
    const currentProgress = Math.min((elapsed / minDuration) * 100, 95)
    progress.value = Math.floor(currentProgress)

    if (elapsed < minDuration) {
      requestAnimationFrame(updateProgress)
    }
  }
  requestAnimationFrame(updateProgress)

  const finishLoading = () => {
    const elapsed = performance.now() - startTime
    const remainingTime = Math.max(0, minDuration - elapsed)

    setTimeout(() => {
      progress.value = 100
      setTimeout(() => {
        isLoading.value = false
        isPageLoaded.value = true
        document.body.style.overflow = ''
      }, 350)
    }, remainingTime)
  }

  if (document.readyState === 'complete') {
    finishLoading()
  } else {
    window.addEventListener('load', finishLoading, { once: true })
    // Fallback timeout
    setTimeout(finishLoading, 4000)
  }
})
</script>

<template>
  <Transition
    enter-active-class="transition-opacity duration-300"
    leave-active-class="transition-opacity duration-700 ease-in-out"
    leave-to-class="opacity-0 pointer-events-none"
  >
    <div
      v-if="isLoading"
      class="fixed inset-0 z-[9999] bg-[#040A18] flex flex-col items-center justify-center p-4 select-none"
    >
      <!-- Center Content -->
      <div class="relative flex flex-col items-center">
        <!-- Glow Effect behind Animation -->
        <div class="relative w-[240px] h-[110px] flex items-center justify-center">
          <div
            class="absolute -inset-4 bg-violet-600/20 rounded-full blur-2xl animate-pulse"
          ></div>

          <!-- Cat Lottie Animation -->
          <ClientOnly>
            <Lottie
              name="catloading"
              :width="240"
              :height="110"
              :loop="true"
              :autoplay="true"
            />
          </ClientOnly>
        </div>

        <!-- Progress Bar Container -->
        <div class="w-48 sm:w-56 h-1 bg-white/10 rounded-full overflow-hidden mt-6 shadow-inner">
          <div
            class="h-full bg-gradient-to-r from-[#5544D3] via-[#8A46F2] to-violet-400 rounded-full transition-all duration-150 ease-out"
            :style="{ width: `${progress}%` }"
          ></div>
        </div>

        <!-- Status Text -->
        <span class="text-[11px] font-medium tracking-widest uppercase text-slate-400 mt-3 animate-pulse">
          Loading...
        </span>
      </div>
    </div>
  </Transition>
</template>
