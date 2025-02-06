// 3-DIRECT function

function direct() {
    // to generate random number
    const randnum = [];
    for (let i = 0; i < 6; i++) {
      randnum[i] = Math.floor(Math.random() * 100);
    }
      // to check if the user input match the accepted format
  
    const rightscore = [];
    let correct = 0;
    let input = document.getElementById("input").value;
    let userInput = input.split(",");
    let predict = userInput.length;
    
    // comparing user input with the random num generated
  
    for (let value of userInput) {
      let numm = parseInt(value);
      if (numm > 0 && numm < 100) {
        if (randnum.includes(numm)) {
          rightscore[correct] = numm;
          correct++;
        }
      } else {
        document.getElementById("warn").innerHTML = " ";
      }
  
      // conditional statements to determine wether the player win or loose
      if (predict < 3 || predict > 3) {
        document.getElementById("warn").innerHTML =
          '<code style="color: yellow">Input 3 numbers to play 3-direct</code>';
        document.getElementById("reply").innerHTML = "";
        document.getElementById("random").value = "";
        document.getElementById("correct").value = "";
      } else {
        if (rightscore.length >= 3 && numm > 0 && numm < 100) {
          document.getElementById("warn").innerHTML = "";
          document.getElementById("reply").innerHTML =
            'You win <br><code style="color: blue">Congratulation!!</code>';
          document.getElementById("random").value = randnum;
          document.getElementById("correct").value = rightscore;
        } else if (rightscore.length < 3 && numm > 0 && numm < 100) {
          document.getElementById("warn").innerHTML = "";
          document.getElementById("reply").innerHTML =
            'You loose <br><code style="color: red">try again</code>';
          document.getElementById("random").value = randnum;
          document.getElementById("correct").value = rightscore;
        } else if (rightscore.length >= 3 && numm > 0 && numm > 99) {
          document.getElementById("warn").innerHTML = "";
          document.getElementById("reply").innerHTML =
            '<code style="color: red">Input must be less than 100</code>';
          document.getElementById("random").value = "";
          document.getElementById("correct").value = "";
        } else if (rightscore.length < 3 && numm > 0 && numm > 99) {
          document.getElementById("warn").innerHTML = "";
          document.getElementById("reply").innerHTML =
            '<code style="color: red";>Input must be less than 100</code>';
          document.getElementById("random").value = "";
          document.getElementById("correct").value = "";
        } else if (
          rightscore.length >= 3 &&
          numm > 0 &&
          numm < 100 &&
          predict !== 2
        ) {
          document.getElementById("warn").innerHTML = "";
          document.getElementById("reply").innerHTML = "Input 2 numbers";
          document.getElementById("random").value = randnum;
          document.getElementById("correct").value = "";
        } else if (
          rightscore.length < 3 &&
          numm > 0 &&
          numm < 100 &&
          predict !== 2
        ) {
          document.getElementById("warn").innerHTML = "";
          document.getElementById("reply").innerHTML = "2 numbers";
          document.getElementById("random").value = "";
          document.getElementById("correct").value = "";
        } else {
          document.getElementById("reply").innerHTML = "Invalid input";
          document.getElementById("random").value = "";
          document.getElementById("correct").value = "";
        }
      }
    }
    // console.log(numm);
  }
  
  // END OF 3-DIRECT
  
  // 2-SURE function
  
  function sure() {
    // generating random Number
    const randnum = [];
    for (let i = 0; i < 6; i++) {
      randnum[i] = Math.floor(Math.random() * 40);
    }
    // to check if the user input match the accepted format
    const rightscore = [];
    let correct = 0;
    let input = document.getElementById("input2").value;
    let userInput = input.split(",");
    let predict = userInput.length;
    // if (predict == 2){
    console.log(predict);
  
      // to check if the user input  is included in the random num. generated
  
    for (let value of userInput) {
      let numm = parseInt(value);
      if (numm > 0 && numm < 40) {
        if (randnum.includes(numm)) {
          rightscore[correct] = numm;
          correct++;
        }
      } else {
        document.getElementById("warn2").innerHTML = "";
      }
      // comparing user input with the accepted format and random num generated
      if (predict < 2 || predict > 2) {
        document.getElementById("warn2").innerHTML =
          '<code style="color: yellow">Input 2 numbers to play 2-sure</code>';
        document.getElementById("reply2").innerHTML = "";
        document.getElementById("random2").value = "";
        document.getElementById("correct2").value = "";
      } else {
        if (rightscore.length >= 2 && numm > 0 && numm < 100) {
          document.getElementById("warn2").innerHTML = "";
          document.getElementById("reply2").innerHTML =
            'You win <br><code style="color: blue">Congratulation!!</code>';
          document.getElementById("random2").value = randnum;
          document.getElementById("correct2").value = rightscore;
        } else if (rightscore.length < 2 && numm > 0 && numm < 40) {
          document.getElementById("warn2").innerHTML = "";
          document.getElementById("reply2").innerHTML =
            'You loose <br><code style="color: red">try again</code>';
          document.getElementById("random2").value = randnum;
          document.getElementById("correct2").value = rightscore;
        } else if (rightscore.length >= 2 && numm > 0 && numm > 99) {
          document.getElementById("warn2").innerHTML = "";
          document.getElementById("reply2").innerHTML =
            '<code style="color: red">Input must be less than 100</code>';
          document.getElementById("random2").value = "";
          document.getElementById("correct2").value = "";
        } else if (rightscore.length < 2 && numm > 0 && numm > 39) {
          document.getElementById("warn2").innerHTML = "";
          document.getElementById("reply2").innerHTML =
            '<code style="color: red";>Input must be less than 40</code>';
          document.getElementById("random2").value = "";
          document.getElementById("correct2").value = "";
        } else if (
          rightscore.length >= 2 &&
          numm > 0 &&
          numm < 100 &&
          predict !== 2
        ) {
          document.getElementById("warn2").innerHTML = "";
          document.getElementById("reply2").innerHTML = "Input 2 numbers";
          document.getElementById("random2").value = randnum;
          document.getElementById("correct2").value = "";
        } else if (
          rightscore.length < 2 &&
          numm > 0 &&
          numm < 100 &&
          predict !== 2
        ) {
          document.getElementById("warn2").innerHTML = "";
          document.getElementById("reply2").innerHTML = "2 numbers";
          document.getElementById("random2").value = "";
          document.getElementById("correct2").value = "";
        } else {
          document.getElementById("reply2").innerHTML = "Invalid input";
          document.getElementById("random2").value = "";
          document.getElementById("correct2").value = "";
        }
      }
    }
  }
  
  // END OF 2 SURE
  // Functions for displaying the games
  const displayGame =document.getElementById('game')
  const option =document.getElementById('options')
  option.style.display ="block"
  
  function closeGame(){
    option.style.display ="block"
  
    displayGame.style.display ='none'
    option.style.display ="block"
    console.log('hi')
  }
  
  function displaydirect(){
    displayGame.innerHTML =""
    displayGame.style.display ='block'
  
  option.style.display ="none"
     displayGame.innerHTML += `
     <span onclick="closeGame()">X</span>
      <p id="process">
            Note:
            <i>
              <b style="color: gold">This is 3-direct game.</b> i.e If 3 of your
              predicted numbers appear in the random numbers, you win. Else, You loose.</i
            >
          </p>
      <div id="info">
  
              <code>input your numbers in this format; 34,35,34</code> <br> <br>
              <p id="warn"></p>
          <input type="text" name="input" id="input" placeholder="Enter your numbers here" value="">
          <div class="label">
              <label for="random">Random numbers:</label>
              <input type="text" id="random" name="random">
          </div>
          <div class="label">
              <label for="correct">Correct prediction:</label>
              <input type="text"  id="correct" name="correct">
          </div>
          <p><strong>Result: </strong><span id="reply"></span></p>
          <input type="button" value="PLAY" onclick="direct()" class="playy"> <br> <br>
  </div>`;
  }
  function displaysure(){
    displayGame.innerHTML =""
    // option.innerHTML =""
    displayGame.style.display ='block'
    option.style.display ="none"
  
     displayGame.innerHTML += `
        <span onclick="closeGame()">X</span>
  
      <p id="process">
            Note:
            <i>
              <b style="color: gold">This is 2-Sure game.</b> i.e If 2 of your
              predicted numbers appear in the random numbers, you win. Else, You loose.</i
            >
          </p>
      <div id="info2">
  
      <code>input your numbers in this format; 2,3 </code> <br> <br>
  <p id="warn2"></p>
  <input type="text" name="input2" id="input2" placeholder="Enter your numbers here" value="">
  <div class="label">
      <label for="random2">Random numbers:</label>
      <input type="text" id="random2" name="random2">
  </div>
  <div class="label">
      <label for="correct2">Correct prediction:</label>
      <input type="text"  id="correct2" name="correct2">
  </div>
  <p><strong>Result: </strong><span id="reply2"></span></p>
  <input type="button" value="PLAY" onclick="sure()" class="playy"> <br> <br>
  
  </div>`;
  }
  
  