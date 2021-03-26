let emailCollectorForm = document.getElementById("Email-Collector")
emailCollectorForm.addEventListener("submit", event => {
    // Stop the default event behavior
    event.preventDefault()

    // use FormData to get the User's name and email    
    let ourFormData = new FormData(event.target)
    
    let userFirstName = ourFormData.get("firstName")
    let userEmailAddress = ourFormData.get("emailAddress")
        
    let updatedHtmlContent = `
        <h2 class="provoke-text">Tebrikler, ${userFirstName}!</h2>

        <span class="register-text">Mangal ustası olma yolunda ilk adımı attın!</span>
        
        <p class="text-description" >${userEmailAddress} adresine haftalık olarak mangal tüyoları göndereceğiz.</p>
    `
    
    let updatedContentContainer = document.getElementsByClassName("container-second")
    updatedContentContainer[0].innerHTML = updatedHtmlContent
})
