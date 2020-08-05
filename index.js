document.addEventListener('DOMContentLoaded', function (event) {
  /* setTime() */
  /* setDate() */
  setStyle()
  setInterval(setTime, 1000)

  const button = document.querySelector('.content-input > button')

  button.addEventListener('click', search)
  document.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) search()
  })

  function setTime () {
    const now = new Date()
    const utcTime = now.toISOString().replace('T', ' ').replace('.', ' ').substr(11, 5) + ' UTC'

    document.getElementById('current-time').innerHTML = now.toLocaleTimeString().substr(0,5)
    document.getElementById('utc-time').innerHTML = utcTime
  }

  function setDate () {
    const now = new Date()
    document.getElementById('date').innerHTML = now.toDateString().substr(4)
  }

  function search () {
    const str = document.getElementById('search').value

    const output = 'https://duckduckgo.com/?q=' + str

    location.href = output
  }

  function setStyle () {
    const now = new Date()
    const h = now.getHours()
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const w = now.getDay()
    const day = days[w]
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

    const greetings = document.querySelector('.content-greeting > h1')

    let period

    if (h >= morning && h < afternoon) period = 1
    else if (h >= afternoon && h < night) period = 2
    else period = 0

    if (period === 1) {
      greetings.innerHTML = 'Good morning. It\’s ' + day + '.'
      document.querySelector(':root').style.setProperty('--background', '#DCEDFF')
      document.querySelector(':root').style.setProperty('--input', '#fff')
      document.querySelector(':root').style.setProperty('--link', '#4A5E6D')
      document.querySelector(':root').style.setProperty('--shadow', '#232C33')
      document.querySelector(':root').style.setProperty('--color', '#232C33')
    }
    if (period === 2) {
      greetings.innerHTML = 'Good afternoon. It\’s ' + day + '.'
      document.querySelector(':root').style.setProperty('--background', '#97C3B6')
      document.querySelector(':root').style.setProperty('--input', '#F9E7E7')
      document.querySelector(':root').style.setProperty('--color', '#0A2E36')
      document.querySelector(':root').style.setProperty('--shadow', '#0A2E36')
    }
    if (period === 0) {
      greetings.innerHTML = 'Good evening. It\’s still ' + day + '.'
      document.querySelector(':root').style.setProperty('--background', '#161212')
      document.querySelector(':root').style.setProperty('--input', '#7B6565')
      document.querySelector(':root').style.setProperty('--color', '#F9E7E7')
      document.querySelector(':root').style.setProperty('--link', '#7B6565')
      document.querySelector(':root').style.setProperty('--hover', '#F9E7E7')
      document.querySelector(':root').style.setProperty('--shadow', '#000')
    }
  }
})
