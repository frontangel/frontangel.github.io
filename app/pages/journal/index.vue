<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: () => `${t('journal.pageTitle')} — ${t('journal.pageEyebrow')}`,
  description: () => t('journal.pageSub'),
  ogTitle: () => `${t('journal.pageTitle')} FrontAngel`,
  ogDescription: () => t('journal.pageSub'),
  ogImage: 'https://frontangel.dev/og-journal.png',
})

const filters = computed(() => [
  { k: 'all', label: t('journal.fAll') },
  { k: 'cases', label: t('journal.fCases') },
  { k: 'tools', label: t('journal.fTools') },
  { k: 'news', label: t('journal.fNews') },
  { k: 'features', label: t('journal.fFeatures') },
])
const active = ref('all')

const posts = computed(() => [
  { icon: 'lucide:newspaper', tag: t('journal.tagNews'), cat: 'news', date: '08.05', title: t('journal.p1T'), excerpt: t('journal.p1E') },
  { icon: 'lucide:briefcase', tag: t('journal.tagCase'), cat: 'cases', date: '02.05', title: t('journal.p2T'), excerpt: t('journal.p2E') },
  { icon: 'lucide:wrench', tag: t('journal.tagTool'), cat: 'tools', date: '28.04', title: t('journal.p3T'), excerpt: t('journal.p3E') },
  { icon: 'lucide:sparkles', tag: t('journal.tagFeature'), cat: 'features', date: '24.04', title: t('journal.p4T'), excerpt: t('journal.p4E') },
  { icon: 'lucide:newspaper', tag: t('journal.tagNews'), cat: 'news', date: '19.04', title: t('journal.p5T'), excerpt: t('journal.p5E') },
  { icon: 'lucide:briefcase', tag: t('journal.tagCase'), cat: 'cases', date: '12.04', title: t('journal.p6T'), excerpt: t('journal.p6E') },
])

const visible = computed(() => (active.value === 'all' ? posts.value : posts.value.filter((p) => p.cat === active.value)))
</script>

<template>
  <section class="mx-auto max-w-[1280px] px-5 pb-24 pt-16 lg:px-20">
    <p class="flex items-center gap-2 font-mono text-xs tracking-widest text-accent">
      <span class="inline-block h-1.5 w-1.5 rounded-full bg-accent" />{{ $t('journal.pageEyebrow') }}
    </p>
    <h1 class="mt-3 font-heading text-5xl leading-none">{{ $t('journal.pageTitle') }}</h1>
    <p class="mt-4 max-w-[700px] text-[17px] leading-relaxed text-secondary">{{ $t('journal.pageSub') }}</p>

    <div class="mt-8 flex flex-wrap gap-2.5">
      <button
        v-for="f in filters"
        :key="f.k"
        class="rounded-full px-4 py-2.5 text-sm font-medium transition-colors"
        :class="active === f.k ? 'bg-accent font-semibold text-accent-ink' : 'border border-line bg-surface text-secondary hover:text-fg'"
        @click="active = f.k"
      >
        {{ f.label }}
      </button>
    </div>

    <div class="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <article
        v-for="p in visible"
        :key="p.title"
        class="group flex flex-col gap-3.5 rounded-[26px] border border-line bg-surface p-6 transition-colors hover:border-line-accent"
      >
        <div class="flex items-center justify-between">
          <span class="flex items-center gap-1.5 rounded-full bg-accent-soft px-2.5 py-1.5 font-mono text-[10px] tracking-wide text-accent">
            <Icon :name="p.icon" size="13" />{{ p.tag }}
          </span>
          <span class="font-mono text-xs text-muted">{{ p.date }}</span>
        </div>
        <h2 class="font-heading text-xl leading-tight">{{ p.title }}</h2>
        <p class="text-sm leading-relaxed text-secondary">{{ p.excerpt }}</p>
        <span class="mt-1 flex items-center gap-1.5 text-[13px] font-semibold text-accent">{{ $t('journal.read') }}<Icon name="lucide:arrow-right" size="14" /></span>
      </article>
    </div>
  </section>
</template>
