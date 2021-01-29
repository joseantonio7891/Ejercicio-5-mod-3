let imagenes = $('img')

for (const iterator of imagenes) {
    $(iterator).on('click',()=>{
        $(iterator).hide(300);
    })
}

$('button').on('click', () =>{
    $('img').show(300);
})