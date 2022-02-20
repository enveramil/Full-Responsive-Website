// İlgili alanlar yapıldıktan sonra konumlandırma işlemi için js kullanılacak.
// Ürün detayı resim değiştirme için js kullanılacak.
// Sık sorulan sorular bölümü için js kullanılacak.
// Tasarımı üst düzeye çıkarmak istiyorsak js kullanmalıyız.
jQuery(document).ready(function(){


$("#headermenuacmabutonalanı").on("click", function(){
    $("#headermenuacılınca").slideToggle("slow");

});


/* Sayfanın genişliği alınacak */
var siteWidth = $(window).outerWidth();
if(! $("#headerMessageField").length){
    if(siteWidth >= 1200){
        var ofsetValue  = 108;

    }
    else if((siteWidth >= 992) && (siteWidth <= 1199)){
        var ofsetValue  = 98;

    }
    else if((siteWidth >= 768) && (siteWidth <= 991)){
        var ofsetValue  = 88;

    }
    else if((siteWidth >= 576) && (siteWidth <= 767)){
        var ofsetValue  = 78;

    }
    else if((siteWidth <= 574)){
        var ofsetValue  = 78;

    }       

}

else{
    if(siteWidth >= 1200){
        var ofsetValue  = 148;

    }
    else if((siteWidth >= 992) && (siteWidth <= 1199)){
        var ofsetValue  = 138;   

    }
    else if((siteWidth >= 768) && (siteWidth <= 991)){
        var ofsetValue  = 118;

    }
    else if((siteWidth >= 576) && (siteWidth <= 767)){
        var ofsetValue  = 108;

    }
    else if((siteWidth <= 574)){
        var ofsetValue  = 103;

    }       

}

jQuery("main").css("top",ofsetValue);
jQuery("footer").css("top",ofsetValue);

$(window).resize(function(){
    var siteWidth = $(window).outerWidth();
if(! $("#headerMessageField").length){
    if(siteWidth >= 1200){
        var ofsetValue  = 108;

    }
    else if((siteWidth >= 992) && (siteWidth <= 1199)){
        var ofsetValue  = 98;

    }
    else if((siteWidth >= 768) && (siteWidth <= 991)){
        var ofsetValue  = 88;

    }
    else if((siteWidth >= 576) && (siteWidth <= 767)){
        var ofsetValue  = 78;

    }
    else if((siteWidth <= 574)){
        var ofsetValue  = 78;

    }       

}

else{
    if(siteWidth >= 1200){
        var ofsetValue  = 148;

    }
    else if((siteWidth >= 992) && (siteWidth <= 1199)){
        var ofsetValue  = 138;   

    }
    else if((siteWidth >= 768) && (siteWidth <= 991)){
        var ofsetValue  = 118;

    }
    else if((siteWidth >= 576) && (siteWidth <= 767)){
        var ofsetValue  = 108;

    }
    else if((siteWidth <= 574)){
        var ofsetValue  = 103;

    }       

}

jQuery("main").css("top",ofsetValue);
jQuery("footer").css("top",ofsetValue);

});

});