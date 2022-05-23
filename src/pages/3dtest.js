import * as THREE from 'three'
import React from 'react'
import { Canvas } from 'react-three-fiber'
import Model from '../components/model'
import Controls from '../components/controls'
import GLTF from '../components/klips.glb'
import uniforms from '../components/uniforms'
import { Scene } from 'three'
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

export default () => (
    <main>
        <Canvas
            camera={{ fov: 45, near: 0.1, far: 5000, position: [0, 0, 800] }}
            orthographic={false}
            style={{ width: '100%' }}
        >
            <ambientLight intensity={0.7} />
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
                enableZoom={true}
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
