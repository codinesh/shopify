import { Stage, Layer, Image as KonvaImage } from 'react-konva'
import React, { useEffect, useState, useRef } from 'react'
import useImage from 'use-image'
import { Slider } from 'office-ui-fabric-react'
import { Container } from 'react-bootstrap'
import { DefaultButton, Stack } from 'office-ui-fabric-react'

interface IState {
  positionX: number
  positionY: number
  logoWidth: number
  logoHeight: number
  zoom: number
  x: number
  y: number
}

const initialState = {
  logoWidth: 10,
  logoHeight: 10,
  positionX: 0,
  positionY: 100,
  zoom: 1,
  x: 0,
  y: 0
}

const UrlImage = ({ ...props }) => {
  const [image] = useImage(props.url)
  return <KonvaImage {...props} image={image} />
}

const Home = () => {
  const ctnr = useRef<HTMLDivElement>(null)
  const [state, setstate] = useState<IState>({ ...initialState })

  const handleDragStart = (e: any) => {
    e.target.setAttrs({
      shadowOffset: {
        x: 15,
        y: 15
      }
    })
  }

  const reset = () => {
    debugger
    //console.log(a)
    console.log(state)
    setstate({ ...state, x: 10, y: 10 })
    console.log(state)
  }

  const handleDragEnd = (e: any) => {
    e.target.to({
      duration: 0.2,
      shadowOffsetX: 5,
      shadowOffsetY: 5
    })

    //console.log(a && a.current && a.current)
  }

  useEffect(() => {
    setstate({ ...state, zoom: state.zoom })
  }, [])

  const handleWheel = (e: any) => {
    e.evt.preventDefault()
    const stage = e.target.getStage()
    const scaleBy = 1.3
    const oldScale = stage.scaleX()

    const newScale = e.evt.deltaY > 0 ? oldScale * scaleBy : oldScale / scaleBy

    stage.scale({ x: newScale, y: newScale })

    setstate({ ...state, zoom: newScale })
  }

  return (
    <Container style={{ width: '50vw', height: '50vw' }}>
      <Slider
        label='resize the logo'
        showValue={false}
        min={5}
        max={15}
        value={state.logoWidth}
        onChange={(value: number) => {
          console.log('logowidth: ' + value)
          setstate({ ...state, logoWidth: value, logoHeight: value })
        }}
      />
      <Slider
        label='zoom'
        showValue={true}
        min={1}
        max={20}
        value={state.zoom}
        onChange={(value: number) => {
          setstate({ ...state, zoom: value })
        }}
      />

      <div
        ref={ctnr}
        style={{ width: '100%', height: '90%', border: '1px solid red' }}>
        {ctnr && ctnr.current && (
          <Stage
            x={state.x}
            y={state.y}
            draggable={true}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onWheel={handleWheel}
            scaleX={state.zoom}
            scaleY={state.zoom}
            onContentDblclick={() => {
              debugger
            }}
            style={{
              border: '1px solid green',
              margin: '5px'
            }}
            width={ctnr.current.clientWidth * 0.98}
            height={ctnr.current.clientHeight * 0.98}>
            <Layer>
              <UrlImage
                url='https://5.imimg.com/data5/GN/EY/MY-23225499/black-plain-t-shirt-500x500.jpg'
                shadowColor='black'
                shadowBlur={10}
                shadowOpacity={0.6}
                width={ctnr.current.clientWidth * 0.98 * 0.95}
                height={ctnr.current.clientWidth * 0.98 * 0.95}
              />
              <UrlImage
                url='https://www.ries.com/wp-content/uploads/2017/12/Tesla-logo-2003-2500x2500-300x300.png'
                draggable
                shadowColor='black'
                shadowBlur={10}
                shadowOpacity={0.6}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                width={state.logoWidth * 10}
                height={state.logoHeight * 10}
              />
            </Layer>
          </Stage>
        )}

        <Stack horizontal>
          <DefaultButton text='Reset' allowDisabledFocus onClick={reset} />
        </Stack>
      </div>
    </Container>
  )
}

export default Home
