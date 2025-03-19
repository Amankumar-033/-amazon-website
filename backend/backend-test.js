const xhr = new XMLHttpRequest();
xhr.open('GET','http://supersimplebackend.dev/documentation');
xhr.send();

xhr.addEventListener('load',()=>{
    console.log(xhr.response);
});

