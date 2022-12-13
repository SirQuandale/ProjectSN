function readMoreFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.querySelector('.rmt');

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

let postTxt = '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.</p>'
let text = '<div class="pwr">' + '<article>' + ' <div class="sideArtc">' + '<img src="img/1946428.png" alt="Account Settings" class="pfp">' + '<img src="img/99021d.png" alt="Like" class="like">' + '<p class="likeCount">99</p>' + '<img src="img/99022d.png" alt="dislike" class="dislike">' + '<p class="dislikeCount">99</p>' + '</div>' + '<h3>Template</h3>' + postTxt + '<p class="rmt">Read More</p>' + '</article>' + '<br>' + '</div>';

document.querySelector('.list').innerHTML += text;
document.querySelector('.list').innerHTML += text;
document.querySelector('.list').innerHTML += text;
document.querySelector('.list').innerHTML += text;
document.querySelector('.list').innerHTML += text;
document.querySelector('.list').innerHTML += text;
document.querySelector('.list').innerHTML += text;
document.querySelector('.list').innerHTML += text;
document.querySelector('.list').innerHTML += text;

const menuButton = document.querySelector('.acImg');
let menuButtonFunction = 'X';
const postButton = document.querySelector('.pwr');

function navigationButton() {
  if (menuButtonFunction == 'X') {
    document.querySelector('.overlay').style.zIndex = '3';
    document.querySelector('.overlay').style.filter = 'alpha(opacity=80)';
    document.querySelector('.overlay').style.opacity = "0.8";
    document.getElementById("mySidenav").style.width = "300px";
    menuButton.classList.toggle("change");
    menuButtonFunction = 'O';
  } else if (menuButtonFunction = 'O') {
    document.getElementById("mySidenav").style.width = "0";
    document.querySelector('.overlay').style.filter = 'alpha(opacity=0)';
    document.querySelector('.overlay').style.opacity = "0";
    document.querySelector('.overlay').style.zIndex = '-1';
    menuButton.classList.toggle("change");
    menuButtonFunction = 'X';
  }
}

//* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

function openPage() {
  window.open('pages/post.html', '_self');
}

postButton.addEventListener('click', openPage);