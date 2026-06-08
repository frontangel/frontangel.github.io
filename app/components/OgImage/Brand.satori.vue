<script setup lang="ts">
withDefaults(
  defineProps<{ title?: string; subtitle?: string }>(),
  {
    title: 'Нестандартні веб-продукти за дні',
    subtitle: 'MVP · AI-інтеграції · Автоматизація',
  },
)
</script>

<template>
  <div
    style="
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      height: 100%;
      background-color: #0b0b0d;
      padding: 80px;
      font-family: 'Geist';
    "
  >
    <div style="display: flex; align-items: center; gap: 20px">
      <div style="display: flex; width: 60px; height: 60px; border-radius: 999px; background-color: #ffd21e" />
      <div style="display: flex; font-family: 'Oswald'; font-size: 34px; color: #fafaf7">FrontAngel</div>
    </div>

    <div style="display: flex; flex-direction: column">
      <div style="display: flex; font-family: 'Oswald'; font-size: 78px; color: #fafaf7; line-height: 1.04">
        {{ title }}
      </div>
      <div style="display: flex; margin-top: 28px; font-size: 30px; color: #a1a1aa">{{ subtitle }}</div>
    </div>

    <div style="display: flex; justify-content: space-between; align-items: center">
      <div style="display: flex; font-family: 'Geist'; font-size: 24px; color: #ffd21e">frontangel.dev</div>
      <div style="display: flex; font-size: 22px; color: #6b6b73">Інженерна студія</div>
    </div>
  </div>
</template>
