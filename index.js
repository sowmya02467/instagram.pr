
var random= Math.floor(Math.random() *12 +1)
document.querySelector(".numberOfPosts").innerHTML =random

// here i given limit of posts (10000 follower posts and following posts)

document.querySelector(".followerPosts").innerHTML= Math.floor(Math.random() *10000)
document.querySelector(".followingPosts").innerHTML= Math.floor(Math.random() *10000)

// here i fetch the some fake data through the fake store api data, the the fake store api link 

fetch('https://randomuser.me/api/').then(response=>{
     response.json().then(data=>{
      let user =data.results[0];
      document.querySelector(".profileName").innerHTML= user.name.first
      document.querySelector('.bioName').innerHTML = user .name.first +' '+ user .name .last;
      document.querySelector('.profilePicture').src = user.picture.medium;
     
      // here i use picsum photos for storys of posts
      for(i=0;i<random;i++){
        let img =document.createElement('img')
      img.src ='https://picsum.photos/9'+i;
      document.querySelector('.posts').append(img);
      }



      
     })
})
            