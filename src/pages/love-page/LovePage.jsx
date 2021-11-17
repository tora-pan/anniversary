import React from "react";

import Card from "../../components/card/Card";
import "./lovePage.styles.css";
import image1 from "../../img/1.JPG";
import image2 from "../../img/2.JPG";
import image3 from "../../img/3.PNG";
import image4 from "../../img/4.JPG";
import image5 from "../../img/5.JPG";
import image6 from "../../img/6.JPG";
import image7 from "../../img/7.JPG";
import image8 from "../../img/8.JPG";
import image9 from "../../img/9.JPG";
import image10 from "../../img/10.JPG";
import image11 from "../../img/11.JPG";
import image12 from "../../img/12.JPG";
import image13 from "../../img/13.PNG";
import image14 from "../../img/14.JPG";
import image15 from "../../img/15.JPG";
import image16 from "../../img/16.JPG";
import image17 from "../../img/17.JPG";
import image18 from "../../img/18.JPG";
import image19 from "../../img/19.jpg";
import image20 from "../../img/20.JPG";
import image21 from "../../img/21.JPG";
import image22 from "../../img/22.JPEG";
import image23 from "../../img/23.JPG";
import image24 from "../../img/24.JPG";
import image25 from "../../img/25.JPEG";
import image26 from "../../img/26.JPEG";
import image27 from "../../img/27.JPG";
import image28 from "../../img/28.JPG";
import image29 from "../../img/29.JPG";
import image30 from "../../img/30.JPG";
import image31 from "../../img/31.JPG";
import image32 from "../../img/32.JPEG";
import image33 from "../../img/33.JPEG";
import image34 from "../../img/34.JPEG";
import image35 from "../../img/35.JPEG";
import image36 from "../../img/36.JPG";
import image37 from "../../img/37.JPG";
import image38 from "../../img/38.JPEG";
import image39 from "../../img/39.JPEG";
import image40 from "../../img/40.JPEG";
import image41 from "../../img/41.JPEG";
import image42 from "../../img/42.JPEG";
import { useNavigate } from "react-router";
const LovePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("card", { replace: true });
  };

  return (
    <div className="love-page">
      <h1>LovePage</h1>
      <div className="card-container">
        <Card
          front="First photo of you on my phone."
          comment="2/1/2015"
          img={image1}
        />
        <Card front="Our first date <3" comment="2/9/2015" img={image2} />
        <Card front="It's official. BF/GF" comment="2/14/2015" img={image3} />
      </div>
      <div className="card-container">
        <Card
          front="Drawing cute pictures for you."
          comment="2/18/2015"
          img={image4}
        />
        <Card
          front="Date nights at the house with hookah."
          comment="2/27/2015"
          img={image5}
        />
        <Card
          front="Your gift to me. Happy 1 Month"
          comment="3/14/2015"
          img={image6}
        />
      </div>
      <div className="card-container">
        <Card
          front="Fancy breakfast for me after work."
          comment="3/15/2015"
          img={image7}
        />
        <Card front="Trip to Hearst Castle." comment="3/21/215" img={image8} />
        <Card
          front="Your trip to Hawaii to see your parents."
          comment="4/7/2015"
          img={image9}
        />
      </div>
      <div className="card-container">
        <Card
          front="Surprising me with fancy dindin."
          comment="5/11/2015"
          img={image10}
        />
        <Card
          front="Scariest lunch of my life."
          comment="6/21/2015"
          img={image11}
        />
        <Card
          front="Dodger day with your parents."
          comment="6/21/2015"
          img={image12}
        />
      </div>
      <div className="card-container">
        <Card front="Will you marry me?" comment="2/14/2015" img={image13} />
        <Card
          front="Being funny at the beach."
          comment="10/3/2015"
          img={image14}
        />
        <Card
          front="Museum date on your Bday!"
          comment="3/1/2016"
          img={image15}
        />
      </div>
      <div className="card-container">
        <Card front="First FJ test drive." comment="3/2/2016" img={image16} />
        <Card
          front="Being funny in Santa Monica."
          comment="7/26/2016"
          img={image17}
        />
        <Card front="Funny @ Okazaki!" comment="7/30/2016" img={image18} />
      </div>
      <div className="card-container">
        <Card front="Hiking fun with Lilo." comment="3/11/2017" img={image19} />
        <Card
          front="The 2 of us in Santa Monica"
          comment="6/23/2018"
          img={image20}
        />
        <Card
          front="Fun adventures with Bo."
          comment="6/25/2018"
          img={image21}
        />
      </div>
      <div className="card-container">
        <Card
          front="Dodger day with our friends!"
          comment="8/5/2018"
          img={image23}
        />
        <Card
          front="Ivy made new bee friends!"
          comment="10/16/2018"
          img={image22}
        />
        <Card
          front="Fun with friends in Japan!"
          comment="11/2/2018"
          img={image24}
        />
      </div>
      <div className="card-container">
        <Card front="Mama Papa Bday in Cali" comment="5/1/2019" img={image25} />
        <Card
          front="Christmas family of 5"
          comment="12/22/2019"
          img={image26}
        />
        <Card
          front="Best bday present a man could ask for!"
          comment="1/7/2020"
          img={image27}
        />
      </div>
      <div className="card-container">
        <Card
          front="Our first picture of Zen."
          comment="1/29/2020"
          img={image28}
        />
        <Card front="Our little alien." comment="3/12/2020" img={image29} />
        <Card
          front="Now that is starting to look like Zen."
          comment="7/16/2020"
          img={image30}
        />
      </div>
      <div className="card-container">
        <Card front="He's getting bigger!" comment="8/22/2020" img={image31} />
        <Card front="Mama is ready to go!" comment="9/9/2020" img={image32} />
        <Card front="Zen has arived!" comment="9/10/20" img={image33} />
      </div>
      <div className="card-container">
        <Card front="Mini nap together." comment="10/12/2020" img={image34} />
        <Card front="WuhhhoooO!" comment="10/18/2020" img={image35} />
        <Card front="First family photo?" comment="11/15/2020" img={image36} />
      </div>
      <div className="card-container">
        <Card front="My favorite people!" comment="1/13/2021" img={image37} />
        <Card front="Silly boy!" comment="5/12/2021" img={image38} />
        <Card front="First pool!" comment="7/9/2021" img={image39} />
      </div>
      <div className="card-container">
        <Card front="Ba Ba" comment="10/22/2021" img={image40} />
        <Card front="Playing in the corn!" comment="10/29/2021" img={image41} />
        <Card front="Love you two!" comment="10/29/2021" img={image42} />
      </div>
      <button onClick={handleClick}>Read Your Card</button>
    </div>
  );
};

export default LovePage;
