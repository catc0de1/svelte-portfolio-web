<script lang="ts">
  import { certificates } from '@/data/certificates.data';
  import type { Certificate } from '@/data/certificates.data';

  interface Props {
    isVisible?: boolean;
  }

  let { isVisible = false }: Props = $props();

  let images: Certificate[] = $state(certificates);

  let currentIndex = $state(0);
  let appear = $state(false);

  function goToSlide(index: number) {
    currentIndex = index;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
  }

  $effect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  });

  $effect(() => {
    if (isVisible) {
      appear = true;
    } else {
      // Reset when out of view so animation runs again
      appear = false;
    }
  });
</script>

<div
  class="flex flex-col items-center relative w-full mx-auto
  transform transition duration-700 ease-out {appear
    ? 'opacity-100 translate-y-0 lg:translate-x-0'
    : 'translate-y-20 lg:translate-y-0 opacity-0 lg:translate-x-20'}"
>
  <div class="relative w-full aspect-video flex items-center justify-center overflow-hidden rounded-lg">
    {#each images as image, index}
      <div
        class="absolute inset-0 flex items-center justify-center overflow-hidden transition-opacity duration-500 {index ===
        currentIndex
          ? 'opacity-100 z-10'
          : 'opacity-0 z-0'}"
      >
        <img
          src={image.src}
          alt={image.alt}
          class="w-auto h-full object-contain border-4 border-(--border-color)"
          loading="lazy"
        />
      </div>
    {/each}
  </div>

  <div class="mt-6 flex gap-3">
    {#each images as _, index}
      <button
        onclick={() => goToSlide(index)}
        class="w-4 h-4 rounded-full duration-500 transition-all cursor-pointer {index ===
        currentIndex
          ? 'bg-(--primary-color)'
          : 'bg-(--border-color)'}"
        aria-label="Go to slide {index + 1}"
      ></button>
    {/each}
  </div>
</div>
