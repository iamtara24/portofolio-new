<script setup lang="ts">
import { ref } from 'vue'
import projectsData from '~/data/projects.json'

interface Project {
  id: number
  title: string
  description: string
  image: string
  techStack: string[]
}

const projects = projectsData as Project[]

const containerRef = ref(null)

// Configure Swiper Web Component via nuxt-swiper composable
if (projects.length > 3) {
  useSwiper(containerRef, {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    pagination: {
      clickable: true,
    },
    breakpoints: {
      640: { slidesPerView: 2, spaceBetween: 20 },
      1024: { slidesPerView: 3, spaceBetween: 24 },
    },
    injectStyles: [
      `
      .swiper-pagination {
        position: relative !important;
        bottom: auto !important;
        margin-top: 40px !important;
        display: flex !important;
        justify-content: center !important;
        align-items: center !important;
        gap: 6px !important;
      }
      .swiper-pagination-bullet {
        width: 8px !important;
        height: 8px !important;
        background-color: rgba(255, 255, 255, 0.25) !important;
        opacity: 1 !important;
        border-radius: 9999px !important;
        transition: all 0.3s ease-in-out !important;
        margin: 0 !important;
        cursor: pointer !important;
      }
      .swiper-pagination-bullet:hover {
        background-color: rgba(255, 255, 255, 0.5) !important;
      }
      .swiper-pagination-bullet-active {
        width: 24px !important;
        background: linear-gradient(to right, #5544d3, #8a46f2) !important;
      }
      `,
    ],
  })
}

// Dynamic image resolution using Vite glob import
const projectImages = import.meta.glob<string>(
  '../assets/img/proyek/*.png',
  { eager: true, import: 'default' }
)

const getProjectImage = (imageName: string) => {
  for (const path in projectImages) {
    if (path.endsWith(imageName)) {
      return projectImages[path]
    }
  }
  return ''
}
</script>

<template>
  <section
    id="project"
    class="relative pb-20 lg:pt-7 overflow-hidden"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <!-- Section Header -->
      <div class="flex flex-col items-center text-center space-y-4">
        <!-- Badge -->
        <div
          class="inline-flex items-center px-3.5 py-1.5 rounded-full bg-slate-800 border border-white/10 text-violet-500 text-xs font-semibold tracking-wider uppercase"
        >
          Featured Project
        </div>

        <!-- Main Title & Underline Accent -->
        <div class="flex flex-col items-center">
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            My Recent Work
          </h2>
          <div class="w-20 h-1 bg-gradient-to-r from-[#5544D3] to-[#8A46F2] rounded-full mt-3.5"></div>
        </div>
      </div>

      <!-- Case 1: More than 3 projects -->
      <div v-if="projects.length > 3" class="mt-12 lg:mt-16">
        <ClientOnly>
          <swiper-container
            ref="containerRef"
            :init="false"
            class="cursor-grab active:cursor-grabbing select-none w-full block"
          >
            <swiper-slide
              v-for="project in projects"
              :key="project.id"
              class="h-auto flex py-2"
            >
              <!-- Card -->
              <div
                class="w-full bg-[#0D182E]/80 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden flex flex-col h-full shadow-lg transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-[#8A46F2]/10 hover:-translate-y-1.5 group"
              >
                <!-- Full-Width Top Image -->
                <div class="relative w-full h-48 sm:h-52 overflow-hidden bg-[#040A18] border-b border-white/10 shrink-0">
                  <img
                    :src="getProjectImage(project.image)"
                    :alt="project.title"
                    class="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 pointer-events-none"
                    loading="lazy"
                  />
                </div>

                <!-- Card Body -->
                <div class="p-5 sm:p-6 flex flex-col flex-1">
                  <!-- Tech Stack Tags -->
                  <div class="flex flex-wrap items-center gap-1.5 mb-3">
                    <span
                      v-for="tech in project.techStack"
                      :key="tech"
                      class="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-violet-500/10 text-violet-400 border border-violet-500/20"
                    >
                      {{ tech }}
                    </span>
                  </div>

                  <!-- Project Title -->
                  <h3 class="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-violet-300 transition-colors mb-2">
                    {{ project.title }}
                  </h3>

                  <!-- Project Description -->
                  <p class="text-slate-400 text-sm leading-relaxed line-clamp-3">
                    {{ project.description }}
                  </p>
                </div>
              </div>
            </swiper-slide>
          </swiper-container>
        </ClientOnly>
      </div>

      <!-- Case 2: Centered static card -->
      <div
        v-else-if="projects.length === 1"
        class="mt-12 lg:mt-16 flex justify-center"
      >
        <div
          v-for="project in projects"
          :key="project.id"
          class="w-full max-w-sm sm:max-w-md"
        >
          <div
            class="bg-[#0D182E]/80 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden flex flex-col shadow-lg transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-[#8A46F2]/10 hover:-translate-y-1.5 group"
          >
            <!-- Full-Width Top Image -->
            <div class="relative w-full h-52 sm:h-60 overflow-hidden bg-[#040A18] border-b border-white/10 shrink-0">
              <img
                :src="getProjectImage(project.image)"
                :alt="project.title"
                class="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <!-- Card Body -->
            <div class="p-5 sm:p-6 flex flex-col">
              <!-- Tech Stack Tags -->
              <div class="flex flex-wrap items-center gap-1.5 mb-3">
                <span
                  v-for="tech in project.techStack"
                  :key="tech"
                  class="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-violet-500/10 text-violet-400 border border-violet-500/20"
                >
                  {{ tech }}
                </span>
              </div>

              <!-- Project Title -->
              <h3 class="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-violet-300 transition-colors mb-2">
                {{ project.title }}
              </h3>

              <!-- Project Description -->
              <p class="text-slate-400 text-sm leading-relaxed">
                {{ project.description }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Case 3: Static centered grid without slide -->
      <div
        v-else
        class="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
      >
        <div
          v-for="project in projects"
          :key="project.id"
          class="flex"
        >
          <div
            class="w-full bg-[#0D182E]/80 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden flex flex-col h-full shadow-lg transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-[#8A46F2]/10 hover:-translate-y-1.5 group"
          >
            <!-- Full-Width Top Image -->
            <div class="relative w-full h-48 sm:h-52 overflow-hidden bg-[#040A18] border-b border-white/10 shrink-0">
              <img
                :src="getProjectImage(project.image)"
                :alt="project.title"
                class="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <!-- Card Body -->
            <div class="p-5 sm:p-6 flex flex-col flex-1">
              <!-- Tech Stack Tags -->
              <div class="flex flex-wrap items-center gap-1.5 mb-3">
                <span
                  v-for="tech in project.techStack"
                  :key="tech"
                  class="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-violet-500/10 text-violet-400 border border-violet-500/20"
                >
                  {{ tech }}
                </span>
              </div>

              <!-- Project Title -->
              <h3 class="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-violet-300 transition-colors mb-2">
                {{ project.title }}
              </h3>

              <!-- Project Description -->
              <p class="text-slate-400 text-sm leading-relaxed line-clamp-3 mt-auto">
                {{ project.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
swiper-container {
  width: 100%;
}

swiper-slide {
  height: auto;
  display: flex;
}
</style>
