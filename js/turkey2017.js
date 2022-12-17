$(function(){
    const strL = './img/foto/turkey2017';
    const strR = './img/foto/turkey2017';
    const imgs = [
      {
        descripcion: '',
        titulo: 'Marmaris, Turkey 2017',
        url: "./img/foto/turkey2017/gallery-1.jpg"
        
      },
      {
        descripcion: '',
        titulo: 'Marmaris, Turkey 2017',
        url: "./img/foto/turkey2017/gallery-2.jpg"
        
      },
      {
        descripcion: '',
        titulo: 'Marmaris, Turkey 2017',
        url: "./img/foto/turkey2017/gallery-3.jpg"
        
      },
      {
        descripcion: '',
        titulo: 'Marmaris, Turkey 2017',
        url: "./img/foto/turkey2017/gallery-4.jpg"
        
      },
      {
        descripcion: '',
        titulo: 'Marmaris, Turkey 2017',
        url: "./img/foto/turkey2017/gallery-5.jpg"
        
      },
      {
        descripcion: '',
        titulo: 'Marmaris, Turkey 2017',
        url: "./img/foto/turkey2017/gallery-6.jpg"
        
      },
      {
        descripcion: '',
        titulo: 'Marmaris, Turkey 2017',
        url: "./img/foto/turkey2017/gallery-7.jpg"
        
      },
      {
        descripcion: '',
        titulo: 'Marmaris, Turkey 2017',
        url: "./img/foto/turkey2017/gallery-8.jpg"
        
      },
      {
        descripcion: '',
        titulo: 'Marmaris, Turkey 2017',
        url: "./img/foto/turkey2017/gallery-9.jpg"
        
      },
      {
        descripcion: '',
        titulo: 'Marmaris, Turkey 2017',
        url: "./img/foto/turkey2017/gallery-10.jpg"
        
      },
      {
        descripcion: '',
        titulo: 'Marmaris, Turkey 2017',
        url: "./img/foto/turkey2017/gallery-11.jpg"
        
      },
      {
        descripcion: '',
        titulo: 'Marmaris, Turkey 2017',
        url: "./img/foto/turkey2017/gallery-12.jpg"
        
      },
      {
        descripcion: '',
        titulo: 'Marmaris, Turkey 2017',
        url: "./img/foto/turkey2017/gallery-13.jpg"
        
      },
      {
        descripcion: '',
        titulo: 'Marmaris, Turkey 2017',
        url: "./img/foto/turkey2017/gallery-14.jpg"
        
      },
      {
        descripcion: '',
        titulo: 'Marmaris, Turkey 2017',
        url: "./img/foto/turkey2017/gallery-15.jpg"
        
      },
         ]
  
    $.each(imgs, function(i, img){
      $('.galeria .contenedorImgs').append(`
        <div class="imagen" style="background-image:url('${img.url}')">
          <p class="nombre">${img.titulo}</p>
        </div>`
      );
    }) 
    setTimeout(() => {
      $('.galeria').addClass('vis');
    }, 1000)
    $('.galeria').on('click', '.contenedorImgs .imagen', function(){
      var imagen = imgs[$(this).index()].url;
      var titulo = imgs[$(this).index()].titulo;
      var descripcion = imgs[$(this).index()].descripcion;
      $('.galeria').addClass('scale');
      $(this).addClass('activa');
      if(!$('.fullPreview').length){
        $('body').append(`
          <div class="fullPreview">
            <div class="cerrarModal"></div>
            <div class="wrapper">
              <div class="blur" style="background-image:url(${imagen})"></div>
              <p class="titulo">${titulo}</p>
              <img src="${imagen}">
              <p class="desc">${descripcion}</p>
            </div>
            <div class="controles">
              <div class="control av"></div>
              <div class="control ret"></div>
            </div>
          </div>`
        )
        $('.fullPreview').fadeIn().css('display','flex');
      }
    })
    $('body').on('click', '.fullPreview .cerrarModal', function(){
      $('.contenedorImgs .imagen.activa').removeClass('activa');
      $('.galeria').removeClass('scale');
      $(this).parent().fadeOut(function(){
        $(this).remove();
      })
    })
    $('body').on('click', '.fullPreview .control', function(){
      var activa = $('.contenedorImgs .imagen.activa');
      var index;
      if($(this).hasClass('av')){
        index = activa.next().index();
        if(index < 0) index = 0;
      }else{
        index = activa.prev().index();
        if(index < 0) index = imgs.length - 1;
      }
      $('.fullPreview').addClass('anim');
      setTimeout(()=>{
        $('.contenedorImgs .imagen.activa').removeClass('activa');
        $('.contenedorImgs .imagen').eq(index).addClass('activa');
        $('.fullPreview').find('.blur').css('background-image', 'url('+imgs[index].url+')');
        $('.fullPreview').find('img').attr('src', imgs[index].url);
        $('.fullPreview').find('.titulo').text(imgs[index].titulo);
        $('.fullPreview').find('.desc').text(imgs[index].descripcion);
        $('.fullPreview').removeClass('anim');
      }, 500)
    })
  })