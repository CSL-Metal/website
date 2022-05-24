import * as THREE from 'three'
import React from 'react'
import { Canvas, useThree } from 'react-three-fiber'
import Model from '../model'
import Controls from '../controls'
import GLTF from './f_ankraj_duz.glb'
import uniforms from '../uniforms'
import { Scene } from 'three'
import useScrollBlock from '../../utils/useScrollBlock'
//import "../style.css"

uniforms.init(THREE)

const RectAreaLightDecl = ({
    color = 'white',
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

export const ThreeD = () => {
    const [blockScroll, allowScroll] = useScrollBlock()
    const [zoomState, setZoomState] = React.useState(false)

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
                    'aspect-ratio': '1.5',
                    'border-radius': '10px',
                }}
            >
                <ambientLight intensity={0.3} />
                <color attach="background" args={['#eaeaea']} />
                <RectAreaLightDecl />
                <RectAreaLightDecl
                    intensity={1}
                    width={100}
                    height={1000}
                    position={[0, 0, 2000]}
                    color="red"
                />
                <RectAreaLightDecl
                    intensity={0.5}
                    width={500}
                    height={1000}
                    position={[0, 1000, 0]}
                />

                <RectAreaLightDecl
                    intensity={5}
                    width={1000}
                    height={100}
                    position={[-800, 0, 800]}
                />
                <Model url={GLTF} />
                <Controls
                    autoRotate
                    enablePan={false}
                    enableZoom={zoomState}
                    enableDamping
                    dampingFactor={0.5}
                    rotateSpeed={1.2}

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
