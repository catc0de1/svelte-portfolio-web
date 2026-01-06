<script lang="ts">
  import { onMount } from 'svelte';

  let isOpen = $state(false);
  let isScrolled = $state(false);

  function handleScroll() {
    isScrolled = window.scrollY > 10;
  }

  function closeMenu() {
    isOpen = false;
  }

  function toggleMenu() {
    isOpen = !isOpen;
  }

  onMount(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

<nav id="navbar" class="fixed w-full z-100 bg-(--bg-color) backdrop-blur-xs text-white py-3 md:py-5 transition-all duration-500 {isScrolled ? 'shadow-lg' : ''}">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-around items-center">
      <a href="/" class="text-(--primary-color) font-black text-xl md:text-2xl lg:text-3xl">
        Iyan Zuli A
      </a>
      <div class="hidden md:flex gap-6 xl:gap-12">
        <a href="#home" id="navHome" class="navbar">Home</a>
        <a href="#about" id="navAbout" class="navbar">About</a>
        <a href="#skills" id="navSkills" class="navbar">Skills</a>
        <a href="#projects" id="navProjects" class="navbar">Projects</a>
        <a href="#experiences" id="navExperiences" class="navbar">Experiences</a>
        <a href="#contact" id="navContact" class="navbar">Contact</a>
      </div>
      <div class="md:hidden">
        <button onclick={toggleMenu} class="p-2 rounded-md text-white hover:text-(--border-color)">
          {#if isOpen}
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 md:w-8 h-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          {:else}
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 md:w-8 h-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          {/if}
        </button>
      </div>
    </div>
  </div>
  {#if isOpen}
    <div class="md:hidden p-4 flex flex-col items-center gap-4 w-full">
      <span>
        <a href="#home" class="font-semibold navbar" onclick={closeMenu}>Home</a>
      </span>
      <span>
        <a href="#about" class="font-semibold navbar" onclick={closeMenu}>About</a>
      </span>
      <span>
        <a href="#skills" class="font-semibold navbar" onclick={closeMenu}>Skills</a>
      </span>
      <span>
        <a href="#projects" class="font-semibold navbar" onclick={closeMenu}>Projects</a>
      </span>
      <span>
        <a href="#experiences" class="font-semibold navbar" onclick={closeMenu}>Experiences</a>
      </span>
      <span>
        <a href="#contact" class="font-semibold navbar" onclick={closeMenu}>Contact</a>        
      </span>
    </div>
  {/if}
</nav>

<style>
  .navbar {
    color: white;
    transform: color;
    transition: 0.3s
  }

  .navbar:hover {
    color: var(--primary-color);
  }
</style>