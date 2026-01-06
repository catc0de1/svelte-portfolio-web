<script lang="ts">
  import { onMount } from 'svelte';
  import { experiences } from '@/data/experience.data';

  let isVisible = false;
  let sectionRef: HTMLElement;
  let overviewOpacity = 1;
  let isLgScreen = false;

  onMount(() => {
    // Check screen size
    const checkScreenSize = () => {
      isLgScreen = window.innerWidth <= 900;
    };
    checkScreenSize();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible = true;
          } else {
            isVisible = false;
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    if (sectionRef) {
      observer.observe(sectionRef);
    }

    // Scroll listener untuk fade out section kiri (hanya di lg screen)
    const handleScroll = () => {
      if (!sectionRef || !isLgScreen) {
        overviewOpacity = 1;
        return;
      }
      
      const sectionRect = sectionRef.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const sectionHeight = sectionRect.height;
      const windowHeight = window.innerHeight;
      
      // Fade starts when section top is above 30% of viewport
      const fadeStartPoint = windowHeight * 0.3;
      
      if (sectionTop < fadeStartPoint) {
        const scrollPast = fadeStartPoint - sectionTop;
        // Mulai turunkan opacity setelah 400px scroll
        if (window.innerWidth <= 450) {
          if (scrollPast > 250) {
            const fadeProgress = (scrollPast - 250) / 200; // 600px untuk fade penuh
            overviewOpacity = Math.max(0, 1 - fadeProgress);
          }
        } else if (window.innerWidth <= 900) {
          if (scrollPast > 300) {
            const fadeProgress = (scrollPast - 300) / 200; // 600px untuk fade penuh
            overviewOpacity = Math.max(0, 1 - fadeProgress);
          }
        }
      } else {
        overviewOpacity = 1;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', () => {
      checkScreenSize();
      handleScroll();
    });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkScreenSize);
    };
  });

  function formatDuration(months: number): string {
    if (months >= 12) {
      const years = Math.floor(months / 12);
      const remainingMonths = months % 12;
      if (remainingMonths === 0) {
        return `${years} year${years > 1 ? 's' : ''}`;
      }
      return `${years} year${years > 1 ? 's' : ''} ${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`;
    }
    return `${months} month${months > 1 ? 's' : ''}`;
  }
</script>

<section 
  id="experiences" 
  bind:this={sectionRef}
  class="section flex-col lg:flex-row gap-10 lg:gap-16 items-start"
>
  <div 
    class="w-full lg:w-[40%] sticky top-24 lg:top-28 shrink-0 overview-section lg:transition-all lg:duration-100 lg:ease-linear"
    style={isLgScreen ? `opacity: ${overviewOpacity}` : ''}
  >
    <h2 class="second-title">
      Experiences
    </h2>
    <h1 class="main-title pb-4">
      My Journey
    </h1>
    <p class="text-gray-600 leading-relaxed mb-6 text-justify">
      With years of experience in fullstack development, I have worked on diverse projects ranging from enterprise applications to innovative startups. My journey has equipped me with expertise in modern web technologies and a deep understanding of software development lifecycle.
    </p>
    
  </div>

  <div class="w-full lg:w-[60%] shrink-0">
    <div class="lg:relative lg:pl-10 lg:pr-2 pl-8 pr-2 relative">
      <div class="absolute left-2.25 lg:left-[10.5px] top-0 bottom-0 w-0.5 bg-linear-to-b from-(--primary-color) to-(--secondary-color) rounded-full"></div>
      
      {#each experiences as exp, index}
        <div class="relative mb-6 pl-0 lg:pl-0">
          <div class="absolute left-7.75 lg:left-[-36.5px] top-0 z-10">
            <div class="w-4 h-4 bg-(--background-color) border-2 border-(--primary-color) rounded-full shadow-[0_0_0_3px_var(--bg-color)] transition-transform duration-300"></div>
          </div>
          
          <div 
            class="ml-0 lg:ml-1 transition-all duration-600 ease-out"
            class:opacity-0={!isVisible && isLgScreen}
            class:opacity-100={isVisible || !isLgScreen}
            class:translate-x-0={isVisible}
            class:translate-x-[-30px]={!isVisible}
            style="transition-delay: {0.2 + (index * 0.2)}s"
          >
            <div class="bg-white rounded-lg p-4 border border-(--border-color) transition-all duration-300 hover:translate-x-2 hover:shadow-md">
              <div class="flex flex-wrap items-center gap-2 mb-2">
                <span class="px-2.5 py-0.5 bg-(--primary-color) text-white text-xs font-semibold rounded-full">
                  {exp.yearPeriod}
                </span>
                <span class="px-2.5 py-0.5 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                  {formatDuration(exp.monthPeriod)}
                </span>
              </div>
              
              <div class="flex flex-wrap items-center gap-1 mb-2">
                <h3 class="text-base font-bold text-(--text-color)">
                  {exp.title}
                </h3>
                <span class="px-2 py-0.5 bg-(--secondary-color)/10 font-medium text-(--secondary-color) text-xs rounded-full border border-(--secondary-color)/20">
                  {exp.jobType}
                </span>
              </div>
              <h4 class="text-sm font-semibold text-(--primary-color) mb-2 hover:underline">
                <a href={exp.companyUrl} target="_blank" rel="noopener">
                  {exp.company}
                </a>
              </h4>
              <p class="text-xs text-gray-500 mb-2 flex items-center gap-1">
                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="#EE0000">
                  <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/>
                </svg>
                {exp.location}
              </p>
              
              <ul class="text-gray-600 text-sm leading-relaxed mb-3 list-disc ps-5 space-y-1 marker:text-(--primary-color)">
                {#each exp.description as desc}
                  <li class="pl-1">{desc}</li>
                {/each}
              </ul>
              
              <div class="flex flex-wrap gap-1.5">
                {#each exp.technologies as tech}
                  <span class="px-2 py-0.5 bg-(--primary-color)/10 text-(--primary-color) text-xs font-medium rounded border border-(--primary-color)/20 transition-all duration-200 hover:bg-(--primary-color) hover:text-white">
                    {tech}
                  </span>
                {/each}
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .overview-section h2 {
    animation: fadeInUp 0.6s ease forwards;
  }

  .overview-section h1 {
    animation: fadeInUp 0.6s ease 0.1s forwards;
    opacity: 0;
  }

  .overview-section p {
    animation: fadeInUp 0.6s ease 0.2s forwards;
    opacity: 0;
  }

  @keyframes fadeInUp {
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
