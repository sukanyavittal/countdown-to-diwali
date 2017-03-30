function days()
{
   var d = new Date();
   var tg = new Date(d.getFullYear(), 9, 19);
   var day = 24*60*60*1000;
   var diff = Math.floor((tg.getTime() - d.getTime())/day);
       
  
   document.getElementsByClassName('nOfDays')[0].innerHTML = diff;
    
}
