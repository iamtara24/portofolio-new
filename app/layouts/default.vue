<template>
  <div class="min-h-screen bg-[#040A18] text-slate-100">
    <PageLoader />
    <Navbar />
    <main>
      <slot />
    </main>
    <MobileNoticeModal />
  </div>
</template>
