// var songs=["song1.mp3","song2.mp3","song3.mp3"];
var fillbar=document.getElementById("fill");
var songtitle=document.getElementById("title");
var song= new Audio();
// var vid=new VideoTrack();
var i=0,j=1,k=-1,l,flag=0;
var mail=[],pass=[];
var  name,video;
window.onload=function playnow(){
  $("#vid").get(0).play();
songtitle.textContent="Song"+i;
  song.src="./songs/song"+i+".mp3";

}
function playpause(){
    if(i==0){
        alert("You need to login first!!!!!")
        document.querySelector(".bg-modal").style.display="flex";
    }
    else{
    if(song.paused){
        $("#vid").get(0).play();
        song.play();
      $("#five").toggleClass("glyphicon glyphicon glyphicon-pause")
    }else{
        $("#vid").get(0).pause();
        song.pause();
        $("#five").toggleClass("glyphicon glyphicon glyphicon-play")
    
    }
}
}
song.addEventListener('timeupdate',function(){
    var position=song.currentTime/song.duration;
    fillbar.style.width=position*100+"%";
})


function next(){
    i++;
    j++;
    if(i==19)
    {
    i=1;
}
if(j>8){
    j=1;
}

video="./videos/video"+j+".mp4"
name="./posters/poster"+i+".jpg"
songtitle.textContent="Song"+i;
document.getElementById("vid").setAttribute("src",video)
document.getElementById("poster").setAttribute("src",name)
song.src="./songs/song"+i+".mp3";
$("#vid").get(0).play();
song.play();
}

function pre(){
    i--;
    j--;
    if(i<1)
    {
    i=18;
}

if(j<1){
    j=8;
}
video="./videos/video"+j+".mp4"
name="./posters/poster"+i+".jpg"
songtitle.textContent="song"+i;
document.getElementById("vid").setAttribute("src",video)
document.getElementById("poster").setAttribute("src",name)
song.src="./songs/song"+i+".mp3";
$("#vid").get(0).play();
song.play();
}

function select(a){
    if(i==0){
        alert("You need to login first!!!!!")
        document.querySelector(".bg-modal").style.display="flex";
    }
    else{
i=a;
j++;
if(j>8){
    j=1;
}
video="./videos/video"+j+".mp4"
name="./posters/poster"+i+".jpg"
songtitle.textContent="song"+i;
document.getElementById("vid").setAttribute("src",video)
document.getElementById("poster").setAttribute("src",name)
song.src="./songs/song"+i+".mp3";
$("#vid").get(0).play();
song.play();
}
}
document.querySelector(".login").addEventListener("click",function(){
    if(i==0){
    document.querySelector(".bg-modal").style.display="flex";
    }
    else{
        alert("Already Logged In")
    }    
});

document.getElementById("finish").addEventListener("click",function(){

document.querySelector(".bg-modal").style.display="none";

});
document.getElementById("finish2").addEventListener("click",function(){

    document.querySelector(".bg-modal2").style.display="none";
    
    });
// document.getElementById("finish").addEventListener("click",function(){

//     window.open("index.html");
// });
document.getElementById("new").addEventListener("click",function(){
    var user1=$("#email").val();
    var pass1=$("#password").val();
    for(l=0;l<=k;l++){
        if(mail[l]==user1 && pass[l]==pass1){
            alert("Successfully Logged In")
            flag=1;
            break;
        }
    }
    if(flag==0){
        alert("Enter Correct Email And Password")
        $("#email").focus();
        return false;
			
    }
    if(flag==1){
    document.querySelector(".bg-modal").style.display="none";
    i=1;
    video="./videos/video"+j+".mp4"
    name="./posters/poster"+i+".jpg"
    songtitle.textContent="song"+i;
    document.getElementById("vid").setAttribute("src",video)
    document.getElementById("poster").setAttribute("src",name)
    song.src="./songs/song"+i+".mp3";
    $("#vid").get(0).play();
    song.play();
}
})







// SIGnup----------------------------------------------------------------------------------------------
document.querySelector(".signup").addEventListener("click",function(){
    document.querySelector(".bg-modal").style.display="none";
    document.querySelector(".bg-modal2").style.display="flex";
})
document.querySelector("#new1").addEventListener("click",function(){
    document.querySelector(".bg-modal").style.display="none";

    document.querySelector(".bg-modal2").style.display="flex";
})
document.querySelector("#new2").addEventListener("click",function(){
    var b=$("#user").val();
    if(b.length<=4){
        alert("User length is less than 4");
        $("#user").focus();
        return false;
    }

    var x=$("#email1").val();
    var atpos=x.indexOf("@");
		var dotpos=x.indexOf(".");
		var dotposlast=x.lastIndexOf(".");

		if(x==""||atpos<1||dotpos<=atpos+2||dotposlast+2>=x.length)
		{
			alert("please provide correct Email ID");
			document.getElementById("email1").focus();
			return false;

        }
        
        p1=document.getElementById("password1").value
		p2=document.getElementById("password2").value
		if(p1=="")
		{
			alert("please create your password");
			document.getElementById("password1").focus();
			return false;
        }
        if(p1!=p2){

			alert("please enter same password");
			document.getElementById("password2").focus();
			return false;
        }
      k++;
      mail[k]=x;
      pass[k]=p1;
    document.querySelector(".bg-modal2").style.display="none";
    alert("Register Successfully")
    document.querySelector(".bg-modal").style.display="flex";
})

