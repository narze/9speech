<script>
  export let data

  const play = () => {
    const index = Math.floor(Math.random() * data.length);
    const randomButtonFilename = data[index].filename;

    let sound = document.getElementById(randomButtonFilename)

    sound.pause()
    sound.currentTime = 0
    sound.play()
  }
</script>

<button
  class="text-xl text-center px-4 py-2 rounded bg-red-500 m-4"
  on:click={play}
>
  🎲 Random
</button>
