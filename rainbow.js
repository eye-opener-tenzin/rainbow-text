const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:
 const rainbow = document.querySelectorAll('span');
 let index = 0;
  for(let span of rainbow) {
    span.style.color = colors[index];
    index++;
    }

