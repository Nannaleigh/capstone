const navToggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')

navToggle.addEventListener('click', () => {
    if(links.classList.contains('show-links')){
        links.classList.remove('show-links')
    } else {
        links.classList.add('show-links')
    }
});


const commentContainer = document.querySelector("#comment-container")
const form = document.querySelector('form')


const commentCallback = ({ data : comments }) => displayComments(comments)
const errCallback = err => console.log(err)

const getAllComments = () => axios.get('/api/comments').then(commentCallback).catch(errCallback)
const createComment = body => axios.post('/api/comments', body).then(commentCallback).catch(errCallback)


function submitHandler(e) {
    e.preventDefault()
    let name = document.querySelector('#name')
    let comment = document.querySelector('#comment')

    let bodyObj = {
        name: name.value,
        comment: comment.value
    }

    createComment(bodyObj)

    name.value = " "
    comment.value = " "
}

function createCommentCard(comment) {
    const commentCard = document.createElement('div')
    commentCard.classList.add('comment-card')

    commentCard.innerHTML = `
    <p class="comment">${comment.name} says: "${comment.comment}"</p>
    <br>
    `

    commentContainer.appendChild (commentCard)
}

function displayComments(arr) {
    commentContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createCommentCard(arr[i])
    }
}
form.addEventListener('submit', submitHandler)

getAllComments()


const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
   
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});