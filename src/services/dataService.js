import axios from "axios";

var catalog = [
  {
    _id: "01_LightSaber_Jedi",
    title: "Lightsaber Jedi",
    image: "lightSaberJedi.png",
    price: 30,
    category: "Lightsaber",
  },

  {
    _id: "01_LightSaber_Sith",
    title: "Lightsaber Sith",
    image: "lightSaberSith.png",
    price: 30,
    category: "Lightsaber",
  },

  {
    _id: "01_FunkoPop",
    title: "First Orden Stormtrooper",
    image: "funkoPopStormtrooper.png",
    price: 18.55,
    category: "FunkoPop",
  },

  {
    _id: "02_FunkoPop",
    title: "C-3po",
    image: "funkoPopC3po.png",
    price: 21.5,
    category: "FunkoPop",
  },

  {
    _id: "01_Helmet",
    title: "Stormtrooper Helmet",
    image: "helmetStormtrooper.png",
    price: 30,
    category: "Helmet",
  },

  {
    _id: "01_te_Doge",
    title: "Kylo Ren Helmet",
    image: "helmetKyloRen.png",
    price: 44.99,
    category: "Helmet",
  },

  {
    _id: "01_Lego",
    title: "Obi-Wan Lego",
    image: "legoObiwanKenobi.png",
    price: 5,
    category: "Lego",
  },

  {
    _id: "02_lego",
    title: "Darth Vader Lego",
    image: "legoDarthVader.png",
    price: 7,
    category: "Lego",
  },
];

class DataService {
  async getCatalog() {
    let response = await axios.get("http://127.0.0.1:5000/api/catalog");
    console.log("TEST FDSI 110 CLASS 1", response.data);
    return response.data;
  }

  async getWeather(lat, lon) {
    let apikey = "b58812f99e02ca574646d1c12f1112b4";
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`;

    let response = await axios.get(url);

    return response.data;
    //console.log(response.data);
  }

  registerProduct() {}
}

export default DataService;
