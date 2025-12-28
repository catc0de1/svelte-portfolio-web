<script lang="ts">
  import { onMount } from 'svelte';

  interface Props {
    title: string;
    skills: Array<{ name: string; icon: string }>;
    delayIndex?: number;
  }

  let {
    title,
    skills,
    delayIndex = 0
  }: Props = $props();

  let isVisible = $state(false);
  let hasAnimated = $state(false);
  let cardRef: HTMLElement;

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible = true;
            setTimeout(() => {
              hasAnimated = true;
            }, 1000);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    if (cardRef) {
      observer.observe(cardRef);
    }

    return () => {
      observer.disconnect();
    };
  });
</script>

<div class="skills-card" bind:this={cardRef} class:visible={isVisible || hasAnimated} style="--delay-index: {delayIndex}">
  <h3 class="skills-title">{title}</h3>
  <div class="skills-info">
    {#each skills as skill, skillIndex}
      <div class="skill" class:visible={isVisible || hasAnimated} style="--skill-delay: {skillIndex}">
        <div class="logo">
          {#if skill.icon}
            <img src={skill.icon} alt={skill.name} />
          {:else}
            <div class="placeholder-icon">
              <span class="placeholder-text">{skill.name.charAt(0)}</span>
            </div>
          {/if}
        </div>
        <span class="skill-name">{skill.name}</span>
      </div>
    {/each}
  </div>
</div>

<style>
  .skills-card {
    background: linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02));
    border: 2px solid rgba(255,255,255,0.1);
    border-radius: 12px;
    padding: 1rem;
    width: 100%;
    min-width: 250px;
    max-width: 250px;
    flex: 1 1 200px;
    
    /* Animation states */
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.5s ease, transform 0.5s ease;
    transition-delay: calc(var(--delay-index, 0) * 0.15s + 0.3s);
    
    /* Hover transitions with no delay */
    transition: transform 0.3s ease 0s, box-shadow 0.3s ease 0s, border-color 0.3s ease 0s, opacity 0.5s ease, transform 0.5s ease;
  }

  .skills-card.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .skills-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0,0,0,0.3);
    border-color: var(--primary-color);
    transition: transform 0.3s ease 0s, box-shadow 0.3s ease 0s, border-color 0.3s ease 0s;
  }

  .skills-title {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid var(--border-color);
  }

  .skills-info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .skill {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.5rem 0.75rem;
    border-radius: 8px;
    background: rgba(255,255,255,0.03);
    transition: all 0.3s ease;
    
    /* Staggered skill animation */
    opacity: 0;
    transform: translateX(-20px);
    transition: opacity 0.4s ease, transform 0.4s ease;
    transition-delay: calc(var(--skill-delay, 0) * 0.08s + 0.6s);
  }

  .skill.visible {
    opacity: 1;
    transform: translateX(0);
  }

  .skill:hover {
    background: rgba(255,255,255,0.08);
    padding-left: 1rem;
  }

  .logo {
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .logo img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .placeholder-icon {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, var(--border-color), rgba(255,255,255,0.2));
    border-radius: 4px;
  }

  .placeholder-text {
    font-size: 0.75rem;
    font-weight: 700;
  }

  .skill-name {
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 0.02em;
  }
</style>
