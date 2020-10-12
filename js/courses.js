var courses = [
  {
    "id": 6,
    "courses":
      {
        "coding": ["Tynker"],
        "gaming": null,
        "robotics": ["WeDO"],
        "electronics": null,
        "competitions": ["FLL Jr"]
      }
  },
  {
    "id": 7,
    "courses":
      {
        "coding": ["Tynker - drag n drop/scratch", "Android apps"],
        "gaming": null,
        "robotics": ["WeDO"],
        "electronics": ["Microbits"],
        "competitions": ["FLL Jr"]
      }
  },
  {
    "id": 8,
    "courses":
      {
        "coding": ["Tynker", "Codesters (drag n drop python)", "Android apps"],
        "gaming": ["Minecraft"],
        "robotics": ["WeDO"],
        "electronics": ["Microbits"],
        "competitions": ["FLL Jr"]
      }
  },
  {
    "id": 9,
    "courses":
      {
        "coding": ["Codesters", "Codecombat (game based python)", "Android apps"],
        "gaming": ["Minecraft"],
        "robotics": ["Mindstorms"],
        "electronics": ["Microbits"],
        "competitions": ["FLL"]
      }
  },
  {
    "id": 10,
    "courses":
      {
        "coding": ["Codesters", "Codecombat", "Arcade", "HTML/CSS", "Python", "Animations w/ processing"],
        "gaming": ["Roblox", "Unity"],
        "robotics": ["Mindstorms"],
        "electronics": ["Arduino"],
        "competitions": ["FLL", "Technovation"]
      }
  },
  {
    "id": 11,
    "courses":
      {
        "coding": ["Codesters", "Codecombat", "HTML/CSS", "Python", "Animations w/ processing"],
        "gaming": ["Roblox", "Unity"],
        "robotics": ["Mindstorms"],
        "electronics": ["Arduino"],
        "competitions": ["FLL", "Technovation"]
      }
  },
  {
    "id": 12,
    "courses":
      {
        "coding": ["Codecombat", "Javascript", "Java", "Greenfoot", "Animations w/ processing"],
        "gaming": ["Unity"],
        "robotics": ["Mindstorms"],
        "electronics": ["Arduino"],
        "competitions": ["FLL", "Technovation"]
      }
  },
  {
    "id": 13,
    "courses":
      {
        "coding": ["Python", "Java", "Greenfoot", "HTML/CSS", "Animations w/ processing"],
        "gaming": ["Unity"],
        "robotics": ["Mindstorms"],
        "electronics": ["Arduino"],
        "competitions": ["FLL", "Technovation"]
      }
  },
  {
    "id": 14,
    "courses":
      {
        "coding": ["Python", "Java", "Greenfoot", "HTML/CSS", "Animations w/ processing"],
        "gaming": ["Unity"],
        "robotics": ["Mindstorms"],
        "electronics": null,
        "competitions": ["FLL", "Technovation"]
      }
  },
  {
    "id": 15,
    "courses":
      {
        "coding": ["Python", "Java", "Greenfoot", "HTML/CSS", "Animations w/ processing"],
        "gaming": ["Unity"],
        "robotics": null,
        "electronics": null,
        "competitions": ["Technovation"]
      }
  },
  {
    "id": 16,
    "courses":
      {
        "coding": ["Python", "Java", "Greenfoot", "HTML/CSS", "Animations w/ processing"],
        "gaming": ["Unity"],
        "robotics": null,
        "electronics": null,
        "competitions": ["Technovation"]
      }
  },
  {
    "id": 17,
    "courses":
      {
        "coding": ["Python", "Java", "Greenfoot", "HTML/CSS", "Animations w/ processing"],
        "gaming": ["Unity"],
        "robotics": null,
        "electronics": null,
        "competitions": ["Technovation"]
      }
  }
]

var codeDiv = document.getElementById("coding");
var gameDiv = document.getElementById("gaming");
var roboticsDiv = document.getElementById("robotics");
var competitionsDiv = document.getElementById("competitions");

var selectCode = document.getElementById("selectcode");
var selectGame = document.getElementById("select-game");
var selectRobotics = document.getElementById("select-robotics");
var selectCompetitions = document.getElementById("select-competitions");

$("#start").click(function () {
   var selectedAge = $("#select-age option:selected").val();
   //getCourses(selectedAge);
   console.log("selected age: " + selectedAge);

   var courseId = parseInt(selectedAge);
    // iterate over each element in the array
    for (var i = 0; i < courses.length; i++){
    // look for the entry with a matching `code` value
      if (courses[i].id == courseId){
         if(courses[i].courses.coding !== null){
          codeDiv.setAttribute("class", "col-md-3 center");
          var val = courses[i].courses.coding;
          for(var j=0; j < val.length; j++){ 
            var item = val[j]; 
            $("#coding select").append("<option value="+item+">"+item+"</option>")
          } 
         }else{codeDiv.setAttribute("class", "col-md-3 hidden center");}
         if(courses[i].courses.gaming !== null){
          gameDiv.setAttribute("class", "col-md-3 center");
          var val = courses[i].courses.gaming;
          for(var k=0; k < val.length; k++){ 
            var item = val[k]; 
            $("#gaming select").append("<option value="+item+">"+item+"</option>")
          } 
         }else{gameDiv.setAttribute("class", "col-md-3 hidden center");}
         if(courses[i].courses.robotics !== null){
          roboticsDiv.setAttribute("class", "col-md-3 center");
          var val = courses[i].courses.robotics;
          for(var l=0; l < val.length; l++){ 
            var item = val[l]; 
            $("#robotics select").append("<option value="+item+">"+item+"</option>")
          }
         }else{roboticsDiv.setAttribute("class", "col-md-3 hidden center");}
         if(courses[i].courses.competitions !== null){
          competitionsDiv.setAttribute("class", "col-md-3 center");
          var val = courses[i].courses.competitions;
          for(var n=0; n < val.length; n++){ 
            var item = val[n]; 
            $("#competitions select").append("<option value="+item+">"+item+"</option>")
          }
         }else{competitionsDiv.setAttribute("class", "col-md-3 hidden center");}
         return;
      }
    }

});

