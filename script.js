var url ="https://randomuser.me/api/?results=10";

fetchInformation(url);
    
//fetch info from url
function fetchInformation(url_address) {
    fetch(url_address)
    .then((response) => (response.json()))
    .then(function(data){

        data.results.forEach(person => {         
            var p =`<button class="border" style="width:100%; text-align:left" 
            onclick="show_hide('${person.login.uuid}')" >

                <img src="${person.picture.medium}" style="float:right";>
                ${person.name.title}
                ${person.name.first}
                ${person.name.last}
                <br/>  Emall:${person.email}
                <br/>  Phone:${person.phone} 

                <!--hidden parts-->
                <span id="${person.login.uuid}" style="display:none">
                    Username: ${person.login.username}
                    <br/>age: ${person.dob.age}
                    <br/>Address: ${person.location.street.number}
                    ${person.location.street.name}
                    ,${person.location.city}
                    ,${person.location.state}
                    ,${person.location.country}
                    <br/>Postcode:${person.location.postcode}
                </span>
            
            </button>`;

            $("#volunteers").append(p);
        });        
    });
    
}

//show and hide info 
function show_hide(id) {
    var i=document.getElementById(id);
    if (i.style.display=='block') {
        i.style.display='none';
    } else {
        i.style.display='block';
    }
}

//load 10 more volumteer
function loadMore() {  
    fetchInformation(url);  
}
