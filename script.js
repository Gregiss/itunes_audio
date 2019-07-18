var music = [];

var categories = [];

var MusicaTocando;

function addCategories(tipo){
  var newCat = {tipo : tipo, visible: 1};
  categories.push(newCat);
  $(".app .list .before").before('<a>'+ tipo + '</a>');
}

function addMusic(banner, nome, album, time, banda, mp3){
  var newMusic = {banner: banner, nome: nome, album: album, time: time, banda: banda, mp3: mp3};
  music.push(newMusic);
}

$("a").click(function(){
  return false;
})

function clickInBibli(){
  $(".list a").click(function(){
    $(".app .novaAba").html("<h1 id='tipo'></h1><div class='before'></div>");
    var onde = $(this).html();
    $(".app .bibli").css("color", "var(--font)");
    $(".app .bibli").css("font-size", "18px");
    $(".app .bibli").html("<i class='fas fa-chevron-left'></i>   Biblioteca");
    showNovaAba(onde);
    console.log(onde);
  });
}

function returnNovaAba(){
  $(".app .bibli").click(function(){
  $(".app .novaAba").css("left", "200%");
  $(".app .bibli").css("color", "#000");
  $(".app .bibli").css("font-size", "28px");
  $(".app .bibli").html("Biblioteca");
  });
}

function showNovaAba(tipo){
  $(".app .novaAba").css("left", "0%");
  if(tipo == "Álbuns"){
    for(var i = 0; i < music.length; i++){
    if(i > 0){
    if(music[i].album == music[i - 1].album){
      var banner = music[i].banner;
    $(".app .novaAba .before").html('<div class="album" id="banner'+i+'" data-id="'+i+'"></div>');
    $(".app .novaAba #banner" + i).css("background-image", "url('"+banner+"')");
    $(".app .novaAba #banner" + i).css("background-size", "cover");
    } else{
      var banner = music[i].banner;
    $(".app .novaAba .before").before('<div class="album" id="banner'+i+'" data-id="'+i+'"></div>');
    $(".app .novaAba #banner" + i).css("background-image", "url('"+banner+"')");
    $(".app .novaAba #banner" + i).css("background-size", "cover");
    }
    }
  }
    enterAlbum();
  } else if(tipo == "Músicas"){
    $(".app .novaAba").html("<div class='before'></div> <div class='musiclist'><div class='before'></div></div>")
    for(var i = 0; i < music.length; i++){
        $(".app .novaAba #album" + i).css("background-image", "url('"+ music[i].banner +"')");
        $(".app .novaAba .musiclist .before").before('<a data-id="'+i+'"> '+ music[i].nome +' </a>');
      }
    playMusic();
  }
  $(".app .novaAba #tipo").html(tipo);
}

function editar(){
  var editando = false;
  $(".app .editar").click(function(){
    $(".app .novaAba").html("<h1 id='tipo'></div>");
    $(".app .novaAba").css("left", "200%");
    $(".app .novaAba").css("left", "200%");
    $(".app .bibli").css("color", "#000");
    $(".app .bibli").css("font-size", "28px");
    $(".app .bibli").html("Biblioteca");
    if(editando){
      $(this).html("Editar");
      $(".app .list").html("<div class='before'></div>");
      for(var i = 0; i < categories.length; i++){
        $(".app .list .before").before('<a>'+ categories[i].tipo + '</a>');
      }
      showBiblioteca();
      clickInBibli();
      returnNovaAba();
      editando = false;
    } else{
      editando = true;
      $(".app .list").html("<div class='before'></div>");
      for(var i = 0; i < categories.length; i++){
        if(categories[i].visible == 1){
          var htmlBol = "<div class='bol bolactive'><i class='fas fa-check'></i></div>"
        } else{
          var htmlBol = "<div class='bol'></div>"
        }
        $(".app .list .before").before('<a data-id="'+i+'">'+ htmlBol +'</div>'+ categories[i].tipo + '</a>');
      }
      $(".app .list a").css("left", "25px");
      $(this).html("OK");
      editCate();
    }
  });
}

