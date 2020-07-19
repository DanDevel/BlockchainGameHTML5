pragma solidity ^0.4.0 <=0.7.0;
    /**
     * @dev danieldesenvolvimentosoftwares@gmail.com
     * blockchain game java script html5
     */
     
import './ERC20.sol';

contract GameHTML5 is ERC20  {
    string public name = "Game - Ethereum Blockchain"; // change
    string public author = "DanielDev_ - danieldesenvolvimentosoftwares@gmail.com"; // change
    uint256 public gamestatus = 1;
    uint256 public users = 1;
    
    string public player_found = "player";
    
    struct People{
        string name;
        string email;
        address account_address;
        uint points;
    }
    
    People[] public people;
    
    constructor() public {
        people.push(People({name: "DanielDev_", email: "danieldesenvolvimentosoftwares@gmail.com", account_address: 0xA0a58A356528Ea2f63C32d15d85Ff0d28C56DFC2, points: 0}));
        players.push(Players({email: "danieldesenvolvimentosoftwares@gmail.com", account_address: 0xA0a58A356528Ea2f63C32d15d85Ff0d28C56DFC2, points: 0}));
    }
    
    
    struct Players{
        string email;
        address account_address;
        uint points;
    }
    
    Players[] public players;
    
    function signup(string memory _name, string memory _email, address _address) public returns (bool){
        require(gamestatus == 1);
        people.push(People({name: _name, email: _email, account_address: _address, points: 0}));
        players.push(Players({email: _email, account_address: _address, points: 0}));
        users +=1;
        return true;            
    }
    
    function endgame(string memory _status) public returns (bool){
        gamestatus = 0;
        return true;
    }
    
    function startgame(string memory _status) public returns (bool){
        //require(msg.sender == _owner);
        gamestatus = 1;
        return true;
    }    
    
    function login(string memory _name, string memory _email) public view returns (uint256 n){
        require(gamestatus == 1);
        uint256 i;
        for (i=0;i<people.length;i++){
            if (keccak256(abi.encodePacked(people[i].name)) == keccak256(abi.encodePacked(_name))) {
                if (keccak256(abi.encodePacked(people[i].email)) == keccak256(abi.encodePacked(_email))){
                    return 1;  
                }
              
            }
        }
    }    
    
    function loginAddress(string memory _name, string memory _email) public view returns (address a, uint s2){
        require(gamestatus == 1);
        uint256 i;
        for (i=0;i<people.length;i++){
            if (keccak256(abi.encodePacked(people[i].name)) == keccak256(abi.encodePacked(_name))) {
                if (keccak256(abi.encodePacked(people[i].email)) == keccak256(abi.encodePacked(_email))){
                    return (people[i].account_address, people[i].points);
                }
            }
        }
    }    
        
    function activeusers() public view returns (uint256){
        require(gamestatus == 1);
        return users;
    } 
    
    function returnt() internal pure returns (bool){
        return true;
    }
    function returnf() internal pure returns (bool){
        return false;
    }
    
    function updateMyScore(string memory _name, string memory _email, uint _points) public returns (string s){
        require(gamestatus == 1);
        uint256 i;
        for (i=0;i<people.length;i++){
            if (keccak256(abi.encodePacked(people[i].name)) == keccak256(abi.encodePacked(_name))) {
                if (keccak256(abi.encodePacked(people[i].email)) == keccak256(abi.encodePacked(_email))){
                    uint256 my_points = people[i].points;
                    if (_points > my_points){
                        // update my score
                        people[i].points = _points;
                        return '1';
                    }
                }
            }
        }        
    }
    
    function updateMyScoreByAccount(string memory _email, uint _points) public returns (string s){
        require(gamestatus == 1);
        uint256 i;
        for (i=0;i<people.length;i++){
            if (keccak256(abi.encodePacked(people[i].email)) == keccak256(abi.encodePacked(_email))) {
                
                    uint256 my_points = people[i].points;
                    if (_points > my_points){
                        // update my score
                        people[i].points = _points;
                        // return '1';
                    }

            }
            
            if (keccak256(abi.encodePacked(players[i].email)) == keccak256(abi.encodePacked(_email))) {
                
                    uint256 my_points_players = players[i].points;
                    if (_points > my_points_players){
                        // update my score
                        players[i].points = _points;
                        // bounty level 1
                        if (_points < 1000){
                            return '1';
                        }
                        // bounty level 2
                        if ((_points > 1000) && (_points <= 1999)){
                            return '2';
                        }   
                        // bounty level 3
                        // payout!!! 10 Game Coins
                        if (_points >= 2000){
                            address ad_ = players[i].account_address;
                            // payout!!! 10 Game Coins >>>>>>>>>>>>
                            transfer(ad_, 10);
                            return '3';
                        }  
                    }

            }
        }        
    }    

}















