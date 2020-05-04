import React from "react";
import * as THREE from "three";
import { OutlineEffect } from "three/examples/jsm/effects/OutlineEffect.js";
import { MMDLoader } from "three/examples/jsm/loaders/MMDLoader.js";
import { MMDAnimationHelper } from "three/examples/jsm/animation/MMDAnimationHelper.js";
import { HELPER_URL } from '../../util/url';
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
            animation: cameraAnimation
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
            err => {
                console.log(err);
            }
        );
    }

    loadWithAnimationCallback = (mmd: { mesh: any; animation: any; }) => {
        this.mesh = mmd.mesh;

        helper.add(this.mesh, {
            animation: mmd.animation,
            physics: true
        });

        loader.loadAnimation(
            cameraFiles,
            this.camera,
            this.loadAnimationCallback,
            this.onProgress,
            err => {
                console.log(err);
            }
        );
    }

    init() {
        this.container = document.createElement("div");
        document.body.appendChild(this.container);

        this.camera = new THREE.PerspectiveCamera(
            45,
            window.innerWidth / window.innerHeight,
            1,
            2000
        );

        scene.background = new THREE.Color(0xffffff);

        scene.add(new THREE.PolarGridHelper(30, 10, 10, 10, undefined, undefined));

        const ambient = new THREE.AmbientLight(0x666666);
        scene.add(ambient);

        const directionalLight = new THREE.DirectionalLight(0x887766);
        directionalLight.position.set(-1, 1, 1).normalize();
        scene.add(directionalLight);

        //

        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.container.appendChild(this.renderer.domElement);

        this.effect = new OutlineEffect(this.renderer, {});

        loader.loadWithAnimation(
            modelFile,
            vmdFiles,
            this.loadWithAnimationCallback,
            this.onProgress,
            err => {
                console.log(err);
            }
        );

        //

        window.addEventListener("resize", this.onWindowResize, false);
    }

    onWindowResize = () => {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();

        this.effect.setSize(window.innerWidth, window.innerHeight);
    };

    //

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

    render() {
        return <div></div>;
    }
}

export default Dance;
