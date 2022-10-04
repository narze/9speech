<script>
  import { onMount } from "svelte";
  export let label;
  export let filename;

  let isMounted = false;
  let audioElement;
  let audioDuration = "0s";
  let isPlaying = false;
  const setIsPlaying = () => {
    isPlaying = true;
  };

  const play = () => {
    isPlaying = false;
    requestAnimationFrame(() => {
      isPlaying = true;
    });
    audioElement.pause();
    audioElement.currentTime = 0;
    audioElement.play();
  };

  onMount(() => {
    isMounted = true;
    audioDuration = audioElement.duration + "s";
    audioElement.addEventListener("ended", setIsPlaying, false);

    return () => {
      audioElement.removeEventListener("ended", setIsPlaying, false);
    };
  });
</script>

<button
  type="button"
  class="text-xl text-center px-4 py-2 rounded"
  class:is-playing={isPlaying}
  style="--duration:{audioDuration}"
  on:click={play}
>
  {label}
</button>
<audio bind:this={audioElement} preload="metadata">
  <source src={`/sounds/${filename}.mp3`} type="audio/mpeg" />
</audio>

<style>
  button {
    -webkit-tap-highlight-color: transparent;
    aspect-ratio: 1/1;
    background: linear-gradient(
      90deg,
      rgba(248, 113, 113, 1) 0%,
      rgba(248, 113, 113, 1) 50%,
      rgba(239, 68, 68, 1) 50%,
      rgba(239, 68, 68, 1) 100%
    );
    background-size: 200%;
    background-position: 100%;
    margin: 2px;
  }

  button.is-playing {
    animation: play var(--duration) linear;
  }

  @keyframes play {
    to {
      background-position: 0;
    }
  }
</style>
