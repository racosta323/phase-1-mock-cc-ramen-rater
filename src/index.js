//page load

function init(){
    document.addEventListener("DOMContentLoaded",()=> {
        //enter functions here
        loadRamen()
        formListener()
    })
}

//load ramens

function loadRamen(){
    fetch("http://localhost:3000/ramens")
    .then(response => response.json())
    .then((data)=>{
        //get each ramen
        data.forEach(e => renderRamen(e)) 
    })
}



const ramenDiv = document.getElementById("ramen-menu")
const mainImg = document.querySelector("img.detail-image")
const mainImgName = document.querySelector(".name")
const mainImgRest = document.querySelector(".restaurant")
const ratingElement = document.body.childNodes[11]
const insertRatingElement = document.getElementById("rating-display")
const commentElement = document.getElementById("comment-display")
const form = document.querySelector('form')
// const commentBox = document.getElementById("new-comment").select()


//renders Ramen

function renderRamen(ramen){
    //creates elements
    const img = document.createElement("img")

    //define attributes
    img.src = ramen.image
    img.alt = `${ramen.name} image`
    img.addEventListener('click', ()=>{
        //updates main image
        clickUpdates(ramen)
    })
    
    //adds to DOM
    ramenDiv.append(img)

}

//update DOM functions

function clickUpdates(ramenUpdate){
    mainImg.src = ramenUpdate.image
    mainImg.alt = `${ramenUpdate.name} image`
    
    mainImgName.innerText = ramenUpdate.name
    
    mainImgRest.innerText = ramenUpdate.restaurant
    ratingElement.innerText = `Rating: ${ramenUpdate.rating}`
    insertRatingElement.innerText = ramenUpdate.rating
    commentElement.innerText = ramenUpdate.comment
}

//form updates

function formListener(){
    form.addEventListener('submit', e => {
        e.preventDefault()
        let nameTarget = e.target.name.value 
        let restaurantTarget = e.target.restaurant.value
        let imageTarget =e.target.image.value 
        let ratingTarget = e.target.rating.value
        let commentTarget = e.target["new-comment"].value
    
       

        //creates elements
        const img = document.createElement("img")

        //define attributes
        img.src = imageTarget
        img.alt = `${nameTarget} image`
        img.addEventListener('click', ()=>{
            //updates main image
            console.log("I was clicked from form")
        })

        //adds to DOM
        ramenDiv.append(img)

        //Resets form
        form.reset

        //adds event listener so main image updates when clicked
        
        img.addEventListener('click', ()=>{
            //updates main image
            mainImg.src = imageTarget
            mainImg.alt = `${nameTarget} image`
        
            mainImgName.innerText = nameTarget
        
            mainImgRest.innerText = restaurantTarget
            ratingElement.innerText = `Rating: ${ratingTarget}`
            insertRatingElement.innerText = ratingTarget
            commentElement.innerText = commentTarget
        })
    })
}




//initialize
init()



//ramen noodle image link: https://www.kroger.com/product/images/large/front/0004178900211
