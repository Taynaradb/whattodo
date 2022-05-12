$( "#random" ).click(function(){
   
    let api = 'http://www.boredapi.com/api/activity/';
    let img = document.querySelector('#imgtype');

    $.ajax({
        type: "GET",
        url: api,
        success: (function(retorno){
            atividade = retorno.activity;
            tipo =  retorno.type;
            console.log(atividade);
            console.log(tipo);
            document.querySelector('#activity').innerHTML = atividade;
            document.querySelector('#type').innerHTML = tipo;

            switch (tipo) {
                case 'charity':
                   img.src = '/whattodo/whattodo/www/img/charity.png';
                  break;
                case 'social':
                    img.src = '/whattodo/whattodo/www/img/social.png';
                    break;
                case 'diy':
                    img.src = '/whattodo/whattodo/www/img/diy.png';
                    break;
                case 'cooking':
                    img.src = '/whattodo/whattodo/www/img/cooking.png';
                break;
                case 'music':
                    img.src = '/whattodo/whattodo/www/img/music.png';
                    break;
                case 'education':
                    img.src = '/whattodo/whattodo/www/img/education.png';
                    break;    
                case 'recreational':
                    img.src = '/whattodo/whattodo/www/img/recreational.png';
                    break;      
                case 'busywork':
                   img.src = '/whattodo/whattodo/www/img/busywork.png';
                   break;   
                   case 'relaxation':
                   img.src = '/whattodo/whattodo/www/img/relaxation.png';
                   break;    
              }
              
        })
    });
});
