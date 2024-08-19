let images=["./images/gallery-1.jpg",
    "./images/gallery-2.jpg",
    "./images/gallery-3.jpg",
    "./images/gallery-4.jpg",
    "./images/gallery-5.jpg",
    "./images/gallery-6.jpg",
    
]
let ImageTag = document.getElementById('image')
let i=0;
function Increment(){
i=i+1;

if(i<images.length){
ImageTag.src=images[i];
}
else{
i=0;
ImageTag.src=images[i];
}

}
function Decrement(){
i=i-1;

if(i>0){
ImageTag.src=images[i];
}
else{
i=images.length-1;
ImageTag.src=images[i];
}

}