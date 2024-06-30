
const projectsListe = document.querySelectorAll("aside li")
let article = document.querySelector("article")
const listeLink = document.querySelectorAll("li .link")
const main = document.querySelector("main")

function blockLink(){
    for(let a=0; a<listeLink.length; a++){
        listeLink[a].addEventListener("click", (event)=>{
            event.preventDefault()
        })
    }

}
blockLink()


function previewProject(){
    for(let i=0; i<projectsListe.length; i++){
        projectsListe[i].addEventListener("click", ()=>{
            console.log(projectsListe[i].innerText)
            main.classList.add("rotate")

            setTimeout(() => {
                main.classList.remove("rotate");
            }, 700);
            article.innerHTML=""
            title = document.createElement("h1")
            title.innerHTML=projectsListe[i].innerText
            article.appendChild(title)
            paragraph = document.createElement("p")
            paragraph.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet egestas nisi, nec mollis dui. Aenean cursus eu diam eget elementum. Suspendisse potenti. Sed mollis faucibus faucibus. Aliquam convallis posuere viverra. Integer sodales elit ullamcorper placerat viverra. Praesent laoreet tempus leo ut tristique. Quisque mollis eleifend risus, vitae egestas erat congue id. Sed pretium, nisi at egestas egestas, lacus lectus efficitur urna, vel condimentum dui ex vel nulla. Integer eu enim eget purus accumsan posuere sed in tortor. Ut augue est, scelerisque sit amet risus sed, vestibulum viverra tellus. Donec sagittis porttitor mauris non fringilla. Integer malesuada vel elit at lobortis. Nam porta purus id enim egestas venenatis."
            article.appendChild(paragraph)
            
            const linkSite = document.createElement("a")
            linkSite.innerText="Voir le site"
            linkSite.setAttribute("href", "")
            linkSite.setAttribute("class", "linksite")
            article.appendChild(linkSite)
            
            

        })
    }
}
previewProject()

// function rotate(){

// }