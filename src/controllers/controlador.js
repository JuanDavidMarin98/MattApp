import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
  import { getAuth,onAuthStateChanged,signOut} from 'https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js'


function cambiarCaja(){
    let boton=document.getElementById("botonChat")
    let cajaChat=document.getElementById("cajaChat")

    if(cajaChat.style.display=='none' || cajaChat.style.display==''){
        cajaChat.style.display="block"
    }else{
        cajaChat.style.display="none"
    }
}

const firebaseConfig = {
    apiKey: "AIzaSyCX8HIXxeAsZ9cZTEp5sbeRZtoZCKunNN0",
    authDomain: "loginsuradualjdma.firebaseapp.com",
    projectId: "loginsuradualjdma",
    storageBucket: "loginsuradualjdma.appspot.com",
    messagingSenderId: "346098119843",
    appId: "1:346098119843:web:6d070b2cc8655b270d3b16",
    measurementId: "G-Q7NGJ3Q6NY"
  };

  const app = initializeApp(firebaseConfig);

  let avatar=document.getElementById("avatar")
  let botonsalir=document.getElementById("botonsalir")

  //utilizando la infomacion del usuario loggeado
  const auth=getAuth()
  onAuthStateChanged(auth,(user)=>{
    if(user){
        let uid=user.uid
        avatar.classList.remove("invisible")
        avatar.textContent=user.email
    }else{

    }
  })

  botonsalir.addEventListener("click",function(){
    alert("estas saliendo")
  })
  