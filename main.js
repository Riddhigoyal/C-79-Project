function getmenu(){
    var menu=["Chicken-Tandoori Pizza"
              "Paneer-Tikka Pizza"
               "Delux-Veggie Pizza"
               "Sweet am Pizza"
               "Veg-Supreme Pizza"]
    menu.sort();
    console.log (menu);
    document.getElementById("show menu").innerHTML=menu;
}