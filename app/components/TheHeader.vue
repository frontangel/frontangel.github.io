<script setup lang="ts">
const CALENDLY = 'https://calendly.com/frontangel/45min'
const { locale } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()

const nav = [
  { key: 'services', hash: '#services' },
  { key: 'process', hash: '#process' },
  { key: 'products', hash: '#products' },
  { key: 'cases', hash: '#cases' },
  { key: 'journal', to: '/journal' },
  { key: 'about', hash: '#about' },
  { key: 'faq', hash: '#faq' },
]
const open = ref(false)
const linkFor = (item: { hash?: string; to?: string }) =>
  item.to ? localePath(item.to) : `${localePath('/')}${item.hash}`.replace('//', '/')
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-line bg-base/85 backdrop-blur-md">
    <div class="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-5 lg:px-20">
      <NuxtLink :to="localePath('/')" class="flex items-center gap-2.5">
        <img src="/frontangel-logo-circle.png" alt="FrontAngel" class="h-8 w-8 rounded-full" />
        <span class="font-heading text-xl">FrontAngel</span>
      </NuxtLink>

      <nav class="hidden items-center gap-7 text-[15px] text-secondary lg:flex">
        <a v-for="item in nav" :key="item.key" :href="linkFor(item)" class="transition-colors hover:text-fg">
          {{ $t(`nav.${item.key}`) }}
        </a>
      </nav>

      <div class="flex items-center gap-4">
        <div class="hidden items-center gap-1.5 font-mono text-[13px] sm:flex">
          <NuxtLink :to="switchLocalePath('uk')" :class="locale === 'uk' ? 'text-accent' : 'text-muted hover:text-fg'">UA</NuxtLink>
          <span class="text-muted">/</span>
          <NuxtLink :to="switchLocalePath('en')" :class="locale === 'en' ? 'text-accent' : 'text-muted hover:text-fg'">EN</NuxtLink>
        </div>
        <a
          :href="CALENDLY"
          target="_blank"
          rel="noopener"
          class="hidden items-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-ink transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >{{ $t('common.book') }}</a
        >
        <button
          class="grid h-10 w-10 place-items-center rounded-full border border-line text-fg lg:hidden"
          aria-label="Menu"
          @click="open = !open"
        >
          <Icon :name="open ? 'lucide:x' : 'lucide:menu'" size="20" />
        </button>
      </div>
    </div>

    <Transition name="fade">
      <nav v-if="open" class="border-t border-line bg-base px-5 py-4 lg:hidden">
        <a
          v-for="item in nav"
          :key="item.key"
          :href="linkFor(item)"
          class="block py-2.5 text-secondary"
          @click="open = false"
          >{{ $t(`nav.${item.key}`) }}</a
        >
        <div class="mt-2 flex items-center gap-1.5 py-2.5 font-mono text-[13px]">
          <NuxtLink :to="switchLocalePath('uk')" :class="locale === 'uk' ? 'text-accent' : 'text-muted'">UA</NuxtLink>
          <span class="text-muted">/</span>
          <NuxtLink :to="switchLocalePath('en')" :class="locale === 'en' ? 'text-accent' : 'text-muted'">EN</NuxtLink>
        </div>
        <a
          :href="CALENDLY"
          target="_blank"
          rel="noopener"
          class="mt-1 block rounded-full bg-accent px-5 py-3 text-center text-sm font-semibold text-accent-ink"
          >{{ $t('common.book') }}</a
        >
      </nav>
    </Transition>
  </header>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
