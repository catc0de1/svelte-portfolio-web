<script lang="ts">
  import { clientProjects } from '@/data/projects.data';

  function isImagePath(src: string): boolean {
    return src.includes('.') && (src.endsWith('.webp'));
  }
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-75 md:max-w-180 lg:max-w-250 xl:max-w-280 mx-auto w-full px-[1%]">
  {#each clientProjects as project}
    <div class="project-card rounded-xl overflow-hidden shadow-lg border border-white/10 transition-all duration-300 group hover:shadow-2xl hover:border-(--primary-color)/50 hover:-translate-y-2 h-full flex flex-col bg-linear-to-b from-white/10 to-white/5">
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
        <div class="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div class="absolute top-3 right-3 bg-(--primary-color) text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.technologies.length} techs
        </div>
        <!-- Tag Badge -->
        <div class="absolute top-3 left-3 bg-gray-600 shadow-2xl text-white text-xs px-3 py-1 rounded-full">
          {project.tag}
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
        
        <!-- Action Button -->
        <div class="flex gap-2 mt-auto flex-row justify-end items-center">
          {#if project.product}
            <a 
              href={project.product}
              target="_blank"
              rel="noopener noreferrer"
              class="w-full flex items-center justify-center gap-2 px-3 py-2 bg-(--primary-color) text-white rounded-lg text-sm font-medium hover:bg-(--hover-color) transition-all duration-300 shadow-lg shadow-(--primary-color)/30"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              View Product
            </a>
          {/if}
        </div>
      </div>
    </div>
  {/each}
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
</style>
