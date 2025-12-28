<script lang="ts">
  const texts = ['Frontend Developer', 'Backend Developer', 'Fullstack Developer'];

  let displayedText = $state('');
  let textIndex = $state(0);
  let charIndex = $state(0);
  let isDeleting = $state(false);
  let isPaused = $state(false);
  let isTyping = $state(true);
  let typingSpeed = $state(80);
  let deletingSpeed = $state(40);
  let pauseTime = $state(2000);
  let timer: ReturnType<typeof setTimeout> | undefined;

    function type() {
    const currentText = texts[textIndex];

    if (isPaused) {
      // After pause, start deleting
      isPaused = false;
      isDeleting = true;
      isTyping = false;
      timer = setTimeout(type, deletingSpeed);
      return;
    }

    if (isDeleting) {
      if (charIndex > 0) {
        displayedText = currentText.substring(0, charIndex - 1);
        charIndex--;
        timer = setTimeout(type, deletingSpeed);
      } else {
        // Finished deleting, move to next text
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        isTyping = true;
        timer = setTimeout(type, typingSpeed);
      }
    } else {
      // Typing
      if (charIndex < currentText.length) {
        displayedText = currentText.substring(0, charIndex + 1);
        charIndex++;
        timer = setTimeout(type, typingSpeed);
      } else {
        // Finished typing, pause before deleting
        isPaused = true;
        isTyping = false;
        timer = setTimeout(type, pauseTime);
      }
    }
  }

  $effect(() => {
    timer = setTimeout(type, 500);
    return () => {
      if (timer) clearTimeout(timer);
    };
  });
</script>

<h2 class="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold">
  {displayedText}<span class="{isTyping ? 'cursor-static' : 'cursor-blink'}">|</span>
</h2>

<style>
  .cursor-static {
    opacity: 1;
  }

  .cursor-blink {
    animation: blink 1s step-end infinite;
  }

  @keyframes blink {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
</style>
