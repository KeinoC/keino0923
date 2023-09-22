import React from "react";
import IntroPage from "./intro";


export default function Portfolio() {


    return (
        <div className="container mx-auto">
            <main className="flex flex-col items-center justify-center w-full h-screen">
                <h1 className="text-4xl">Three.js Cube in Next.js</h1>
                <IntroPage />
            </main>
        </div>
    );
}