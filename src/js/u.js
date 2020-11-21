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

async function asyncChangeBooks(update,id){
    const options = {
        method: 'PATCH',
        headers: {"Content-Type": 'application/json',},
        body: JSON.stringify(update),
    }

    try {
    const fetchBook = await fetch(`${BASE_URL}/${id}`, options);
    const data = await fetchBook.json();
    return console.log(data);
    } catch (error) {
        console.log(error);
    }
}    

// changeBooks(myBook,25)

// changeBooks({"rating": 7}, 26)
asyncChangeBooks({"rating": 5}, 26)