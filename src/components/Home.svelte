<script lang="ts">
  import Navbar from './partials/Navbar.svelte';
  import TypingEffect from './partials/TypingEffect.svelte';
  import blob from '$assets/blob.svg';
  import pp from '$assets/pp.webp';
</script>

<Navbar />

<header 
  id="home" 
  class="flex-row justify-between items-center section bg-(--background-color) text-white border-b-8 border-(--border-color)"
>
  <div class="flex flex-col gap-2 md:gap-5 mt-8 lg:mt-0">
    <p class="text-lg md:text-xl lg:text-2xl xl:text-3xl mt-6 md:mt-3 lg:mt-0">
      Hi, I'm
    </p>
    <h1 class="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
      Iyan Zuli Armanda
    </h1>

    <TypingEffect />
    
    <a 
      class="text-white bg-(--primary-color) rounded-full w-fit text-xl md:text-2xl lg:text-3xl xl:text-4xl py-2 px-4 md:py-3 md:px-8 hover:bg-(--hover-color) hover:shadow-lg transition active:bg-(--secondary-color) active:shadow-md"
      href="#contact">
      Contact Me
    </a>
  </div>
  <div class="hidden md:flex fade-in">
    <div class="right flex justify-center items-center relative">
      <img src={blob} alt="" class="blob absolute w-87.5 h-auto" loading="lazy" />
      <img src={pp} alt="Iyan Zuli Armanda" class="relative h-auto w-62.5 lg:w-100 rounded-[10%]" loading="lazy" />
    </div>
  </div>
</header>

<style>
  .right img:nth-child(1) {
    top: 50%; 
    left: 50%; 
    transform: translate(-50%, -50%); 
  }
</style>
