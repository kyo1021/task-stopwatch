let hr = 0;
let min = 0;
let sec = 0;
let mSec = 0;
let tm = 0;

function updateTimerText(){
  $("#timer").text(`${hr}:${min}:${sec}:${mSec}`);
}

//スタートボタン
function eventStart(){
  if(tm > 0) return;
  
  tm = setInterval("count()",100);
}

//ストップボタン
function eventStop(){
  if(tm > 0){
    clearInterval(tm);
    tm = 0;
  }
}

//リセットボタン
function eventReset(){
  hr = 0;
  min = 0;
  sec = 0;
  mSec = 0;
  
  updateTimerText();
}

//時間表示
function count(){
  mSec++;
  if (mSec >=10){
    sec ++;
    mSec =0;
  }
  if(sec >= 60){
    min++;
    sec = 0;
  }
  if (min >= 60){
    hr++;
    min = 0;
  }
  updateTimerText();
}