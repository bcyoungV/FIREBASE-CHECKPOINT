

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAgzMr9WkiqKG1KG2E3s6K4udcWYWgVLc8",
    authDomain: "mydatabase-95428.firebaseapp.com",
    databaseURL: "https://mydatabase-95428.firebaseio.com",
    projectId: "mydatabase-95428",
    storageBucket: "",
    messagingSenderId: "940034454727",
    appId: "1:940034454727:web:bf88c7f2007be511"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var messagesRef = firebase.database().ref('mydatabase-95428');

function submitForm(e){
    e.preventDefault();
    var name = document.getElementById('name').value;
    var track = document.getElementById('track').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    saveMessage(name,track,email,phone);
}
document.getElementById('contactForm').addEventListener('submit', submitForm);

function saveMessage(name,track,phone,email){
var newMessageRef=messagesRef.push();
newMessageRef.set({
    name: name,
    track: track,
    email: email,
    phone: phone,
});
}

function B(){
    document.getElementById("textarea1").style.fontWeight="bold";
}
function I(){
    document.getElementById("textarea1").style.fontStyle="italic";
}

function U(){
    document.getElementById("textarea1").style.textDecoration="underline";
}

var x=document.getElementById("textarea1");
function px()
{
    x.style.fontSize=document.getElementById("select").value;
}
function font()
{
    x.style.fontFamily=document.getElementById("fs").value;
}

$(document).ready(function(){
    $("#hide").click(function(){
        $("p").hide();
    });
    $("#show").click(function(){
        $("p").show();
    });
});


$(document).ready(function(){
    $("button").click(function(){
        $("#ppp").toggle();
    });
});




$("button").click(function(){
    $("#first").fadeOut();
    $("#second").fadeOut("slow");
    $("#third").fadeOut("3000");
});





$("#bby1").mouseover(function(){
    $("#btn1").show();
    $("#bby1").css("opacity","0.7");

});

$("#bby1").mouseleave(function(){
    $("#btn1").hide();
    $("#bby1").css("opacity","1");
});


$("#bby2").mouseover(function(){
    $("#btn2").show();
    $("#bby2").css("opacity","0.7");
});

$("#bby2").mouseleave(function(){
    $("#btn2").hide();
    $("#bby2").css("opacity","1");
});

$("#bby3").mouseover(function(){
    $("#btn3").show();
    $("#bby3").css("opacity","0.7");
});

$("#bby3").mouseleave(function(){
    $("#btn3").hide();
    $("#bby3").css("opacity","1");
});

$("#bby4").mouseover(function(){
    $("#btn4").show();
    $("#bby4").css("opacity","0.7");
});
$("#bby4").mouseleave(function(){
    $("#btn4").hide();
    $("#bby4").css("opacity","1");
});

$("#bby5").mouseover(function(){
    $("#btn5").show();
    $("#bby5").css("opacity","0.7");
});
$("#bby5").mouseleave(function(){
    $("#btn5").hide();
    $("#bby5").css("opacity","1");
});

$("#bby6").mouseover(function(){
    $("#btn6").show();
    $("#bby6").css("opacity","0.7");
});
$("#bby6").mouseleave(function(){
    $("#btn6").hide();
    $("#bby6").css("opacity","1");
});
$("#bby7").mouseover(function(){
    $("#btn7").show();
    $("#bby7").css("opacity","0.7");
});
$("#bby7").mouseleave(function(){
    $("#btn7").hide();
    $("#bby7").css("opacity","1");
});
$("#bby8").mouseover(function(){
    $("#btn8").show();
    $("#bby8").css("opacity","0.7");
});
$("#bby8").mouseleave(function(){
    $("#btn8").hide();
    $("#bby8").css("opacity","1");
});
$("#bby9").mouseover(function(){
    $("#btn9").show();
    $("#bby9").css("opacity","0.7");
});
$("#bby9").mouseleave(function(){
    $("#btn9").hide();
    $("#bby9").css("opacity","1");
});




