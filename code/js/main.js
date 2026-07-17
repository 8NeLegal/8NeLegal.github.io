let region = 0
let sound = 0
let theme = null
let data = {}
let win = null

const btnRegion = document.querySelectorAll(".region")
const winwinStar = document.querySelectorAll(".star")

const containerTwists = document.getElementById("containerTwists")
const twistsTape = document.getElementById("twistsTape")
const btnTwists = document.getElementById("btnTwists")
const btnSound = document.getElementById("btnSound")
const animationBg = document.getElementById("animationBg")
const winningWindow = document.getElementById("winningWindow")
const winwinElement = document.getElementById("winwinElement")
const winwinName = document.getElementById("winwinName")
const winwinCharacter = document.getElementById("winwinCharacter")

const folderSound = "../../assets/sound"

const soundRegion = new Audio(`${folderSound}/uio/region.mp3`)
const soundCase = new Audio(`${folderSound}/uio/case.mp3`)
const soundDrop = new Audio(`${folderSound}/uio/drop.mp3`)
const sound4s = new Audio(`${folderSound}/uio/4s.mp3`)
const sound5s = new Audio(`${folderSound}/uio/5s.mp3`)

const sound1 = new Audio(`${folderSound}/theme/1.mp3`)
const sound2 = new Audio(`${folderSound}/theme/2.mp3`)
const sound3 = new Audio(`${folderSound}/theme/3.mp3`)
const sound4 = new Audio(`${folderSound}/theme/4.mp3`)
const sound5 = new Audio(`${folderSound}/theme/5.mp3`)
const sound6 = new Audio(`${folderSound}/theme/6.mp3`)
const sound7 = new Audio(`${folderSound}/theme/7.mp3`)

const soundThemes = [sound1, sound2, sound3, sound4, sound5, sound6, sound7]

function soundOnOff() {
    if (!theme) {
        console.error("Theme don't load")
        return
    }

    if (sound == 0) {
        theme.muted = false
        btnSound.style.background = "url(../../assets/icon/on_sound.png) center / cover no-repeat, transparent"
        sound = 1
    } else {
        theme.muted = true
        btnSound.style.background = "url(../../assets/icon/off_sound.png) center / cover no-repeat, transparent"
        sound = 0
    }
}

function setTheme(s) {
    if (theme) {
        theme.pause();
        theme.currentTime = 0;
        theme = soundThemes[s-1]
        theme.play()
    }

    theme = soundThemes[s-1]
    theme.volume = 0.2
    theme.loop = true
    theme.muted = (sound == 0)
    theme.play()
}

function selectRegion(r, btn) {
    setTheme(r)
    soundRegion.currentTime = 0
    soundRegion.play()

    soundCase.pause()
    soundCase.currentTime = 0
    soundDrop.pause()
    soundDrop.currentTime = 0

    region = data[`r${r}`] ?? (console.error("Region not found"), 0)

    btnRegion.forEach(el => {el.id = ""})
    btn.id = "activeRegion"

    btnTwists.disabled = false

    animationBg.style.display = "block"

    setTimeout(() => {
        animationBg.style.opacity = "1"
    }, 50)
    setTimeout(() => {
        containerTwists.style.background = `url(${region.bg}) center / cover no-repeat, #222222`
        winningWindow.style.background = `url(${region.bg}) center / cover no-repeat, #222222`
        addItemsTape()
    }, 300)
    setTimeout(() => {
        animationBg.style.opacity = "0"
    }, 400)
    setTimeout(() => {
        animationBg.style.display = "none"
    }, 700)
}

function addItemsTape() {
    twistsTape.innerHTML = ""
    const drop = []

    const icons = data.icons
    const items = data.items

    region.character.forEach(el => {drop.push(`${el}.png`)})
    items.forEach(el => {drop.push(`${el}.png`)})

    for (let i=0; i<300; i++) {
        const div = document.createElement("div")
        div.classList.add("item")

        const ico = drop[Math.floor(Math.random()*drop.length)]
        div.style.background = `url(${icons}/${ico}) center / cover no-repeat`

        twistsTape.appendChild(div)
    }

    twistsTape.style.transition = "none"
    twistsTape.style.transform = "translate(0, -50%)"
    
    void twistsTape.offsetWidth
    twistsTape.style.transition = "transform 6s cubic-bezier(.08,.7,.15,1)"
}

