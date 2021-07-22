import React, { useState } from "react"

export default function SpeechButton({ label, filename }) {
  const play = () => {
    let sound = document.getElementById(filename) as HTMLAudioElement

    sound.pause()
    sound.currentTime = 0
    sound.play()
  }

  return (
    <>
      <button
        className="text-xl text-center px-4 py-2 rounded bg-red-500 m-4"
        onClick={play}
      >
        {label}
      </button>
      <audio id={filename} preload="metadata">
        <source src={`/sounds/${filename}.mp3`} type="audio/mpeg" />
      </audio>
    </>
  )
}
