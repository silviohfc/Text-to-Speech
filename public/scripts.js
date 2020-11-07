const Form = {
    commentForm: document.querySelector('#commentForm'),
    commentText: document.querySelector('#comment')
}

const Comments = {
    server: 'http://localhost:5000/',
    commentsList: document.querySelector('.list'),

    newComment(event){
        event.preventDefault()
        
        let ajax = new XMLHttpRequest()
        const params = `comment=${Form.commentText.value}`

        ajax.open('POST', Comments.server)
        ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')

        ajax.onreadystatechange = () => {
            if (ajax.status === 200 && ajax.readyState === 4) {
                const response = JSON.parse(ajax.responseText)
                Comments.updateComments(response)

                Form.commentText.value = ""
            }
        }

        ajax.send(params)
    },

    updateComments(data) {
        console.log(data)

        const item = document.createElement('div')
        const p = document.createElement('p')
        const button = document.createElement('button')
        
        item.classList.add('item')
        p.innerHTML = data.comment
        button.innerHTML = 'Ouvir'

        item.appendChild(p)
        item.appendChild(button)

        Comments.commentsList.appendChild(item)
        
    }
}

Form.commentForm.addEventListener('submit', Comments.newComment, false)