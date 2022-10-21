
// function play(){
// const randnum =[];
//  for (let i = 0; i < 6; i++){
//     randnum[i] = Math.floor(Math.random() *100)
//  }
// // //  rand_no = Rand_num
// // //  console.log(Rand_num)
//  const rightscore =[];
//  let correct=0;
//  let input = document.getElementById('input');

//  let userp = Array.from(numm);
//  const predict = userp;
//  for (let value of predict){
//     let numm = parseInt(value);
//     if (randnum.includes(numm)){
//             rightscore[correct] = value;
//         correct++ ;
//     }

//     // document.getElementById('correct').innerHTML = right_score;

//     if (rightscore.length ==2 && numm >= 1 && numm <= 99 && numm.length ==2){
//         document.getElementById('reply').innerHTML ='You win';
//         // document.getElementById("random").innerHTML = randnum;
//         // document.getElementById("correct").innerHTML = rightscore;                   

        
//     }
// else if (rightscore.length < 2 && numm >= 1 && numm <= 99 && numm.length == 2){
//     document.getElementById('reply').innerHTML='o lule';
//     // document.getElementById("random").innerHTML = randnum;
//     // document.getElementById("correct").innerHTML = rightscore;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               

// }
// else {
//     document.getElementById('reply').innerHTML= 'Invalid input';
//     // document.getElementById("random").innerHTML = 'h';
//     // document.getElementById("correct").innerHTML = rightscore                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   ;

// }

//     // document.getElementById("random").innerHTML = randnum;
//     // document.getElementById("random").innerHTML = randnum;
//     // document.getElementById("correct").innerHTML = rightscore;                   

// }

// }

function play(){
    const randnum =[];
     for (let i = 0; i < 6; i++){
        randnum[i] = Math.floor(Math.random() *100)
     }
     const rightscore =[];
     let correct=0;
     let input = document.getElementById('input').value;
      userp = input.split(',');
     const predict = userp;
     for (let value of predict){
        let numm = parseInt(value);
        if (randnum.includes(numm)){
                rightscore[correct] = numm;
            correct++ ;
        }
    console.log(numm)
    if (rightscore.length >=2 && numm >= 1 || numm<= 90 && numm.length == 2){
    document.getElementById('reply').innerHTML ='You win';
            document.getElementById("random").value = randnum;
            document.getElementById("correct").value = rightscore;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
        }
        else if (rightscore.length < 2 && numm >= 1 || numm <=90 && numm.length == 2){
              document.getElementById('reply').innerHTML='o lule';
            document.getElementById("random").value = randnum;
            document.getElementById("correct").value = rightscore;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
        }
        
            else{
        document.getElementById('reply').innerHTML='Invalid input';
        document.getElementById("random").value = '';
        document.getElementById("correct").value = rightscore;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               

    
    }
    }
}


let namee = '23,34,23,32,45,67'
newName = namee.split(',');

console.log(newName);

console.log(parseInt(newName))