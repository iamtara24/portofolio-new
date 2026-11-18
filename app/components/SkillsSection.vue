<script setup lang="ts">
import htmlIcon from '~/assets/img/techstack/html.png'
import cssIcon from '~/assets/img/techstack/CSS.png'
import jsIcon from '~/assets/img/techstack/js.png'
import tailwindIcon from '~/assets/img/techstack/tailwind.png'
import vueIcon from '~/assets/img/techstack/Vue.svg'
import nuxtIcon from '~/assets/img/techstack/nuxt.png'
import reactIcon from '~/assets/img/techstack/React.svg'
import nextIcon from '~/assets/img/techstack/next.png'
import typescriptIcon from '~/assets/img/techstack/Typescript.svg'
import gitIcon from '~/assets/img/techstack/git.png'
import figmaIcon from '~/assets/img/techstack/figma.png'
import bootstrapIcon from '~/assets/img/techstack/Bootstrap.png'
import phpIcon from '~/assets/img/techstack/php.png'

interface Skill {
  name: string
  icon: string
  rating: number
  level: 'Expert' | 'Advanced' | 'Intermediate'
}

const skills: Skill[] = [
  { name: 'HTML', icon: htmlIcon, rating: 5, level: 'Expert' },
  { name: 'CSS', icon: cssIcon, rating: 5, level: 'Expert' },
  { name: 'JavaScript', icon: jsIcon, rating: 4, level: 'Advanced' },
  { name: 'Tailwind CSS', icon: tailwindIcon, rating: 4, level: 'Advanced' },
  { name: 'Vue.js', icon: vueIcon, rating: 3, level: 'Intermediate' },
  { name: 'Nuxt.js', icon: nuxtIcon, rating: 3, level: 'Intermediate' },
  { name: 'React', icon: reactIcon, rating: 3, level: 'Intermediate' },
  { name: 'Next.js', icon: nextIcon, rating: 3, level: 'Intermediate' },
  { name: 'TypeScript', icon: typescriptIcon, rating: 3, level: 'Intermediate' },
]

const additionalTools = [
  { name: 'Git', icon: gitIcon },
  { name: 'Figma', icon: figmaIcon },
  { name: 'Bootstrap', icon: bootstrapIcon },
  { name: 'PHP', icon: phpIcon },
]

const getLevelBadgeClass = (level: Skill['level']) => {
  switch (level) {
    case 'Expert':
      return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
    case 'Advanced':
      return 'bg-violet-500/10 text-violet-400 border-violet-500/20'
    case 'Intermediate':
      return 'bg-sky-500/10 text-sky-400 border-sky-500/20'
    default:
      return 'bg-slate-800 text-slate-300 border-white/10'
  }
}
</script>

<template>
  <section
    id="skills"
    class="relative pt-20 lg:pt-26 overflow-hidden"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <!-- Section Header -->
      <div class="flex flex-col items-center text-center space-y-4">
        <!-- Badge -->
        <div
          class="inline-flex items-center px-3.5 py-1.5 rounded-full bg-slate-800 border border-white/10 text-violet-500 text-xs font-semibold tracking-wider uppercase"
        >
          My skills
        </div>

        <!-- Main Title -->
        <div class="flex flex-col items-center">
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Technologies I Work With
          </h2>
          <div class="w-20 h-1 bg-gradient-to-r from-[#5544D3] to-[#8A46F2] rounded-full mt-3.5"></div>
        </div>
      </div>

      <!-- Skills Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mt-12 lg:mt-16">
        <div
          v-for="skill in skills"
          :key="skill.name"
          class="flex items-center justify-between py-2 transition-all duration-300 group"
        >
          <!-- Left -->
          <div class="flex items-center gap-3.5 sm:gap-4 min-w-0">
            <!-- Icon -->
            <div class="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center shrink-0">
              <img
                :src="skill.icon"
                :alt="skill.name"
                class="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            <!-- Title & Dynamic Stars -->
            <div class="flex flex-col justify-center min-w-0">
              <h3 class="text-base sm:text-lg font-bold text-white tracking-tight truncate">
                {{ skill.name }}
              </h3>

              <!-- 5 Dynamic Stars -->
              <div class="flex items-center gap-1 mt-1">
                <LucideStar
                  v-for="i in 5"
                  :key="i"
                  :class="[
                    'w-3.5 h-3.5',
                    i <= skill.rating
                      ? 'fill-amber-400 text-amber-400'
                      : 'fill-slate-700/60 text-slate-700'
                  ]"
                />
              </div>
            </div>
          </div>

          <!-- Level Badge -->
          <span
            :class="[
              'inline-flex items-center px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold tracking-wide border shrink-0 ml-3',
              getLevelBadgeClass(skill.level)
            ]"
          >
            {{ skill.level }}
          </span>
        </div>
      </div>

      <!-- Additional Tools & Technologies -->
      <div class="pt-8 sm:pt-14 border-t border-white/10 flex flex-col md:flex-row items-center gap-6 sm:gap-8 lg:gap-10">
        <span class="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-400 shrink-0">
          Additional Tools & Technologies
        </span>

        <div class="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
          <div
            v-for="tool in additionalTools"
            :key="tool.name"
            class="flex items-center gap-2.5 transition-all duration-200 group"
          >
            <div class="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center shrink-0">
              <img
                :src="tool.icon"
                :alt="tool.name"
                class="w-full h-full object-contain transition-transform duration-200 group-hover:scale-110"
              />
            </div>
            <span class="text-xs sm:text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
              {{ tool.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
