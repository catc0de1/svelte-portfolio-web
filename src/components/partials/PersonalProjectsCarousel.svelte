<script lang="ts">
  import { personalProjects } from '@/data/projects.data';

  let currentIndex = $state(0);
  let itemsPerView = $state(3);
  let gap = 24;
  let maxIndex = $derived(
    Math.max(0, personalProjects.length - itemsPerView)
);


  function nextSlide() {
    if (currentIndex < maxIndex) {
      currentIndex++;
    }
  }

  function prevSlide() {
    if (currentIndex > 0) {
      currentIndex--;
    }
  }

  function updateItemsPerView() {
    if (window.innerWidth < 640) {
      itemsPerView = 1;
    } else if (window.innerWidth < 1024) {
      itemsPerView = 2;
    } else {
      itemsPerView = 3;
    }

    // if (currentIndex > maxIndex) currentIndex = maxIndex;
    currentIndex = Math.min(currentIndex, maxIndex);
  }

  $effect(() => {
    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  });

  // Check if imgSrc is an actual image path
  function isImagePath(src: string): boolean {
    return src.includes('.') && (src.endsWith('.webp') || src.endsWith('.png') || src.endsWith('.jpg') || src.endsWith('.jpeg'));
  }
</script>

<!-- Carousel Wrapper -->
<div class="relative w-full max-w-75 md:max-w-180 lg:max-w-250 xl:max-w-280 mx-auto">
  <!-- Navigation buttons - outside carousel -->
  <button 
    onclick={prevSlide}
    disabled={currentIndex === 0}
    class="absolute -left-2 md:-left-10 xl:-left-15 top-1/2 -translate-y-1/2 z-20 bg-(--primary-color) text-white p-3 rounded-full disabled:opacity-30 disabled:cursor-not-allowed hover:bg-(--hover-color) hover:scale-110 transition-all duration-300 shadow-xl border border-white/10"
    aria-label="Previous"
  >
    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
    </svg>
  </button>

  <button 
    onclick={nextSlide}
    disabled={currentIndex >= maxIndex}
    class="absolute -right-2 md:-right-10 xl:-right-15  top-1/2 -translate-y-1/2 z-20 bg-(--primary-color) text-white p-3 rounded-full disabled:opacity-30 disabled:cursor-not-allowed hover:bg-(--hover-color) hover:scale-110 transition-all duration-300 shadow-xl border border-white/10"
    aria-label="Next"
  >
    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
    </svg>
  </button>

  <!-- Carousel Container -->
  <div class="pr-11.5 relative overflow-hidden rounded-2xl bg-linear-to-br from-white/5 to-white/0 border border-white/10 shadow-2xl backdrop-blur-sm py-6">
    <!-- <div 
      class="flex items-stretch transition-transform duration-500 ease-out gap-6 p-6 min-h-125"
      style="transform: translateX(-{currentIndex * (100 / itemsPerView)}%);"
    > -->
    <div
      class="carousel-track"
      style="
        --items-per-view: {itemsPerView};
        --gap: {gap}px;
        --item-width: calc((100% - (var(--gap) * (var(--items-per-view) - 1))) / var(--items-per-view));
        transform: translateX(calc(24px - {currentIndex} * (var(--item-width) + var(--gap))));
      "
    >
      {#each personalProjects as project, index}
        <div class="carousel-item flex">
          <div class="project-card rounded-xl overflow-hidden shadow-lg border border-white/10 transition-all duration-300 group hover:shadow-2xl hover:border-(--primary-color)/50 hover:-translate-y-2 h-full w-full flex flex-col bg-linear-to-b from-white/10 to-white/5">
            <!-- Image Section -->
            <div class="h-48 shrink-0 flex items-center justify-center overflow-hidden relative">
              {#if project.imgSrc && isImagePath(project.imgSrc)}
                <img 
                  src={project.imgSrc} 
                  alt={project.imgAlt}
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              {:else}
                <span class="text-white text-4xl font-bold opacity-50">{project.title.charAt(0)}</span>
              {/if}
              <!-- Overlay on hover -->
              <div class="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <!-- Badge -->
              <div class="absolute top-3 right-3 bg-(--primary-color) text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {project.technologies.length} techs
              </div>
            </div>
            
            <!-- Content Section -->
            <div class="p-5 flex flex-col grow">
              <h3 class="text-lg font-bold text-white mb-2 group-hover:text-(--primary-color) transition-colors">
                {project.title}
              </h3>
              <p class="text-gray-300 text-sm mb-4">
                {project.desc}
              </p>
              
              <!-- Technologies Icons -->
              <div class="flex flex-wrap gap-2 lg:gap-2.5 mb-4">
                {#each project.technologies as tech}
                  <div class="tech-icon-wrapper bg-[#333] p-1 lg:p-1.5 rounded-lg hover:shadow-2xl border border-[#333] hover:border-(--primary-color)" title={tech.name}>
                    <img 
                      src={tech.icon} 
                      alt={tech.name}
                      class="w-4 md:w-5 lg:w-6 h-4 md:h-5 lg:h-6 object-contain"
                    />
                  </div>
                {/each}
              </div>
              
              <!-- Action Buttons -->
              <div class="flex gap-2 mt-auto flex-row justify-end items-center">
                {#if project.product}
                  <a 
                    href={project.product}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-white/10 text-white rounded-lg text-sm font-medium hover:bg-(--primary-color) hover:text-white transition-all duration-300 border border-white/20"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Product
                  </a>
                {/if}
                <a 
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-1/2 flex items-center justify-center gap-2 px-3 py-2 bg-(--primary-color) text-white rounded-lg text-sm font-medium hover:bg-(--hover-color) hover:scale-105 transition-all duration-300 shadow-lg shadow-(--primary-color)/30"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  Repo
                </a>
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .project-card {
    background: linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02));
    display: flex;
    flex-direction: column;
    min-height: 0;
  }

  .tech-icon-wrapper {
    transition: all 0.3s ease;
  }

  .tech-icon-wrapper:hover {
    transform: scale(1.3);
  }

  .carousel-track {
    display: flex;
    gap: var(--gap);
    transition: transform 0.5s ease-out;
    /* scroll-snap-type: x mandatory; */
  }

  .carousel-item {
    flex: 0 0 var(--item-width);
    /* scroll-snap-align: center; */
  }
</style>
