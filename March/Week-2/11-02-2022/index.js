let convert_json = function(response){
  return response.json();
}

let get_data = function(res){
    let arr = res.data;
    let clg = document.getElementById("gifs");
    for(let i = 0; i < arr.length; i++){
        let new_elem = document.createElement("video")
        new_elem.src = arr[i].images.looping.mp4;
        new_elem.classList.add = "vdo";
        new_elem.setAttribute("autoplay","");
        new_elem.setAttribute("loop","");
        clg.appendChild(new_elem);
    }

}

fetch("https://api.giphy.com/v1/gifs/trending?api_key=4bAK73Z75erE2xk3awKlwTuLM5JNCfmL&limit=32").then(convert_json).then(get_data);



const handle_search = function(res) {
    let container = document.getElementById("gifs");
    container.innerHTML = "";
    let arr = res.data;
    let clg = document.getElementById("gifs");
    for(let i = 0; i < arr.length; i++){
        let new_elem = document.createElement("video")
        new_elem.src = arr[i].images.looping.mp4;
        new_elem.classList.add = "vdo";
        new_elem.setAttribute("autoplay","");
        new_elem.setAttribute("loop","");
        clg.appendChild(new_elem);
    }
}

const search_fn = function() {
    const input = document.getElementById('input_field');
    const user_id = input.value;
    console.log(fetch(`https://api.giphy.com/v1/gifs/search?api_key=4bAK73Z75erE2xk3awKlwTuLM5JNCfmL&limit=32&q=${user_id}`)
    .then(convert_json)
    .then(handle_search));
}

const btn = document.getElementById('search_btn');
btn.addEventListener('click', search_fn);