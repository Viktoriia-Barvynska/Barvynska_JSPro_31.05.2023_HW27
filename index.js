function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
  
    const hourTens = document.getElementById('hourTens');
    const hourOnes = document.getElementById('hourOnes');
    const minuteTens = document.getElementById('minuteTens');
    const minuteOnes = document.getElementById('minuteOnes');
    const secondTens = document.getElementById('secondTens');
    const secondOnes = document.getElementById('secondOnes');
  
    updateDigit(hourTens, hours[0]);
    updateDigit(hourOnes, hours[1]);
    updateDigit(minuteTens, minutes[0]);
    updateDigit(minuteOnes, minutes[1]);
    updateDigit(secondTens, seconds[0]);
    updateDigit(secondOnes, seconds[1]);
  }
  
  function updateDigit(digitElement, digitValue) {
    const imageUrl = `images/${digitValue}.png`;
    if (digitElement.style.backgroundImage !== `url(${imageUrl})`) {
      digitElement.style.backgroundImage = `url(${imageUrl})`;
    }
  }
  
  // Оновлення годинника кожну секунду
  setInterval(updateClock, 1000);
  
  // Початкове оновлення годинника
  updateClock();
  