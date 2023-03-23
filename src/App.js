
import "./App.css";
import NavBar from "./Component/NavBar";
import background from "./Images/landing.png";
import Earth from "./Images/earth.png";
import Footer from "./Component/Footer";
import news1 from "./Images/news1.png";
import news2 from "./Images/news2.png";
import vector from "./Images/Vector.png";
import news3 from "./Images/news3.png";
import React, { useEffect, useState } from 'react';


const api = {
  key: "13b665132138bd1319c33d39c2a165d6",
  base: "https://api.openweathermap.org/data/2.5/",
};




function App() {

  const [search, setSearch] = useState("india");
  const [weather, setWeather] = useState("");
  const [wind, setWind] = useState("");
  const [cloud, setCloud] = useState("");
  const [temperature, settemperature] = useState("");
  const [visibility, setVisibility] = useState("");
  const [description, setDescription] = useState("");
  const [pressure, setPressure] = useState("");

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {

        console.log(result, "res")
        setWeather(result.main.humidity
        );
        setWind(result.wind.speed
        );
        setCloud(result.clouds.all)
        settemperature(result.main.temp_max
        );
        setVisibility(result.visibility
        );
        setDescription(result.weather[0].description
        );
        setPressure(result.main.pressure
          );

      });

  };


  useEffect(() => {
    searchPressed();
  }, [search]);


  const backgroundimg = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "905px",
  };
  const customdiv = {
    height: "990px",
    width: "100%",
    background: "#fff",
  };
  const secondBack = {
    backgroundImage: `url(${Earth})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "905px",
  };
  const news = {
    display: "flex",
    justifyContent: "center",
    paddingTop: "100px",
  };
  const newstext = {
    color: "#110041",
    fontSize: "50px",
    lineHeight: "22px",
    fontWeight: "600px",
    fontFamily: 'Poppins',
  };
  const card = {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    padding: "21px 0px",
   
  };
  const card1 = {
    backgroundImage: `url(${news1})`,
    minWidth: "293px",
    minHeight: "273px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    borderRadius: '10px 10px 0px 0px',
    boxShadow: '0px 16px 69px rgba(0, 0, 0, 0.15)',
    transition: 'all 0.3s ease',
    // cursor: 'pointer',
    // ':hover': {
    //   transform: "scale(1.1)"
    // }
  };
  const card2 = {
    backgroundImage: `url(${news2})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    minWidth: "293px",
    minHeight: "273px",
    cursor: 'pointer',
    borderRadius: '10px 10px 0px 0px',
    boxShadow: '0px 16px 69px rgba(0, 0, 0, 0.15)',

  };
  const card3 = {
    backgroundImage: `url(${news3})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    minWidth: "293px",
    cursor: 'pointer',
    minHeight: "273px",
    borderRadius: '10px 10px 0px 0px',
    boxShadow: '0px 16px 69px rgba(0, 0, 0, 0.15)',
  };
  const cardh = {
    marginTop: "220px",
    color: "#FFFFFF",
    fontSize: "28px",
    fontFamily: 'Poppins',
    marginLeft: "32px",
  };
  const weather1 = {
    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%)',
    opacity: ' 0.8',
    backdropFilter: 'blur(20px)',
    borderRadius: '10px',
    height: "348px",
    width: "516px",
    float: "right",
    margin: "82px 87px",
    padding: "66px",
  };
  const heading = {
    display: "flex",
    justifyContent: "space-between",
  };
  const heading1 = {
    fontSize: "24px",
    lineHeight: "30px",
    fontWeight: "400px",
    fontFamily: 'Poppins',
    color: "#FFFFFF",
  };
  const textdiv = {
    fontSize: "20px",
    lineHeight: "30px",
    fontWeight: "400px",
    fontFamily: 'Poppins',
    color: "#FFFFFF",
  };
  const degree = {
    display: "flex",
    gap: "10px",
    paddingTop: "650px",
    paddingLeft: "55px",
  };
  const degree2 = {
    display: "flex",
    gap: "10px",

  };
  const degree1 = {
    fontSize: "34px",
    lineHeight: "30px",
    fontWeight: "400px",
    fontFamily: 'Poppins',
    color: "#FFFFFF",

  };
  const vector2 = {
    paddingTop: "35px",

  };
  const vector0 = {
    fontSize: "54px",
    lineHeight: "60px",
    fontWeight: "400px",
    fontFamily: 'Poppins',
    color: "#FFFFFF",
  };
  const degreevi = {
    fontSize: "18px",
    lineHeight: "10px",
    fontWeight: "400px",
    fontFamily: 'Poppins',
    color: "#FFFFFF",

  };
  const thundercard = {
    background: "#FFFFFF",
    display: "flex",
    justifyContent: "space-between",
    padding: "35px",
    boredr: "1px solid #000",

  };
  const thundertext = {
    fontSize: "64px",
    fontWeight: "600px",
    fontFamily: 'Poppins',
    color: "#000000",
  };
  const thundertext1 = {
    fontSize: "24px",
    fontWeight: "600px",
    fontFamily: 'Poppins',
    color: "#000000",
    paddingTop: "25px",
  };
  const field = {
    display: "flex",
    justifyContent: "center",
    paddingTop: "70px",
  };
  const textfield = {
    maxWidth: '661px',
    width: "100%",
    height: '56px',
    background: '#FFFFFF',
    boxShadow: '0px 16px 40px rgba(0, 0, 0, 0.15)',
    borderRadius: '10px',
  };



  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };


  return (
    <>
      <div style={backgroundimg}>
        <NavBar />
        <div>


          <div style={weather1}>
            <div>
              <h2 style={heading1}>weather Details</h2>
            </div>
            <div style={heading}>
              <h4 style={textdiv}>Cloudy</h4>
              <h4 style={textdiv}>
                {cloud}%
              </h4>
            </div>
            <div style={heading}>
              <h4 style={textdiv}>Humidity</h4>
              <h4 style={textdiv}>
                {weather}%
              </h4>
            </div>
            <div style={heading}>
              <h4 style={textdiv}>Wind</h4>
              <h4 style={textdiv}>
                {wind}km/h
              </h4>
            </div>

          </div>
        </div>
        <div style={degree}>
          <div>
            <h1 style={vector0} >{temperature}</h1>
          </div>
          <div style={degree2}>
            <div>
              <h2 style={degree1}>{search}</h2>
              <h2 style={degreevi}>{visibility} visibility</h2>
            </div>

            <div>
              <img style={vector2} src={vector} />
            </div>

          </div>

        </div>
      </div>
      <div style={customdiv}>
        <div style={news}>
          <h1 style={newstext}>Country</h1>
        </div>
        <div style={card}>
          <div style={card1}>

            <h1 style={cardh}>temperature</h1>
            <div style={thundercard}>
              <div>
                <h1 style={thundertext}> {temperature}</h1>
              </div>
              <div>
                <h3 style={thundertext1}>{search}</h3>
                {/* <h3 style={thundertext1}>xyz</h3> */}
              </div>
            </div>
          </div>



          <div style={card2}>
            <h1 style={cardh}>Cloudy</h1>
            <div style={thundercard}>
              <div>
                <h1 style={thundertext}>{cloud}%</h1>
              </div>
              <div>
                <h3 style={thundertext1}>{search}</h3>
                {/* <h3 style={thundertext1}>xyz</h3> */}
              </div>
            </div>
          </div>
          <div style={card3}>
            <h1 style={cardh}>Humidity</h1>
            <div style={thundercard}>
              <div>
                <h1 style={thundertext}>{weather}%</h1>
              </div>
              <div>
                <h3 style={thundertext1}>{search}</h3>
                {/* <h3 style={thundertext1}>xyz</h3> */}
              </div>
            </div>
          </div>
        </div>
        <div style={field} >
          <input
            style={textfield}
            type="search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
            }}
          />
        </div>

      </div>
      <div style={secondBack}>

      </div>
      <div style={customdiv}>
        <div style={news}>
          <h1 style={newstext}>News</h1>
        </div>
        <div style={card}>
          <div style={card1}>
            <h1 style={cardh}> {description} in <br /> {search}</h1>
          </div>
          <div style={card2}>
            <h1 style={cardh}> Pressure in <br />{search} is {pressure}</h1>
          </div>
          <div style={card3}>
            <h1 style={cardh}> Humidity In  <br /> {search} is {weather}%</h1>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
