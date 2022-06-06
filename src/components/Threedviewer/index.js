import * as THREE from 'three'
import React from 'react'
import { Canvas } from 'react-three-fiber'
import Model from '../model'
import Controls from '../controls'
import uniforms from '../uniforms'
import useScrollBlock from '../../utils/useScrollBlock'
//import "../style.css"

uniforms.init(THREE)

const RectAreaLightDecl = ({
    color = '#696969',
    intensity = 1.5,
    width = 1000,
    height = 400,
    position = [100, 200, -700],
    lookAt = [0, 0, 0],
}) => {
    return (
        <rectAreaLight
            intensity={intensity}
            position={position}
            color={color}
            width={width}
            height={height}
            onUpdate={self => self.lookAt(...lookAt)}
        />
    )
}

export const ThreeD = (props) => {
    const [blockScroll, allowScroll] = useScrollBlock()
    const [zoomState, setZoomState] = React.useState(false)
    const [dragState, setDragState] = React.useState(false)
    const [rotateState, setRotateState] = React.useState(true)
    let intensity = 1.3
    return (
        <main>
            <Canvas
                onPointerEnter={e => {
                    blockScroll()
                    setZoomState(true)
                }}
                onPointerLeave={e => {
                    allowScroll()
                    setZoomState(false)
                }}
                onTouchStart={e => {
                    setDragState(true)
                }}
                onTouchEnd={e => {
                    setDragState(false);
                    setRotateState(false);
                }}
                onMouseUp={e => {
                    setDragState(false);
                    setRotateState(false);
                }}
                onMouseDown={e => {
                    setDragState(true)
                }}
                camera={{
                    fov: 45,
                    near: 0.1,
                    far: 5000,
                    position: [0, 0, 800],
                }}
                orthographic={false}
                style={{
                    width: '100%',
                    height: '100%',
                    aspectRatio: '1.5',
                    borderRadius: '10px',
                    touchAction: 'none',
                }}
            >
                <ambientLight color='#696969' intensity={2.5} />
                <color attach="background" args={['#eaeaea']} />
                <RectAreaLightDecl
                    intensity={intensity}
                    width={5000}
                    height={50000}
                    position={[0, 0, -12000]}
                />
                <RectAreaLightDecl
                    intensity={intensity}
                    width={5000}
                    height={50000}
                    position={[0, 12000, 0]}
                />

                <RectAreaLightDecl
                    intensity={intensity}
                    width={5000}
                    height={50000}
                    position={[-12000, 0, 0]}
                />
                <RectAreaLightDecl
                    intensity={intensity}
                    width={5000}
                    height={50000}
                    position={[12000, 0, 0]}
                />
                <Model url={props.threed} scale={props.scale} />
                <Controls
                    autoRotate={rotateState}
                    enablePan={false}
                    enableZoom={zoomState}
                    enableDamping
                    dampingFactor={1.5}
                    rotateSpeed={3.1}
                    enableRotate={dragState}

                // maxZoom={2}
                // minZoom={1}
                // maxPolarAngle={Math.PI / 3}
                // minPolarAngle={Math.PI / 3}
                />
            </Canvas>
        </main>
    )
}

export default ThreeD
