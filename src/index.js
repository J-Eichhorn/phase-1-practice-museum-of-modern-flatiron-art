console.log('Write your code here');
let url = ('http://localhost:3000/current-exhibits')
let commentSection = document.getElementById("comments-section")
let newComment = document.getElementById("comment-form")
let buyTicket = document.getElementById("buy-tickets-button")
let ticketsBought = document.getElementById("tickets-bought")

let counter = 0



fetch(url)
.then(response => response.json())
.then(data => renderArtExhibit(data))

function renderArtExhibit(artArray) {
    artArray.forEach(art => {
        let artTitle = document.getElementById("exhibit-title")
        artTitle.innerText = art.title

        let artDesc = document.getElementById("exhibit-description")
        artDesc.innerText = art.description

        let artImage = document.getElementById("exhibit-image")
        artImage.src = art.image

        art.comments.forEach(comment => {
            let p = document.createElement('p')
            p.innerText = comment
            commentSection.append(p)
        })
    })

}

newComment.addEventListener('submit', (e) => {
    e.preventDefault()
    let p = document.createElement('p')
    p.innerText = e.target['comment-input'].value
    commentSection.append(p)
})

buyTicket.addEventListener('click', () => {
    counter++
    ticketsBought.innerText = `${counter} Tickets Bought`
})