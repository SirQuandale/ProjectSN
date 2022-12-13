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
let text = '<div class="pwr">' + '<article>' + ' <div class="sideArtc">' + '<img src="img/1946428.png" alt="Account Settings" class="pfp">'+ '<img src="img/99021d.png" alt="Like" class="like">' + '<p class="likeCount">99</p>' + '<img src="img/99022d.png" alt="dislike" class="dislike">' + '<p class="dislikeCount">99</p>' +'</div>' + '<h3>Template</h3>' + postTxt + '<p class="rmt">Read More</p>' + '</article>' + '<br>' + '</div>';

document.querySelector('.list').innerHTML += text;
document.querySelector('.list').innerHTML += text;
document.querySelector('.list').innerHTML += text;
document.querySelector('.list').innerHTML += text;
document.querySelector('.list').innerHTML += text;
document.querySelector('.list').innerHTML += text;
document.querySelector('.list').innerHTML += text;
document.querySelector('.list').innerHTML += text;
document.querySelector('.list').innerHTML += text;