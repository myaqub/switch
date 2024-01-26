let myweeknumber=window.prompt("Enter number of week");
let dayOfWeek  = Number(myweeknumber);
       
let dayName;
const mydate=document.getElementById("today");

switch (dayOfWeek) {
  case 1:
    dayName = 'Sunday';
    
    mydate.innerHTML="<h1>  Today is:    "+dayName+ "</h1>";

    
  
    break;
  case 2:
    dayName = 'Monday';
    mydate.innerHTML="<h1>  Today is:    "+dayName+ "</h1>";
    break;
  case 3:
    dayName = 'Tuesday';
    mydate.innerHTML="<h1>  Today is:    "+dayName+ "</h1>";
    break;
  case 4:
    dayName = 'Wednesday';
    mydate.innerHTML="<h1>  Today is:    "+dayName+ "</h1>";
    break;
  case 5:
    dayName = 'Thursday';
    mydate.innerHTML="<h1>  Today is:    "+dayName+ "</h1>";
    break;
  case 6:
    dayName = 'Friday';
    mydate.innerHTML="<h1>  Today is:    "+dayName+ "</h1>";
    break;
  case 7:
    dayName = 'Saturday';
    mydate.innerHTML="<h1>  Today is:    "+dayName+ "</h1>";
    break;
  default:
    mydate.innerHTML="<h1>   Invalid Date    </h1>";
}

console.log(`Today is ${dayName}.`);


        

