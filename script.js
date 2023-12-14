
  
document.addEventListener('DOMContentLoaded', function () {
    const calendarContainer = document.querySelector('.calendar');
  
    // Järjekorra loomine suvaliste numbritega (1-24)
    const suffledNumbers = document.querySelector('.numbrid');
    const shuffledNumbers = Array.from({ length: 24 }, (_, index) => index + 1).sort(() => Math.random() - 0.5);
  
    // Iga numbri jaoks lisatakse kalendrisse div koos pildi elemendiga
    shuffledNumbers.forEach((number) => {
      const calendarDay = document.createElement('div');
      calendarDay.innerText = number;
  
      const image = document.createElement('img');
      image.src = `images/${number}.jpg`;  // Asenda see oma pildi tee ja failinimega
  
      calendarDay.addEventListener('click', function () {
        // Muuda pildi kuvamine, kui kasutaja klõpsab numbri peal
        calendarDay.innerHTML = '';
        calendarDay.appendChild(image);
      });
  
      calendarContainer.appendChild(calendarDay);
    });
  });