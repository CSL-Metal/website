import * as THREE from 'three'
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function Model(props) {
    const [scene, set] = React.useState()

    React.useMemo(
        () =>
            new GLTFLoader().load(props.url, gltf => {
                gltf.scene.traverse(obj => {
                    if (obj.type === 'Mesh') {
                        obj.material.dispose()
                        obj.material = new THREE.MeshPhysicalMaterial({
                            roughness: 0.4,
                            clearCoat: 5,
                            clearCoatRoughness: 0.3,
                            color: obj.material.color,
                        })

                        obj.geometry.center()
                        obj.scale.set(props.scale, props.scale, props.scale)
                    }
                })

                set(gltf.scene)
            }),
        [props.url]
    )

    return scene ? <primitive object={scene} /> : null
}

export default Model
