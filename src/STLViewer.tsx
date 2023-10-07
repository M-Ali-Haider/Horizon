// src/components/ThreeDImage.tsx
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeDImage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    const geometry = new THREE.PlaneGeometry(1, 1); // Adjust the dimensions as needed
    const material = new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load('assets/htmlpphp.webp'),
    });

    const mesh = new THREE.Mesh(geometry, material);

    scene.add(mesh);
    camera.position.z = 2;

    const animate = () => {
      requestAnimationFrame(animate);

      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    if (containerRef.current) {
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
      containerRef.current.appendChild(renderer.domElement);
    }

    animate();

    return () => {
    };
  }, []);

  return <div ref={containerRef} />;
};

export default ThreeDImage;
