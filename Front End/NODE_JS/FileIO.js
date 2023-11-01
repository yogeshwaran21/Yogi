var io=require('fs');

function displayData(err,lines){
    console.log('Contents of Data.txt\n' + lines);

}
{
io.readFile('Data.txt','utf8',displayData);
}