var infobuttons = document.getElementById("info-anime-buttons");
var source = document.getElementById("banner-anime-source");
var detailed = document.getElementById("button-detailed");
var caption = document.getElementById("caption-anime");
var volume = document.getElementById("button-volume");
var title = document.getElementById("title-anime");
var video = document.getElementById("banner-video");
var paper = document.getElementById("banner-paper");
var play = document.getElementById("button-play");
var info = document.getElementById("info-anime")


var papers = [
    'res/banners/paper/oshi no ko.png',
    'res/banners/paper/jujutsu kaisen.png',
    'res/banners/paper/kimetsu no yaiba yuukaku-hen.png',
    'res/banners/paper/sousou no frieren.png',
    'res/banners/paper/tokyo ghoul.png'
    // Добавьте другие имена файлов
];

var randomIndex = Math.floor(Math.random() * papers.length);
var paperSource = papers[randomIndex];

function setRandomPapers() {
    paper.src = paperSource;
    paper.load();
}

window.onload = setRandomPapers;


if (paperSource === 'res/banners/paper/oshi no ko.png') {
    title.textContent = "Ребёнок идола";
    caption.textContent = "Красная ковровая дорожка, яркие вспышки фотоаппаратов, восторженные вскрики поклонников! Наверняка каждый хоть раз в жизни мечтал прославиться: стать знаменитым музыкантом, востребованным актёром или популярным певцом. Только вот путь становления звездой тернист, и лишь немногим удаётся осуществить мечту. Но что, если двери в шоу-бизнес были бы открыты с самого начала?";
    video.src = "res/banners/video/oshi no ko.mp4";
    video.load();
} 

else if (paperSource === 'res/banners/paper/jujutsu kaisen.png') {
    title.textContent = "Магическая битва";
    caption.textContent = "Действие аниме происходит в мире, где люди оказались вовсе не последним звеном в пищевой цепи, и любой ничего не подозревающий обыватель при должной доле невезения может оказаться съеденным демонами, которые воплощают собой негативные человеческие эмоции. Таких созданий называют проклятиями. Пускай люди в большинстве своём не догадываются о существовании проклятий, те имеют уже давнюю историю, одним из эпизодов которой являются деяния легендарного демона Сукуны Рёмэна, которого с большим трудом удалось одолеть. Его тело было поделено на двадцать частей, которые оказались разбросаны по миру.";
    video.src = "res/banners/video/jujutsu kaisen.mp4";
    video.load();
}

else if (paperSource === 'res/banners/paper/kimetsu no yaiba yuukaku-hen.png') {
    title.textContent = "Клинок, рассекающий демонов: Квартал красных фонарей";
    caption.textContent = "Продолжение приключений Тандзиро и его неизменных спутников: сестры-демона Нэдзуко, вечно ноющего Дзэнъицу и сорвиголовы Иносукэ. На этот раз «столп звука» Тэнгэн Удзуй берёт их с собой на задание в Квартал красных фонарей, где в последнее время стали пропадать люди. Причиной этого скорее всего служат демоны. Так кто же стоит за всеми исчезновениями, и смогут ли наши герои с ним справиться?";
    video.src = "res/banners/video/kimetsu no yaiba yuukaku-hen.mp4";
    video.load();
}

else if (paperSource === 'res/banners/paper/sousou no frieren.png') {
    title.textContent = "Провожающая в последний путь Фрирен";
    caption.textContent = "Одержав победу над Королём демонов, отряд героя Химмеля вернулся домой. Приключение, растянувшееся на десятилетие, подошло к завершению. Волшебница-эльф Фрирен и её отважные товарищи принесли людям мир и разошлись в разные стороны, чтобы спокойно прожить остаток жизни. Однако не всех членов отряда ждёт одинаковая участь.";
    video.src = "https://youtu.be/-jGBp5HBLFs?si=o-nzbj_hnOub6E8t";
    video.load();
}

else if (paperSource === 'res/banners/paper/tokyo ghoul.png') {
    title.textContent = "Токийский гуль";
    caption.textContent = "В Токио происходит серия жестоких убийств. На местах преступлений практически нет улик, однако все уверены, что виновниками являются гули, пожирающие людей, хотя никто толком не знает, кто они и как выглядят. Эти события мало волнуют Кэна Канэки, но вместе со своим лучшим другом Хидэёши Нагачикой он считает, что гулей до сих пор не обнаружили только потому, что они ловко маскируются под своих жертв...";
    video.src = "res/banners/video/tokyo ghoul.mp4";
    video.load();
}





setTimeout(function() {

    paper.style.opacity = "0";

    paper.addEventListener('transitionend', function() {
        volume.style.opacity = "1";
        volume.style.pointerEvents = "auto";
        paper.style.display = "none";
        video.style.display = "block";
        caption.style.display = "none";
        title.classList.toggle("title-anime-animate");
        info.classList.toggle("info-anime-animate")
        video.play();
    });
    
}, 4000);


video.addEventListener('ended', function() {
    paper.style.opacity = "1";
    volume.style.opacity = "0";
    volume.style.pointerEvents = "none";
    video.style.display = 'none';
    paper.style.display = 'block';
    caption.style.display = "block";
    title.classList.remove("title-anime-animate");
    info.classList.remove("info-anime-animate")

});


volume.addEventListener("click", function() {

    video.muted = !video.muted;

    if (video.muted) {
        volume.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
    } else {
        volume.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
    }

});
