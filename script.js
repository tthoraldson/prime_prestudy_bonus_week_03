/*
 ____       _                   ____ _           _ _                       
 |  _ \ _ __(_)_ __ ___   ___   / ___| |__   __ _| | | ___ _ __   __ _  ___ 
 | |_) | '__| | '_ ` _ \ / _ \ | |   | '_ \ / _` | | |/ _ \ '_ \ / _` |/ _ \
 |  __/| |  | | | | | | |  __/ | |___| | | | (_| | | |  __/ | | | (_| |  __/
 |_|   |_| _|_|_| |_|_|_|\___|__\____|_| |_|\__,_|_|_|\___|_| |_|\__, |\___|
 \ \      / /__  ___| | __ |___ /                                |___/      
  \ \ /\ / / _ \/ _ \ |/ /   |_ \                                           
   \ V  V /  __/  __/   <   ___) |                                          
    \_/\_/ \___|\___|_|\_\ |____/   

By Theresa T.
*/

var add = function(x) {
	return (x + 2);
};

var multiply = function(x) {
	return (x * 3);
};

var subtract = function(x) {
	return (x - 4);
};

var i = prompt("Enter any number.");
console.log(add(multiply(subtract(i))));