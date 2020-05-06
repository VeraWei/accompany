interface API {
    // FEELING: object,
    [key: string]: string;
}
export const HELPER_URL: API = {
    // FEELING: {},
    JOKE: "https://accompanybuddy.azurewebsites.net/joke",
    ADVICE: "https://accompanybuddy.azurewebsites.net/advice",
    USERS: "https://accompanybuddy.azurewebsites.net/user",
    CREATEUSER: "https://accompanybuddy.azurewebsites.net/user/create",
    // JOKE: "http://localhost:3000/joke",
    // ADVICE: "http://localhost:3000/advice",
    // USERS: "http://localhost:3000/user",
    // CREATEUSER: "http://localhost:3000/user/create",
    miku_v2: "https://cdn.rawgit.com/mrdoob/three.js/r87/examples/models/mmd/miku/miku_v2.pmd",
    wavefile_v2: "https://cdn.rawgit.com/mrdoob/three.js/r87/examples/models/mmd/vmds/wavefile_v2.vmd",
    wavefile_camera: "https://cdn.rawgit.com/mrdoob/three.js/r87/examples/models/mmd/vmds/wavefile_camera.vmd",
    wavefile_short: "https://cdn.rawgit.com/mrdoob/three.js/r87/examples/models/mmd/audios/wavefile_short.mp3",
};
