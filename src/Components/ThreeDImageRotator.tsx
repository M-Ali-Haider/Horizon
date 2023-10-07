// src/components/ThreeDImageRotator.tsx
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeDImageRotator: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current!;

    // Create a scene
    const scene = new THREE.Scene();

    // Create a camera
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );

    // Create a WebGL renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Create a cube with your image as a texture
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load('htmlphp.webp');
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Set camera position
    camera.position.z = 2;

    // Add rotation animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the cube
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return <div ref={containerRef} style={{ width: '500px', height: '500px' }}></div>;
};

export default ThreeDImageRotator;
