function SignUp(){
    // show signup form
    document.getElementById("signup_view").style.display = "";
    // hide login form
    document.getElementById("tab_signin").style.display = "none";
}

function signUp_Result(resp_signup){
    if (resp_signup != true){
        alert("SignUp failed!");
    }else{
        alert("SignUp OK!!!!!");
        // hide signup form
        document.getElementById("signup_view").style.display = "none";
        // show login form
        document.getElementById("signup_view").style.display = "";
    }
}

function blockchain_signup(){
    var username;
    username = document.getElementById("username_signup").value;
    
    var useremail;
    useremail = document.getElementById("useremail_signup").value;

    var useraddress;
    useraddress = document.getElementById("useraddress_signup").value;

    var web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:8545");
    var contrato1;
    var abi = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"activeusers","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_email","type":"string"},{"name":"_points","type":"uint256"}],"name":"updateMyScoreByAccount","outputs":[{"name":"s","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_name","type":"string"},{"name":"_email","type":"string"}],"name":"login","outputs":[{"name":"n","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"string"},{"name":"_email","type":"string"},{"name":"_address","type":"address"}],"name":"signup","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"string"},{"name":"_email","type":"string"},{"name":"_points","type":"uint256"}],"name":"updateMyScore","outputs":[{"name":"s","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"people","outputs":[{"name":"name","type":"string"},{"name":"email","type":"string"},{"name":"account_address","type":"address"},{"name":"points","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"author","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_name","type":"string"},{"name":"_email","type":"string"}],"name":"loginAddress","outputs":[{"name":"a","type":"address"},{"name":"s2","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_status","type":"string"}],"name":"startgame","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"player_found","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_status","type":"string"}],"name":"endgame","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"gamestatus","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"users","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"players","outputs":[{"name":"email","type":"string"},{"name":"account_address","type":"address"},{"name":"points","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]');
    var cryptoAddress = "0x2931670A7b9Bc6bA2C1cdF41d16FF52a3AD031e5";
    var contrato1 = new web3.eth.Contract(abi, cryptoAddress);
    //console.log(contrato1.methods.signup(username, useremail, useraddress).call()); 
    var resp_signup;
    contrato1.methods.signup(username, useremail, useraddress).send({'from':"0x0E138ce364Dd4D2679A778EC61ef6763082D9878", gas: 3000000})   

    // the account where the contract were deployed on blockchain, (GANACHE for a local blockchain).
    .on('receipt', function(receipt){
        console.log(receipt); // show the result of the the transaction (update my score)
    })



}