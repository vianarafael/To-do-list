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
            
            html = '<div class="item__container"><div class="item" id="%id%">%content%<button>X</button></div></div>'

            newHtml = html.replace('%content%', post)
            newHtml = newHtml.replace('%id%', id)
            DOM.container.insertAdjacentHTML('beforeend', newHtml)

        }
    }
})()

const controller = (function(UICtrl, dataCtrl) {
    console.log('working')
    let id = 0
    // get the value from the input field
    UICtrl.DOM.btn.addEventListener('click', function() {
        let value = UICtrl.DOM.text.value

        // save the value data 
        dataCtrl.addPost(value, id)


        // clear input
        UICtrl.clearInput()

        // display list
        UICtrl.displayListItem(value, id)

        id++

    })

    // delete item
    UICtrl.DOM.container.addEventListener('click', function(e) {
        const el = e.target.parentNode

        if (el.id) {
            console.log(el.parentNode.parentNode)
            el.parentNode.removeChild(el)
        }
    })


})(UIController, dataController)

