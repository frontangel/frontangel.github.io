<script setup lang="ts">
const CALENDLY = 'https://calendly.com/frontangel/45min'
const { t } = useI18n()

useSeoMeta({
  title: () => `FrontAngel — ${t('hero.title')} ${t('hero.titleAccent')}`.replace(',', ''),
  description: () => t('hero.sub'),
  ogTitle: () => `FrontAngel — ${t('hero.eyebrow')}`,
  ogDescription: () => t('hero.sub'),
  ogImage: 'https://frontangel.dev/og.png',
  twitterCard: 'summary_large_image',
})

const chips = computed(() => [
  { icon: 'lucide:zap', label: t('hero.speed') },
  { icon: 'lucide:puzzle', label: t('hero.custom') },
  { icon: 'lucide:workflow', label: t('hero.automation') },
])

const pillars = computed(() => [
  { accent: true, icon: 'lucide:zap', title: t('pillars.speedT'), text: t('pillars.speedD') },
  { accent: false, icon: 'lucide:puzzle', title: t('pillars.customT'), text: t('pillars.customD') },
  { accent: false, icon: 'lucide:workflow', title: t('pillars.autoT'), text: t('pillars.autoD') },
])

const trust = ['ЛікоХолдинг', 'Solar-Tech', 'Most', 'FastKava', 'Теплодар', 'Cosmotrade', 'AlfaPack', 'Bestpresso', 'Мітрапак', 'Decotec', 'InHome Praha', 'Memento Digital']

const services = computed(() => [
  { icon: 'lucide:rocket', title: t('services.mvpT'), text: t('services.mvpD') },
  { icon: 'lucide:sparkles', title: t('services.aiT'), text: t('services.aiD') },
  { icon: 'lucide:workflow', title: t('services.autoT'), text: t('services.autoD') },
  { icon: 'lucide:layout-dashboard', title: t('services.webT'), text: t('services.webD') },
  { icon: 'lucide:layers', title: t('services.fullstackT'), text: t('services.fullstackD') },
  { icon: 'lucide:smartphone', title: t('services.mobileT'), text: t('services.mobileD') },
])

const process = computed(() => [
  { num: '01', title: t('process.briefT'), text: t('process.briefD') },
  { num: '02', title: t('process.protoT'), text: t('process.protoD') },
  { num: '03', title: t('process.devT'), text: t('process.devD') },
  { num: '04', title: t('process.launchT'), text: t('process.launchD') },
])

const products = computed(() => [
  { name: 'Leadbox', live: true, img: '/leadbox-screen.png', text: t('products.leadbox') },
  { name: 'Tcounter', live: true, img: '/tcounter-screen.png', text: t('products.tcounter') },
  { name: 'Revita', live: false, img: '/revita-full.png', text: t('products.revita') },
])

const cases = computed(() => [
  { tag: t('cases.c1Tag'), problem: t('cases.c1P'), solution: t('cases.c1S'), value: t('cases.c1V'), label: t('cases.c1L') },
  { tag: t('cases.c2Tag'), problem: t('cases.c2P'), solution: t('cases.c2S'), value: t('cases.c2V'), label: t('cases.c2L') },
  { tag: t('cases.c3Tag'), problem: t('cases.c3P'), solution: t('cases.c3S'), value: t('cases.c3V'), label: t('cases.c3L') },
])

const posts = computed(() => [
  { icon: 'lucide:newspaper', tag: t('journal.tagNews'), date: '08.05', title: t('journal.p1T'), excerpt: t('journal.p1E') },
  { icon: 'lucide:briefcase', tag: t('journal.tagCase'), date: '02.05', title: t('journal.p2T'), excerpt: t('journal.p2E') },
  { icon: 'lucide:wrench', tag: t('journal.tagTool'), date: '28.04', title: t('journal.p3T'), excerpt: t('journal.p3E') },
])

const faqs = computed(() => [
  { q: t('faq.q1'), a: t('faq.a1') },
  { q: t('faq.q2'), a: t('faq.a2') },
  { q: t('faq.q3'), a: t('faq.a3') },
  { q: t('faq.q4'), a: t('faq.a4') },
  { q: t('faq.q5'), a: t('faq.a5') },
])
const openFaq = ref(0)
const localePath = useLocalePath()
</script>

