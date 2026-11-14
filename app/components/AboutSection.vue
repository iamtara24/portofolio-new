<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const sectionRef = ref<HTMLElement | null>(null)
const hasAnimated = ref(false)

const countYears = ref(0)
const countProjects = ref(0)
const countResponsive = ref(0)
const countSatisfaction = ref(0)

const animateCount = (
  target: number,
  duration: number,
  callback: (val: number) => void
) => {
  const startTime = performance.now()

  const step = (currentTime: number) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    // easeOutCubic
    const easeOut = 1 - Math.pow(1 - progress, 3)
    const currentVal = Math.floor(target * easeOut)
    callback(currentVal)

    if (progress < 1) {
      requestAnimationFrame(step)
    } else {
      callback(target)
    }
  }

  requestAnimationFrame(step)
}

const startCounting = () => {
  if (hasAnimated.value) return
  hasAnimated.value = true

  animateCount(8, 1400, (val) => {
    countYears.value = val
  })
  animateCount(99, 1800, (val) => {
    countProjects.value = val
  })
  animateCount(100, 2000, (val) => {
    countResponsive.value = val
  })
  animateCount(100, 2000, (val) => {
    countSatisfaction.value = val
  })
}

let observer: IntersectionObserver | null = null

onMounted(() => {
  if (typeof IntersectionObserver !== 'undefined' && sectionRef.value) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounting()
            if (observer && sectionRef.value) {
              observer.unobserve(sectionRef.value)
            }
          }
        })
      },
      { threshold: 0.25 }
    )
    observer.observe(sectionRef.value)
  } else {
    startCounting()
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<template>
  <section
    id="about"
    ref="sectionRef"
    class="relative py-20 lg:py-26 overflow-hidden"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div class="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        <!-- Left Side -->
        <div class="w-full lg:w-2/5 flex flex-col justify-center items-start space-y-6">
          <!-- Badge -->
          <div
            class="inline-flex items-center px-3.5 py-1.5 rounded-full bg-slate-800 border border-white/10 text-violet-500 text-xs font-semibold tracking-wider uppercase"
          >
            About Me
          </div>

          <!-- Title -->
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Turning ideas into intuitive digital experiences.
          </h2>

          <!-- Description -->
          <p class="text-slate-400 text-base leading-relaxed">
            With over 8 years of experience in web design and frontend development, I specialize in crafting responsive, user-friendly interfaces that combine thoughtful design with clean, maintainable code.
          </p>

          <!-- Action Button: Learn About Me (GitHub Profile) -->
          <div class="pt-2">
            <a
              href="https://github.com/iamtara24"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium text-sm sm:text-base border border-white/20 hover:bg-white/5 hover:border-white/40 active:scale-95 transition-all duration-200"
            >
              <span>Learn About Me</span>
              <LucideUser class="w-4 h-4 text-white" />
            </a>
          </div>
        </div>

        <!-- Right Side -->
        <div class="w-full lg:w-3/6 flex flex-col gap-8 lg:gap-10">
          <!-- Row 1 -->
          <div class="flex flex-col sm:flex-row items-start sm:items-center gap-8 lg:gap-10">
            <!-- 1. Years Experience -->
            <div class="flex items-center gap-4 flex-1">
              <div
                class="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-violet-400 shrink-0 shadow-inner"
              >
                <LucideBriefcase class="w-6 h-6" />
              </div>
              <div class="flex flex-col">
                <span class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  {{ countYears }}+
                </span>
                <span class="text-sm sm:text-base text-slate-400 font-medium">
                  Years Experience
                </span>
              </div>
            </div>

            <!-- 2. Project Completed -->
            <div class="flex items-center gap-4 flex-1">
              <div
                class="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-violet-400 shrink-0 shadow-inner"
              >
                <LucideFolderCheck class="w-6 h-6" />
              </div>
              <div class="flex flex-col">
                <span class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  {{ countProjects }}+
                </span>
                <span class="text-sm sm:text-base text-slate-400 font-medium">
                  Project Completed
                </span>
              </div>
            </div>
          </div>

          <!-- Row 2 -->
          <div class="flex flex-col sm:flex-row items-start sm:items-center gap-8 lg:gap-10">
            <!-- 3. Responsive Design -->
            <div class="flex items-center gap-4 flex-1">
              <div
                class="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-violet-400 shrink-0 shadow-inner"
              >
                <LucideMonitorSmartphone class="w-6 h-6" />
              </div>
              <div class="flex flex-col">
                <span class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  {{ countResponsive }}%
                </span>
                <span class="text-sm sm:text-base text-slate-400 font-medium">
                  Responsive Design
                </span>
              </div>
            </div>

            <!-- 4. Client Satisfaction -->
            <div class="flex items-center gap-4 flex-1">
              <div
                class="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-violet-400 shrink-0 shadow-inner"
              >
                <LucideSmile class="w-6 h-6" />
              </div>
              <div class="flex flex-col">
                <span class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  {{ countSatisfaction }}%
                </span>
                <span class="text-sm sm:text-base text-slate-400 font-medium">
                  Client Satisfaction
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
