const killedGoblins = document.querySelector(".killed");
const missedGoblins = document.querySelector(".missed");

export default class Game {
  constructor(cell) {
    this.cell = cell;
  }

  hitGoblin() {
    if (this.cell.classList.contains("goblin")) {
      this.cell.classList.remove("goblin");
      killedGoblins.textContent = Number(killedGoblins.textContent) + 1;

      if (killedGoblins.textContent == 10) {
        alert("Вы победили!");
        killedGoblins.textContent = 0;
        missedGoblins.textContent = 0;
      }
    } else {
      missedGoblins.textContent = Number(missedGoblins.textContent) + 1;

      if (missedGoblins.textContent == 5) {
        alert("Вы проиграли!");
        killedGoblins.textContent = 0;
        missedGoblins.textContent = 0;
      }
    }
  }
}
