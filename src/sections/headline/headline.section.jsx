import React from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import './headline.styles.scss';

const Headline = () => {

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async () => {
        await console.log();
    }, []);




  return (
        <div className="headline-container">
        <Particles className="particles"
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: "#000000",
                        },
                       
                    },
                    fullScreen: {
                        enable: false,
                      },
                    fpsLimit: 120,
                    interactivity: {
                        detect_on: "canvas",
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "grab",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 50,
                                duration: 0.5,
                            },
                            grab: {
                            distance: 200,
                            duration: 0.5,
                        },
                        },
                    },
                    particles: {
                        color: {
                            value: "#FFFFFF",
                        },
                        links: {
                            color: "#FFFFFF",
                            distance: 60,
                            enable: true,
                            opacity: 1,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            directions: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 1,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 600,
                            },
                            value: 100,
                        },
                        opacity: {
                            value: 1,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 0.5, max: 2 },
                        },
                    },
                    polygon: {
                        draw: { enable: false, lineColor: "#ffffff", lineWidth: 0.5 },
                        move: { radius: 10 },
                        scale: 1,
                        type: "none",
                        url: ""
                      },
                    detectRetina: true,
                }}
            />
            <h1 className="headline-paragraph">Work Faster, Work Better.</h1>
            {/* <p className="headline-paragraph">We offer a new way of doing work that will optimize all the processes.</p> */}
        </div>
    

  );
}

export default Headline;