function editPlayer(src){
  $("#player").html("<audio id='my-player' controls> <source src='"+src+"' type='audio/mp3'> </audio>");
  audio = document.getElementById('my-player');
  audio.volume = 0.1;
  progress();
  nextMusic();
  document.getElementById("my-player").load();
  document.getElementById("my-player").play();
}

function editCate(){
  $(".app .list a").click(function(){
    var id = $(this).data("id");
    if(categories[id].visible == 1){
      categories[id].visible = 0;
    } else{
      categories[id].visible = 1;
    }
    if(categories[id].visible == 1){
          var htmlBol = "<div class='bol bolactive'><i class='fas fa-check'></i></div>"
        } else{
          var htmlBol = "<div class='bol'></div>";
      }
    $(this).html(htmlBol + categories[id].tipo);
  });
}

function showBiblioteca(){
  $(".app .list").html('<div class="before"></div>');
  for(var i = 0; i < categories.length; i++){
    if(categories[i].visible == 1){
    $(".app .list .before").before('<a>'+ categories[i].tipo + '</a>');
    }
  }
}

function addM(){
  addMusic("https://img.discogs.com/4LpUtQvsNYUFTZElCylqHkafqCA=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-1979737-1379562813-9692.jpeg.jpg", "01. Iron Lion Zion", "Bob Marley greatest hits", 0, "Boby Marley", "https://github.com/PassaUmDollar/itunes_audio/blob/master/audio/01.%20Iron%20Lion%20Zion.mp3?raw=true");
  addMusic("https://img.discogs.com/4LpUtQvsNYUFTZElCylqHkafqCA=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-1979737-1379562813-9692.jpeg.jpg", "02. Could You Be Loved", "Bob Marley greatest hits", 0, "Boby Marley", "https://github.com/PassaUmDollar/itunes_audio/blob/master/audio/02.%20Could%20You%20Be%20Loved.mp3?raw=true");
  addMusic("https://img.discogs.com/4LpUtQvsNYUFTZElCylqHkafqCA=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-1979737-1379562813-9692.jpeg.jpg", "03. Is This Love", "Bob Marley greatest hits", 0, "Boby Marley", "https://github.com/PassaUmDollar/itunes_audio/blob/master/audio/03.%20Is%20This%20Love.mp3?raw=true");
  addMusic("https://img.discogs.com/4LpUtQvsNYUFTZElCylqHkafqCA=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-1979737-1379562813-9692.jpeg.jpg", "04. I Shot The Sheriff", "Bob Marley greatest hits", 0, "Boby Marley", "https://github.com/PassaUmDollar/itunes_audio/blob/master/audio/04.%20I%20Shot%20The%20Sheriff.mp3?raw=true");
  addMusic("https://img.discogs.com/4LpUtQvsNYUFTZElCylqHkafqCA=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-1979737-1379562813-9692.jpeg.jpg", "05. Jamming", "Bob Marley greatest hits", 0, "Boby Marley", "https://github.com/PassaUmDollar/itunes_audio/blob/master/audio/05.%20Jamming.mp3?raw=true");
  addMusic("https://img.discogs.com/4LpUtQvsNYUFTZElCylqHkafqCA=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-1979737-1379562813-9692.jpeg.jpg", "06. One Love", "Bob Marley greatest hits", 0, "Boby Marley", "https://github.com/PassaUmDollar/itunes_audio/blob/master/audio/06.%20One%20Love.mp3?raw=true");
  addMusic("https://img.discogs.com/4LpUtQvsNYUFTZElCylqHkafqCA=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-1979737-1379562813-9692.jpeg.jpg", "07. No Woman", "Bob Marley greatest hits", 0, "Boby Marley", "https://github.com/PassaUmDollar/itunes_audio/blob/master/audio/07.%20No%20Woman,%20No%20Cry.mp3?raw=true");
  addMusic("https://static.fnac-static.com/multimedia/Images/PT/NR/2b/51/05/348459/1540-6/tsp20160817182810/Acoustica.jpg", "Alien Nation", "Scorpions", 0, "Scorpions", "https://github.com/PassaUmDollar/itunes_audio/blob/master/audio/04-scorpions-alien_nation.mp3?raw=true");
  addMusic("https://images-na.ssl-images-amazon.com/images/I/91sLchfSmpL._SL1500_.jpg", "Somebody to love", "Bohemian Rhapsody", 0, "Queen", "https://github.com/PassaUmDollar/itunes_audio/blob/master/audio/02.%20Somebody%20To%20Love.mp3?raw=true");
  addMusic("https://images-na.ssl-images-amazon.com/images/I/91sLchfSmpL._SL1500_.jpg", "Another One Bites The Dust", "Bohemian Rhapsody", 0, "Queen", "https://github.com/PassaUmDollar/itunes_audio/blob/master/audio/12.%20Another%20One%20Bites%20The%20Dust.mp3?raw=true");
  addMusic("https://images-na.ssl-images-amazon.com/images/I/91sLchfSmpL._SL1500_.jpg", "Love Of My Life", "Bohemian Rhapsody", 0, "Queen", "https://github.com/PassaUmDollar/itunes_audio/blob/master/audio/10.%20Love%20Of%20My%20Life%20(Live%20At%20Rock%20In%20Rio).mp3?raw=true");
  addMusic("https://images-na.ssl-images-amazon.com/images/I/91sLchfSmpL._SL1500_.jpg", "I Want To Break Free", "Bohemian Rhapsody", 0, "Queen", "https://github.com/PassaUmDollar/itunes_audio/blob/master/audio/13.%20I%20Want%20To%20Break%20Free.mp3?raw=true");
  addMusic("https://images-na.ssl-images-amazon.com/images/I/91sLchfSmpL._SL1500_.jpg", "Radio Ga Ga (Live Aid)", "Bohemian Rhapsody", 0, "Queen", "https://github.com/PassaUmDollar/itunes_audio/blob/master/audio/17.%20Radio%20Ga%20Ga%20(Live%20Aid).mp3?raw=true");
  addMusic("https://images-na.ssl-images-amazon.com/images/I/91sLchfSmpL._SL1500_.jpg", "Bohemian Rhapsody", "Bohemian Rhapsody", 0, "Queen", "https://github.com/PassaUmDollar/itunes_audio/blob/master/audio/07.%20Bohemian%20Rhapsody.mp3?raw=true");
}

