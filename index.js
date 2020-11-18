function shadowimg(options) {
    let images = document.querySelectorAll('.demo');
    if(options.demo_type == 0)
    {
        options.demo_type = '0px';
    }
    else 
    {
        options.demo_type = '20px';
    }

    images.forEach(image => {
        image.style.boxShadow = `10px 10px ${options.demo_type} 1px rgba(0,0,0,0, 12)`;
        if(options.padding) {
            image.style.padding = `1em`;
        }
    })
}



module.exports.shadowimg = shadowimg;