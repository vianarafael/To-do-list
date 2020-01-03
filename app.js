const dataController = (function() {
    let id
     const list = {

     }

     return {
         addPost: function(post, id) {
             list[id] = post
         },

         testing: function() {
             console.log(list)
         }
     }

})()

const UIController = (function() {
    const DOM = {
        inputField: document.querySelector('.input__field'),
        text: document.querySelector('.text__input'),
        btn: document.querySelector('.add__btn'),
        container: document.querySelector('.container'),
        remove: document.querySelector('.item')
    }
    return {
        DOM,
        clearInput: function() {
            DOM.text.value = ''
        },

        displayListItem: function(post, id) {
            let html, newHtml
            
            html = '<div class="item__container" draggable="true"><div class="item" id="%id%">%content%<button>X</button></div></div>'

            newHtml = html.replace('%content%', post)
            newHtml = newHtml.replace('%id%', id)
            DOM.container.insertAdjacentHTML('beforeend', newHtml)

        }
    }
})()

const controller = (function(UICtrl, dataCtrl) {
    console.log('working')
    let id = 0

    function addItem() {
        // get the value from the input field
        let value = UICtrl.DOM.text.value
            if (value !== '') {
            // save the value data 
            dataCtrl.addPost(value, id)


            // clear input
            UICtrl.clearInput()

            // display list
            UICtrl.displayListItem(value, id)

            id++
        }

    }


    UICtrl.DOM.btn.addEventListener('click', addItem)

    document.addEventListener('keypress', function (e) {
        if (e.keyCode === 13) {
            addItem()
        }

    })

    // delete item
    UICtrl.DOM.container.addEventListener('click', function(e) {
        const el = e.target.parentNode

        if (el.id) {
            el.parentNode.removeChild(el)
        }
    })

    // drag and drop

})(UIController, dataController)

