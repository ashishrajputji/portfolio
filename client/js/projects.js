function moreprojects() {
    let el = document.getElementById('projects');
    console.log(el);
    el.innerHTML += "<div class='project-1'><div class='project-text'><h1 class='project-title'>Todo-list Project</h1><h2 class='project-tech-stack'>HTML Ejs JS CSS NodeJs Mongodb Mongoose Heroku</h2><p class='project-details'>This is first  project while learning Backend Development.</p><p class='project-details'>While doing this project I learned about Sevred side.</p><p class='project-details'>It's a full CRUD web application.</p> <a style='font-size: 1.2rem; font-weight: bold; color: red;' href='https://intelligent-chaise-40748.herokuapp.com/Todo-list'>View Online</a></div>        <div class='project-image'><img class='project-img' src='../images/todo.png' alt='To DO List Project'></div> </div>"
    let btn = document.getElementById('btn-moreprojects');
    btn.style.display="none";
}