function addInHtmlMusic(){
  $(".albums").html("<div class='before'></div> <div class='musiclist'><div class='before'></div></div>");
    for(var i = music.length - 5; i < music.length; i++){
        $(".albums .musiclist .before").before('<a data-id="'+i+'"> '+ music[i].nome +' </a>');
      }
    playMusic();
}

function enterAlbum(){
  $(".album").click(function(){
    $(".editar").html("Editar");
      $(".app .list").html("<div class='before'></div>");
      for(var i = 0; i < categories.length; i++){
        $(".app .list .before").before('<a>'+ categories[i].tipo + '</a>');
      }
      showBiblioteca();
      clickInBibli();
      returnNovaAba();
      var id = $(this).data("id");
      var albumName = music[id].album;
      showNovaAba(albumName);
      clickInBibli();
      $(".app .bibli").css("color", "var(--font)");
      $(".app .bibli").css("font-size", "18px");
      $(".app .bibli").html("<i class='fas fa-chevron-left'></i>   Biblioteca");
      $(".app .novaAba").html("<div class='before'></div>");
      showMusicAlbum(albumName, id);
  });
}

var tocando = false;
var naoTocouNada = true;

  $(".bottom #play").click(function(){
  if(naoTocouNada){
    randomMusic();
  } else{
  if(tocando){
    document.getElementById("my-player").pause();
    $("#play").html('<i class="fas fa-play"></i>');
    tocando = false;
  } else{
    document.getElementById("my-player").play();
    $("#play").html('<i class="fas fa-pause"></i>');
    tocando = true;
  }
  }
    });

function randomMusic(){
  tocando = true;
  naoTocouNada = false;
  var musicRandom = Math.floor(Math.random() * music.length);
  MusicaTocando = musicRandom;
  $(".app .playNow .img").css("background-image", "url('"+ music[musicRandom].banner+"')");
    $(".app .playNow #musica").html(music[musicRandom].nome);
    editPlayer(music[musicRandom].mp3);
    $("#play").html('<i class="fas fa-pause"></i>');
}

