//Button
var authEmailPassButton = document.getElementById('authEmailPassButton');
var authGitHubButton = document.getElementById('authGitHubButton');
var authFacebookButton = document.getElementById('authFacebookButton');
var authTwitterButton = document.getElementById('authTwitterButton');
var authGoogleButton = document.getElementById('authGoogleButton');
var authAnonymousButton = document.getElementById('authAnonymousButton');
var createUserButton = document.getElementById ('createUserButton');
var logOutButton = document.getElementById ('logOutButton');


var URL = 'https://developer.mozilla.org/';

//Inputs

var emailInput = document.getElementById('emailInput');
var passwordInput = document.getElementById('passwordInput');

//Display
var displayName = document.getElementById('displayName');


//Criar um novo usuario 

createUserButton.addEventListener('click', function() {
    firebase
        .auth()
        .createUserWithEmailAndPassword( emailInput.value , passwordInput.value )
        .then(function(){
            alert('bem vindo ' + emailInput.value + 'você foi cadastrado');
        })
        .catch(function(error) {
            console.error(error.code);
            console.error(error.message);
                alert('falha ao cadastrar, por favor ... verifique o erro no console');
        });
});


//Autenticar com E-mail e Senha  

authEmailPassButton.addEventListener('click', function() {
    firebase
        .auth()
        .signInWithEmailAndPassword( emailInput.value , passwordInput.value )
        .then(function(result){
            console.log(result);
            displayName.innerText = 'Bem Vindo, ' + emailInput.value;
            alert('Autenticado ' + emailInput.value);
            window.location.href = "./PRODUTOS/produtos.html";
        })
        .catch(function(error) {
            console.error(error.code);
            console.error(error.message);
                alert('falha ao autenticar, por favor ... verifique o erro no console');
        });
});


//Logout 

logOutButton.addEventListener('click', function() {
    firebase
        .auth()
        .signOut()
        .then(function() {
            displayName.innerText = 'Você não está autenticado';
            alert('Você se deslogou');
        }, function (error) {
            console.error(error);
        });
});


//Autenticar pelo github  

authGitHubButton.addEventListener('click', function() {

    var provider = new firebase.auth.authGitHubauthProvider();
    signIn(provider);
});

function signIn(provider) {
    firebase.auth()
        .auth()
        .signInWithPopup(provider)
        .then(function(result){
            console.log(result);
            var token = result.credential.accessToken;
            displayName.innerText = 'Bem Vindo, ' + result.user.displayName;
        })
        .catch(function(error) {
            console.error(error) ;
             alert('falha ao autenticar');
        });
}









