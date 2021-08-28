$(document).ready(function(){

    var selectGender;

    var url ="https://randomuser.me/api/?results=10";
    var p ;
    var loadMore;
    
    
    fetchInformation(url);


    //fetch info from url
    function fetchInformation(url) {
        fetch(url)
        .then((response) => (response.json()))
        .then(function(data){

            //display each volumteer
            data.results.forEach(person => {         
                p =`<button id="moreInfo"; type="button"; style="width:100%; text-align:left"
                onclick="document.getElementById('${person.login.uuid}').style.display='block'">

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

            
            //LoadMore button
            loadMore = `<button id = "loadmore"; style="background-color:black; color:white; margin:10px"> Load More</button>`;
            $("#volunteers").append(loadMore);
            //load 10 more volumteer and delete button after each click
            $("#loadmore").on("click",function() {
                fetchInformation(url);
                $(this).remove();
            });
            
        });
    }

});
