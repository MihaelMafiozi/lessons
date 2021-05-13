// function mumu(){
//     alert("Привет")
// }
let a = document.getElementById("text")
    a.onclick = function(){
        alert("привет")
    }

    class Button {
        handleEvent(event) {
         
          let method = 'on' + event.type[0].toUpperCase() + event.type.slice(1);
          this[method](event);
        }
    
        onMousedown() {
          elem.innerHTML = "Кнопка мыши нажата";
        }
    
        onMouseup() {
          elem.innerHTML = "...и отжата.";
        }
      }
    
      let x = new Button();
      elem.addEventListener('mousedown', x);
      elem.addEventListener('mouseup', x);

    <button id="elem">Нажми меня</button>