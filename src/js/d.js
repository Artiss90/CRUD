import BASE_URL from './url';

function deleteBooksById(id){
    const options = {
        method: 'DELETE',
    }
    return fetch(`${BASE_URL}/${id}`, options).then(response => response.json()).then(data => console.log(data))
    };


// deleteBooksById(3)