function onTransitionEnd() {
    const winBg = win.style.backgroundImage.match(/\/([^/]+)\.png/i)
    const winName = winBg ? winBg[1] : "winElement"
    const winRare = winName[0]
    const winElem = winName[1]
    
    if (/^[a-zA-Z_]+$/.test(winName) && winName != "mora" && winName != "moon") {
        openWinning(winRare, winName, winElem)
    } else {soundDrop.play()}
     
    btnTwists.disabled = false
    twistsTape.removeEventListener("transitionend", onTransitionEnd)
}

function spinTape() {
    soundDrop.pause()
    soundDrop.currentTime = 0
    soundCase.currentTime = 0
    soundCase.play()

    btnTwists.disabled = true
    twistsTape.style.transition = "none"
    twistsTape.style.transform = "translate(0, -50%)"
    void twistsTape.offsetWidth

    const winIndex = Math.floor(Math.random() * 110) + 50
    const itemWidth = 126
    const containerWidth = containerTwists.offsetWidth
    const center = containerWidth / 2
    const stop = -(winIndex * itemWidth + itemWidth/2 - center)
    const randomShift = (Math.random() - 0.5) * 20
    const finalStop = stop + randomShift

    twistsTape.style.transition = "transform 6s cubic-bezier(.08,.7,.15,1)"
    twistsTape.style.transform = `translate(${finalStop}px, -50%)`

    win = twistsTape.children[winIndex]
    
    twistsTape.addEventListener("transitionend", onTransitionEnd)
}

function openWinning(r, name, elem) {
    elements = ["anemo","cryo","dendro","electro","geo","hydro","pyro"]
    elements.forEach(el => {
        if (elem === el[0]) {
            elem = el
        }
    })

    winwinElement.src = `${data.icons}/${elem}.png`
    winwinName.src = `${data.logo}/${name.slice(3)}.png`
    winwinCharacter.src = `${data.hero}/${name.slice(3)}.png`
    
    const soundCharacter = new Audio(`${folderSound}/voice/${name.slice(3)}.mp3`)
    console.warn(`${folderSound}/voice/${name.slice(3)}.mp3`);
    

    if (r == "l") {
        winwinStar[4].style.display = "block"
        setTimeout(() => {sound5s.play()}, 100)
    } else {setTimeout(() => {sound4s.play()}, 400)}

    setTimeout(() => {soundCharacter.play()}, 100)

    winningWindow.style.display = "block"

    setTimeout(() => {
        winwinCharacter.style.right = "0"
    }, 250)
    setTimeout(() => {
        winningWindow.style.opacity = "1"
    }, 350)
    setTimeout(() => {
        for (let i=0; i<5; i++) {
            setTimeout(() => {
                winwinStar[i].style.opacity = "1"
            }, 200*i)
        }
    }, 650)
}

function closeWinning() {
    winwinStar[4].style.display = "none"
    winningWindow.style.opacity = "0"

    setTimeout(() => {
        winningWindow.style.display = "none"
    }, 350)

    winwinCharacter.style.right = "-25%"
    winwinStar.forEach(el => {
        el.style.opacity = "0"
    })
}

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && e.target.tagName !== "INPUT" && e.target.tagName !== "TEXTAREA" && winningWindow.style.display == "block") {
        closeWinning()
    }
})

async function loadBase(path) {
    try {
        const response = await fetch(path)
        const data = await response.json()
        return data
    } catch (err) {
        console.error(err)
        return null
    }
}

async function init() {
    data = await loadBase("../../data.json")
    region = data.r1
    setTheme(1)
    btnRegion[0].click()
}

init()