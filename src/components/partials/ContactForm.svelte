<script lang="ts">
  import { onMount } from 'svelte';

  let appear = $state(false);
  let formData = $state({
    user_name_sender: '',
    user_email_sender: '',
    message: '',
  });
  let isSubmitting = $state(false);
  let statusMessage = $state<{ text: string; type: 'success' | 'error' | 'disable' } | null>(null);
  let showPopup = $state(false);

  function handleChange(e: Event) {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    formData = { ...formData, [target.name]: target.value };
  }

  async function sendEmail(e: Event) {
    e.preventDefault();

    isSubmitting = true;
    statusMessage = null;

    try {
      const form = e.target as HTMLFormElement;
      const formDataNetlify = new FormData(form);

      const result = await fetch('/', {
        method: 'POST',
        body: formDataNetlify,
      });

      if (result.ok) {
        formData = { user_name_sender: '', user_email_sender: '', message: '' };
        statusMessage = { text: "Message received. I'll get back to you soon.", type: 'success' };
        showPopup = true;
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      statusMessage = { text: 'This feature has been disabled due to free-tier limitations.', type: 'disable' };
      showPopup = true;
    } finally {
      isSubmitting = false;
    }
  }

  function closePopup() {
    showPopup = false;
  }

  onMount(() => {
    const timer = setTimeout(() => {
      appear = true;
    }, 100);
    return () => clearTimeout(timer);
  });
</script>

<form
  class="flex flex-col items-center"
  name="contact"
  method="POST"
  data-netlify="true"
  data-netlify-honeypot="bot-field"
  onsubmit={sendEmail}
>
  <input type="hidden" name="form-name" value="contact" />
  <p hidden>
    <label>
      Don't fill this out: <input name="bot-field" />
    </label>
  </p>

  <div class="w-full md:w-[80%] space-y-4">
    <div class="form {appear ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-40'}">
      <label for="name" class="label">Name</label>
      <input 
        type="text" 
        id="name" 
        name="user_name_sender" 
        class="input" 
        bind:value={formData.user_name_sender} 
        oninput={handleChange}
        required 
      />
    </div>
    <div class="form {appear ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-30'}">
      <label for="email" class="label">Email</label>
      <input 
        type="email" 
        id="email" 
        name="user_email_sender" 
        class="input" 
        bind:value={formData.user_email_sender} 
        oninput={handleChange}
        required 
      />
    </div>
    <div class="form {appear ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}">
      <label for="message" class="label">Message</label>
      <textarea 
        id="message" 
        name="message" 
        class="h-32 input" 
        bind:value={formData.message} 
        oninput={handleChange}
        required 
      ></textarea>
    </div>
  </div>

  <div class="flex justify-end w-full md:w-[80%]">
    <button
      class="
        rounded-full bg-(--primary-color) font-semibold text-white 
        w-[33%] md:w-[25%] py-2 px-4 md:py-3 md:px-8
        hover:bg-(--hover-color) hover:shadow-lg transition
        active:bg-(--secondary-color) active:shadow-md disabled:opacity-50"
      type="submit"
      disabled={isSubmitting}
    >
      {isSubmitting ? 'Sending...' : 'Send'}
    </button>
  </div>
</form>

{#if showPopup && statusMessage}
  <div class="fixed inset-0 flex items-center justify-center z-50 bg-(--bg-color) backdrop-blur-md">
    <div class="bg-white rounded-lg shadow-lg p-6 w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%] flex flex-col">
      <div class="font-bold text-lg md:text-xl xl:text-2xl mb-2 {statusMessage.type === 'success' ? 'text-green-600' : 'text-red-600'}">
        {statusMessage.type === 'success' ? 'Success' : 'Failed'}
      </div>
      <div class="mb-6 md:mb-4 text-base md:text-lg xl:text-xl">
        {statusMessage.text}
        {#if statusMessage.type === 'disable'}
          <br />
          Please contact me at <a class="text-blue-600" href="mailto:iyanzuli35@gmail.com">iyanzuli35@gmail.com</a>
        {/if}
      </div>
      <button
        class="px-4 py-2 bg-(--primary-color) text-white rounded-lg hover:bg-(--hover-color) active:shadow-xl active:bg-(--secondary-color) self-end"
        onclick={closePopup}
      >
        Close
      </button>
    </div>
  </div>
{/if}

<style>
  .form {
    margin-bottom: 3%;
    width: 100%;
    transition: opacity 0.5s ease, transform 0.5s ease;
  }

  .label {
    font-weight: 600;
    color: var(--primary-color);
  }

  .input {
    color: #000;
    width: 100%;
    background-color: var(--border-color);
    border: 1px solid var(--border-color);
    border-radius: 5px;
    padding: 0.5rem;
    --tw-ring-color: var(--border-color);
  }

  .input:focus {
    border: 1px solid var(--primary-color);
    outline: none;
    --tw-ring-color: var(--primary-color);
    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }

  .opacity-0.translate-y-40 {
    opacity: 0;
    transform: translateY(40px);
  }
  .opacity-0.translate-y-30 {
    opacity: 0;
    transform: translateY(30px);
  }
  .opacity-0.translate-y-10 {
    opacity: 0;
    transform: translateY(10px);
  }
  .opacity-100.translate-y-0 {
    opacity: 1;
    transform: translateY(0);
  }
</style>
