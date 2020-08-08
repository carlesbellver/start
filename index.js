document.addEventListener('DOMContentLoaded', function (event) {
  
  setStyle()
  setWeather()
  setInterval(setStyle, 3600000) // an hour
  setInterval(setWeather, 3600000) // an hour

  const srch = document.getElementById('search')
  srch.focus()
  setTimeout(function () { srch.focus(); }, 1)

  const button = document.querySelector('.content-input > button')

  button.addEventListener('click', search)
  document.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) search()
  })

  function search () {
    const str = document.getElementById('search').value

    const output = 'https://duckduckgo.com/?q=' + str

    location.href = output
  }

  function setStyle () {
    
    const days = ['diumenge', 'dilluns', 'dimarts', 'dimecres', 'dijous', 'divendres', 'dissabte']
    const daylight = {
      "morning": [  8,  8,  7,  7,  7,  6,  6,  7,  7,  8,  8,  8],
      "night":   [ 18, 18, 19, 20, 21, 21, 21, 21, 20, 19, 18, 18]
    }
    const afternoon = 13
    const now = new Date()
    const w = now.getDay()
    const day = days[w]
    const h = now.getHours()
    const m = now.getMonth()
    let period
    if (h >= daylight['morning'][m] && h < afternoon) period = 1
    else if (h >= afternoon && h < daylight['night'][m]) period = 2
    else if (h <= 23) period = 3
    else period = 0

    const greetings = document.querySelector('.content-greeting > h1')

    if (period === 1) {
      greetings.innerHTML = 'Bon dia. És ' + day + '.'
      document.querySelector(':root').style.setProperty('--background', '#DCEDFF')
      document.querySelector(':root').style.setProperty('--input', '#fff')
      document.querySelector(':root').style.setProperty('--link', '#4A5E6D')
      document.querySelector(':root').style.setProperty('--shadow', '#232C33')
      document.querySelector(':root').style.setProperty('--color', '#232C33')
    }
    if (period === 2) {
      greetings.innerHTML = 'Hola. És ' + day + '.'
      document.querySelector(':root').style.setProperty('--background', '#97C3B6')
      document.querySelector(':root').style.setProperty('--input', '#F9E7E7')
      document.querySelector(':root').style.setProperty('--color', '#0A2E36')
      document.querySelector(':root').style.setProperty('--shadow', '#0A2E36')
    }
    if (period === 3) {
      greetings.innerHTML = 'Bona nit. Encara és ' + day + '.'
      document.querySelector(':root').style.setProperty('--background', '#161212')
      document.querySelector(':root').style.setProperty('--input', '#7B6565')
      document.querySelector(':root').style.setProperty('--color', '#F9E7E7')
      document.querySelector(':root').style.setProperty('--link', '#7B6565')
      document.querySelector(':root').style.setProperty('--hover', '#F9E7E7')
      document.querySelector(':root').style.setProperty('--shadow', '#000')
    }
    if (period === 0) {
      greetings.innerHTML = 'Bona nit. Ja és ' + day + '.'
      document.querySelector(':root').style.setProperty('--background', '#161212')
      document.querySelector(':root').style.setProperty('--input', '#7B6565')
      document.querySelector(':root').style.setProperty('--color', '#F9E7E7')
      document.querySelector(':root').style.setProperty('--link', '#7B6565')
      document.querySelector(':root').style.setProperty('--hover', '#F9E7E7')
      document.querySelector(':root').style.setProperty('--shadow', '#000')
    }
  }
  
  function setWeather() {
    fetch('https://carlesbellver.net/apps/oratge/').then(response => response.json()).then(function(data) { writeWeather(data) } );
  }
  
  function writeWeather(data) {
    console.log(data)
    const cs = document.querySelector('#cs')
    cs.innerHTML = data['cs']['emoji'] + ' Castelló ' + data['cs']['temp'] + ' ºC ' + ' ' + data['cs']['description'] + ' ' + data['cs']['min'] + '/'+ data['cs']['max'] +' ºC'
    const morella = document.querySelector('#morella')
    morella.innerHTML = data['morella']['emoji'] + ' Morella ' + data['morella']['temp'] + ' ºC ' + data['morella']['description'] + ' ' + data['morella']['min'] + '/'+ data['morella']['max'] +' ºC'
  }
  
})
