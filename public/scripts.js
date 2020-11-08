const Form = {
    commentForm: document.querySelector('#commentForm'),
    commentText: document.querySelector('#comment'),
    submitButton: document.querySelector('#commentForm button'),

    reset() {
        Form.commentText.value = ""
        Form.submitButton.removeAttribute('disabled')
        Form.commentText.classList.remove('error')
    },

    error() {
        Form.commentText.classList.add('error')
    }
}

const Comments = {
    server: 'http://localhost:5000/',
    commentsList: document.querySelector('.list'),
    playButtons: document.querySelectorAll('.item button'),
    audio: document.querySelector('audio'),

    newComment(event){
        event.preventDefault()

        if (Form.commentText.value.trim() === "") return Form.error()

        Form.submitButton.setAttribute('disabled', '')
        
        let ajax = new XMLHttpRequest()
        const params = `comment=${Form.commentText.value}&audio_name=${Date.now()}`

        ajax.open('POST', Comments.server)
        ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')

        ajax.onreadystatechange = () => {
            if (ajax.status === 200 && ajax.readyState === 4) {
                const response = JSON.parse(ajax.responseText)
                Comments.updateComments(response)

                Form.reset()
            }
        }

        ajax.send(params)
    },

    updateComments(data) {
        data.path = data.path.replace(`${window.location.href}public`, "")
        console.log(data)

        const item = document.createElement('div')
        item.classList.add('item')        
        
        const p = document.createElement('p')
        p.innerHTML = data.comment
        
        const button = document.createElement('button')
        button.innerHTML = 'Ouvir'
        button.addEventListener('click', Comments.listen)

        item.appendChild(p)
        item.appendChild(button)
        item.setAttribute('data-source', data.path)

        Comments.commentsList.appendChild(item)
    },

    async listen(event) {
        const { audio } = Comments

        const item = event.target.parentNode
        const source = item.dataset.source
        
        audio.src = source
        await audio.load()

        audio.play()
        
    }
}

Form.commentForm.addEventListener('submit', Comments.newComment, false)
Comments.playButtons.forEach(button => button.addEventListener('click', Comments.listen))