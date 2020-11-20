import BASE_URL from './url';
/*POST*/

const myBook = {
    "title": "Overlords 3",
    "author": "Artiss90",
    "genres": [
        "JS"
    ],
    "rating": 9,
};



function addBooks(book){

    const options = {
        method: 'POST',
        headers: {"Content-Type": 'application/json',},
        body: JSON.stringify(book),
    };

   return fetch(`${BASE_URL}`, options).then(response => response.json()).then(data => console.log(data))
    };

    // addBooks(myBook)    


