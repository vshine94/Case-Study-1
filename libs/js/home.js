var home = home || { }

home.showService = function(){
    $.ajax({
        url : "https://petshouse.herokuapp.com/Service",
        method : "GET",
        dataType : "json",
        success : function(data){
            $.each(data,function(i,v){
                $('#Services').append(
                    i%2 == 0 ?
                    '<div class= "row hover-1-wrap mb-5 mb-lg-0">'+
                        '<div class="col-12">'+
                            '<div class="row">'+
                            '<div class="mb-4 mb-lg-0 col-lg-6 order-lg-2" data-aos="fade-right">'+
                                '<a href="#" class="hover-1">'+
                                '<img src="'+v.serviceImgs+' "alt="Image" class="img-fluid">'+
                                '</a>'+
                            '</div>'+
                            '<div class="col-lg-5 mr-auto text-lg-right align-self-center order-lg-1" data-aos="fade-left">'+
                                '<h2 class="text-black">' + v.nameService + '</h2>'+
                                '<p class="mb-4">' +v.status + '</p>'+
                                '<p><a href="#" class="btn btn-primary">Read More</a></p>'+
                            '</div>'+
                        '</div>'+
                  '</div>'
                  :
                    '<div class="row hover-1-wrap mb-5 mb-lg-0">'+
                        '<div class="col-12">'+
                            '<div class="row">'+
                                '<div class="mb-4 mb-lg-0 col-lg-6"  data-aos="fade-left">'+
                                    '<a href="#" class="hover-1">'+
                                    '<img src=" ' +v.serviceImgs+ ' " alt="Image" class="img-fluid">'+
                                    '</a>'+
                                '</div>'+
                                '<div class="col-lg-5 ml-auto align-self-center"  data-aos="fade-right">'+
                                    '<h2 class="text-black">' +v.nameService + '</h2>'+
                                    '<p class="mb-4"> ' +v.status+ ' </p>'+
                                    '<p><a href="#" class="btn btn-primary">Read More</a></p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'
                );
            });
        }
    });
}

home.showPerson = function(){
    $.ajax({
        url:"https://petshouse.herokuapp.com/Person",
        method:"GET",
        dataType:"json",
        success : function(data){
            $.each(data,function(i,v){
                $('#person').append(
                    '<div>'+
                        '<div class="block-testimony-1 text-center">'+
                      
                        '<blockquote class="mb-4">'+
                            '<p>&ldquo;' +v.statusPerson + '&rdquo;</p>'+
                        '</blockquote>'+
      
                        '<figure>'+
                            '<img src="' +v.imgsPerson + '" alt="Image" class="img-fluid rounded-circle mx-auto">'+
                        '</figure>'+
                        '<h3 class="font-size-20 text-black">' +v.namePerson+ '</h3>'+
                        '</div>'+
                    '</div>'
                );
            });
        }
    });
}

home.init = function(){
    home.showService();
    home.showPerson();
}

$(document).ready(function(){
    home.init();
});