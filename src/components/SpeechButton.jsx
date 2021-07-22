import React, { useState } from "react"

export default function SpeechButton() {
  const play = () => {
    alert("play")
  }
  return (
    <button
      className="text-xl text-center px-4 py-2 rounded bg-red-500"
      onClick={play}
    >
      สวัสดีครับ
    </button>
  )
}
