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
    'https://anitype.fun/_next/image?url=https%3A%2F%2Fstorage.anitype.fun%2Ftrailers%2F40748%2Ftrailer.webp&w=3840&q=100',
    'https://anitype.fun/_next/image?url=https%3A%2F%2Fstorage.anitype.fun%2Ftrailers%2F51009%2Ftrailer.webp&w=3840&q=100',
    'https://anitype.fun/_next/image?url=https%3A%2F%2Fstorage.anitype.fun%2Ftrailers%2F47778%2Ftrailer.webp&w=3840&q=100',
    'https://anitype.fun/_next/image?url=https%3A%2F%2Fstorage.anitype.fun%2Ftrailers%2F52991%2Ftrailer.webp&w=3840&q=100',
    'https://anitype.fun/_next/image?url=https%3A%2F%2Fstorage.anitype.fun%2Ftrailers%2F22319%2Ftrailer.webp&w=3840&q=100',
    'https://anitype.fun/_next/image?url=https%3A%2F%2Fstorage.anitype.fun%2Ftrailers%2F269%2Ftrailer.webp&w=3840&q=100',
    'https://anitype.fun/_next/image?url=https%3A%2F%2Fstorage.anitype.fun%2Ftrailers%2F30831%2Ftrailer.webp&w=3840&q=100'
    
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

else if (paperSource === 'https://anitype.fun/_next/image?url=https%3A%2F%2Fstorage.anitype.fun%2Ftrailers%2F40748%2Ftrailer.webp&w=3840&q=100') {
    title.textContent = "Магическая битва";
    caption.textContent = "Действие аниме происходит в мире, где люди оказались вовсе не последним звеном в пищевой цепи, и любой ничего не подозревающий обыватель при должной доле невезения может оказаться съеденным демонами, которые воплощают собой негативные человеческие эмоции. Таких созданий называют проклятиями. Пускай люди в большинстве своём не догадываются о существовании проклятий, те имеют уже давнюю историю, одним из эпизодов которой являются деяния легендарного демона Сукуны Рёмэна, которого с большим трудом удалось одолеть. Его тело было поделено на двадцать частей, которые оказались разбросаны по миру.";
    video.src = "https://storage.anitype.fun/trailers/40748/trailer.webm";
    video.load();
}

else if (paperSource === 'https://anitype.fun/_next/image?url=https%3A%2F%2Fstorage.anitype.fun%2Ftrailers%2F51009%2Ftrailer.webp&w=3840&q=100') {
    title.textContent = "Магическая битва 2";
    caption.textContent = "Тридцать первое октября 2018 года, район Сибуя. Множество простых людей заключены под магической завесой и взяты в заложники союзом проклятых духов под началом Махито и Гэто. Всех гражданских обещают выпустить невредимыми только с одним условием: сильнейший маг современности Сатору Годзё должен явиться в Сибую и принять бой.";
    video.src = "https://storage.anitype.fun/trailers/51009/trailer.webm";
    video.load();
}

else if (paperSource === 'https://anitype.fun/_next/image?url=https%3A%2F%2Fstorage.anitype.fun%2Ftrailers%2F47778%2Ftrailer.webp&w=3840&q=100') {
    title.textContent = "Клинок, рассекающий демонов: Квартал красных фонарей";
    caption.textContent = "Продолжение приключений Тандзиро и его неизменных спутников: сестры-демона Нэдзуко, вечно ноющего Дзэнъицу и сорвиголовы Иносукэ. На этот раз «столп звука» Тэнгэн Удзуй берёт их с собой на задание в Квартал красных фонарей, где в последнее время стали пропадать люди. Причиной этого скорее всего служат демоны. Так кто же стоит за всеми исчезновениями, и смогут ли наши герои с ним справиться?";
    video.src = "https://storage.anitype.fun/trailers/47778/trailer.webm";
    video.load();
}

else if (paperSource === 'https://anitype.fun/_next/image?url=https%3A%2F%2Fstorage.anitype.fun%2Ftrailers%2F52991%2Ftrailer.webp&w=3840&q=100') {
    title.textContent = "Провожающая в последний путь Фрирен";
    caption.textContent = "Одержав победу над Королём демонов, отряд героя Химмеля вернулся домой. Приключение, растянувшееся на десятилетие, подошло к завершению. Волшебница-эльф Фрирен и её отважные товарищи принесли людям мир и разошлись в разные стороны, чтобы спокойно прожить остаток жизни. Однако не всех членов отряда ждёт одинаковая участь.";
    video.src = "https://storage.anitype.fun/trailers/52991/trailer.webm";
    video.load();
}

else if (paperSource === 'https://anitype.fun/_next/image?url=https%3A%2F%2Fstorage.anitype.fun%2Ftrailers%2F22319%2Ftrailer.webp&w=3840&q=100') {
    title.textContent = "Токийский гуль";
    caption.textContent = "В Токио происходит серия жестоких убийств. На местах преступлений практически нет улик, однако все уверены, что виновниками являются гули, пожирающие людей, хотя никто толком не знает, кто они и как выглядят. Эти события мало волнуют Кэна Канэки, но вместе со своим лучшим другом Хидэёши Нагачикой он считает, что гулей до сих пор не обнаружили только потому, что они ловко маскируются под своих жертв...";
    video.src = "https://storage.anitype.fun/trailers/22319/trailer.webm";
    video.load();
}

else if (paperSource === 'https://anitype.fun/_next/image?url=https%3A%2F%2Fstorage.anitype.fun%2Ftrailers%2F269%2Ftrailer.webp&w=3840&q=100') {
    title.textContent = "Блич";
    caption.textContent = "Ичиго Куросаки с детства мог видеть призраков и духов умерших. Сейчас ему пятнадцать, живёт он в современной Японии и учится в старшей школе. В один ничем не примечательный день в его спальне внезапно объявляется девушка — Рукия Кучики. Она синигами и сильно удивлена тем, что Ичиго может не только видеть её, но и, неслыханное дело, касаться.";
    video.src = "https://storage.anitype.fun/trailers/269/trailer.webm";
    video.load();
}

else if (paperSource === 'https://anitype.fun/_next/image?url=https%3A%2F%2Fstorage.anitype.fun%2Ftrailers%2F30831%2Ftrailer.webp&w=3840&q=100') {
    title.textContent = "Этот замечательный мир!";
    caption.textContent = "Так уж получилось, что жизнь Казумы Сато, хикикомори, увлечённого видеоиграми, оборвалась в результате дорожно-транспортного происшествия. Такая вот суровая плата за хороший поступок, за спасение человека. Однако, очнувшись, парень вдруг понял, что жив-здоров, а перед собой увидел симпатичную девушку, Акву, представившуюся богиней.";
    video.src = "https://storage.anitype.fun/trailers/30831/trailer.webm";
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
    
}, 5000);


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
