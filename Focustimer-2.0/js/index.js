const buttonForest = document.querySelector('.forest')
const buttonRain = document.querySelector('.rain')
const buttonCoffeeShop = document.querySelector('.coffee-shop')
const buttonFireplace = document.querySelector('.fireplace')
const buttonForestPressed = document.querySelector('.forest-pressed')
const buttonRainPressed = document.querySelector('.rain-pressed')
const buttonCoffeeShopPressed = document.querySelector('.coffee-shop-pressed')
const buttonFireplacePressed = document.querySelector('.fireplace-pressed')
const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonMoreTime = document.querySelector('.more-time')
const buttonLessTime = document.querySelector('.less-time') 
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const forestSound = new Audio('./Sounds/Floresta.wav')
const rainSound = new Audio('./Sounds/Chuva.wav')
const coffeeShopSound = new Audio('./Sounds/Cafeteria.wav')
const firePlaceSound = new Audio('./Sounds/Lareira.wav')
const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
let timerTimeOut



function countdown() {
  timerTimeOut = setTimeout(function() {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    if (minutes <= 0 && seconds <= 0) {
      kitchenTimer.play()
      return
    }

    buttonPlay.disabled = true
    buttonMoreTime.disabled = true
    buttonLessTime.disabled = true

    if(seconds <= 0) {
      seconds = 60
      --minutes
    }

    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds - 1).padStart(2, "0")

    countdown()
  }, 1000)
}



buttonPlay.addEventListener('click', function() {
  countdown()
})

buttonStop.addEventListener('click', function() {
  clearTimeout(timerTimeOut)
  buttonPlay.disabled = false
  buttonMoreTime.disabled = false
  buttonLessTime.disabled = false
})

buttonMoreTime.addEventListener('click', function() {
  let minutes = Number(minutesDisplay.textContent)
  let seconds = Number(secondsDisplay.textContent)
  
  minutes = minutes < 55 ? minutes + 5 : (minutes = 60)
  seconds = minutes >= 60 ? 0 : seconds
  
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
})

buttonLessTime.addEventListener('click', function() {
  let minutes = Number(minutesDisplay.textContent)
  let seconds = Number(secondsDisplay.textContent)
  
  minutes = minutes > 5 ? minutes - 5 : (minutes = 0)
  
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
})

buttonForest.addEventListener('click', function() {
  buttonForest.classList.add('hide')
  buttonForestPressed.classList.remove('hide')

  if (buttonRain.classList.contains('hide')) {
    buttonRain.classList.remove('hide')
    buttonRainPressed.classList.add('hide')
  } else if (buttonCoffeeShop.classList.contains('hide')) {
    buttonCoffeeShop.classList.remove('hide')
    buttonCoffeeShopPressed.classList.add('hide')
  } else if (buttonFireplace.classList.contains('hide')) {
    buttonFireplace.classList.remove('hide')
    buttonFireplacePressed.classList.add('hide')
  }

  forestSound.play()
  firePlaceSound.pause()
  coffeeShopSound.pause()
  rainSound.pause()

  forestSound.loop = true
})

buttonForestPressed.addEventListener('click', function() {
  buttonForest.classList.remove('hide')
  buttonForestPressed.classList.add('hide')

  forestSound.pause()
})

buttonRain.addEventListener('click', function() {
  buttonRain.classList.add('hide')
  buttonRainPressed.classList.remove('hide')

  if (buttonForest.classList.contains('hide')) {
    buttonForest.classList.remove('hide')
    buttonForestPressed.classList.add('hide')
  } else if (buttonCoffeeShop.classList.contains('hide')) {
    buttonCoffeeShop.classList.remove('hide')
    buttonCoffeeShopPressed.classList.add('hide')
  } else if (buttonFireplace.classList.contains('hide')) {
    buttonFireplace.classList.remove('hide')
    buttonFireplacePressed.classList.add('hide')
  }

  forestSound.pause()
  firePlaceSound.pause()
  coffeeShopSound.pause()
  rainSound.play()

  rainSound.loop = true
})

buttonRainPressed.addEventListener('click', function() {
  buttonRain.classList.remove('hide')
  buttonRainPressed.classList.add('hide')

  rainSound.pause()
})

buttonCoffeeShop.addEventListener('click', function() {
  buttonCoffeeShop.classList.add('hide')
  buttonCoffeeShopPressed.classList.remove('hide')

  if (buttonRain.classList.contains('hide')) {
    buttonRain.classList.remove('hide')
    buttonRainPressed.classList.add('hide')
  } else if (buttonForest.classList.contains('hide')) {
    buttonForest.classList.remove('hide')
    buttonForestPressed.classList.add('hide')
  } else if (buttonFireplace.classList.contains('hide')) {
    buttonFireplace.classList.remove('hide')
    buttonFireplacePressed.classList.add('hide')
  }

  forestSound.pause()
  firePlaceSound.pause()
  coffeeShopSound.play()
  rainSound.pause()

  coffeeShopSound.loop = true
})

buttonCoffeeShopPressed.addEventListener('click', function() {
  buttonCoffeeShop.classList.remove('hide')
  buttonCoffeeShopPressed.classList.add('hide')

  coffeeShopSound.pause()
})

buttonFireplace.addEventListener('click', function() {
  buttonFireplace.classList.add('hide')
  buttonFireplacePressed.classList.remove('hide')

  if (buttonRain.classList.contains('hide')) {
    buttonRain.classList.remove('hide')
    buttonRainPressed.classList.add('hide')
  } else if (buttonCoffeeShop.classList.contains('hide')) {
    buttonCoffeeShop.classList.remove('hide')
    buttonCoffeeShopPressed.classList.add('hide')
  } else if (buttonForest.classList.contains('hide')) {
    buttonForest.classList.remove('hide')
    buttonForestPressed.classList.add('hide')
  }

  forestSound.pause()
  firePlaceSound.play()
  coffeeShopSound.pause()
  rainSound.pause()

  firePlaceSound.loop = true
})

buttonFireplacePressed.addEventListener('click', function() {
  buttonFireplace.classList.remove('hide')
  buttonFireplacePressed.classList.add('hide')

  firePlaceSound.pause()
})