const container = document.getElementById('container');
const loginBtn = document.getElementById('login'); 
loginBtnBtn.addEventListener('click', () => {
    container.classList.remove("active");
}
)

document.querySelector('.like-icon').addEventListener('click', function() {
    var likeCount = parseInt(document.querySelector('.like-count').textContent);
    likeCount++;
    document.querySelector('.like-count').textContent = likeCount;
});

document.getElementById('subscribe-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var status = document.getElementById('status');
    status.textContent = 'Subscribing...';
    // Simulate a delay for demonstration purposes
    setTimeout(function() {
      status.textContent = 'Subscription successful!';
      status.style.color = 'blue';
    }, 2000);
  });


  const message = document.getElementById('message');

document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault(); // prevent the form from submitting normally

  // 
  //

  // if the form is valid
  message.textContent = 'Registered successfully';
  message.style.color = 'green';
});

const form = document.getElementById("add-post-form");
const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
const imageInput = document.getElementById("image");
const deleteBtn = document.getElementById("delete-post-btn");

// Add post functionality
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newPost = {
    title: titleInput.value,
    content: contentInput.value,
    image: imageInput.value,
  };

  // Save newPost to your data source (e.g. localStorage, firebase, etc.)

  // Clear form fields
  titleInput.value = "";
  contentInput.value = "";
  imageInput.value = "";
});

// Delete post functionality
deleteBtn.addEventListener("click", () => {
  // Delete the post from your data source

  // Clear form fields
  titleInput.value = "";
  contentInput.value = "";
  imageInput.value = "";
});


const postList = document.querySelector('.post-list'); const deleteModal = document.getElementById('delete-modal'); const overlay = document.getElementById('overlay'); const editPostModal = document.getElementById('edit-post-modal'); const closeEditBtn = document.querySelector('.close-edit-btn'); const editPostTitle = document.getElementById('edit-post-title'); const editPostContent = document.getElementById('edit-post-content'); const saveEditBtn = document.querySelector('.save-edit-btn');

let selectedPostId;

postList.addEventListener('click', (e) => { if (e.target.matches('.edit-btn')) { editPost(e.target.parentElement.dataset.postId); } if (e.target.matches('.delete-btn')) { selectedPostId = e.target.parentElement.dataset.postId; showDeleteModal(); } });

function showDeleteModal() { deleteModal.style.display = 'block'; overlay.style.display = 'block'; }

function hideDeleteModal() { deleteModal.style.display = 'none'; overlay.style.display = 'none'; selectedPostId = null; }

overlay.addEventListener('click', hideDeleteModal); deleteModal.querySelector('.cancel-btn').addEventListener('click', hideDeleteModal); deleteModal.querySelector('.delete-confirm-btn').addEventListener('click', () => { // Add your delete post logic here console.log(Post with id ${selectedPostId} has been deleted.); hideDeleteModal(); });

function editPost(postId) { const postToEdit = document.querySelector([data-post-id="${postId}"]); selectedPostId = postId; editPostTitle.textContent = postToEdit.querySelector('h2').textContent; editPostContent.value = postToEdit.querySelector('p').textContent; editPostModal.style.display = 'block'; }

closeEditBtn.addEventListener('click', () => { editPostModal.style.display = 'none'; });

saveEditBtn.addEventListener('click', () => { // Add your save changes logic here console.log(Post with id ${selectedPostId} has been updated.); editPostModal.style.display = 'none'; });

editPostContent.addEventListener('keydown', (e) => { if (e.key === 'Enter') { saveEditBtn.click(); } });
