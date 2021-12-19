// XMLHttpRequest

 
function getUsers() {
    
    function render() {
       let response = this.responseText;
       let responseData = JSON.parse(response);

       let ul = document.createElement('ul');
       responseData.data.forEach(item => { 
           let li = document.createElement ('li');
           li.textContent = item.email;
           li.classList.add('list');
           ul.appendChild (li);
           
       });

       document.getElementById('api').appendChild(ul);

       console.log(responseData);
}
    function errorRender (){
        let p = document.createElement('p');
        p.textContent = 'server error' ;

        document.getElementById('api').appendChild(p);
    }

 
    let requist = new XMLHttpRequest ();
    requist.addEventListener('load', render);
    requist.addEventListener('error' , errorRender);
    
    requist.open ('GET', 'https://reqres.in/api/users?page=2');
    requist.send(); 
}

getUsers();


// fetch

// fetch('https://reqres.in/api/users?page=2', {
//     method : 'GET'
// })

//    .then (function(response){
//        if (response.status !== 200) {
//            throw 'error';
//        }
//        return response.JSON();
//    })
//    .then (function(responseData){
//     // console.log(responseData);

//     let ul = document.createElement('ul');

//          responseData.data.forEach(item => { 
//             let li = document.createElement ('li');
//             li.textContent = item.email;
//             li.classList.add('list');

//             ul.appendChild(li);
//    });

//      document.getElementById('api').appendChild(ul);
// })
//    .catch(function(error) {
//     if (error == 404) {
//         console.log('Page not Found');
//     } else {
//         console.log('Server Error');
//     }
// });