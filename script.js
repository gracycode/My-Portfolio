document.getElementById('upload-button').addEventListener('click', function() {
    const projectLink = prompt("Enter the link to your project:");
    if (projectLink) {
        const li = document.createElement('li');
        li.textContent = projectLink;
        document.getElementById('project-list').appendChild(li);
    } else {
        alert("No link entered.");
    }
});