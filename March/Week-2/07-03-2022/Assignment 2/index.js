let home = document.getElementById("home");
let search = document.getElementById("search");   
let reels = document.getElementById("reels");
let activity = document.getElementById("activity");
let profile = document.getElementById("profile");


let search_show = function (){
 search.classList.remove("none");
 home.classList.add("none");
 reels.classList.add("none");
 activity.classList.add("none");
 profile.classList.add("none");
}
let reels_show = function (){
    search.classList.add("none");
    home.classList.add("none");
    reels.classList.remove("none");
    activity.classList.add("none");
    profile.classList.add("none");
   }
   let activity_show = function (){
    search.classList.add("none");
    home.classList.add("none");
    reels.classList.add("none");
    activity.classList.remove("none");
    profile.classList.add("none");
   }
   let profile_show = function (){
    search.classList.add("none");
    home.classList.add("none");
    reels.classList.add("none");
    activity.classList.add("none");
    profile.classList.remove("none");
   }
   let home_show = function (){
    search.classList.add("none");
    home.classList.remove("none");
    reels.classList.add("none");
    activity.classList.add("none");
    profile.classList.add("none");
   }