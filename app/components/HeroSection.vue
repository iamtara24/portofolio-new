<script setup lang="ts">
import heroImg from '~/assets/img/hero-img.png'
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
          <!-- Hero Photo (scaled down) -->
          <img
            :src="heroImg"
            alt="Anggin Megantara"
            class="w-auto max-h-[430px] sm:max-h-[470px] lg:max-h-[500px] object-contain drop-shadow-2xl relative z-10"
          />

          <!-- Floating Code Card -->
          <div
            class="lg:absolute hidden md:block top-2/3 -translate-y-1/2 left-0 -left-7 z-20 w-[85%] max-w-[270px]"
          >
            <div
              class="w-full bg-[#040A18]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl shadow-black/80 transition-transform duration-300 hover:-translate-y-1"
            >
              <!-- Card Header: </> Code and iOS/Linux window controls -->
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

        <!-- Right Side: Content Container (siap diisi sesuai arahan) -->
        <div class="flex flex-col justify-center">
          <!-- Konten hero akan ditempatkan di sini -->
        </div>
      </div>
    </div>
  </section>
</template>
