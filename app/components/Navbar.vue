<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import logoLight from '~/assets/img/logo.png'
import logoDark from '~/assets/img/logo-dark.png'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Project', href: '#project' },
  { name: 'Contact', href: '#contact' },
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
      isScrolled
        ? 'py-3.5 bg-[#040A18]/80 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/30'
        : 'py-5 bg-transparent'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
      <a
        href="#home"
        :class="[
          'flex items-center group transition-all duration-200 hover:opacity-90',
          isMobileMenuOpen ? 'opacity-0 md:opacity-100 pointer-events-none md:pointer-events-auto' : 'opacity-100'
        ]"
      >
        <img
          :src="isScrolled ? logoDark : logoLight"
          alt="Anggin Megantara Logo"
          class="h-9 w-auto object-contain transition-all duration-300"
        />
      </a>

      <nav class="hidden md:flex items-center gap-8">
        <a
          v-for="link in navLinks"
          :key="link.name"
          :href="link.href"
          class="relative py-1 text-sm lg:text-base font-medium text-slate-300 hover:text-white transition-colors duration-200 group"
        >
          <span>{{ link.name }}</span>
          <span
            class="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#5544D3] to-[#8A46F2] scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"
          ></span>
        </a>
      </nav>

      <div class="hidden md:flex items-center">
        <a
          href="https://www.linkedin.com/in/anggin-megantara"
          target="_blank"
          rel="noopener noreferrer"
          class="relative overflow-hidden inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-white font-medium text-sm lg:text-base bg-gradient-to-r from-[#5544D3] to-[#8A46F2] border border-white/20 shadow-lg shadow-[#8A46F2]/25 active:scale-95 transition-all duration-300 group"
        >
          <span
            class="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none -skew-x-12"
          ></span>

          <span class="relative z-10">Lets Talk</span>
          <LucideSquareArrowOutUpRight class="w-4 h-4 text-white relative z-10 shrink-0" />
        </a>
      </div>

      <button
        type="button"
        class="md:hidden flex items-center justify-center p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors focus:outline-none"
        aria-label="Toggle navigation menu"
        @click="toggleMobileMenu"
      >
        <svg
          v-if="!isMobileMenuOpen"
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
        <svg
          v-else
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Drawer Sidebar -->
    <Teleport to="body">
      <transition
        enter-active-class="transition-opacity duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-300 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="isMobileMenuOpen"
          class="fixed inset-0 bg-black/60 z-40 md:hidden"
          @click="closeMobileMenu"
        ></div>
      </transition>

      <!-- Sidebar Drawer -->
      <transition
        enter-active-class="transition-transform duration-300 ease-out"
        enter-from-class="-translate-x-full"
        enter-to-class="translate-x-0"
        leave-active-class="transition-transform duration-300 ease-in"
        leave-from-class="translate-x-0"
        leave-to-class="-translate-x-full"
      >
        <div
          v-if="isMobileMenuOpen"
          class="fixed inset-y-0 left-0 w-[80%] max-w-sm h-full bg-[#040A18] border-r border-white/10 shadow-2xl z-40 md:hidden flex flex-col justify-between p-6"
        >
          <div>
            <div class="flex items-center pb-6 border-b border-white/10">
              <img
                :src="logoLight"
                alt="Anggin Megantara Logo"
                class="h-9 w-auto object-contain"
              />
            </div>

            <!-- Navigation Links -->
            <nav class="flex flex-col space-y-4 mt-6">
              <a
                v-for="link in navLinks"
                :key="link.name"
                :href="link.href"
                class="text-lg font-medium text-slate-300 hover:text-white py-1 transition-colors"
                @click="closeMobileMenu"
              >
                {{ link.name }}
              </a>
            </nav>
          </div>

          <!-- Action Button inside drawer -->
          <div class="pt-6 border-t border-white/10">
            <a
              href="https://www.linkedin.com/in/anggin-megantara"
              target="_blank"
              rel="noopener noreferrer"
              class="relative overflow-hidden flex items-center justify-center gap-2 w-full text-center py-3 rounded-lg text-white font-medium text-sm bg-gradient-to-r from-[#5544D3] to-[#8A46F2] border border-white/20 shadow-lg shadow-[#8A46F2]/25 transition-all group"
              @click="closeMobileMenu"
            >
              <span
                class="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none -skew-x-12"
              ></span>

              <span class="relative z-10">Lets Talk</span>
              <LucideSquareArrowOutUpRight class="w-4 h-4 text-white relative z-10 shrink-0" />
            </a>
          </div>
        </div>
      </transition>
    </Teleport>
  </header>
</template>
