<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isVisible = ref(false)

const dismissNotice = () => {
  isVisible.value = false
  try {
    sessionStorage.setItem('mobile_notice_dismissed', 'true')
  } catch (e) {
    // fail-safe jika storage dibatasi browser
  }
}

onMounted(() => {
  try {
    const isDismissed = sessionStorage.getItem('mobile_notice_dismissed') === 'true'
    if (isDismissed) return

    // Deteksi kombinasi lebar layar HP dan User-Agent mobile
    const isMobileDevice =
      window.innerWidth < 768 ||
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

    if (isMobileDevice) {
      isVisible.value = true
    }
  } catch (e) {
    // fallback
  }
})
</script>

<template>
  <Teleport to="body">
    <transition
      enter-active-class="transition-opacity duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isVisible"
        class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/75 backdrop-blur-md"
      >
        <transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 scale-95 translate-y-2"
          enter-to-class="opacity-100 scale-100 translate-y-0"
          leave-active-class="transition-all duration-200 ease-in"
          leave-from-class="opacity-100 scale-100 translate-y-0"
          leave-to-class="opacity-0 scale-95 translate-y-2"
        >
          <div
            v-if="isVisible"
            class="w-full max-w-sm rounded-2xl bg-[#0D182E] border border-white/10 p-6 text-center shadow-2xl shadow-black/90 space-y-5"
          >
            <!-- Warning Icon with Shake & Pulsing Glow Animation -->
            <div
              class="relative inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 animate-pulse"
            >
              <LucideTriangleAlert class="w-7 h-7 animate-shake" />
            </div>

            <!-- Title & Description -->
            <div class="space-y-2">
              <h3 class="text-lg font-bold text-white tracking-tight">
                Waduh, pakai HP ya?
              </h3>
              <p class="text-sm text-slate-300 leading-relaxed">
                Portofolio ini dirancang penuh animasi dan detail interaktif. Biar <span class="text-white font-medium">experience-nya makin maksimal</span> dan aesthetic, rekomen banget buka via PC atau Laptop ya!
              </p>
            </div>

            <!-- Action Button -->
            <div class="pt-2">
              <button
                type="button"
                class="w-full py-3 px-5 rounded-lg text-white font-medium text-sm bg-gradient-to-r from-[#5544D3] to-[#8A46F2] hover:opacity-95 active:scale-95 transition-all shadow-lg shadow-[#8A46F2]/25"
                @click="dismissNotice"
              >
                Terobos Ajalah!
              </button>
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </Teleport>
</template>

<style scoped>
@keyframes alert-shake {
  0%, 100% {
    transform: rotate(0deg);
  }
  20%, 60% {
    transform: rotate(-10deg);
  }
  40%, 80% {
    transform: rotate(10deg);
  }
}

.animate-shake {
  animation: alert-shake 1.8s ease-in-out infinite;
}
</style>
