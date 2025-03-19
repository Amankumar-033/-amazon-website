const xhr = new XMLHttpRequest();
xhr.open('GET','http://supersimplebackend.dev/products');
xhr.send();

xhr.addEventListener('load',()=>{
    console.log(xhr.response);
});

