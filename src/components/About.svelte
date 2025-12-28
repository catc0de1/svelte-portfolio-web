<script lang="ts">
  import CertifCarousel from './partials/CertifCarousel.svelte';
  import { onMount } from 'svelte';

  let isVisible = false;
  let sectionRef: HTMLElement;

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible = true;
          } else {
            // Reset when out of view so animation runs again
            isVisible = false;
          }
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

<section 
  id="about" 
  bind:this={sectionRef}
  class="section flex-col-reverse gap-7 lg:flex-row lg:justify-around lg:items-center"
>
  <div class="basis-[40%]" class:animate={isVisible}>
    <CertifCarousel {isVisible} />
  </div>
  <div class="basis-[50%]">
    <h1 class="second-title" class:animate={isVisible} style="--delay: 0.1s">
      About Me
    </h1>
    <h2 class="main-title" class:animate={isVisible} style="--delay: 0.2s">
      I'm a Software Engineer
    </h2>
    <div class="text-block" class:animate={isVisible} style="--delay: 0.3s">
      <p class="text-justify para-animate" style="--delay: 0.4s">
        As a flexible fullstack developer, I excel in frontend, backend, and fullstack roles to create innovative, high-performance app solutions. With continuous learning and problem-solving, I strive to build impactful digital experiences.
      </p>
      <p class="mt-2 text-justify para-animate" style="--delay: 0.55s">
        I'm passionate about web app development, desktop app development, mobile app development, low level app, game development, cryptography and also cybersecurity.
      </p>
    </div>
  </div>
</section>

<style>
  .second-title {
    opacity: 0;
    transform: translateX(-30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }

  .second-title.animate {
    opacity: 1;
    transform: translateX(0);
    transition-delay: var(--delay);
  }

  .main-title {
    opacity: 0;
    transform: translateX(-30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }

  .main-title.animate {
    opacity: 1;
    transform: translateX(0);
    transition-delay: var(--delay);
  }

  .text-block {
    opacity: 0;
    transform: translateX(-30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }

  .text-block.animate {
    opacity: 1;
    transform: translateX(0);
    transition-delay: var(--delay);
  }

  .para-animate {
    opacity: 0;
    transform: translateX(-20px);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }

  :global(.text-block.animate) .para-animate {
    opacity: 1;
    transform: translateX(0);
    transition-delay: var(--delay);
  }
</style>
