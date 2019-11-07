import Konva from 'konva'
import { Stage, Layer, Star, Image } from 'react-konva'
import React, { useEffect, useState } from 'react'
import useImage from 'use-image'
import { Slider } from 'office-ui-fabric-react'

interface IState {
  positionX: number
  positionY: number
  width: number
  height: number
}

const LionImage = ({ ...props }) => {
  const [image] = useImage(props.url)
  return <Image {...props} image={image} />
}

const Home = () => {
  const [state, setstate] = useState<IState>({
    width: 0,
    height: 0,
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
      <Slider
        label='resize the logo'
        showValue={false}
        onChange={(value: number) => {
          console.log(value)
          setstate({ ...state, width: value })
        }}
      />
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
            style={{ width: state.width * 10, height: state.height * 10 }}
            x={266}
            y={134}
            width={100}
            height={100}
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
