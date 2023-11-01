var io=require('fs');
var readLine=require('readline-sync');
var line="";
var cnt=0;
while(cnt<5){
  console.log('Enter a Line');
  line=readLine.question();
  line += '\n';
  //io.writeFile('doc.txt',line,displayStatus);
  io.appendFileSync('doc.txt',line);
  cnt++;
}

function displayStatus(){
console.log('wrote ' + cnt + ' lines to a file');
}
