//declaring variables
let totalFlips = 0
let headsNumber = 0
let tailNumber = 0
let headPercentage = 0
let tailPercentage = 0
let statusMessage = null
let image = null


//get html elements
let coinImage = document.getElementById('penny-image')
let flipBtn = document.getElementById('flip')
let clearBtn = document.getElementById('clear')
let score_HeadNumber = document.getElementById('heads')
let score_HeadNumberPerc = document.getElementById('heads-percent')
let score_TailNumber = document.getElementById('tails')
let score_TailNumberPerc = document.getElementById('tails-percent')
let score_statusMessage = document.querySelector('.message-container')

//Functions
function init() {
    flipoutcome = 0
    headsNumber = 0
    tailNumber = 0
    headPercentage = 0
    tailPercentage = 0
    statusMessage = "Let's Get Rolling!"
    image ='./assets/images/penny-heads.jpg'
}
function isEven(n) {
    n = Number(n);
    return n === 0 || !!(n && !(n%2));
  }

function render(){
    score_statusMessage.innerHTML = statusMessage
    score_HeadNumber.innerHTML = headsNumber
    score_HeadNumberPerc.innerHTML = headPercentage +'%'
    score_TailNumber.innerHTML = tailNumber
    score_TailNumberPerc.innerHTML = tailPercentage +'%'
    coinImage.setAttribute('src' , image)
}

//Init
init();
render();

//listeners
flipBtn.addEventListener('click', function(){
    if (isEven(Math.round(Math.random() * 100))) {
        headsNumber++
        image ='./assets/images/penny-heads.jpg'
        statusMessage='You Flipped Heads!'
    } else {
        tailNumber++
        image='./assets/images/penny-tails.jpg'
        statusMessage='You Flipped Tails!'
    }
    
    totalFlips = headsNumber + tailNumber
    if(totalFlips>0) {
        headPercentage = Math.round(headsNumber/totalFlips*100)
        tailPercentage = Math.round(tailNumber/totalFlips*100)
    }
    render()  
})

clearBtn.addEventListener('click', function(){
    init()
    render()
})