$("#coding-start").click(function () {
   var selectedGame = $("#selectcoding option:selected").val();
   showDescription(selectedGame);
   //console.log(selectedGame);
});

$("#gaming-start").click(function () {
   var selectedGame = $("#select-gaming option:selected").val();
   showDescription(selectedGame);
   //console.log(selectedGame);
});

$("#robotics-start").click(function () {
   var selectedGame = $("#select-robotics option:selected").val();
   showDescription(selectedGame);
   //console.log(selectedGame);
});

$("#electronics-start").click(function () {
   var selectedGame = $("#select-electronics option:selected").val();
   showDescription(selectedGame);
   //console.log(selectedGame);
});

$("#competition-start").click(function () {
   var selectedGame = $("#select-competitions option:selected").val();
   showDescription(selectedGame);
   //console.log(selectedGame);
});

function showDescription(course){
  var courseToLower = course.toLowerCase();
  var courseDesc = courseToLower+"Desc";
  var desc = "";
  switch (courseDesc) {
    case "pythonDesc":
      desc = "Python is an interpreted, object-oriented, high-level programming language with dynamic semantics.";
      break;
    case "javaDesc":
      desc = "Java is a high-level programming language developed by Sun Microsystems. It was originally designed for developing programs for set-top boxes and handheld devices, but later became a popular choice for creating web applications.";
      break;
    case "greenfootDesc":
      desc = "Greenfoot is an integrated development environment using Java or Stride designed primarily for educational purposes at the high school and undergraduate level.";
      break;
    case "html/cssDesc":
      desc = "Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.";
      break;
    case "animationsDesc":
      desc = "A simulation of movement created by displaying a series of pictures, or frames. Cartoons on television is one example of animation.";
      break;
    case "unityDesc":
      desc = "Unity is a cross-platform game engine developed by Unity Technologies, first announced and released in June 2005 at Apple Inc.'s Worldwide Developers Conference as a Mac OS X-exclusive game engine.";
      break;
    case  "technovationDesc":
      desc = "Equips young women (ages 10-18) to become tech entrepreneurs and leaders. With the support of volunteer mentors, girls work in teams to code mobile apps that address real-world problems.";
      break;
    case "mindstormsDesc":
      desc = "Lego Mindstorms is a hardware and software platform which is produced by Lego for the development of programmable robots based on Lego building blocks.";
      break;
    case "fllDesc":
      desc = "The basis of FLL is a robotics tournament in a cheerful atmosphere, where kids and youngsters need to solve a tricky “mission” with the help of a robot. The kids are researching a given topic within a team, they are planning programming and testing an autonomous robot to solve the mission.";
      break;
    case "arduinoDesc":
      desc = "Arduino is an open-source electronics platform based on easy-to-use hardware and software.";
      break;
    case "tynkerDesc":
      desc = "Tynker is an educational programming platform aimed at teaching children how to make games and programs. Instead of typing the source code, you visually drag blocks of code and snap them together.";
      break;
    case "wedoDesc":
      desc = "The WeDo Software automatically detects the LEGO Hub and any motors and sensors attached to it.";
      break;
    case  "flljrDesc":
      desc = "FIRST LEGO League Jr. is designed to introduce science, technology, engineering and math (STEM) concepts to kids ages 6 to 10 while exciting them through a brand they know and love − LEGO®";
      break;
    case "androidDesc":
      desc = "Android is a mobile operating system developed by Google. It is used by several smartphones and tablets. Examples include the Sony Xperia, the Samsung Galaxy, and the Google Nexus One.";
      break;
    case "microbitsDesc":
      desc = "It is a pocket-sized computer 70 times smaller and 18 times faster than the original BBC Micro computers used in schools.";
      break;
    case "codestersDesc":
      desc = "Codester is a web design asset marketplace. It includes graphic elements, code snippets and tools to help you move projects along faster or even solve gaps in your skillsets.";
      break;
    case "minecraftDesc":
      desc = "Minecraft is a Lego style adventure game which has massively increased in popularity since it was released two years ago.";
      break;
    case  "codecombatDesc":
      desc = "CodeCombat is an educational video game for learning software programming concepts and languages. Students learn to type coding languages like JavaScript, Python, HTML and CoffeeScript, as well as learning the fundamentals of computer science.";
      break;
    case  "robloxDesc":
      desc = "Roblox is a game creation platform which allows players to create their own games using its proprietary engine, Roblox Studio. Games are coded under an Object Oriented Programming system utilizing the programming language Lua to manipulate the environment of the game.";
  }
  $('#myModal').modal('show');
  document.getElementById("description-header").innerHTML = course;
  document.getElementById("description").innerHTML = desc;
  console.log(desc);
}
