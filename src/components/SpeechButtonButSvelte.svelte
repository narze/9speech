<script>
  export let label
  export let filename

  const play = () => {
    let sound = document.getElementById(filename)

    sound.pause()
    sound.currentTime = 0
    sound.play()
  }
</script>

<button
  class="text-xl text-center px-4 py-2 rounded bg-red-500 m-4"
  on:click={play}
>
  {label}
</button>
<audio id={filename} preload="metadata">
  <source src={`/sounds/${filename}.mp3`} type="audio/mpeg" />
</audio>
