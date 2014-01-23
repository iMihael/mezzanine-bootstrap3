jQuery(function(){

    var as = jQuery(document).find('a');
    for(var i=0;i<as.length;i++)
    {
        if(jQuery(as[i]).attr('href').indexOf('eomy')!= -1)
        {
            jQuery(as[i]).remove();
            break;
        }
    }


    var body = jQuery('body').html();

    jQuery('body').html(body.substr(0,body.lastIndexOf('</div>')+6));
});