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
  let isModalOpen = $state(false);
  let modalImageIndex = $state(0);

  function goToSlide(index: number) {
    currentIndex = index;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
  }

  function openModal(index: number) {
    modalImageIndex = index;
    isModalOpen = true;
    document.body.style.overflow = 'hidden';
    document.body.classList.add('modal-open');
  }

  function closeModal() {
    isModalOpen = false;
    document.body.style.overflow = '';
    document.body.classList.remove('modal-open');
  }

  function nextModalImage() {
    modalImageIndex = (modalImageIndex + 1) % images.length;
  }

  function prevModalImage() {
    modalImageIndex = (modalImageIndex - 1 + images.length) % images.length;
  }

  function handleKeydown(e: KeyboardEvent) {
    if (!isModalOpen) return;
    if (e.key === 'ArrowRight') nextModalImage();
    if (e.key === 'ArrowLeft') prevModalImage();
    if (e.key === 'Escape') closeModal();
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

<svelte:window onkeydown={handleKeydown} />

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
        <button
          onclick={() => openModal(index)}
          class="w-full h-full flex items-center justify-center cursor-zoom-in"
          aria-label="Zoom image"
        >
          <img
            src={image.src}
            alt={image.alt}
            class="w-auto h-full object-contain border-4 border-(--border-color)"
            loading="lazy"
          />
        </button>
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

<!-- Modal -->
{#if isModalOpen}
  <div
    class="fixed inset-0 z-100 flex items-center justify-center bg-black/90 backdrop-blur-sm pointer-events-auto outline-none"
    onclick={closeModal}
    onkeydown={(e) => { if (e.key === 'Enter' || e.key === ' ') closeModal(); }}
    role="dialog"
    aria-modal="true"
    tabindex="-1"
  >
    <button
      onclick={(e) => { e.stopPropagation(); closeModal(); }}
      class="absolute top-4 right-5 text-white text-4xl hover:text-red-500 transition-colors cursor-pointer z-50"
      aria-label="Close modal"
    >
      &times;
    </button>

    <!-- Previous button -->
    <button
      onclick={(e) => { e.stopPropagation(); prevModalImage(); }}
      class="absolute left-0 md:left-4 text-white text-5xl hover:text-(--primary-color) transition-colors cursor-pointer p-2"
      aria-label="Previous image"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>

    <!-- Image -->
    <button
      class="max-w-[80vw] xl:max-w-[60vw] max-h-auto flex items-center justify-center p-0 border-0 bg-transparent cursor-default"
      onclick={(e) => e.stopPropagation()}
      aria-label="Certificate image"
      disabled
    >
      <img
        src={images[modalImageIndex].src}
        alt={images[modalImageIndex].alt}
        class="max-w-full max-h-full object-contain rounded-lg"
        role="presentation"
      />
    </button>

    <!-- Next button -->
    <button
      onclick={(e) => { e.stopPropagation(); nextModalImage(); }}
      class="absolute right-0 md:right-4 text-white text-5xl hover:text-(--primary-color) transition-colors cursor-pointer p-2"
      aria-label="Next image"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>

    <!-- Image counter -->
    <div class="absolute bottom-4 text-white text-sm">
      {modalImageIndex + 1} / {images.length}
    </div>
  </div>
{/if}

<style>
  :global(.modal-open #backToTop) {
    filter: blur(5px);
    pointer-events: none;
  }
</style>