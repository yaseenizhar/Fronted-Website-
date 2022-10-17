$.ajax({
    type: 'Get',
    url: 'https://fakestoreapi.com/products',
    success: function(response){
        console.log(response.length)
        // $('.font-weight-normal').append('<h4>Rating : ' + repo[1].rating.rate + '</h4>')
        // $('.card').append('<img src="' + repo[1].image + '">')
        // $('.card-title').append('<h1> Price: $' + repo[1].price + '</h1>')
        // $('.my-0 ').append('<h1> T : ' + repo[1].title + '</h1>')
        // $('.list-unstyled ').append('<h1> Cate : ' + repo[1].category + '</h1>')
        
        
        for(let i=0;i<response.length;i++){

            $('.card0').append('<div class="card" style="width: 18rem; display: inline-block;"></div>');
            $('.card').append('<h4>Rating : ' + response[i].rating.rate + '</h4>')
            $('.card').append('<img class="card-img-top" src="'+response[i].image+'" alt="Card image cap">');
            $('.card').append('<h5 class="card-title">'+response[i].title+'</h5>');
            $('.card').append('<li class="list-group-item">'+response[i].price+'</li>');
            
            
            
        //     $('.card').append('<img class="card-img-top" src="'+response[i].image+'" alt="Card image cap">');
        // $('.card').append('<h4>Rating : ' + response[1].rating.rate + '</h4>')
        //     $('.card').append('<h1> Price: $' + response[1].price + '</h1>')
        //     $('.card ').append('<h1> T : ' + response[1].title + '</h1>')      
        //     $('.card').append('<h1> Cate : ' + response[1].category + '</h1>')
        }
        
    },
    error: function(){
        alert('error issue')    
    }
})
