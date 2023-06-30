import React from 'react'

import Lottie from 'react-lottie-player'
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import lottieJson from '/public/panda-animation.json'

export default function PandaAnimation() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
    />
  )
}
