import React from "react";
import * as THREE from "three";
import { Button } from "react-bootstrap";
import { OutlineEffect } from "three/examples/jsm/effects/OutlineEffect.js";
import { MMDLoader } from "three/examples/jsm/loaders/MMDLoader.js";
import { MMDAnimationHelper } from "three/examples/jsm/animation/MMDAnimationHelper.js";
import { HELPER_URL } from "../../../util/url";
import Footer from "../../../common/footer";
import Header from "../../../common/header";
import "./index.scss";

let Ammo = require("three/examples/js/libs/ammo.js");
// LOCAL FILE FROM OTHER LICIENSE

const { miku_v2, wavefile_v2, wavefile_camera, wavefile_short } = HELPER_URL;
const modelFile = miku_v2;
const vmdFiles = [wavefile_v2];
const cameraFiles = wavefile_camera;
const audioFile = wavefile_short;
const audioParams = { delayTime: (160 * 1) / 30 };

const clock = new THREE.Clock();
const scene = new THREE.Scene();
const loader = new MMDLoader();
const helper = new MMDAnimationHelper();

const canvasWidth = window.innerWidth - 120;
const canvasHeight = window.innerHeight - 400;

class Dance extends React.Component {
    container: any;
    mesh: any;
    camera: any;
    scene: any;
    material: any;
    renderer: any;
    effect: any;
    helper: any;
    ready = false;

    componentDidMount() {
        Ammo().then((AmmoLib: any) => {
            Ammo = AmmoLib;
            this.init();
            this.animate();
        });
    }

    onProgress = (xhr: {
        lengthComputable: any;
        loaded: number;
        total: number;
    }) => {
        if (xhr.lengthComputable) {
            const percentComplete = (xhr.loaded / xhr.total) * 100;
            console.log(Math.round(percentComplete) + "% downloaded");
        }
    };

    loadAnimationCallback = (cameraAnimation: any) => {
        helper.add(this.camera, {
            animation: cameraAnimation,
        });

        new THREE.AudioLoader().load(
            audioFile,
            (buffer: any) => {
                const listener = new THREE.AudioListener();
                const audio = new THREE.Audio(listener).setBuffer(buffer);

                listener.position.z = 1;

                helper.add(audio, audioParams);

                scene.add(audio);
                scene.add(listener);
                scene.add(this.mesh);

                this.ready = true;
            },
            this.onProgress,
            (err) => {
                console.log(err);
            }
        );
    };

    loadWithAnimationCallback = (mmd: { mesh: any; animation: any }) => {
        this.mesh = mmd.mesh;

        helper.add(this.mesh, {
            animation: mmd.animation,
            physics: true,
        });

        loader.loadAnimation(
            cameraFiles,
            this.camera,
            this.loadAnimationCallback,
            this.onProgress,
            (err) => {
                console.log(err);
            }
        );
    };

    init() {
        this.container = document.getElementById("canvas-container");

        this.camera = new THREE.PerspectiveCamera(
            45,
            canvasWidth / canvasHeight,
            1,
            2000
        );

        const bgColor =
            "linear-gradient(217deg, rgba(255, 0, 0, 0.8), rgba(255, 0, 0, 0) 70.71%), linear-gradient(127deg, rgba(0, 255, 0, 0.8), rgba(0, 255, 0, 0) 70.71%), linear-gradient(336deg, rgba(0, 0, 255, 0.8), rgba(0, 0, 255, 0) 70.71%);";
        scene.background = new THREE.Color(bgColor);

        scene.add(
            new THREE.PolarGridHelper(30, 10, 10, 10, undefined, undefined)
        );

        const ambient = new THREE.AmbientLight(0x666666);
        scene.add(ambient);

        const directionalLight = new THREE.DirectionalLight(0x887766);
        directionalLight.position.set(-1, 1, 1).normalize();
        scene.add(directionalLight);

        //

        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(canvasWidth, canvasHeight);
        this.container.appendChild(this.renderer.domElement);

        this.effect = new OutlineEffect(this.renderer, {});

        loader.loadWithAnimation(
            modelFile,
            vmdFiles,
            this.loadWithAnimationCallback,
            this.onProgress,
            (err) => {
                console.log(err);
            }
        );

        window.addEventListener("resize", this.onWindowResize, false);
    }

    onWindowResize = () => {
        this.camera.aspect = canvasWidth / canvasHeight;
        this.camera.updateProjectionMatrix();

        this.effect.setSize(canvasWidth, canvasHeight);
    };

    animate = () => {
        requestAnimationFrame(this.animate);
        this.renderAnimation();
    };

    renderAnimation() {
        if (this.ready) {
            helper.update(clock.getDelta());
        }

        this.effect.render(scene, this.camera);
    }

    // TODO animation
    renderHeader() {
        return <Header />;
    }

    renderFooter() {
        return <Footer hasBack={true} />;
    }

    renderCanvas() {
        return [
            <div id="canvas-container"></div>,

            <Button href="https://threejs.org" variant="link">
                Credit to Three.js
            </Button>,
        ];
    }

    render() {
        return (
            <div className="main-container">
                {this.renderHeader()}
                <div className="main-content">{this.renderCanvas()}</div>
                {this.renderFooter()}
            </div>
        );
    }
}

export default Dance;
