window.addEventListener("DOMContentLoaded", event => {
    // alert that the DOM is loaded when the Dom is loaded...
    // window.alert("the DOM IS LOADED")
    
    // When #red-input contains the word "red" change the background color 
    // of hte input to red 
    const red_input = document.getElementById("red-input")

    red_input.addEventListener("input", red_input_function)

    function red_input_function (event) {
        if(event.target.value.includes("red")){
            event.target.setAttribute("style", "background-color: red")
        } else {
            event.target.setAttribute("style", "background-color: white")
        }
    }

    //  When #add-item is pressed, a new <li> element with the value from 
    //  #list-add is created and appended to the <ul>

    const list = document.getElementById("section-2").children[1]

    const add_item = document.getElementById("add-item")
    const list_add = document.getElementById("list-add")
    add_item.addEventListener("click" , add_items )

    function add_items (event) {
        const newLi = document.createElement("li")
        newLi.innerText = list_add.value
        list.appendChild(newLi)
    }

    //  When a new color is selected in #color-select, change the background color 
    //  of the <section> it belongs to.

    const section_three = document.getElementById("section-3");
    const color_select = document.getElementById("color-select")

    color_select.addEventListener("input", color_select_handler)

    function color_select_handler(event) {
        section_three.setAttribute("style", `background-color: ${event.target.value}`)
    }

    //  When #remove-listeners is clicked, all event listeners from the previous three 
    //  sections should be removed.

    const remove_listeners = document.getElementById("remove-listeners")

    remove_listeners.addEventListener("click", event => {
        red_input.removeEventListener("input", red_input_function)
        add_item.removeEventListener("click", add_items)
        color_select.removeEventListener("input", color_select_handler)
    })


});