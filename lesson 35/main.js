// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // let Bool = 1 || 0
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // alert(Bool)
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // let a = 1 || 1
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //    b = 0 || 1
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //  c = 0 || 0
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // alert(a)
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //  alert(b)
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //  alert(c)
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // let time = prompt("time")
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //if(time < 10 || time > 18){
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //     console.log("magazine closed")
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //    alert("magazine closed")  
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //}
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //else{
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //    alert("magazine work")
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //   console.log("magazine work")
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // let time = prompt("time")
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // if(time < 10 || time > 18){
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //   console.log("magazine closed")
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //    alert("magazine closed")  
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // //  }
// // // // // // // // // // // // // // // // // // // // // // // // // // // // //else{
// // // // // // // // // // // // // // // // // // // // // // // // // // // //    alert("magazine work")
// // // // // // // // // // // // // // // // // // // // // // // // // // //    console.log("magazine work")
// // // // // // // // // // // // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // // // // // // // // // // let Bool = 1 && 0
// // // // // // // // // // // // // // // // // // // // // // // //     a = 1 && 1
// // // // // // // // // // // // // // // // // // // // // // //    b = 0 && 1
// // // // // // // // // // // // // // // // // // // // // //    c = 0 && 0
// // // // // // // // // // // // // // // // // // // // // alert(Bool)
// // // // // // // // // // // // // // // // // // // // alert(a)
// // // // // // // // // // // // // // // // // // // alert(b)
// // // // // // // // // // // // // // // // // // alert(c)
// // // // // // // // // // // // // // // // // alert(1 && 0)
// // // // // // // // // // // // // // // // alert(1 && 5)
// // // // // // // // // // // // // // // alert(null && 5)
// // // // // // // // // // // // // // alert(0 && "minecraft")
// // // // // // // // // // // // // alert(1 && 2 && null && 3)
// // // // // // // // // // // // alert(1 && 2 && null && "text")
// // // // // // // // // // // let a = 2
// // // // // // // // // //     b = 4 
// // // // // // // // //     c = 6
// // // // // // // //     d = 8
// // // // // // //     alert((a && b) || (c && d))
// // // // // // let a = !1
// // // // // alert(a)
// // // // alert(!"you")
// // // alert(!!null)
// // alert(alert(1) && 2 || alert(3))
// alert(null || 2 && 3 || 4 )
let a = prompt("кто ты??")

if(a == "Админ"){
    let b = Number(prompt("Пароль"))
    if(b == 5645681){
        alert("ку")
    }
    else if(b == "Отмена"){
        alert("Отменяю")
    }
    else{
        alert("Неверный пароль")
        }
    }
else if(a == "Отмена"){
        alert("Ваши действия не сохранены на сайте")
    }
else {
    alert("Я вас не знаю, зарегестрируйтесь")
}