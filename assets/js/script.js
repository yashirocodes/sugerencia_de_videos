//IIFE
const IIFEsetAttribute = (() => {
    function privada (url, id){
        id.setAttribute("src", url)
    }

    return{
        publica(url, id){
            privada(url, id)
        }
    }
})()

// INSTANCIA DE MULTIMEDIA
class Multimedia {
  constructor(url) {
    let _url = url;

    this.setUrl = (value) => (_url = value);
    this.getUrl = () => _url;
  }

  get url() {
    return this.getUrl();
  }

  set url(value) {
    this.setUrl(value);
  }

  setInicio() {
    return "Este método es para realizar un cambio en la URL del video";
  }
}

//INSTANCIA DE REPRODUCTOR + MULTIMEDIA .
class Reproductor extends Multimedia{
    constructor(url, id){
        super(url)
        this._id = id
    }

    playMultimedia(){
        IIFEsetAttribute.publica(this.getUrl(), this._id)
    }
    setInicio(tiempo){
        IIFEsetAttribute.publica(`${this.getUrl()}?start=${tiempo}`, this._id)
    }
}

// CAPTURAR IDS

const musica = document.getElementById("musica")
const peliculas = document.getElementById("peliculas")
const series = document.getElementById("series")

// INSTANCIAS

const videoUno = new Reproductor("https://www.youtube.com/embed/_EEo-iE5u_A", musica)
videoUno.setInicio(20)


const videoDos = new Reproductor("https://www.youtube.com/embed/cZAw8qxn0ZE", peliculas)
videoDos.playMultimedia()

const videoTres = new Reproductor("https://www.youtube.com/embed/nqSQUrlnB9s", series)
videoTres.playMultimedia()