<template>
  <!-- HERO -->
  <section class="mx-auto max-w-[1280px] px-5 py-16 lg:px-20 lg:py-24">
    <div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
      <div>
        <p class="flex items-center gap-2 font-mono text-xs tracking-widest text-accent">
          <span class="inline-block h-1.5 w-1.5 rounded-full bg-accent" />{{ $t('hero.eyebrow') }}
        </p>
        <h1 class="mt-5 font-heading text-5xl leading-none lg:text-6xl">
          {{ $t('hero.title') }} <span class="text-accent">{{ $t('hero.titleAccent') }}</span>
        </h1>
        <div class="mt-6 flex items-center gap-3.5">
          <span class="h-6 w-[3px] rounded bg-accent" />
          <span class="text-[17px] font-semibold">{{ $t('hero.hook') }}</span>
        </div>
        <p class="mt-6 max-w-xl text-[17px] leading-relaxed text-secondary">{{ $t('hero.sub') }}</p>
        <div class="mt-7 flex flex-wrap items-center gap-6">
          <span v-for="c in chips" :key="c.label" class="flex items-center gap-2 text-[15px]">
            <Icon :name="c.icon" size="17" class="text-accent" />{{ c.label }}
          </span>
        </div>
        <div class="mt-8 flex flex-wrap items-center gap-3.5">
          <a :href="CALENDLY" target="_blank" rel="noopener" class="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-semibold text-accent-ink transition-transform hover:-translate-y-0.5">
            {{ $t('common.book') }}<Icon name="lucide:arrow-right" size="18" />
          </a>
          <a :href="`${localePath('/')}#cases`.replace('//', '/')" class="inline-flex items-center rounded-full border border-line px-7 py-3.5 font-medium text-fg transition-colors hover:bg-surface">{{ $t('hero.viewCases') }}</a>
        </div>
      </div>

      <div class="lg:pl-6">
        <div class="overflow-hidden rounded-[26px] border border-line bg-surface shadow-2xl shadow-black/40">
          <div class="flex items-center justify-between border-b border-line px-4 py-3">
            <div class="flex items-center gap-2">
              <span class="h-2 w-2 rounded-full bg-accent" />
              <span class="font-mono text-[11px] text-muted">{{ $t('widget.panel') }}</span>
            </div>
            <span class="flex items-center gap-1.5 rounded-full bg-accent-soft px-2.5 py-1">
              <span class="h-1.5 w-1.5 rounded-full bg-accent" />
              <span class="font-mono text-[10px] font-semibold text-accent">LIVE</span>
            </span>
          </div>
          <div class="space-y-3 bg-base p-3.5">
            <div class="rounded-[18px] bg-accent px-4 py-4 text-accent-ink">
              <p class="font-mono text-[10px] tracking-wider opacity-70">{{ $t('widget.mvpLabel') }}</p>
              <p class="mt-1 font-heading text-4xl leading-none">{{ $t('widget.mvpValue') }}</p>
              <p class="mt-1.5 text-sm opacity-80">{{ $t('widget.mvpSub') }}</p>
            </div>
            <div class="rounded-[18px] bg-surface-2 p-3.5">
              <p class="font-mono text-[10px] tracking-wider text-muted">{{ $t('widget.autoLabel') }}</p>
              <div class="mt-3 flex items-center justify-between">
                <span class="flex items-center gap-1.5 rounded-full border border-line bg-base px-2.5 py-1.5 text-[11px]"><Icon name="lucide:database" size="14" />CRM</span>
                <Icon name="lucide:arrow-right" size="15" class="text-muted" />
                <span class="flex items-center gap-1.5 rounded-full border border-accent bg-accent px-2.5 py-1.5 text-[11px] text-accent-ink"><Icon name="lucide:workflow" size="14" />n8n</span>
                <Icon name="lucide:arrow-right" size="15" class="text-muted" />
                <span class="flex items-center gap-1.5 rounded-full border border-line bg-base px-2.5 py-1.5 text-[11px]"><Icon name="lucide:circle-check-big" size="14" />{{ $t('widget.done') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- PILLARS -->
  <section class="mx-auto max-w-[1280px] px-5 py-20 lg:px-20">
    <p class="flex items-center gap-2 font-mono text-xs tracking-widest text-accent"><span class="inline-block h-1.5 w-1.5 rounded-full bg-accent" />{{ $t('pillars.eyebrow') }}</p>
    <div class="mt-7 grid gap-5 md:grid-cols-3">
      <div v-for="p in pillars" :key="p.title" class="rounded-[26px] p-8" :class="p.accent ? 'bg-accent text-on-light' : 'border border-line bg-surface'">
        <div class="grid place-items-center rounded-[12px]" :class="p.accent ? 'bg-black/10' : 'bg-accent-soft'" style="height: 52px; width: 52px">
          <Icon :name="p.icon" size="26" :class="p.accent ? 'text-accent-ink' : 'text-accent'" />
        </div>
        <h3 class="mt-4 font-heading text-2xl">{{ p.title }}</h3>
        <p class="mt-2 text-[15px] leading-relaxed" :class="p.accent ? 'opacity-80' : 'text-secondary'">{{ p.text }}</p>
      </div>
    </div>
  </section>

  <!-- TRUST -->
  <section class="bg-surface py-16">
    <div class="mx-auto max-w-[1280px] px-5 text-center lg:px-20">
      <p class="text-[17px] text-secondary">{{ $t('trust.caption') }}</p>
      <div class="mt-6 flex flex-wrap justify-center gap-3">
        <span v-for="x in trust" :key="x" class="rounded-[12px] border border-line bg-base px-4 py-2.5 font-mono text-sm text-muted">{{ x }}</span>
        <span class="rounded-full border border-line-accent bg-accent-soft px-4 py-2.5 font-mono text-sm text-accent">{{ $t('trust.more') }}</span>
      </div>
    </div>
  </section>

  <!-- SERVICES -->
  <section id="services" class="mx-auto max-w-[1280px] scroll-mt-20 px-5 py-20 lg:px-20">
    <p class="flex items-center gap-2 font-mono text-xs tracking-widest text-accent"><span class="inline-block h-1.5 w-1.5 rounded-full bg-accent" />{{ $t('services.eyebrow') }}</p>
    <h2 class="mt-3 font-heading text-4xl">{{ $t('services.heading') }}</h2>
    <div class="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <div v-for="s in services" :key="s.title" class="rounded-[26px] border border-line bg-surface p-7">
        <div class="grid place-items-center rounded-[12px] bg-accent-soft" style="height: 48px; width: 48px"><Icon :name="s.icon" size="24" class="text-accent" /></div>
        <h3 class="mt-3.5 font-heading text-xl">{{ s.title }}</h3>
        <p class="mt-2 text-sm leading-relaxed text-secondary">{{ s.text }}</p>
      </div>
    </div>
  </section>

  <!-- PROCESS -->
  <section id="process" class="bg-surface scroll-mt-20 py-20">
    <div class="mx-auto max-w-[1280px] px-5 lg:px-20">
      <p class="flex items-center gap-2 font-mono text-xs tracking-widest text-accent"><span class="inline-block h-1.5 w-1.5 rounded-full bg-accent" />{{ $t('process.eyebrow') }}</p>
      <h2 class="mt-3 font-heading text-4xl">{{ $t('process.heading') }}</h2>
      <div class="mt-9 grid gap-x-5 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
        <div v-for="st in process" :key="st.num">
          <div class="grid place-items-center rounded-full border border-line-accent bg-accent-soft font-mono text-[15px] text-accent" style="height: 44px; width: 44px">{{ st.num }}</div>
          <h3 class="mt-3 font-heading text-xl">{{ st.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-secondary">{{ st.text }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- PRODUCTS -->
  <section id="products" class="mx-auto max-w-[1280px] scroll-mt-20 px-5 py-20 lg:px-20">
    <p class="flex items-center gap-2 font-mono text-xs tracking-widest text-accent"><span class="inline-block h-1.5 w-1.5 rounded-full bg-accent" />{{ $t('products.eyebrow') }}</p>
    <h2 class="mt-3 font-heading text-4xl">{{ $t('products.heading') }}</h2>
    <div class="mt-9 grid gap-5 md:grid-cols-3">
      <div v-for="p in products" :key="p.name" class="overflow-hidden rounded-[26px] border border-line bg-surface">
        <div class="h-52 overflow-hidden bg-surface-2">
          <img :src="p.img" :alt="p.name" class="h-full w-full object-cover object-top" />
        </div>
        <div class="p-6">
          <div class="flex items-center justify-between">
            <h3 class="font-heading text-2xl">{{ p.name }}</h3>
            <span v-if="p.live" class="flex items-center gap-1.5 rounded-full bg-accent-soft px-2.5 py-1 font-mono text-[10px] font-semibold text-accent"><span class="h-1.5 w-1.5 rounded-full bg-accent" />{{ $t('products.live') }}</span>
            <span v-else class="flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 font-mono text-[10px] text-muted"><span class="h-1.5 w-1.5 rounded-full bg-muted" />{{ $t('products.inDev') }}</span>
          </div>
          <p class="mt-2.5 text-sm leading-relaxed text-secondary">{{ p.text }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CASES -->
  <section id="cases" class="mx-auto max-w-[1280px] scroll-mt-20 px-5 py-20 lg:px-20">
    <p class="flex items-center gap-2 font-mono text-xs tracking-widest text-accent"><span class="inline-block h-1.5 w-1.5 rounded-full bg-accent" />{{ $t('cases.eyebrow') }}</p>
    <h2 class="mt-3 font-heading text-4xl">{{ $t('cases.heading') }}</h2>
    <p class="mt-3 max-w-[680px] text-sm leading-relaxed text-muted">{{ $t('cases.note') }}</p>
    <div class="mt-8 grid gap-5 md:grid-cols-3">
      <div v-for="c in cases" :key="c.tag" class="flex flex-col gap-3.5 rounded-[26px] border border-line bg-surface p-6">
        <span class="self-start rounded-full border border-line-accent bg-accent-soft px-3 py-1.5 font-mono text-[11px] tracking-wide text-accent">{{ c.tag }}</span>
        <div>
          <p class="font-mono text-[10px] tracking-wider text-muted">{{ $t('cases.problem') }}</p>
          <p class="mt-1 text-sm leading-snug text-secondary">{{ c.problem }}</p>
        </div>
        <div>
          <p class="font-mono text-[10px] tracking-wider text-accent">{{ $t('cases.solution') }}</p>
          <p class="mt-1 text-sm leading-snug">{{ c.solution }}</p>
        </div>
        <div class="mt-auto flex items-center gap-3 border-t border-line pt-3.5">
          <span class="font-heading text-3xl text-accent">{{ c.value }}</span>
          <span class="text-[13px] leading-tight text-secondary">{{ c.label }}</span>
        </div>
      </div>
    </div>
  </section>

  <!-- JOURNAL -->
  <section id="journal" class="mx-auto max-w-[1280px] scroll-mt-20 px-5 py-20 lg:px-20">
    <div class="flex flex-wrap items-end justify-between gap-6">
      <div>
        <p class="flex items-center gap-2 font-mono text-xs tracking-widest text-accent"><span class="inline-block h-1.5 w-1.5 rounded-full bg-accent" />{{ $t('journal.eyebrow') }}</p>
        <h2 class="mt-3 font-heading text-4xl">{{ $t('journal.heading') }}</h2>
        <p class="mt-3 max-w-[560px] text-base leading-relaxed text-secondary">{{ $t('journal.sub') }}</p>
      </div>
      <NuxtLink :to="localePath('/journal')" class="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-semibold transition-colors hover:bg-surface">{{ $t('journal.all') }}<Icon name="lucide:arrow-right" size="16" class="text-accent" /></NuxtLink>
    </div>
    <div class="mt-8 grid gap-5 md:grid-cols-3">
      <NuxtLink v-for="p in posts" :key="p.title" :to="localePath('/journal')" class="group flex flex-col gap-3.5 rounded-[26px] border border-line bg-surface p-6 transition-colors hover:border-line-accent">
        <div class="flex items-center justify-between">
          <span class="flex items-center gap-1.5 rounded-full bg-accent-soft px-2.5 py-1.5 font-mono text-[10px] tracking-wide text-accent"><Icon :name="p.icon" size="13" />{{ p.tag }}</span>
          <span class="font-mono text-xs text-muted">{{ p.date }}</span>
        </div>
        <h3 class="font-heading text-xl leading-tight">{{ p.title }}</h3>
        <p class="text-sm leading-relaxed text-secondary">{{ p.excerpt }}</p>
        <span class="mt-1 flex items-center gap-1.5 text-[13px] font-semibold text-accent">{{ $t('journal.read') }}<Icon name="lucide:arrow-right" size="14" /></span>
      </NuxtLink>
    </div>
  </section>

  <!-- ABOUT -->
  <section id="about" class="bg-surface scroll-mt-20 py-20">
    <div class="mx-auto max-w-[1280px] px-5 lg:px-20">
      <p class="flex items-center gap-2 font-mono text-xs tracking-widest text-accent"><span class="inline-block h-1.5 w-1.5 rounded-full bg-accent" />{{ $t('about.eyebrow') }}</p>
      <div class="mt-7 grid gap-12 rounded-[26px] border border-line bg-base p-8 lg:grid-cols-[300px_1fr] lg:gap-14 lg:p-12">
        <div>
          <img src="/frontangel-logo-circle.png" alt="Viacheslav Angel" class="h-24 w-24 rounded-full" />
          <h3 class="mt-5 font-heading text-3xl">Viacheslav Angel</h3>
          <p class="mt-1.5 font-mono text-xs leading-relaxed tracking-wide text-accent">{{ $t('about.role') }}</p>
          <div class="mt-5 flex flex-wrap gap-2.5">
            <span v-for="s in [$t('about.statYears'), $t('about.statCompanies'), $t('about.statRoles')]" :key="s" class="rounded-full border border-line bg-surface px-3.5 py-2 font-mono text-xs text-secondary">{{ s }}</span>
          </div>
        </div>
        <div class="flex flex-col justify-center gap-4">
          <p class="text-xl leading-relaxed">{{ $t('about.bio1') }}</p>
          <p class="text-base leading-relaxed text-secondary">{{ $t('about.bio2') }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section id="faq" class="mx-auto max-w-[1280px] scroll-mt-20 px-5 py-20 lg:px-20">
    <div class="grid gap-12 lg:grid-cols-[360px_1fr] lg:gap-18">
      <div>
        <p class="flex items-center gap-2 font-mono text-xs tracking-widest text-accent"><span class="inline-block h-1.5 w-1.5 rounded-full bg-accent" />{{ $t('faq.eyebrow') }}</p>
        <h2 class="mt-3 font-heading text-4xl">{{ $t('faq.heading') }}</h2>
        <p class="mt-3 text-sm leading-relaxed text-muted">{{ $t('faq.sub') }}</p>
      </div>
      <div>
        <div v-for="(f, i) in faqs" :key="f.q" class="border-b border-line py-5">
          <button class="flex w-full items-center justify-between gap-4 text-left" @click="openFaq = openFaq === i ? -1 : i">
            <span class="text-[17px] font-semibold">{{ f.q }}</span>
            <Icon :name="openFaq === i ? 'lucide:minus' : 'lucide:plus'" size="20" class="shrink-0 text-accent" />
          </button>
          <p v-if="openFaq === i" class="mt-3 text-[15px] leading-relaxed text-secondary">{{ f.a }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="mx-auto max-w-[1280px] px-5 py-20 lg:px-20">
    <div class="flex flex-col items-center rounded-[26px] bg-accent px-6 py-16 text-center text-on-light lg:py-20">
      <h2 class="font-heading text-4xl leading-tight lg:text-5xl">{{ $t('ctaBand.heading') }}</h2>
      <p class="mt-4 max-w-[600px] text-[17px] leading-relaxed opacity-80">{{ $t('ctaBand.sub') }}</p>
      <a :href="CALENDLY" target="_blank" rel="noopener" class="mt-7 inline-flex items-center gap-2 rounded-full bg-base px-7 py-4 font-semibold text-accent transition-transform hover:-translate-y-0.5">{{ $t('common.book') }}<Icon name="lucide:arrow-right" size="18" /></a>
      <a href="mailto:va@frontangel.dev" class="mt-4 font-mono text-[13px] opacity-60">{{ $t('ctaBand.or') }}</a>
    </div>
  </section>
</template>
