<script lang="ts">
  import { onMount } from "svelte";
  import SkillCard from "./partials/SkillCard.svelte";
  import { skillCategories } from "$data/skills.data";
  import TitleSection from "./partials/TitleSection.svelte";

  let showAllSkills = false;
  let isMobilePortrait = false;
  const MOBILE_PORTRAIT_BREAKPOINT = 768;
  const MAX_VISIBLE_SKILLS = 5;

  onMount(() => {
    const checkScreenSize = () => {
      isMobilePortrait = window.innerWidth < MOBILE_PORTRAIT_BREAKPOINT;
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  });

  $: visibleCategories = isMobilePortrait && !showAllSkills
    ? skillCategories.slice(0, MAX_VISIBLE_SKILLS)
    : skillCategories;
</script>

<section
  id="skills"
  class="flex flex-col justify-between w-full py-[10%]
  px-[10%] md:px-[8%] xl:px-[15%]
  "
>
  <TitleSection
    secondTitle="Skills"
    mainTitle="My Skills"
    extraText="I'm not at my limit"
  />
  <div
    class="flex flex-wrap justify-center text-white w-full items-stretch
    border-5 border-(--border-color) rounded-tr-4xl rounded-bl-4xl
    p-[3%] bg-(--background-color) shadow-2xl gap-6
    "
  >
    {#each visibleCategories as category, index}
      <SkillCard 
        title={category.title} 
        skills={category.skills} 
        delayIndex={index}
      />
    {/each}
    {#if isMobilePortrait && !showAllSkills && skillCategories.length > MAX_VISIBLE_SKILLS}
      <button
        on:click={() => showAllSkills = true}
        class="-mt-5 py-5 text-(--primary-color) font-semibold hover:opacity-70 transition-all"
      >
        See More
      </button>
    {/if}
    {#if isMobilePortrait && showAllSkills}
      <button
        on:click={() => showAllSkills = false}
        class="-mt-5 py-5 text-(--secondary-color) font-semibold hover:opacity-70 transition-all"
      >
        See Less
      </button>
    {/if}
  </div>
</section>
