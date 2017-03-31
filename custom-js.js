function days()
{
    var today = new Date();
    var diwali = new Date("OCTOBER, 19 , 2017");
    var ms = (diwali.getTime()-today.getTime()); //time in milliseconds
    var x = ms / 1000;
    var seconds = Math.floor(x % 60);
    x /= 60;
    var minutes = Math.floor(x % 60);
    x /= 60;
    var hours = Math.floor(x % 24);
    x /= 24;
    var day = Math.floor(x);
  
   
    document.getElementById('days').innerHTML = day + "<span id='text'> days</span>";
    document.getElementById('hour').innerHTML = ("0"+hours).slice(-2)+":";
    document.getElementById('min').innerHTML = ("0"+minutes).slice(-2)+":";
    document.getElementById('sec').innerHTML = ("0"+seconds).slice(-2);
    
}
