function loadHome(){
    document.getElementById("article-gallery").setAttribute("style", "display: none");
    document.getElementById("article-body").setAttribute("style", "display: block");
    const test =  document.getElementById("article-body");
    test.innerHTML= `<p>Hey, thanks for showing interest to read about me &hearts;</p>
    <p>I am from small village of Bidar district in Karnataka, India.</p>
    <p>I can speak, read and write Kannada, Hindi and English languages fluently.</p>
    <p>I love to play badminton and watch movies during freetime.</p>
    <p>I like to create website and webapplications, using latest Technologies like HTML5, CSS3, ReactJs.</p>`;
}

function loadAboutMe(){
    document.getElementById("article-gallery").setAttribute("style", "display: none");
    document.getElementById("article-body").setAttribute("style", "display: block");
    const test =  document.getElementById("article-body");
    test.innerHTML= `<p>Associate software engineer, working with Cerner Health care, India.
    </p>
    <p>Hobbies:</p>
    <ul>
    <li>Learning new technologies</li>
    <li>Reading tech blogs</li>
    <li>Fascinated about mobile operating systems</li>
    <li>Love Music</li>
    <li>Playing badminton</li>
    </ul>`;
}

function loadContact(){
    document.getElementById("article-gallery").setAttribute("style", "display: none");
    document.getElementById("article-body").setAttribute("style", "display: block");
    const test =  document.getElementById("article-body");
    test.innerHTML =`<p>Girijapathi D Math</p>
    <p>#1-222</p>
    <p>Bangalore</p>
    <p>India</p>
    <p>560045</p>`;
    
}
function ShowGallery() {
    document.getElementById("article-body").setAttribute("style", "display: none");
    document.getElementById("article-gallery").setAttribute("style", "display: block");
    const test =  document.getElementById("article-gallery");
    test.innerHTML =`<h2>Life in the wild!</h2>
    <div class="container">
        <img src="https://static.pexels.com/photos/52500/horse-herd-fog-nature-52500.jpeg" alt="" srcset="">
        <img src="https://static.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg" alt="" srcset="">
        <img src="https://static.pexels.com/photos/213399/pexels-photo-213399.jpeg" alt="" srcset="">
        <img src="https://static.pexels.com/photos/158471/ibis-bird-red-animals-158471.jpeg" alt="" srcset="">
        <img src="https://static.pexels.com/photos/133459/pexels-photo-133459.jpeg" alt="" srcset="">
        <img src="https://static.pexels.com/photos/50988/ape-berber-monkeys-mammal-affchen-50988.jpeg" alt="" srcset="">
    </div>`;
}