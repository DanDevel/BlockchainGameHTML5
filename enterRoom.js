// list player's score on the game
function show_players_list_on_screen(userData){

    var userName;
    var userAccount;
    var userScore;

    userName = userData[0];
    userAccount = userData[1];
    userScore = userData[2];

    // plot players on the HTML
    document.getElementById("players_score").innerHTML = document.getElementById("players_score").innerHTML + "Player: " + userAccount + "<br>" + "Score: " + userScore + "<hr>" ;
    

}



function players_list(){
    var web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:8545");
    var contrato1;
    var abi = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"activeusers","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_email","type":"string"},{"name":"_points","type":"uint256"}],"name":"updateMyScoreByAccount","outputs":[{"name":"s","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_name","type":"string"},{"name":"_email","type":"string"}],"name":"login","outputs":[{"name":"n","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"string"},{"name":"_email","type":"string"},{"name":"_address","type":"address"}],"name":"signup","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"string"},{"name":"_email","type":"string"},{"name":"_points","type":"uint256"}],"name":"updateMyScore","outputs":[{"name":"s","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"people","outputs":[{"name":"name","type":"string"},{"name":"email","type":"string"},{"name":"account_address","type":"address"},{"name":"points","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"author","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_name","type":"string"},{"name":"_email","type":"string"}],"name":"loginAddress","outputs":[{"name":"a","type":"address"},{"name":"s2","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_status","type":"string"}],"name":"startgame","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"player_found","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_status","type":"string"}],"name":"endgame","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"gamestatus","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"users","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"players","outputs":[{"name":"email","type":"string"},{"name":"account_address","type":"address"},{"name":"points","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]');
    var cryptoAddress = "0x2931670A7b9Bc6bA2C1cdF41d16FF52a3AD031e5";
    var contrato1 = new web3.eth.Contract(abi, cryptoAddress);

    var count; // number of players requested to request from blockchain account
    /*
    for (count =0; count < 10; count++){
        try {
            contrato1.methods.players(count).call()
            .then(show_players_list_on_screen)  ;

        } catch (error) {
            // if you have less players than requested...will return an error.
            // we can handle it with  here >>> if necessary.
        }
        
    }
  */

    contrato1.methods.players(0).call()
    .then(show_players_list_on_screen) ;     


    contrato1.methods.players(1).call()
    .then(show_players_list_on_screen)  ;   


    contrato1.methods.players(2).call()
    .then(show_players_list_on_screen)  ;   
      

}


function enterRoom(userAddress, userScore){

    // hide login form
    document.getElementById("tab_signin").style.display = "none";
    // view game 
    document.getElementById("tab_game").style.display = "";
    // show user data in the html. this can be read to identify a user
    document.getElementById("myaccount").innerHTML = userAddress ;
    document.getElementById("myscore").innerHTML = userScore ;

    // document.getElementById("player_account").innerHTML = userAddress;

    // list and show player's score on the game
    players_list();

}