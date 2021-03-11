let player1;
let player2;
let aNum;
do{
let enter=prompt('Enter your choice: ( rock, paper, scissors )');
player1 = enter.toLowerCase();
	window.console.log(player1);
} while( !(player1 ==='rock' || player1==='paper' || player1==='scissors' ));

aNum=Math.random();
if (aNum < 0.34) {
	player2 = "rock";
} else if(aNum < 0.68) {
	player2 = "paper";
} else {
	player2 = "scissors";
} 

function result(choice1,choice2){
	
    if(choice1===choice2){
		alert('It is a tie') ;
    }
    else if(choice1==="rock"){
        if(choice2==="scissors"){
            alert(choice1 +' destroys ' + choice2 + '. You win! ');
        }
        else if(choice2==="paper"){
			alert(choice2+' covers '+choice1+'. Computer win! ' );
        }
    }
    else if(choice1==="paper"){
        if(choice2==="scissors"){
		   alert(choice2+' cuts '+choice1+'. Computer win! ' );
        }
        else if(choice2==="rock"){
			alert(choice1 +' covers ' + choice2 + '. You win! ');
        }
    }
    else if(choice1==="scissors"){
        if(choice2==="paper"){
			alert(choice1+' cuts '+choice2+'. You win! ' );
        }
        else if(choice2==="rock"){
            alert(choice2 +' destroys ' + choice1 + '. Computer win! ');
        }
    }
    
}
result(player1,player2);