function nextMusic(){
  var aud = document.getElementById("my-player");
  var novaMusica = 1;
  aud.onended = function() {
    if(MusicaTocando >= music.length - 1){
      novaMusica = 0;
    } else{
      novaMusica = MusicaTocando + 1;
    }
      MusicaTocando = novaMusica;
      $(".app .playNow .img").css("background-image", "url('"+music[MusicaTocando].banner+"')");
      $(".app .playNow #musica").html(music[novaMusica].nome);
      editPlayer(music[musicRandom].mp3);
      $("#play").html('<i class="fas fa-pause"></i>');
  };
  
  $("#proximaMusica").click(function(){
      if(naoTocouNada == false){
      var aud = document.getElementById("my-player");
      var novaMusica = 1;
      if(MusicaTocando >= music.length - 1){
        novaMusica = 1;
      } else{
        novaMusica = MusicaTocando + 1;
      }
      var playPromise = aud.play();
      MusicaTocando = novaMusica;
      $(".app .playNow .img").css("background-image", "url('"+music[novaMusica].banner+"')");
      $(".app .playNow #musica").html(music[novaMusica].nome);
        editPlayer(music[novaMusica].mp3);
      document.getElementById("my-player").pause();
      document.getElementById("my-player").setAttribute('src', music[novaMusica].mp3);
      document.getElementById("my-player").load();
      document.getElementById("my-player").play();
      $("#play").html('<i class="fas fa-pause"></i>');
      tocando = true;
      }
});
  
}


function showMusicAlbum(albumName, id){
  console.log(albumName);
  $(".app .novaAba .before").before("<div class='albumphoto' id='album"+id+"'></div> <h2>"+albumName+"</h2> <div class='musiclist'><div class='before'></div></div>");
  for(var i = 0; i < music.length; i++){
      if(music[i].album == albumName){
      console.log(albumName);
      $(".app .novaAba .musiclist .before").before('<a data-id="'+i+'"> '+ music[i].nome +' </a>');
        $(".app .novaAba #album" + i).css("background-image", "url('"+ music[i].banner +"')");
    }
    
  }
  playMusic();
}

function playMusic(){
  $(".app .novaAba .musiclist a").click(function(){
    naoTocouNada = false;
    tocando = true;
    var idMusica = $(this).data("id");
    MusicaTocando = {id: idMusica};
    $(".app .playNow .img").css("background-image", "url('"+ music[idMusica].banner+"')");
    $(".app .playNow #musica").html(music[idMusica].nome);
    editPlayer(music[idMusica].mp3);
    document.getElementById("my-player").pause();
    document.getElementById("my-player").setAttribute('src', music[idMusica].mp3);
    document.getElementById("my-player").load();
    document.getElementById("my-player").play();
    $("#play").html('<i class="fas fa-pause"></i>');
  });
  $(".albums .musiclist a").click(function(){
    naoTocouNada = false;
    tocando = true;
    var idMusica = $(this).data("id");
    MusicaTocando = {id: idMusica};
    $(".app .playNow .img").css("background-image", "url('"+ music[idMusica].banner+"')");
    $(".app .playNow #musica").html(music[idMusica].nome);
    editPlayer(music[idMusica].mp3);
    document.getElementById("my-player").pause();
    document.getElementById("my-player").setAttribute('src', music[idMusica].mp3);
    document.getElementById("my-player").load();
    document.getElementById("my-player").play();
    $("#play").html('<i class="fas fa-pause"></i>');
  });
}

$(document).ready(function(){
  addCategories('Músicas');
  clickInBibli();
  returnNovaAba();
  editar();
  addM();
  addInHtmlMusic();
  enterAlbum();
  nextMusic();
});

function progress(){
var player = document.getElementById('my-player');    
player.addEventListener("timeupdate", function() {
    var currentTime = player.currentTime;
    var duration = player.duration;
    $('.progress .subprogress').stop(true,true).animate({'width':(currentTime +.25)/duration*100+'%'},250,'linear');
});
}
