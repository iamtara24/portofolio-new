<script setup lang="ts">
import heroImg from '~/assets/img/hero-img.png'
import vueLogo from '~/assets/img/techstack/Vue.svg'
import nuxtLogo from '~/assets/img/techstack/nuxt.png'
import reactLogo from '~/assets/img/techstack/React.svg'
import nextLogo from '~/assets/img/techstack/next.png'
import typescriptLogo from '~/assets/img/techstack/Typescript.svg'
import tailwindLogo from '~/assets/img/techstack/tailwind.png'
import cvPdf from '~/assets/download/CV_ATS_Anggin_Megantara_English.pdf'

const techStacks = [
  { name: 'Vue.js', icon: vueLogo },
  { name: 'Nuxt.js', icon: nuxtLogo },
  { name: 'React', icon: reactLogo },
  { name: 'Next.js', icon: nextLogo },
  { name: 'TypeScript', icon: typescriptLogo },
  { name: 'Tailwind CSS', icon: tailwindLogo },
]
</script>

<template>
  <section
    id="home"
    class="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div class="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
        <!-- Left Side: Hero Image & Floating Code Card -->
        <div class="relative flex justify-center items-center">
          <!-- Hero Photo -->
          <img
            :src="heroImg"
            alt="Anggin Megantara"
            class="animate__animated animate__fadeInLeft w-auto max-h-[430px] sm:max-h-[470px] lg:max-h-[500px] object-contain drop-shadow-2xl relative z-10"
          />

          <!-- Floating Code Card -->
          <div
            class="animate__animated animate__fadeInUp animate__delay-1s lg:absolute hidden md:block top-1/2 -translate-y-1/2 left-0 z-20 w-[85%] max-w-[270px]"
          >
            <div
              class="w-full bg-[#040A18]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl shadow-black/80 transition-transform duration-300 hover:-translate-y-1"
            >
              <!-- Card Header: Code and iOS/Linux window controls -->
              <div class="flex items-center justify-between pb-3 border-b border-white/10">
                <span class="font-mono text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                  <span class="text-purple-400 font-bold">&lt;/&gt;</span>
                  Code
                </span>
                <div class="flex items-center gap-1.5">
                  <span class="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                  <span class="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                  <span class="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                </div>
              </div>

              <!-- Card Body: JavaScript Code Snippet with Syntax Highlighting -->
              <div class="pt-3 font-mono text-[11px] sm:text-xs leading-relaxed">
                <p>
                  <span class="text-purple-400 font-semibold">const</span>
                  <span class="text-blue-300"> profile</span>
                  <span class="text-slate-400"> = {</span>
                </p>
                <p class="pl-4">
                  <span class="text-slate-300">name:</span>
                  <span class="text-emerald-400"> 'Anggin Megantara'</span><span class="text-slate-400">,</span>
                </p>
                <p class="pl-4">
                  <span class="text-slate-300">role:</span>
                  <span class="text-emerald-400"> 'Frontend Developer'</span><span class="text-slate-400">,</span>
                </p>
                <p class="pl-4">
                  <span class="text-slate-300">skills:</span>
                  <span class="text-slate-400"> [</span>
                </p>
                <p class="pl-7 text-emerald-400">
                  'Nuxt'<span class="text-slate-400">,</span> 'Vue'<span class="text-slate-400">,</span> 'Tailwind'<span class="text-slate-400">,</span> 'TypeScript'<span class="text-slate-400">,</span> 'React'<span class="text-slate-400">,</span> 'Next'
                </p>
                <p class="pl-4 text-slate-400">]</p>
                <p class="text-slate-400">}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Side: Content Container -->
        <div class="flex flex-col justify-center items-start space-y-6">
          <!-- Badge -->
          <div
            class="animate__animated animate__fadeInDown inline-flex items-center px-3.5 py-1.5 rounded-full bg-slate-800 border border-white/10 text-violet-500 text-xs font-semibold tracking-wider uppercase"
          >
            FRONTEND DEVELOPER
          </div>

          <!-- Titles -->
          <div class="animate__animated animate__fadeInRight space-y-2">
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Hi, I'm
              <span class="relative inline-block align-baseline">
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#5544D3] to-[#8A46F2]">
                  Tara
                </span>
                <span aria-hidden="true" class="text-sheen">
                  Tara
                </span>
              </span>
            </h1>
            <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-300">
              I build modern web experiences.
            </h2>
          </div>

          <!-- Description -->
          <p class="animate__animated animate__fadeInUp animate__delay-1s text-slate-400 text-base leading-relaxed max-w-xl">
            I specialize in crafting responsive, intuitive, and high-performing web interfaces using modern frontend technologies. Turning ideas into seamless digital experiences through clean code and thoughtful design.
          </p>

          <!-- Buttons -->
          <div class="animate__animated animate__fadeInUp animate__delay-1s flex flex-wrap items-center gap-4 pt-2">
            <!-- Explore Work Button  -->
            <a
              href="#project"
              class="relative overflow-hidden inline-flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium text-sm sm:text-base bg-gradient-to-r from-[#5544D3] to-[#8A46F2] border border-white/20 shadow-lg shadow-[#8A46F2]/25 active:scale-95 transition-all duration-300 group"
            >
              <span
                class="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none -skew-x-12"
              ></span>
              <span class="relative z-10">Explore Work</span>
            </a>

            <!-- Download CV Button -->
            <a
              :href="cvPdf"
              download="CV_ATS_Anggin_Megantara_English.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium text-sm sm:text-base border border-white/20 hover:bg-white/5 hover:border-white/40 active:scale-95 transition-all duration-200"
            >
              Download CV
            </a>
          </div>

          <!-- Tech Stack -->
          <div class="animate__animated animate__fadeInUp animate__delay-1s pt-4">
            <span class="block text-xs font-semibold tracking-widest uppercase text-slate-400 mb-3">
              Tech Stack
            </span>
            <div class="flex flex-wrap items-center gap-3 sm:gap-4">
              <div
                v-for="tech in techStacks"
                :key="tech.name"
                class="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#0D182E]/80 border border-white/10 p-2.5 transition-all duration-200 hover:scale-110 hover:border-white/25 hover:bg-[#0D182E]"
                :title="tech.name"
              >
                <img :src="tech.icon" :alt="tech.name" class="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.text-sheen {
  position: absolute;
  inset: 0;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  background-repeat: no-repeat;
  background-image: linear-gradient(
    115deg,
    transparent 0%,
    transparent 35%,
    rgba(255, 255, 255, 0.95) 50%,
    transparent 65%,
    transparent 100%
  );
  background-size: 200% 100%;
  animation: shine-sweep 4s ease-in-out infinite;
  pointer-events: none;
  user-select: none;
}

@keyframes shine-sweep {
  0% {
    background-position: 250% 0;
  }
  35% {
    background-position: -250% 0;
  }
  100% {
    background-position: -250% 0;
  }
}
</style>
