import BASE_URL from './url';
/*GET*/
    function fetchBooks(){
        fetch(`${BASE_URL}`).then(response => response.json()).then(data => console.log(data))
        };
        
        function fetchBooksById(id){
            fetch(`${BASE_URL}/${id}`).then(response => response.json()).then(data => console.log(data))
            };
        
        fetchBooks()
        
        fetchBooksById(3)
        
        fetchBooksById(7)