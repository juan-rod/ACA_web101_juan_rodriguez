var APIKEY = '3HO564QDXYUH7sYVfbkSzzlVKm5Udo6z'


function getGif () {
  // var firstName = document.getElementsByClassName('firstName')[0].value
  var firstName = document.querySelector('.firstName').value
  console.log('firstName:', firstName)
  var lastName = document.querySelector('.lastName').value
  var gifBar = document.querySelector('.gifBar')
  var xhr = $.get("http://api.giphy.com/v1/gifs/search?q="+firstName+lastName+"&api_key="+APIKEY+"&limit=5");
  xhr.done(function(data) { 
    console.log("success got data", data); 
    var imgElement = document.createElement('img')
    imgElement.setAttribute('src',item.data.images.original.url)
    gifBar.append(imgElement)
  });
} 