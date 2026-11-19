<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)
const errorMessage = ref('')

const handleSubmit = async () => {
  isSubmitting.value = true
  errorMessage.value = ''

  try {
    const response = await fetch('https://formsubmit.co/ajax/angginjogjamedia@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: form.value.name,
        email: form.value.email,
        subject: form.value.subject || 'Portfolio Inquiry',
        message: form.value.message,
        _template: 'table',
        _captcha: 'false',
      }),
    })

    const data = await response.json()

    if (response.ok && (data.success === 'true' || data.success === true)) {
      isSubmitted.value = true
      form.value = {
        name: '',
        email: '',
        subject: '',
        message: '',
      }
    } else {
      errorMessage.value = data.message || 'Something went wrong. Please try again or email directly to angginjogjamedia@gmail.com.'
    }
  } catch (error) {
    errorMessage.value = 'Network error occurred. Please try again later.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section
    id="contact"
    class="relative pb-20 lg:pb-26 lg:pt-7 overflow-hidden"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <!-- Section Header -->
      <div class="flex flex-col items-center text-center space-y-4">
        <!-- Badge -->
        <div
          class="inline-flex items-center px-3.5 py-1.5 rounded-full bg-slate-800 border border-white/10 text-violet-500 text-xs font-semibold tracking-wider uppercase"
        >
          Contact
        </div>

        <!-- Main Title -->
        <div class="flex flex-col items-center">
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Get In Touch
          </h2>
          <div class="w-20 h-1 bg-gradient-to-r from-[#5544D3] to-[#8A46F2] rounded-full mt-3.5"></div>
        </div>

        <!-- Subtitle -->
        <p class="text-slate-400 text-sm sm:text-base max-w-xl mx-auto pt-1 leading-relaxed">
          Have an exciting project, freelance inquiry, or just want to say hi? Feel free to drop a message below!
        </p>
      </div>

      <!-- Centered Form Card -->
      <div class="mt-12 lg:mt-16 max-w-2xl mx-auto">
        <div
          class="bg-[#0D182E]/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden"
        >
          <!-- Subtle Glow Accent at top right corner -->
          <div
            class="absolute -top-24 -right-24 w-48 h-48 bg-violet-600/10 rounded-full blur-3xl pointer-events-none"
          ></div>

          <!-- Success Alert View -->
          <div
            v-if="isSubmitted"
            class="py-10 flex flex-col items-center text-center space-y-4"
          >
            <div class="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <LucideCheckCircle2 class="w-8 h-8" />
            </div>
            <h3 class="text-xl sm:text-2xl font-bold text-white">
              Thank You! Message Sent
            </h3>
            <p class="text-slate-400 text-sm sm:text-base max-w-md leading-relaxed">
              Your message has been sent successfully. I will get back to you as soon as possible.
            </p>
            <button
              type="button"
              class="mt-4 px-6 py-2.5 rounded-xl border border-white/15 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all"
              @click="isSubmitted = false"
            >
              Send Another Message
            </button>
          </div>

          <!-- Form View -->
          <form
            v-else
            class="space-y-6 relative z-10"
            @submit.prevent="handleSubmit"
          >
            <!-- Error Banner -->
            <div
              v-if="errorMessage"
              class="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs sm:text-sm flex items-center gap-2"
            >
              <LucideAlertCircle class="w-4 h-4 shrink-0" />
              <span>{{ errorMessage }}</span>
            </div>

            <!-- Two-column inputs on tablet/desktop -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <!-- Name -->
              <div>
                <label
                  for="name"
                  class="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                >
                  Your Name <span class="text-violet-400">*</span>
                </label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  required
                  placeholder="John Doe"
                  class="w-full bg-[#040A18]/80 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-violet-500/80 focus:ring-1 focus:ring-violet-500 transition-all text-sm sm:text-base"
                />
              </div>

              <!-- Email -->
              <div>
                <label
                  for="email"
                  class="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                >
                  Your Email <span class="text-violet-400">*</span>
                </label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="johndoe@example.com"
                  class="w-full bg-[#040A18]/80 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-violet-500/80 focus:ring-1 focus:ring-violet-500 transition-all text-sm sm:text-base"
                />
              </div>
            </div>

            <!-- Subject -->
            <div>
              <label
                for="subject"
                class="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
              >
                Subject
              </label>
              <input
                id="subject"
                v-model="form.subject"
                type="text"
                placeholder="Project Discussion / Collaboration"
                class="w-full bg-[#040A18]/80 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-violet-500/80 focus:ring-1 focus:ring-violet-500 transition-all text-sm sm:text-base"
              />
            </div>

            <!-- Message -->
            <div>
              <label
                for="message"
                class="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
              >
                Message <span class="text-violet-400">*</span>
              </label>
              <textarea
                id="message"
                v-model="form.message"
                required
                rows="5"
                placeholder="Write your message here..."
                class="w-full bg-[#040A18]/80 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-violet-500/80 focus:ring-1 focus:ring-violet-500 transition-all text-sm sm:text-base resize-none"
              ></textarea>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full relative overflow-hidden inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-white font-medium text-sm sm:text-base bg-gradient-to-r from-[#5544D3] to-[#8A46F2] border border-white/20 shadow-lg shadow-[#8A46F2]/25 hover:opacity-95 active:scale-[0.99] transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              <span
                class="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none -skew-x-12"
              ></span>

              <span v-if="isSubmitting" class="flex items-center gap-2 relative z-10">
                <LucideLoader2 class="w-4 h-4 animate-spin" />
                Sending Message...
              </span>
              <span v-else class="flex items-center gap-2 relative z-10">
                <span>Send Message</span>
                <LucideSend class="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
