## Notes for midterm & final:

### Midterm Notes

- In the following code, what does the link element do?
  - it links to a external source and defines what the external source is.
  - like --> <link rel="stylesheet" href="styles.css">
- In the following code,  what does a div tag do?
  - defines a block division of content or section in an HTML document
  - easily styled
  - <div class="myDiv">
      <h2>This is a heading in a div element</h2>
      <p>This is some text in a div element.</p>
    </div>
- In the following code, what is the difference between the #title and .grid selector?
  - #title selects by element ID, while .grid selects by element class.
  - 
- In the following code, what is the difference between padding and margin?
  - padding can be on the top, right, bottom, or left
    - padding has the following properties (length --> padding length, % --> percentage of the width, inherit --> inherited from the parent element)
  -  margin top, right, bottom and left
    - properties of auto length % and inherit
       - only difference between is auto and auto is the browser calculates the margin
- Given this HTML and this CSS how will the images be displayed using flex?
  - example ==> body {
  display: flex;
  flex-direction: column;
  margin: 0;
  height: 100vh;
}
  - this controls the different media queries to create a different layouts for different screen sizes/devices
  - flex-grow
    - number specifying how much the item will grow relatove tp tje rest of the flexible items
  - flex-shrink
    - A number specifying how much the item will shrink relative to the rest of the flexible items
  - flex-basis
    - The length of the item. Legal values: "auto", "inherit", or a number followed by "%", "px", "em" or any other length uni
- What does the following padding CSS do?
  - div {
      padding-top: 50px;
      padding-right: 30px;
      padding-bottom: 50px;
      padding-left: 80px;
      }
  - controls the padding and edits the different sizing wants
- What does the following code using arrow syntax function declaration do?
  - makes code more compact
  - takes no parameters and always returns 3
  - declares a function
  - with no curly braces it contains a single expression
- What does the following code using map with an array output?
  - Run a function to map an array to a new array
  - const a = [1, 2, 3];
  - a.map(i => i+i)
- What does the following code output using getElementByID and addEventListener?
  - Get the element with the specified id
document.addEventListener("click", function(){
  document.getElementById("demo").innerHTML = "Hello World";
});   
  - you can add a click event to do a function
    - ex ==> document.addEventListener("click", myFunction);
- What does the following line of Javascript do using a # selector?
  - find an element by its id attribute, should be unique within the page
- Which of the following are true? (mark all that are true about the DOM)
  - Document Object Model (DOM) is an object representation of the HTML elements that the browser uses to render the display
  - The browser provides access to the DOM through a global variable name document that points to the root element of the DOM
  - The browser also exposes the DOM to external code so that you can write programs that dynamically manipulate the HTML.
  - using the element features like getitem and displayelement and querySelectorAll
- By default, the HTML span element has a default CSS display property value of:
  - it has a dashed line of a box
- How would you use CSS to change all the div elements to have a background color of red?
div {
  background: red;
}
- How would you display an image with a hyperlink in HTML?
  - <img alt="mountain landscape" src="https://images.pexels.com/photos/164170/pexels-photo-164170.jpeg" />
- In the CSS box model, what is the ordering of the box layers starting at the inside and working out?
  - padding, border, and margin
- Given the following HTML, what CSS would you use to set the text "troubl" to green and leave the "double" text unaffected?
h1 {
  color: green;
} 
#id1:checked + label {
  color: red;
}
  - use id maybe
- What will the following code output when executed using a for loop and console.log?
  - read code
- How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?
  - p.byu {color: green;}
  - or
  - p.byu {color: green;}
- What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?
  - paragraph
    - <p></p>
  - ordered list
    - <li></li> (not 100%)
  - unordered list
    - <ul></ul>
  - second level heading
    - <h2></h2>
  - first level heading
    - <h1></h1>
  - thrid level heading
    - <h3></h3>
- How do you declare the document type to be html?
  - <!DOCTYPE html>
- What is valid javascript syntax for if, else, for, while, switch statements?
  - if ()
  - else if () or else ()
  - for ()
  - while ()
  - switch 
- What is the correct syntax for creating a javascript object?
  - three options: entries, keys, and values
  - const obj = {
  a: 3,
  b: 'fish',
};

console.log(Object.entries(obj));
// OUTPUT: [['a', 3], ['b', 'fish']]
console.log(Object.keys(obj));
// OUTPUT: ['a', 'b']
console.log(Object.values(obj));
// OUTPUT: [3, 'fish']

- Is is possible to add new properties to javascript objects?
  - yes , Once declared you can add properties to the object by simply referencing the property name in an assignment
- If you want to include JavaScript on an HTML page, which tag do you use?
  - <script src="scores.js"></script>
- Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?
  - crow = animal.text
- Which of the following correctly describes JSON?
  - JSON provides a simple, and yet effective way, to share and store data. By design JSON is easily convertible to, and from, JavaScript objects. This make it a very convenient data format when working with web technologies. Because of its simplicity, standardization, and compatibility with JavaScript, JSON has become one of the world's most popular data formats.
- What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo  do?
  - chmod
    - modifies a file’s read, write, and execute permissions
  - pwd
    - prints your current working directorys path
  - cd
    - lets you navigate between files and directories
  - ls
    - lists files and directories in your system
  - vim
    - edit the files on your console
  - nano
    - edit files
  - mkdir
    - create one or multiple directories and set their permissions
  - mv
    - move or rename files and directories
  - rm
    - permanently deletes files within a directory
  - man
    - provieds a user manual of any Linux Terminal ultilies including names descriptions and options
  - ssh
    - instructs the system to establish an encrypted secure connection with the host machine
  - ps
    - creates a snapshot of all running processes in your system
  - wget
    - downloads files from internet using HTTP, HTTPS, or FTP
  - sudo
    - runs your command with administrative or root permissions
- Which of the following console command creates a remote shell session?
  - New-PSSession cmdlet
- Which of the following is true when the -la parameter is specified for the ls console command?
  - it prints out the files or dicetories in the current directory and shows the date and time last edited/ accessed.
- Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain?
  - bozo.click is top domain and others are root domains

- Is a web certificate necessary to use HTTPS.
- - not secure without one
- Can a DNS A record can point to an IP address or another A record.
  - look at DNS and ROUTE 53 (maybe AWS)
  - points to 3.223.128.57 which I think is the IP address.
- Port 443, 80, 22 is reserved for which protocol?
- - Ports 443 is HTTPS, 22 is SSH, 80 is HTTP
- What will the following code using Promises output when executed?
  - Promise has a resolve or a reject / has .then ==> executed no matter what / .catch ==> executed if there is an error and .finally ==> executued at the end to run console logs


### NOTES 10/25
- Start of Back end notes "Web Services 5.1"
- you can look at the express server in node
- you assigned one port per
- we deploy to the publid server
- using node.js we can still do console.log()
- how we deploy
- curl localhost <-- shortcut to current machine we are using
- you cn also curl into the port and see the startup
- javascript functions
- - fetch grabs data and puts it into the dom
  - two ways to do this (await or pass in the url)
  - - good idea to throw url into google and look at it
  - <pre> means preserve (dont change the text)</pre>
- use network in inspect to debug the api connection
- cookies help authenticate you, they can put it tracking cookies, they are a strategy to establish a session
- "curl" to debug APIs use it a lot
- - curl -v "url"


### NOTES 10/30
- stick with lts verisons of node
- downloaded node in this class
- APIs connect our front end to the back end of the websites
- to maek API set object to 'application/json'


## NOTES 11/1
- 
