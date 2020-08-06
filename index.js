const now = new Date()
const days = ['diumenge', 'dilluns', 'dimarts', 'dimecres', 'dijous', 'divendres', 'dissabte']
const w = now.getDay()
const day = days[w]

let period = getPeriod()

function getPeriod() {

  const h = now.getHours()
  const m = now.getMonth()
    
  afternoon = 15
  if (m == 0) {
    morning = 8
    night = 18
  }
  else if (m == 1) {
    morning = 8
    night = 18
  }
  else if (m == 2) {
    morning = 7
    night = 19
  }
  else if (m == 3) {
    morning = 7
    night = 20
  }
  else if (m == 4) {
    morning = 7
    night = 21
  }
  else if (m == 5) {
    morning = 6
    night = 21
  }
  else if (m == 6) {
    morning = 6
    night = 21
  }
  else if (m == 7) {
    morning = 7
    night = 21
  }
  else if (m == 8) {
    morning = 7
    night = 20
  }
  else if (m == 9) {
    morning = 8
    night = 19
  }
  else if (m == 10) {
    morning = 8
    night = 18
  }
  else if (m == 11) {
    morning = 8
    night = 18
  }
  else if (m == 1) {
    morning = 8
    night = 18
  }
  
  if (h >= morning && h < afternoon) p = 1
  else if (h >= afternoon && h < night) p = 2
  else p = 0
  return p
}

document.addEventListener('DOMContentLoaded', function (event) {
  
  setStyle()
  setWeather()

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
      greetings.innerHTML = 'Bon dia. És ' + day + '.'
      document.querySelector(':root').style.setProperty('--background', '#97C3B6')
      document.querySelector(':root').style.setProperty('--input', '#F9E7E7')
      document.querySelector(':root').style.setProperty('--color', '#0A2E36')
      document.querySelector(':root').style.setProperty('--shadow', '#0A2E36')
    }
    if (period === 0) {
      greetings.innerHTML = 'Bona nit. Encara és ' + day + '.'
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
    cs.innerHTML = 'Castelló ' + data['cs']['temp'] + ' ºC ' + ' ' + data['cs']['description'] + ' ' + data['cs']['min'] + '/'+ data['cs']['max'] +' ºC'
    const morella = document.querySelector('#morella')
    morella.innerHTML = 'Morella ' + data['morella']['temp'] + ' ºC ' + data['morella']['description'] + ' ' + data['morella']['min'] + '/'+ data['morella']['max'] +' ºC'
  }
  
})
