<script setup lang="ts">
import linkedInIcon from '~/assets/img/LinkedIn.png'
import githubIcon from '~/assets/img/github.png'
import ytIcon from '~/assets/img/yt.png'

const currentYear = new Date().getFullYear()

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/anggin-megantara',
    icon: linkedInIcon,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/iamtara24',
    icon: githubIcon,
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@iamtara',
    icon: ytIcon,
  },
]
</script>

<template>
  <footer class="border-t border-white/10 bg-[#040A18] py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <!-- Left: Dynamic Copyright -->
      <p class="text-xs sm:text-sm text-slate-400 text-center sm:text-left">
        &copy; {{ currentYear }} <span class="text-white font-medium">Anggin Megantara</span>. All rights reserved.
      </p>

      <!-- Right: Social Media Links -->
      <div class="flex items-center gap-3">
        <a
          v-for="social in socialLinks"
          :key="social.name"
          :href="social.href"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="social.name"
          class="w-9 h-9 rounded-lg bg-transparent border border-white/10 flex items-center justify-center p-1.5 hover:bg-white/5 hover:border-violet-500/40 hover:scale-110 active:scale-95 transition-all duration-200 group"
        >
          <img
            :src="social.icon"
            :alt="social.name"
            class="w-full h-full object-contain transition-transform duration-200 group-hover:scale-105"
          />
        </a>
      </div>
    </div>
  </footer>
</template>
