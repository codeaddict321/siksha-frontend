// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref,getDownloadURL } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2nxFP8Ps3ojhnUF6YaiZkZs8sqPC4CxI",
  authDomain: "sikhsha-d5880.firebaseapp.com",
  projectId: "sikhsha-d5880",
  storageBucket: "sikhsha-d5880.appspot.com",
  messagingSenderId: "904845647154",
  appId: "1:904845647154:web:714112231718754cfe4b2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

async function fetchImg(id) {
    const imgReference = ref(storage, `images/${id}`); 
  const url = await  getDownloadURL(imgReference)

  return url
}
async function fetchVideo(id) {
  const videoReference = ref(storage, `videos/${id}`); 
const url = await  getDownloadURL(videoReference)

return url
}
export { fetchImg };
export {fetchVideo};