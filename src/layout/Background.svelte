<script lang="ts">
  import backgroundSvg from '$assets/background.svg';
</script>

<img id="background" src={backgroundSvg} alt="" fetchpriority="high" />

<style>
  #background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    filter: blur(100px);
    object-fit: cover;
  }
</style>
