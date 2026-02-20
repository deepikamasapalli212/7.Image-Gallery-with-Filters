const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementById("close");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const images = [

/* 📚 Books */
"https://images.unsplash.com/photo-1512820790803-83ca734da794",
"https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
"https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
"https://images.unsplash.com/photo-1519681393784-d120267933ba",
"https://images.unsplash.com/photo-1481627834876-b7833e8f5570",
"https://images.unsplash.com/photo-1507842217343-583bb7270b66",
"https://images.unsplash.com/photo-1491841550275-ad7854e35ca6",
"https://images.unsplash.com/photo-1516979187457-637abb4f9353",

/* 🎌 Anime */
"https://images.unsplash.com/photo-1606112219348-204d7d8b94ee",
"https://images.unsplash.com/photo-1584824486539-53bb4646bdbc",
"https://images.unsplash.com/photo-1599507593499-a3f7d7d97667",
"https://images.unsplash.com/photo-1581338834647-b0fb40704e21",
"https://images.unsplash.com/photo-1578632292335-df3abbb0d586",
"https://images.unsplash.com/photo-1614583225154-5fcdda07019e",
"https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead",
"https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b"

];

let currentIndex = 0;

images.forEach((src,index)=>{
    const img = document.createElement("img");
    img.src = src + "?auto=format&fit=crop&w=600&q=80";
    img.onclick = ()=> openModal(index);
    gallery.appendChild(img);
});

function openModal(index){
    currentIndex = index;
    modal.style.display="flex";
    modalImg.src = images[currentIndex];
}

function closeModal(){
    modal.style.display="none";
}

function showNext(){
    currentIndex = (currentIndex + 1) % images.length;
    modalImg.src = images[currentIndex];
}

function showPrev(){
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    modalImg.src = images[currentIndex];
}

closeBtn.onclick = closeModal;
nextBtn.onclick = showNext;
prevBtn.onclick = showPrev;

modal.onclick = function(e){
    if(e.target === modal){
        closeModal();
    }
};
