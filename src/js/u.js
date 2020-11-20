import BASE_URL from './url';

const myBook = {
    "title": "Two tower"
};



function changeBooks(update, id){

    const options = {
        method: 'PATCH',
        headers: {"Content-Type": 'application/json',},
        body: JSON.stringify(update),
    };

   return fetch(`${BASE_URL}/${id}`, options).then(response => response.json()).then(data => console.log(data))
    };

// changeBooks(myBook,25)

// changeBooks({"rating": 8}, 26)