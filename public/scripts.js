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
        const params = `comment=${Form.commentText.value}&audio_name=${Date.now()}`

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
        data.path = data.path.replace('public/', "")

        console.log(data)

        const item = document.createElement('div')
        const p = document.createElement('p')
        const button = document.createElement('button')
        const audio = new Audio()
        
        
        item.classList.add('item')
        p.innerHTML = data.comment
        button.innerHTML = 'Ouvir'
        audio.src = data.path

        item.appendChild(p)
        item.appendChild(button)
        item.appendChild(audio)

        Comments.commentsList.appendChild(item)
    }
}

Form.commentForm.addEventListener('submit', Comments.newComment, false)