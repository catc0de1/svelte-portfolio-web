<script lang="ts">
  import { onMount } from 'svelte';

  interface Props {
    secondTitle: string;
    mainTitle: string;
    extraText?: string;
    delayMain?: number;
    delayExtra?: number;
  }

  let {
    secondTitle,
    mainTitle,
    extraText = "",
    delayMain = 0.1,
    delayExtra = 0.3
  }: Props = $props();

  let isVisible = $state(false);
  let sectionRef: HTMLElement;

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px"
      }
    );

    if (sectionRef) {
      observer.observe(sectionRef);
    }

    return () => {
      observer.disconnect();
    };
  });
</script>

<div class="head-section" bind:this={sectionRef}>
  <h1 class="second-title" class:visible={isVisible} style="--delay: {delayMain}">
    {secondTitle}
  </h1>
  <h2 class="main-title" class:visible={isVisible} style="--delay: {delayMain + 0.1}">
    {mainTitle}
  </h2>
  {#if extraText}
    <p class="italic extra-text" class:visible={isVisible} style="--delay: {delayExtra}">
      {extraText}
    </p>
  {/if}
</div>

<style>
  .head-section {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .second-title {
    opacity: 0;
  }

  .second-title.visible {
    opacity: 1;
    transition: opacity 0.6s ease, 0.6s ease;
    transition-delay: var(--delay, 0.1s);
  }

  .main-title {
    opacity: 0;
  }

  .main-title.visible {
    opacity: 1;
    transition: opacity 0.6s ease, 0.6s ease;
    transition-delay: var(--delay, 0.2s);
  }

  .extra-text {
    opacity: 0;
  }

  .extra-text.visible {
    opacity: 1;
    transition: opacity 0.6s ease, 0.6s ease;
    transition-delay: var(--delay, 0.3s);
  }
</style>
