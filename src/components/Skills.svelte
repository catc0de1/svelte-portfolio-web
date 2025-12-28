<script lang="ts">
  import SkillCard from "./partials/SkillCard.svelte";
  import { skillCategories } from "$data/skills.data";
  import TitleSection from "./partials/TitleSection.svelte";
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
    {#each skillCategories as category, index}
      <SkillCard 
        title={category.title} 
        skills={category.skills} 
        delayIndex={index}
      />
    {/each}
  </div>
</section>
