import { useRef } from "react"
import { Button } from "../Button/Button"

export const Player = ({ source }) => {
    
    const playerRef = useRef();

    const play = () => playerRef.current.play();
    
    const pause = () => playerRef.current.pause();

  return (
      <div>
          <video ref={playerRef} src={source}>
              Sorry, you browser does not support embedded  videos.
          </video>
          <Button handleClick={play}>Play</Button>
          <Button handleClick={pause}>Pause</Button>
      </div>
  )
}
