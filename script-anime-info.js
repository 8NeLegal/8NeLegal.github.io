const video = document.getElementById("anime-info-bg-video");
const blur_video = document.getElementById("anime-info-bg");


video.addEventListener('ended', function() {
    blur_video.style.cssText = "filter: blur(20px)"
});


const button_activity_bookmark = document.getElementById("button-activity-bookmark");
const button_activity_bell = document.getElementById("button-activity-bell");
const button_activity_share = document.getElementById("button-activity-share");


function bookmark_active() {
    button_activity_bookmark.style.cssText = "color: white";
    button_activity_bookmark.removeEventListener("click", bookmark_active);
    button_activity_bookmark.addEventListener("click", bookmark_deactive);
}

function bookmark_deactive() {
    button_activity_bookmark.style.cssText = "color: #454545";
    button_activity_bookmark.removeEventListener("click", bookmark_deactive);
    button_activity_bookmark.addEventListener("click", bookmark_active);
}


button_activity_bookmark.addEventListener("click", bookmark_active)


function bell_active() {
    button_activity_bell.style.cssText = "color: white";
    button_activity_bell.removeEventListener("click", bell_active);
    button_activity_bell.addEventListener("click", bell_deactive);
}

function bell_deactive() {
    button_activity_bell.style.cssText = "color: #454545";
    button_activity_bell.removeEventListener("click", bell_deactive);
    button_activity_bell.addEventListener("click", bell_active);
}


button_activity_bell.addEventListener("click", bell_active)


button_activity_share.addEventListener('click', function() {
    button_activity_share.style.opacity = "0";

    const url_input = document.getElementById("url-input");
    const url_close = document.getElementById("url-close");
    const url_copy = document.getElementById("url-copy");
    const url_anime = window.location.href;

    url_input.style.opacity = "1";
    url_input.style.cursor = "text";
    url_copy.style.opacity = "1";
    button_activity_share.style.marginRight = "-52px";
    
    url_input.value = url_anime;

    url_copy.addEventListener('click', function() {
        url_input.select();

        navigator.clipboard.writeText(url_input.value).then(function() {
            url_input.blur();
            url_input.style.opacity = "0";
            url_input.style.cursor = "default";
            url_copy.style.opacity = "0";
            button_activity_share.style.marginRight = "2px";
            button_activity_share.style.opacity = "1";
        }).catch(function(error) {
            console.error('Ошибка при копировании текста:', error);
        });
    })
})


const anime_back = document.getElementById("user-back");
    
anime_back.addEventListener("click", function() {
    window.location.href = "../index.html";
})


const mmm_btn_1 = document.getElementById("mmm-btn-1");
const mmm_btn_2 = document.getElementById("mmm-btn-2");


mmm_btn_1.focus();

while (mmm_btn_1.focus) {
  console.debug("mmm-1")
  break;
}


const slider = document.getElementById('swipper-slider-hr');

slider.addEventListener('wheel', function(event) {
    slider.scrollLeft += event.deltaY;
});

window.scrollTo(0, 0);


const openview = document.getElementById("img-openview");
const openviewel = document.getElementById("img-openview-el");

document.addEventListener('keydown', event => {
    if (event.key === "Escape") {
        openview.style.display = "none";
        openviewel.innerHTML.src = "";
    }
});

openview.addEventListener('click', function() {
    openview.style.display = "none";
    openviewel.innerHTML.src = "";
})


const swipperel_1 = document.getElementById("swipper-element-hr-1")
const swipperel_2 = document.getElementById("swipper-element-hr-2")
const swipperel_3 = document.getElementById("swipper-element-hr-3")
const swipperel_4 = document.getElementById("swipper-element-hr-4")
const swipperel_5 = document.getElementById("swipper-element-hr-5")
const swipperel_6 = document.getElementById("swipper-element-hr-6")
const swipperel_7 = document.getElementById("swipper-element-hr-7")
const swipperel_8 = document.getElementById("swipper-element-hr-8")
const swipperel_9 = document.getElementById("swipper-element-hr-9")
const swipperel_10 = document.getElementById("swipper-element-hr-10")
const swipperel_11 = document.getElementById("swipper-element-hr-11")
const swipperel_12 = document.getElementById("swipper-element-hr-12")
const swipperel_13 = document.getElementById("swipper-element-hr-13")
const swipperel_14 = document.getElementById("swipper-element-hr-14")
const swipperel_15 = document.getElementById("swipper-element-hr-15")


swipperel_1.addEventListener("click", function() {
    const swurl_img = swipperel_1.src;
    openview.style.display = "block";
    openviewel.src = swurl_img;
})


swipperel_2.addEventListener("click", function() {
    const swurl_img = swipperel_2.src;
    openview.style.display = "block";
    openviewel.src = swurl_img;
})

swipperel_3.addEventListener("click", function() {
    const swurl_img = swipperel_3.src;
    openview.style.display = "block";
    openviewel.src = swurl_img;
})

swipperel_4.addEventListener("click", function() {
    const swurl_img = swipperel_4.src;
    openview.style.display = "block";
    openviewel.src = swurl_img;
})

swipperel_5.addEventListener("click", function() {
    const swurl_img = swipperel_5.src;
    openview.style.display = "block";
    openviewel.src = swurl_img;
})

swipperel_6.addEventListener("click", function() {
    const swurl_img = swipperel_6.src;
    openview.style.display = "block";
    openviewel.src = swurl_img;
})

swipperel_7.addEventListener("click", function() {
    const swurl_img = swipperel_7.src;
    openview.style.display = "block";
    openviewel.src = swurl_img;
})

swipperel_8.addEventListener("click", function() {
    const swurl_img = swipperel_8.src;
    openview.style.display = "block";
    openviewel.src = swurl_img;
})

swipperel_9.addEventListener("click", function() {
    const swurl_img = swipperel_9.src;
    openview.style.display = "block";
    openviewel.src = swurl_img;
})

swipperel_10.addEventListener("click", function() {
    const swurl_img = swipperel_10.src;
    openview.style.display = "block";
    openviewel.src = swurl_img;
})

swipperel_11.addEventListener("click", function() {
    const swurl_img = swipperel_11.src;
    openview.style.display = "block";
    openviewel.src = swurl_img;
})

swipperel_12.addEventListener("click", function() {
    const swurl_img = swipperel_12.src;
    openview.style.display = "block";
    openviewel.src = swurl_img;
})

swipperel_13.addEventListener("click", function() {
    const swurl_img = swipperel_13.src;
    openview.style.display = "block";
    openviewel.src = swurl_img;
})

swipperel_14.addEventListener("click", function() {
    const swurl_img = swipperel_14.src;
    openview.style.display = "block";
    openviewel.src = swurl_img;
})

swipperel_15.addEventListener("click", function() {
    const swurl_img = swipperel_15.src;
    openview.style.display = "block";
    openviewel.src = swurl_img;
})










