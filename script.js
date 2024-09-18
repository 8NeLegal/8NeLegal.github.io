var infobuttons = document.getElementById("info-anime-buttons");
var source = document.getElementById("banner-anime-source");
var detailed = document.getElementById("button-detailed");
var caption = document.getElementById("caption-anime");
var volume = document.getElementById("button-volume");
var avatar = document.getElementById("user-avatar");
var video = document.getElementById("banner-video");
var paper = document.getElementById("banner-paper");
var title = document.getElementById("title-anime");
var play = document.getElementById("button-play");
var info = document.getElementById("info-anime");


var papers = [
    'res/banners/paper/oshi no ko.png',
    'https://anitype.fun/_next/image?url=https%3A%2F%2Fstorage.anitype.fun%2Ftrailers%2F40748%2Ftrailer.webp&w=3840&q=100',
    'https://anitype.fun/_next/image?url=https%3A%2F%2Fstorage.anitype.fun%2Ftrailers%2F51009%2Ftrailer.webp&w=3840&q=100',
    'https://anitype.fun/_next/image?url=https%3A%2F%2Fstorage.anitype.fun%2Ftrailers%2F47778%2Ftrailer.webp&w=3840&q=100',
    'https://anitype.fun/_next/image?url=https%3A%2F%2Fstorage.anitype.fun%2Ftrailers%2F52991%2Ftrailer.webp&w=3840&q=100',
    'https://anitype.fun/_next/image?url=https%3A%2F%2Fstorage.anitype.fun%2Ftrailers%2F22319%2Ftrailer.webp&w=3840&q=100',
    'https://anitype.fun/_next/image?url=https%3A%2F%2Fstorage.anitype.fun%2Ftrailers%2F269%2Ftrailer.webp&w=3840&q=100',
    'https://anitype.fun/_next/image?url=https%3A%2F%2Fstorage.anitype.fun%2Ftrailers%2F30831%2Ftrailer.webp&w=3840&q=100',
    'https://anitype.fun/_next/image?url=https%3A%2F%2Fstorage.anitype.fun%2Ftrailers%2F46569%2Ftrailer.webp&w=3840&q=100',
    'https://anitype.fun/_next/image?url=https%3A%2F%2Fstorage.anitype.fun%2Ftrailers%2F54900%2Ftrailer.webp&w=3840&q=100',
    'https://anitype.fun/_next/image?url=https%3A%2F%2Fstorage.anitype.fun%2Ftrailers%2F38759%2Ftrailer.webp&w=3840&q=100',
    'https://anitype.fun/_next/image?url=https%3A%2F%2Fstorage.anitype.fun%2Ftrailers%2F52299%2Ftrailer.webp&w=3840&q=100',
    'https://anitype.fun/_next/image?url=https%3A%2F%2Fstorage.anitype.fun%2Ftrailers%2F55791%2Ftrailer.webp&w=3840&q=100',
    'https://anitype.fun/_next/image?url=https%3A%2F%2Fstorage.anitype.fun%2Ftrailers%2F58426%2Ftrailer.webp&w=3840&q=100',
    'https://anitype.fun/_next/image?url=https%3A%2F%2Fstorage.anitype.fun%2Ftrailers%2F57058%2Ftrailer.webp&w=3840&q=100',
    'https://anitype.fun/_next/image?url=https%3A%2F%2Fstorage.anitype.fun%2Ftrailers%2F55701%2Ftrailer.webp&w=3840&q=100',
    'https://anitype.fun/_next/image?url=https%3A%2F%2Fstorage.anitype.fun%2Ftrailers%2F51122%2Ftrailer.webp&w=3840&q=100',
    'https://anitype.fun/_next/image?url=https%3A%2F%2Fstorage.anitype.fun%2Ftrailers%2F39535%2Ftrailer.webp&w=3840&q=100',
    'https://anitype.fun/_next/image?url=https%3A%2F%2Fstorage.anitype.fun%2Ftrailers%2F45576%2Ftrailer.webp&w=3840&q=100',
    'https://anitype.fun/_next/image?url=https%3A%2F%2Fstorage.anitype.fun%2Ftrailers%2F51179%2Ftrailer.webp&w=3840&q=100',
    'https://anitype.fun/_next/image?url=https%3A%2F%2Fstorage.anitype.fun%2Ftrailers%2F54492%2Ftrailer.webp&w=3840&q=100',
    'https://anitype.fun/_next/image?url=https%3A%2F%2Fstorage.anitype.fun%2Ftrailers%2F41457%2Ftrailer.webp&w=3840&q=100',
    'https://anitype.fun/_next/image?url=https%3A%2F%2Fstorage.anitype.fun%2Ftrailers%2F58080%2Ftrailer.webp&w=3840&q=100'
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

else if (paperSource === 'https://anitype.fun/_next/image?url=https%3A%2F%2Fstorage.anitype.fun%2Ftrailers%2F45576%2Ftrailer.webp&w=3840&q=100') {
    title.textContent = "Реинкарнация безработного: История о приключениях в другом мире. Часть 2";
    caption.textContent = "Эта история расскажет об отаку-неудачнике, который погиб под колёсами автомобиля, а после пришёл в себя в теле новорождённого. Как оказалось, он переродился в другом мире, и теперь его зовут Рудеус Грейрат. Чтобы выжить и не повторять прошлых ошибок, Рудеус решил прилежно учиться магии и искусству владения мечом. Хотя внешний мир всё ещё пугал бывшего затворника, Рудеус нашёл в себе силы и завёл первого друга.";
    video.src = "https://storage.anitype.fun/trailers/45576/trailer.webm";
    video.load();
}

else if (paperSource === 'https://anitype.fun/_next/image?url=https%3A%2F%2Fstorage.anitype.fun%2Ftrailers%2F40748%2Ftrailer.webp&w=3840&q=100') {
    title.textContent = "Магическая битва";
    caption.textContent = "Действие аниме происходит в мире, где люди оказались вовсе не последним звеном в пищевой цепи, и любой ничего не подозревающий обыватель при должной доле невезения может оказаться съеденным демонами, которые воплощают собой негативные человеческие эмоции. Таких созданий называют проклятиями. Пускай люди в большинстве своём не догадываются о существовании проклятий, те имеют уже давнюю историю, одним из эпизодов которой являются деяния легендарного демона Сукуны Рёмэна, которого с большим трудом удалось одолеть. Его тело было поделено на двадцать частей, которые оказались разбросаны по миру.";
    video.src = "https://storage.anitype.fun/trailers/40748/trailer.webm";
    video.load();
}

else if (paperSource === 'https://anitype.fun/_next/image?url=https%3A%2F%2Fstorage.anitype.fun%2Ftrailers%2F46569%2Ftrailer.webp&w=3840&q=100') {
    title.textContent = "Адский рай";
    caption.textContent = "Достигнув всего, чего можно желать: власти, богатства, славы, неблагодарный человек начинает жаждать невозможного — он хочет, чтобы его существование длилось вечно. Всеми силами стремится он продлить свою молодость и сохранить здоровье. Не всем дано преуспеть на этом пути, но всё намного проще, если ты сёгун и в твоих владениях есть легендарная земля, в которой просто обязан находиться источник вечной молодости!";
    video.src = "https://storage.anitype.fun/trailers/46569/trailer.webm";
    video.load();
}

else if (paperSource === 'https://anitype.fun/_next/image?url=https%3A%2F%2Fstorage.anitype.fun%2Ftrailers%2F54900%2Ftrailer.webp&w=3840&q=100') {
    title.textContent = "Ветролом";
    caption.textContent = "Харука Сакура терпеть не может слабаков. Именно поэтому он поступил в старшую «Фурин», заработавшую себе репутацию школы с боями без правил, где ученики каждый день дерутся по причине и без. Его единственная цель — встать во главе этой полукриминальной школы. Какого же было удивление Сакуры, когда оказалось, что ученики здесь — всеми любимые защитники города, каждый день протягивающие руку помощи каждому, кто в ней нуждается. Да и сражаются здесь не друг с другом, а друг за друга. ";
    video.src = "https://storage.anitype.fun/trailers/54900/trailer.webm";
    video.load();
}

else if (paperSource === 'https://anitype.fun/_next/image?url=https%3A%2F%2Fstorage.anitype.fun%2Ftrailers%2F51179%2Ftrailer.webp&w=3840&q=100') {
    title.textContent = "Реинкарнация безработного: История о приключениях в другом мире 2";
    caption.textContent = "После долгих приключений и множества испытаний друзья вернулись домой, однако конец пути оказался только его началом. После того как Эрис покинула Рудеуса и отправилась в собственное странствие, он, разбитый одиночеством, двинулся на Север с одной целью — найти свою мать. Рудеус потерял всякий интерес к жизни, однако новые друзья помогают ему вернуть радость бытия. Кроме того, он получил приглашения в Магическую академию, куда он когда-то собирался поступать! Похоже, Рудеусу рано уходить от дел, ведь впереди множество великих событий и свершений!";
    video.src = "https://storage.anitype.fun/trailers/51179/trailer.webm";
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

else if (paperSource === 'https://anitype.fun/_next/image?url=https%3A%2F%2Fstorage.anitype.fun%2Ftrailers%2F38759%2Ftrailer.webp&w=3840&q=100') {
    title.textContent = "Заботливая 800-летняя жена!";
    caption.textContent = "В несчастливой и напряжённой жизни молодого служащего Курото Накано вряд ли можно разглядеть позитивные моменты, что уж говорить об отдыхе и развлечениях. Парень с утра до вечера пашет на работе, уделяя ей и почти всё свободное время. Но однажды ночью, вернувшись после очередного трудового дня и едва открыв дверь дома, он обнаруживает, что какая-то маленькая и симпатичная девчушка с лисьими ушами и хвостом готовит для него ужин.";
    video.src = "https://storage.anitype.fun/trailers/38759/trailer.webm";
    video.load();
}

else if (paperSource === 'https://anitype.fun/_next/image?url=https%3A%2F%2Fstorage.anitype.fun%2Ftrailers%2F52299%2Ftrailer.webp&w=3840&q=100') {
    title.textContent = "Поднятие уровня в одиночку";
    caption.textContent = "Десять лет назад привычный нам мир канул в лету, изменившись навсегда, когда повсюду возникли Врата, соединившие Землю с магической реальностью, где обитают всевозможные монстры. Эти чудовища хлынули в города, и пришлось бы человечеству худо, если бы наряду с появлением врат и монстров некоторым избранным людям не были дарованы сверхчеловеческие способности, благодаря которым они смогли противостоять нападениям.";
    video.src = "https://storage.anitype.fun/trailers/52299/trailer.webm";
    video.load();
}

else if (paperSource === 'https://anitype.fun/_next/image?url=https%3A%2F%2Fstorage.anitype.fun%2Ftrailers%2F55791%2Ftrailer.webp&w=3840&q=100') {
    title.textContent = "Ребёнок идола 2";
    caption.textContent = 'Начались репетиции "Tokyo Blade". Аква использует даже действие как средство, чтобы узнать правду о смерти Аи. Однако присутствие Химекавы, ведущего актера театральной труппы Ралалай, сильно стимулировало актерский состав!? ';
    video.src = "https://storage.anitype.fun/trailers/55791/trailer.webm";
    video.load();
}

else if (paperSource === 'https://anitype.fun/_next/image?url=https%3A%2F%2Fstorage.anitype.fun%2Ftrailers%2F58426%2Ftrailer.webp&w=3840&q=100') {
    title.textContent = "Моя подруга-олениха Нокотан";
    caption.textContent = "Коши Торако — самая популярная старшеклассница в своей школе. И это неспроста. Девушка невероятно красива, хорошо воспитана, добра, отзывчива, да и учится просто замечательно. Однако у неё есть тайна, которую она бережно хранит от окружающих. На самом деле, раньше она была отпетой хулиганкой, а образ примерной ученицы создала специально, дабы навсегда скрыть своё тёмное прошлое.";
    video.src = "https://storage.anitype.fun/trailers/58426/trailer.webm";
    video.load();
}

else if (paperSource === 'https://anitype.fun/_next/image?url=https%3A%2F%2Fstorage.anitype.fun%2Ftrailers%2F57058%2Ftrailer.webp&w=3840&q=100') {
    title.textContent = "Я парировал всё время, чтобы стать сильнейшим авантюристом";
    caption.textContent = "Творятся какие-то тёмные и опасные для страны дела, — понимает правящая верхушка королевства Клейз. Совершено покушение на принцессу, стали появляться сверхмощные монстры, явно созданные людскими руками, — кто-то подталкивает страну к развязыванию войны. Простолюдин Ноор не имеет об этом всём ни малейшего понятия.";
    video.src = "https://storage.anitype.fun/trailers/57058/trailer.webm";
    video.load();
}

else if (paperSource === 'https://anitype.fun/_next/image?url=https%3A%2F%2Fstorage.anitype.fun%2Ftrailers%2F55701%2Ftrailer.webp&w=3840&q=100') {
    title.textContent = "Клинок, рассекающий демонов: Тренировка столпов";
    caption.textContent = "Инцидент в Деревне кузнецов завершился, и его последствия могут оказаться судьбоносными для Японии. Собравшись на срочное совещание, столпы, обсудив текущую ситуацию, приходят к заключению, что нынешние охотники на демонов слишком слабы, чтобы оказывать достойное сопротивление Молодым лунам. Такое положение дел чревато большими человеческими потерями и может поставить под угрозу существование самой организации. ";
    video.src = "https://storage.anitype.fun/trailers/55701/trailer.webm";
    video.load();
}

else if (paperSource === 'https://anitype.fun/_next/image?url=https%3A%2F%2Fstorage.anitype.fun%2Ftrailers%2F51122%2Ftrailer.webp&w=3840&q=100') {
    title.textContent = "Волчица и пряности: Торговец встречает мудрую волчицу";
    caption.textContent = "Торговец Лоуренс странствует на своей маленькой повозке. В одной из деревень он встречает прекрасную девушку с животными ушами и хвостом! Её зовут Холо Мудрая и она волчица, хранящая урожай! Девушка хочет вернуться назад на свою родину и Лоуренс соглашается ей помочь. Так и начинается путешествие торговца и мудрой волчицы… ";
    video.src = "https://storage.anitype.fun/trailers/51122/trailer.webm";
    video.load();
}

else if (paperSource === 'https://anitype.fun/_next/image?url=https%3A%2F%2Fstorage.anitype.fun%2Ftrailers%2F39535%2Ftrailer.webp&w=3840&q=100') {
    title.textContent = "Реинкарнация безработного: История о приключениях в другом мире";
    caption.textContent = "Бывает в жизни невезение. Только тридцатичетырёхлетний безработный отаку-бездельник доходит до точки и решает, что пора взяться за ум и изменить свою в общем-то никчёмную жизнь, как его насмерть сбивает грузовик. Однако на этом история его жизни не заканчивается, ведь он приходит в себя в теле ребёнка, причём в совершенно ином мире, где в ходу магия да и рыцарские бои на мечах вполне в порядке вещей. Отныне нашего героя зовут Рудеус Грейрат, и он начнёт-таки жизнь с чистого листа, но теперь уже в новом полном опасностей и чудес мире.";
    video.src = "https://storage.anitype.fun/trailers/39535/trailer.webm";
    video.load();
}

else if (paperSource === 'https://anitype.fun/_next/image?url=https%3A%2F%2Fstorage.anitype.fun%2Ftrailers%2F54492%2Ftrailer.webp&w=3840&q=100') {
    title.textContent = "Монолог фармацевта";
    caption.textContent = "Уже полгода прошло с того момента, как 17-летнюю Маомао похитили и заставили трудиться в императорском дворце обычной служанкой. Работа тяжёлая, но девушка решила не сдаваться, не унывать и честно вкалывать, пока её не отпустят на покой. Планы изменились, когда до Маомао дошли вести о том, что детей императора одолел серьёзный недуг. Девушка решила тайком попробовать разобраться и помочь, рассчитывая на свой опыт в фармацевтике, которой она занималась раньше, когда проживала в Квартале красных фонарей.";
    video.src = "https://storage.anitype.fun/trailers/54492/trailer.webm";
    video.load();
}

else if (paperSource === 'https://anitype.fun/_next/image?url=https%3A%2F%2Fstorage.anitype.fun%2Ftrailers%2F41457%2Ftrailer.webp&w=3840&q=100') {
    title.textContent = "Восемьдесят шесть";
    caption.textContent = "Долгое время Республика Сан-Магнолия находится в военном конфликте с Империей, соседним государством, которое создало серию беспилотных военных машин. В ответ на угрозу республика успешно завершает разработку аналогичной технологии и отражает атаку противника, сумев обойтись без жертв. Однако это... официальная версия. На самом деле жертвы были. За пределами известных восьмидесяти пяти районов республики фактически был ещё один, «несуществующий» 86-й округ. Именно там днём и ночью шли бои, в которых принимали участие члены отряда «Восемьдесят";
    video.src = "https://storage.anitype.fun/trailers/41457/trailer.webm";
    video.load();
}

else if (paperSource === 'https://anitype.fun/_next/image?url=https%3A%2F%2Fstorage.anitype.fun%2Ftrailers%2F58080%2Ftrailer.webp&w=3840&q=100') {
    title.textContent = "Борьба в прямом эфире";
    caption.textContent = "В эру компьютерных технологий блогеры с каждым днём обретают всё больше и больше популярности, зарабатывая на этом немалые деньги. Ю Хобин, неказистый старшеклассник, над которым издеваются в школе, в тайне завидует таким людям, а в особенности своим одноклассникам, известным в интернете. Всего один стрим или видео, и они могут позволить себе брендовую одежду, дорогую косметику или ужин в элитном ресторане. В то время как Хобин вынужден пахать за гроши, чтобы оплатить счета за коммунальные услуги и лечение матери.";
    video.src = "https://storage.anitype.fun/trailers/58080/trailer.webm";
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


avatar.addEventListener("click", function() {
    localStorage.setItem('testICK', 1234);
    window.location.href = 'index-auth.html';
});
