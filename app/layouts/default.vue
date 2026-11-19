<template>
  <div class="min-h-screen bg-[#040A18] text-slate-100 flex flex-col justify-between">
    <PageLoader />
    <Navbar />
    <main class="flex-1">
      <slot />
    </main>
    <Footer />
    <MobileNoticeModal />
  </div>
</template>
