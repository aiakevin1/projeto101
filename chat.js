// Configuração do Firebase de seu aplicativo
//ADICIONE OS LINKS DO FIREBASE AQUI
const firebaseConfig = {
    apiKey: "AIzaSyDDN0O0sf0r_LGJmOzdl3xEeen34Y2wpDQ",
    authDomain: "vamos-conversar-projeto101.firebaseapp.com",
    databaseURL: "https://vamos-conversar-projeto101-default-rtdb.firebaseio.com",
    projectId: "vamos-conversar-projeto101",
    storageBucket: "vamos-conversar-projeto101.appspot.com",
    messagingSenderId: "868383657940",
    appId: "1:868383657940:web:e1526d452a5ec8b6895041"
  };

  

// Inicialize o Firebase
firebase.initializeApp(firebaseConfig);

function addUser()
{
user_name = document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
purpose : "adding user"
});
/*
Armazene o nome de usuário em localStorage
 */
localStorage.setItem("user_name", user_name);
/*
Programe window.location para que o usuário possa navegar até a página chat_room.html.
*/
window.location = "chat_room.html";
}



