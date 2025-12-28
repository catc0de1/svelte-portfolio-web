<script lang="ts">
  import { onMount } from 'svelte';
  import Home from './components/Home.svelte';
  import About from './components/About.svelte';
  import Skills from './components/Skills.svelte';
  import Projects from './components/Projects.svelte';
  import Contact from './components/Contact.svelte';
  import Footer from './components/Footer.svelte';
  import Background from './layout/Background.svelte';
  import NotFound from './layout/NotFound.svelte';

  onMount(() => {
    // Disable right-click, selection, and drag
    const disableContextMenu = (e: Event) => e.preventDefault();
    const disableSelectStart = (e: Event) => e.preventDefault();
    const disableDragStart = (e: Event) => e.preventDefault();

    document.addEventListener('contextmenu', disableContextMenu);
    document.addEventListener('selectstart', disableSelectStart);
    document.addEventListener('dragstart', disableDragStart);

    return () => {
      document.removeEventListener('contextmenu', disableContextMenu);
      document.removeEventListener('selectstart', disableSelectStart);
      document.removeEventListener('dragstart', disableDragStart);
    };
  });
</script>

<svelte:head>
  <title>Iyan Zuli Armanda - Dev</title>
  <meta name="description" content="I'm Iyan Zuli Armanda, an Informatic Engineering. Here's my personal website showcasing fullstack development, frontend development, backend development projects on many platforms." />
  <meta name="keywords" content="Fullstack Developer, Frontend Developer, Backend Developer, Web Developer, Software Engineer, Mobile Developer, Desktop Developer, Android Developer, Cross Platform Developer, React, Express, Next, NestJS, Tailwind, SQL, NoSQL, Typescript, Javascript, Rust, C++" />
  <meta name="robots" content="index" />
</svelte:head>

<Background />

<NotFound>
  <main class="text-(--text-color) text-base lg:text-lg xl:text-xl">
    <Home />
    <About />
    <Skills />
    <Projects />
    <Contact />
  </main>

  <Footer />
</NotFound>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }

  :global(body) {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    font-family: 'Lucida Sans Unicode', Helvetica, sans-serif;
    color: var(--text-color);
    font-size: 1rem;
    overflow-x: hidden;
  }

  :global(*) {
    box-sizing: border-box;
  }

  main {
    position: relative;
    z-index: 1;
  }

  :global(.fade-in) {
    opacity: 0;
    animation: fadeIn 0.7s ease-out forwards;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
