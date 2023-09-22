'use client'
import { useEffect } from "react";
import * as THREE from "three";

const ThreeCube = () => {
    useEffect(() => {
        let renderer, scene, camera, cube, light;

        try {
            // Initialize Scene, Camera, and Renderer
            renderer = new THREE.WebGLRenderer();
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.shadowMap.enabled = true; // Enable Shadow

            scene = new THREE.Scene();

            camera = new THREE.PerspectiveCamera(
                75,
                window.innerWidth / window.innerHeight,
                0.1,
                1000
            );
            camera.position.z = 5;

            // Add renderer to DOM
            document
                .getElementById("scene-container")
                .appendChild(renderer.domElement);

            // Initialize Geometry and Material
            const geometry = new THREE.BoxGeometry();
            const material = new THREE.MeshStandardMaterial({
                color: 0x00ff00,
            }); // Change to MeshStandardMaterial

            // Create Mesh (Cube)
            cube = new THREE.Mesh(geometry, material);
            cube.castShadow = true; // Enable cube to cast shadow
            cube.receiveShadow = true; // Enable cube to receive shadow

            // Add cube to Scene
            scene.add(cube);

            // Add Light
            light = new THREE.DirectionalLight(0xffffff, 1);
            light.position.set(2, 2, 2);
            light.castShadow = true; // Enable shadow
            scene.add(light);

            // Animation Function
            const animate = () => {
                requestAnimationFrame(animate);

                cube.rotation.x += 0.01;
                cube.rotation.y += 0.01;

                renderer.render(scene, camera);
            };

            animate();
        } catch (error) {
            console.error("An error occurred:", error);
        }

        // Cleanup
        return () => {
            cube.geometry.dispose();
            cube.material.dispose();
            scene.remove(cube);
            renderer.dispose();
        };
    }, []);

    return <div id="scene-container" className="w-full h-screen"></div>;
};

export default ThreeCube;
