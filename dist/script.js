var clock =  document.getElementById("clock").firstChild
clock.onload = updateClock()
var clock_interval = window.setInterval(updateClock,1000)

function updateClock( )
{
  //get time 
   var currentTime = new Date(); 
   var currentHours = currentTime.getHours(); 
   var currentMinutes = currentTime.getMinutes(); 
   var currentSeconds = currentTime.getSeconds();
  //leading zeros for mins and seconds
  if(currentMinutes<10)
  {
   currentMinutes = "0" + currentMinutes;
  }
  if(currentSeconds<10)
  {
   currentSeconds = "0" + currentSeconds;  
  }
 //AM or PM
  var timeOfDay; 
  if (currentHours < 12)
  {
   timeOfDay = "AM";
  }
  else 
   {
    timeOfDay = "PM"; 
   }
   //12 hour format
   if(currentHours > 12)
   {
    currentHours = currentHours-12;
    }
   if(currentHours == 0 )
   {
    //zero becomes 12
    currentHours = 12;
   }
   //complete string
   var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + ":" + " " + timeOfDay;
  
   //update time  
  document.getElementById("clock").firstChild.nodeValue   =currentTimeString; 
   if(currentHours == 6&& currentMinutes == 30 && timeOfDay=="PM")
   {
    finish()
   }
}
function finish()
{
  var currentTime = new Date(); 
  //get time
  var currentHours = currentTime.getHours(); 
  var currentMinutes = currentTime.getMinutes();
  var currentSeconds = currentTime.getSeconds();
  
   c_image = document.getElementById('current_image');
   c_image.src = 'https://i.postimg.cc/BvNVQrgn/pastor-speaks.jpg';
   document.getElementById("greeting").textContent="We're so happy you're here!";
   clearInterval(clock_interval)
   clock.textContent="Sit down!";
}