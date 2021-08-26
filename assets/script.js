var fname = document.getElementById('name');
var flocation = document.getElementById('location');
var fbio = document.getElementById('bio');
var fskill = document.getElementById('skills');
var myModal = document.getElementById('modal');


var profile = {
        "name": "John Doe",
        "location": "BCD, Philippines",
        "bio": "Designer, Photography, Front End Developer, Sports Enthusiast",
        "skills": [
            
                {"skill": "UX/UI"},
                {"skill": "Photoshop"},
                {"skill": "React JS"},
                {"skill": "Front End"},
            
        ]
    }

var skills = profile.skills
{
    skills&&skills.map((data, index) => {        
        fskill.innerHTML  += `<p>${data.skill}</p>`;
    })
}


fname.innerHTML  = profile.name;
flocation.innerHTML  = profile.location;
fbio.innerHTML  = profile.bio;

// Open URL to New Tab
function onclickInfo(){
  var  URL = 'https://felixdiaz.netlify.app/';
  window.open(URL, '_blank').focus();
}

// Social URL
function socialFb(){
  var  URL = 'https://www.facebook.com/profile.php?id=100001540869064';
  window.open(URL, '_blank').focus();
}
function socialGithub(){
  var  URL = 'https://github.com/zaids2641/';
  window.open(URL, '_blank').focus();
}
function socialLinkedin(){
  var  URL = 'https://www.linkedin.com/in/felix-diaz-iii-819b3210a/';
  window.open(URL, '_blank').focus();
}

// Simple Modal Funtion
function modalOpen(){
    myModal.style.opacity = '1';
    myModal.style.zIndex = '999';
}

function modalClose(){
    myModal.style.opacity = '0';
    myModal.style.zIndex = '-1';
}