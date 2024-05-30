// let blogRow = document.getElementById("blogRow")
// axios.get("http://localhost:5000/api/v1/blog/blogs")
// .then((response) => {
//   let data = response.data;
//   console.log(data);
//   data.forEach(data => {
//     blogRow.innerHTML += `
//       <div class="my-3 col col-lg-12 col-md-12 col-12">
//         <div class="card pb-3 d-flex flex-row border-0">
//           <div class="card-img">
//             <img src="${data.File}" style="border-radius: 50%;" class="" width="100px" height="100px" alt="...">
//           </div>
//           <div class="text text-start">
//             <h5 class="card-title my-3">${data.Title}</h5>
//             <p class="card-text">${data.Message}</p>
//           </div>
//         </div>
//       </div>
//     `
//   });
// })


// const backgrounds = [
//     { 
//         category: "Friendly Debate",
//         topic: "Discussing The Impact Of Technology On The World",
//         image: 'images/img1.jpeg',
//         text: 'Exhibition by London-based architect and curator Dave Peace with films by Tg Omori,<br>October 16 - December 10',
//         next: "Trade Fair"  
//     },
//     { 
//         category: "Trade Fair", 
//         topic: "Building International Relationship Through Trade",
//         image: 'images/img3.jpeg', 
//         text: 'Exhibition by London-based architect and curator Dave Peace with films by Tg Omori,<br>March 21 - March 28',
//         next: "Beauty" 
//     },
//     { 
//         category: "Beauty", 
//         topic: "Awareness On The Essence Of Skin-Care",
//         image: 'images/img22.png', 
//         text: 'Exhibition by London-based architect and curator Dave Peace with films by Tg Omori,<br>August 12 - September 29',
//         next: "Friendly Debate"  
//     }
// ];
//     let heroSec = document.querySelector(".herosection")
//     let heroText = document.querySelector(".heroText")
//     let heroCateg = document.querySelector(".category")
//     let heroTopic = document.querySelector(".topic")
//     function setRandomBackground() {
//         const randomIndex = Math.floor(Math.random() * backgrounds.length);
//         const randomBackground = backgrounds[randomIndex];
//         heroSec.style.backgroundImage = `linear-gradient(#2a2a2ae5, #2a2a2aea), url(${randomBackground.image})`;
//         heroText.innerHTML = randomBackground.text;
//         heroCateg.innerHTML = randomBackground.category;
//         heroTopic.innerHTML = randomBackground.topic;
//     }
  
//     setInterval(setRandomBackground, 2000);

    const backgrounds = [
        { 
            category: "Exhibition",
            topic: "A Lot With Little",
            image: 'images/img2.jpg',
            text: 'Exhibition by London-based architect and curator Dave Peace with films by Tg Omori,<br>October 16 - December 10',
            next: "Friendly Debate"  
        },
        { 
            category: "Friendly Debate",
            topic: "Discussing The Impact Of Technology On The World",
            image: 'images/img1.jpeg',
            text: 'Exhibition by London-based architect and curator Dave Peace with films by Tg Omori,<br>October 16 - December 10',
            next: "Trade Fair"  
        },
        { 
            category: "Trade Fair", 
            topic: "Building International Relationship Through Trade",
            image: 'images/img3.jpeg', 
            text: 'Exhibition by London-based architect and curator Dave Peace with films by Tg Omori,<br>March 21 - March 28',
            next: "Beauty" 
        },
        { 
            category: "Beauty", 
            topic: "Awareness On The Essence Of Skin-Care",
            image: 'images/img22.png', 
            text: 'Exhibition by London-based architect and curator Dave Peace with films by Tg Omori,<br>August 12 - September 29',
            next: "Exhibition"  
        }
    ];
    
    let currentIndex = 0;
    
    let heroSec = document.querySelector(".herosection");
    let heroText = document.querySelector(".heroText");
    let heroCateg = document.querySelector(".category");
    let heroTopic = document.querySelector(".topic");
    let heroNext = document.querySelector(".next");

    let radio1 = document.querySelector(".radio1")
    let radio2 = document.querySelector(".radio2")
    let radio3 = document.querySelector(".radio3")
    let radio4 = document.querySelector(".radio4")
    
    function setNextBackground() {
        const currentBackground = backgrounds[currentIndex];
        heroSec.style.backgroundImage = `linear-gradient(#2a2a2ae5, #2a2a2aea), url(${currentBackground.image})`;
        heroText.innerHTML = currentBackground.text;
        heroCateg.innerHTML = currentBackground.category;
        heroTopic.innerHTML = currentBackground.topic;
        heroNext.innerHTML = currentBackground.next;
        currentIndex = backgrounds.findIndex(item => item.category === currentBackground.next);
        if (currentIndex === -1) {
            currentIndex = 0;
        }
        if (currentIndex === 0) {
            radio4.style.backgroundColor = "#fff"
            radio1.style.backgroundColor = "transparent"
            radio2.style.backgroundColor = "transparent"
            radio3.style.backgroundColor = "transparent"
        } else if (currentIndex === 1) {
            radio1.style.backgroundColor = "#fff"
            radio2.style.backgroundColor = "transparent"
            radio3.style.backgroundColor = "transparent"
            radio4.style.backgroundColor = "transparent"
        } else if (currentIndex === 2) {
            radio2.style.backgroundColor = "#fff"
            radio3.style.backgroundColor = "transparent"
            radio4.style.backgroundColor = "transparent"
            radio1.style.backgroundColor = "transparent"
        } else if (currentIndex === 3) {
            radio3.style.backgroundColor = "#fff"
            radio4.style.backgroundColor = "transparent"
            radio1.style.backgroundColor = "transparent"
            radio2.style.backgroundColor = "transparent"
        }
    }
    
    document.addEventListener("DOMContentLoaded", () => {
        setNextBackground();
        setInterval(setNextBackground, 5000);
    })
    
    // let teamImg = document.querySelector(".teamimg");
    // let teamName = document.querySelector(".teamname");
    // let teamJob = document.querySelector(".teamjob");
    // let back = document.querySelector("#back");
    // let front = document.querySelector("#front");

    // const team = [
    //     { 
    //         name: "Jessica John",
    //         job: "Jouranlist, Activist, Researcher",
    //         image: 'images/img2.jpg'
    //     },
    //     { 
    //         name: "Reuben McDonalds",
    //         job: "Model, Activist, Lawyer",
    //         image: 'images/img6.jpg'
    //     },
    //     { 
    //         name: "Charllote Henry",
    //         job: "Designer, Planner, Strategist",
    //         image: 'images/img4.png'  
    //     }
    // ];
    
    // function setNextTeam() {
    //     const currentTeam = team[currentIndex]
    //     teamImg.src = currentTeam.image;
    //     teamName.innerHTML = currentTeam.name;
    //     teamJob.innerHTML = currentTeam.job;
    //     currentIndex = 0;
    // }
    // setNextTeam();
    // document.addEventListener("DOMContentLoaded", () => {
        
    //     setInterval(setNextTeam, 5000);
    // })


// // Initialize Swiper
// var swiper = new Swiper(".mySwiper", {
//     // Set initial number of slides per view
//     slidesPerView: 3,
//     // Responsive breakpoints
//     breakpoints: {
//         // When window width is <= 768px
//         768: {
//             slidesPerView: 1,
//         },
//         // When window width is <= 992px
//         992: {
//             slidesPerView: 2,
//         },
//     },
//     //Set gp between slides
//     spaceBetween: 30,
//     //Specify autoplay and delay
//     autoplay: {
//         delay: 6000,
//     },
//     //To loop
//     loop: true,
// });