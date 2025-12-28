<script lang="ts">
  import ProjectsCarousel from './partials/ProjectsCarousel.svelte';
  import TitleSection from './partials/TitleSection.svelte';
</script>

<section 
  id="projects" 
  class="w-full flex px-[1%] py-[10%] flex-col justify-between gap-2 md:gap-5 bg-(--background-color) text-white border-y-8 border-(--border-color)"
>
  <TitleSection
    secondTitle="Projects"
    mainTitle="My Projects"
  />

  <h2 class="text-xl md:text-2xl lg:font-semibold max-w-75 md:max-w-180 lg:max-w-250 xl:max-w-280 w-full pl-[1%] mx-auto">Personal Projects:</h2>

  <ProjectsCarousel />

  <div class="self-center text-center">
    See more my personal projects on my
    <a href="https://github.com/catc0de1" class="text-slate-400 hover:text-(--hover-color) hover:underline active:text-(--secondary-color) transition" target="_blank">
      GitHub
    </a>
  </div>
</section>
