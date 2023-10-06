import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { STLLoader } from 'three-stl-loader';

function ThreeDModel() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  let model: THREE.Mesh | null = null;

  useEffect(() => {
    // Initialize Three.js
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    if (containerRef.current) {
      containerRef.current.appendChild(renderer.domElement);
    }

    // Load the .STL model
    const loader = new STLLoader();
    loader.load('model.stl', (geometry) => {
      const material = new THREE.MeshPhongMaterial({ color: 0xaaaaaa, specular: 0x111111, shininess: 200 });
      model = new THREE.Mesh(geometry, material);
      scene.add(model);
    });

    // Set camera position
    camera.position.z = 5;

    // Create an animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the model (optional)
      if (model) {
        model.rotation.x += 0.01;
        model.rotation.y += 0.01;
      }

      if (renderer) {
        renderer.render(scene, camera);
      }
    };

    animate();
  }, []);

  return <div ref={containerRef} />;
}

export default ThreeDModel;
