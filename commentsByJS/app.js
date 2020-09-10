let d = new Date();

// Personal API Key for OpenWeatherMap API
let baseURL = 'http://api.openweatherapp.org/data/2.5/forecast?zip=';
let APIkey = '&appid=3e2500675fec500482064ac7628bee16';
// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click',performAction);
/* Function called by event listener */
function performAction(a){
const newZip = document.getElementById('zip').value;
const feelings = document.getElementById('feelings').value;
getWeather(baseURL,newZip,APIkey);
   //.then(function(i){postData('/add',{date:d, temp:i.list[0].main.temp, cont:feelings}
        //        )})     
}
getData();
/* Function to GET Web API Data*/
const getWeather = async (baseURL, ZIP, key)=>{
 const r = await fetch(baseURL+ZIP+key)
 try{
     const i = await r.json();
       return i;
 }catch(err){
console.log("error",err);
 }
}
/* Function to POST data */
const postData = async (url='',obj={})=>{
const res = await fetch (url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
        'Content-Type':'application/json',
    },
    body: JSON.stringify(obj)
});
try{
const newobj = await res.json();
console.log(newobj);
return newobj;
}
catch(err){
console.log("error",err);
}


}
/* Function to GET Project Data */
const getData = async ()=>{
 const req = await fetch('/all');
 try{
const all = await req.json();
document.getElementById('date').innerHTML = 'Date: ${all[0].date}';
document.getElementById('temp').innerHTML = 'Date: ${all[0].temp}';
document.getElementById('content').innerHTML = 'Date: ${all[0].cont}';
 }catch(err){
     console.log("error",err);
 }

}
