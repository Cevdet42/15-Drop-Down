document.getElementById("city").addEventListener("change", city_changed);
document.getElementById("location").addEventListener("change", location_changed);

function city_changed(){

city_istanbul = ["Galata Kulesi", "Ayasofya", "Eminönü"];


var city;
var i;
city  = document.getElementById("city").value;


document.getElementById("location_name").innerHTML = city;

if(city == "İstanbul")
    for(i=0; i<city_istanbul.length;i++)
        document.getElementById("location").innerHTML += '<option value="'+city_istanbul[i]+'">'+ city_istanbul[i] +'</option>';

}


function location_changed(){
    var location;
    location = document.getElementById("location").value;

    document.getElementById("location_name").innerHTML = location;

    if(location == "Galata Kulesi")
    document.getElementById("location_image").src = "https://live.staticflickr.com/4691/39523615501_d7a8f552f6_b.jpg";

    if(location == "Ayasofya")
    document.getElementById("location_image").src = "https://miro.medium.com/max/760/1*1oDJhbj5HQrkSjDUQlxEJg.jpeg";

    if(location == "Eminönü")
    document.getElementById("location_image").src = "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/8b/bf/97/eminonu-pier.jpg?w=1200&h=-1&s=1";
}