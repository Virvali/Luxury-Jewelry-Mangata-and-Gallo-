const buttonScrollLeft = document.querySelector('.scrollLeft');
const buttonScrollRight = document.querySelector('.scrollRight');
const gallery =document.querySelector('.galleryContainer');
const imageGallery =document.querySelector(".imageGallery");

function initChange(){
    const lastImage = imageGallery.querySelector("img:last-child");
    const clonedImage = lastImage.cloneNode(true);
    imageGallery.insertBefore(clonedImage, imageGallery.firstChild);
    lastImage.remove();

    let galleryImg =document.querySelector(".imageGallery img");    
    galleryImg =getComputedStyle(galleryImg);    
    galleryImg = galleryImg.width;    
    galleryImg=parseFloat(galleryImg);    
    let igStyle =getComputedStyle(imageGallery);    
    let igGap =igStyle.gap;    
    igGap=parseFloat(igGap);    
    const corrScrollAmount=galleryImg+igGap;    
    console.log(corrScrollAmount)
    gallery.scrollBy({
        left: corrScrollAmount,
        behavior: "auto"
    });

    console.log('initial change complete')
}

document.addEventListener("DOMContentLoaded", initChange);

function scrollLeft(){
        
    const parentLeft = gallery.getBoundingClientRect().left;    
    const childImg = imageGallery.querySelector('img:first-child');    
    const childImgLeft = childImg.getBoundingClientRect().left;    
    const scrollAmount=parentLeft-childImgLeft;           

    // Get the last image element
    const lastImage = imageGallery.querySelector("img:last-child");

    // Clone the last image
    const clonedImage = lastImage.cloneNode(true);

    // Remove the last image from the image container
    lastImage.remove();
  
    // Add the cloned image to the beginning of the image container and adjust the position of the images after the removal 
    imageGallery.insertBefore(clonedImage, imageGallery.firstChild);

    //calculates scrolling distance based on image and gap widths    
    let galleryImg =document.querySelector(".imageGallery img");
    
    galleryImg =getComputedStyle(galleryImg); //getting width throug element.width gives rounded value
    galleryImg = galleryImg.width;
    
    galleryImg=parseFloat(galleryImg);
    
    let igStyle =getComputedStyle(imageGallery);
    let igGap =igStyle.gap;
    
    igGap=parseFloat(igGap);
    
    const corrScrollAmount=galleryImg+igGap;     
    
    gallery.scrollBy({//position adjustment  //putting this part into 'setTimeout' causes the position issue
        left: corrScrollAmount,
        behavior: "auto"
    });    

    gallery.scrollBy({
        left: -scrollAmount,
        behavior: "smooth"
    }); 

    this.disabled=true;//limites the speed of clicking the button to keep from braking(not ideal)
    setTimeout(() => {this.disabled=false;}, 350);
}

function scrollRight(){
    
    const parentRight = gallery.getBoundingClientRect().right;   
    const childImg = imageGallery.querySelector('img:nth-child(5)');    
    const childImgRight = childImg.getBoundingClientRect().right;    
    const scrollAmount=childImgRight-parentRight;            

    // Get the first image element
    const firstImage = imageGallery.querySelector("img:first-child");
    
    // Clone the first image
    const clonedImage = firstImage.cloneNode(true);
    
    // Add the cloned image to the end of the image container    
    imageGallery.appendChild(clonedImage);
  
    // Remove the first image from the image container and adjust the position of the images after the removal
    firstImage.remove();

    //calculates scrolling distance based on image and gap widths    
    let galleryImg =document.querySelector(".imageGallery img");
    
    galleryImg =getComputedStyle(galleryImg); //getting width throug element.width gives rounded value
    galleryImg = galleryImg.width;
    
    galleryImg=parseFloat(galleryImg);
    
    let igStyle =getComputedStyle(imageGallery);
    let igGap =igStyle.gap;
    
    igGap=parseFloat(igGap);
    
    const corrScrollAmount=galleryImg+igGap;  
             
    gallery.scrollBy({//position adjustment  //putting this part into 'setTimeout' causes the position issue
        left: -corrScrollAmount,
        behavior: "auto"
    });    

    gallery.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
    }); 

    this.disabled=true;//limites the speed of clicking the button to keep from braking(not ideal)
    setTimeout(() => {this.disabled=false;}, 350); 
}

buttonScrollLeft.addEventListener('click', scrollLeft);
buttonScrollRight.addEventListener('click', scrollRight);