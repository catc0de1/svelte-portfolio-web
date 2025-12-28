<script lang="ts">
  import { onMount, type Snippet } from 'svelte';

  let currentPath = '/';
  let isNotFound = $state(false);
  let { children }: { children?: Snippet } = $props();

  function checkRoute() {
    const hash = window.location.hash.slice(1);
    
    if (hash) {
      currentPath = '/';
      isNotFound = false;
    } else {
      currentPath = window.location.pathname.replace(/^\/+|\/+$/g, '').toLowerCase() || '/';
      isNotFound = currentPath !== '/';
    }
  }

  $effect(() => {
    document.title = isNotFound ? '404 - Page Not Found' : 'Iyan Zuli Armanda - Dev';
  });

  onMount(() => {
    checkRoute();
    window.addEventListener('hashchange', checkRoute);
    window.addEventListener('popstate', checkRoute);
    
    return () => {
      window.removeEventListener('hashchange', checkRoute);
      window.removeEventListener('popstate', checkRoute);
    };
  });

  function goHome() {
    window.location.hash = '';
    window.location.pathname = '/';
  }
</script>

{#if isNotFound}
  <div class="not-found-container">
    <div class="content">
      <div class="error-code">
        4<span class="highlight">0</span>4
      </div>
      <div class="message">
        Page Not Found!
      </div>
      <p class="description">
        Web nya cuma ada satu halaman doang . . .
      </p>
      <button class="home-button" onclick={goHome}>
        Back
      </button>
    </div>
  </div>
{:else}
  {@render children?.()}
{/if}

<style>
  .not-found-container {
    position: fixed;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #1c1c1c;
    color: white;
  }

  .content {
    text-align: center;
    padding: 2rem;
  }

  .error-code {
    font-size: 8rem;
    font-weight: 900;
    line-height: 1;
    margin-bottom: 1rem;
  }

  .highlight {
    color: var(--primary-color);
  }

  .message {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--border-color);
    margin-bottom: 1rem;
  }

  .description {
    color: var(--border-color);
    max-width: 400px;
    margin: 0 auto 2rem;
    line-height: 1.6;
  }

  .home-button {
    background: var(--primary-color);
    color: white;
    border: none;
    padding: 0.75rem 2rem;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: transform 0.2s, opacity 0.2s;
  }

  .home-button:hover {
    transform: scale(1.05);
    opacity: 0.9;
  }

  @media (min-width: 768px) {
    .error-code {
      font-size: 10rem;
    }

    .message {
      font-size: 2.5rem;
    }

    .description {
      font-size: 1.25rem;
    }
  }
</style>
