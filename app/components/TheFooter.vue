<script setup lang="ts">
const { locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const socials = [
  { icon: 'simple-icons:upwork', href: 'https://www.upwork.com/freelancers/~012559193e1e06db8e' },
  { icon: 'lucide:linkedin', href: 'https://www.linkedin.com/in/frontangel' },
  { icon: 'lucide:mail', href: 'mailto:va@frontangel.dev' },
]
</script>

<template>
  <footer class="border-t border-line bg-base">
    <div class="mx-auto max-w-[1280px] px-5 py-14 lg:px-20">
      <div class="flex flex-col justify-between gap-10 md:flex-row">
        <div class="max-w-[440px]">
          <div class="flex items-center gap-2.5">
            <img src="/frontangel-logo-circle.png" alt="FrontAngel" class="h-8 w-8 rounded-full" />
            <span class="font-heading text-xl">FrontAngel</span>
          </div>
          <p class="mt-4 text-sm leading-relaxed text-muted">{{ $t('footer.tagline') }}</p>
          <div class="mt-4 flex items-center gap-4">
            <a
              v-for="s in socials"
              :key="s.icon"
              :href="s.href"
              target="_blank"
              rel="noopener"
              class="text-secondary transition-colors hover:text-fg"
            >
              <Icon :name="s.icon" size="20" />
            </a>
          </div>
        </div>

        <div class="flex flex-col items-start gap-2.5 md:items-end">
          <a href="mailto:va@frontangel.dev" class="font-mono text-sm text-fg">va@frontangel.dev</a>
          <div class="flex items-center gap-1.5 font-mono text-[13px]">
            <NuxtLink :to="switchLocalePath('uk')" :class="locale === 'uk' ? 'text-accent' : 'text-muted'">UA</NuxtLink>
            <span class="text-muted">/</span>
            <NuxtLink :to="switchLocalePath('en')" :class="locale === 'en' ? 'text-accent' : 'text-muted'">EN</NuxtLink>
          </div>
        </div>
      </div>

      <div
        class="mt-8 flex flex-col gap-3 border-t border-line pt-5 font-mono text-xs text-muted sm:flex-row sm:items-center sm:justify-between"
      >
        <span>{{ $t('footer.copy') }}</span>
        <span>Vue · Nuxt · React · Nest · n8n · AI/LLM · CI/CD</span>
      </div>
    </div>
  </footer>
</template>
