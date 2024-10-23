const killed = document.querySelector(".killed");
const missed = document.querySelector(".missed");

export default class Game {
  constructor(cell) {
    this.cell = cell;
  }

  killedGoblins() {
    // если попали по гоблину, то удаляем его и засчитываем попадание
    if (this.cell.classList.contains("goblin")) {
      this.cell.remove("goblin");
      killed.textContent++;

      // если убийств 10, то выводим "Вы победили"
      if (killed.textContent == 10) {
        alert("Вы победили!");
        killed.textContent = 0;
        missed.textContent = 0;
      }
    }
  }

  missedGoblins() {
    // если промахнулись по гоблину, то засчитываем промах
    if (this.cell.classList.contains("field-cell")) {
      missed.textContent++;

      // если промахов 5, то выводим "Вы проиграли"
      if (missed.textContent == 5) {
        alert("Вы проиграли!");
        killed.textContent = 0;
        missed.textContent = 0;
      }
    }
  }
}
