const caseLinks = document.querySelectorAll("ul a");
const caseImages = document.querySelectorAll("#case-container img");
    
for (let index = 0; index < caseLinks.length; index++) {
    caseLinks[index].addEventListener("click", (event)=>{
        handleCases(event.target.id);
    });
}

function handleCases(selectedId){

    for (let index = 0; index < caseImages.length; index++) {
       
        if(caseImages[index].classList.contains(selectedId) || selectedId ==="showall"){
            caseImages[index].style.opacity = 1;
        }else{
            caseImages[index].style.opacity = 0.2;
        }   
        
    }

}