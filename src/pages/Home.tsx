import Konva from 'konva'
import { Stage, Layer, Star, Image } from 'react-konva'
import React, { useEffect, useState } from 'react'
import useImage from 'use-image'

interface IState {
  currentX: number
  currentY: number
  positionX: number
  positionY: number
  draggable?: boolean
}

const LionImage = ({ ...props }) => {
  const [image] = useImage(props.url)
  return <Image {...props} image={image} />
}

const Home = () => {
  const [count, setCount] = useState(0)
  const [state, setstate] = useState<IState>({
    currentX: 0,
    currentY: 0,
    positionX: 0,
    positionY: 0
  })

  // var pic_image = new Image()
  let clienRect: ClientRect = {
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
    height: 0,
    width: 0
  }

  const handleDragStart = (e: any) => {
    e.target.setAttrs({
      shadowOffset: {
        x: 15,
        y: 15
      },
      scaleX: 1.1,
      scaleY: 1.1
    })
  }
  const handleDragEnd = (e: any) => {
    e.target.to({
      duration: 0.5,
      easing: Konva.Easings.ElasticEaseOut,
      scaleX: 1,
      scaleY: 1,
      shadowOffsetX: 5,
      shadowOffsetY: 5
    })
  }
  return (
    <div>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <LionImage
            x={266}
            y={134}
            url='https://5.imimg.com/data5/GN/EY/MY-23225499/black-plain-t-shirt-500x500.jpg'
            shadowColor='black'
            shadowBlur={10}
            shadowOpacity={0.6}
          />

          <LionImage
            style={{ width: 100, height: 100 }}
            x={266}
            y={134}
            url='https://www.ries.com/wp-content/uploads/2017/12/Tesla-logo-2003-2500x2500-300x300.png'
            draggable
            shadowColor='black'
            shadowBlur={10}
            shadowOpacity={0.6}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          />
        </Layer>
      </Stage>
    </div>
  )
}

export default Home
