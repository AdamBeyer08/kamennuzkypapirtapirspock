document.addEventListener('DOMContentLoaded', () => {

  let button = document.querySelector('button');

  button.onclick = () => {
    do {
      vitez1.innerHTML = "Hráč 1";
      vitez2.innerHTML = "Hráč 2";
      vitez1.style.color = "black";
      vitez2.style.color = "black";

      // 0–4 místo 0–2
      hrac1 = Math.floor(Math.random() * 5);
      hrac2 = Math.floor(Math.random() * 5);

      obr1.src = hrac1 + ".png";
      obr2.src = hrac2 + ".png";

      if (hrac1 === hrac2) {
        remiza = true;
        console.log("Remíza.\nSpouštím další hru.");
      }

      // výherní podmínky pro 5 možností
      else if (
        (hrac1 === 0 && (hrac2 === 1 || hrac2 === 3)) || // kámen
        (hrac1 === 1 && (hrac2 === 2 || hrac2 === 3)) || // nůžky
        (hrac1 === 2 && (hrac2 === 0 || hrac2 === 4)) || // papír
        (hrac1 === 3 && (hrac2 === 2 || hrac2 === 4)) || // tapír
        (hrac1 === 4 && (hrac2 === 0 || hrac2 === 1))    // spock
      ) {
        vitez1.innerHTML = "Hráč 1<br/>vyhrál.";
        vitez1.style.color = "red";
        remiza = false;
      } else {
        vitez2.innerHTML = "Hráč 2<br/>vyhrál.";
        vitez2.style.color = "red";
        remiza = false;
      }

    } while (remiza);
  }

});