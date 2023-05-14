

function checkInputValue(){
    var inputElement = document.getElementById("stars");
    var inputValue = inputElement.value;
    inputValue=inputValue.toLowerCase();


    if(inputValue==="ursa major")
    {
        $(".heading").html("<h3>Ursa Major constellation lies in the northern sky. Its name means “the great bear,” or “the larger bear,” in Latin. The smaller bear is represented by Ursa Minor. Ursa Major is the largest northern constellation and third largest constellation in the sky. Its brightest stars form the Big Dipper asterism, one of the most recognizable shapes in the sky, also known as the Plough. Ursa Major is well-known in most world cultures and associated with a number of myths. It was one of the constellations catalogued by the Greek astronomer Ptolemy in the 2nd century. In Greek mythology, it is associated with Callisto, a nymph who was turned into a bear by Zeus’ jealous wife Hera.The Romans called the constellation Septentrio, or “seven plough oxen,” even though only two of the seven stars represented oxen, while the others formed a wagon.<br> Right ascension: 10.50 hours <br> Declination: 56 degrees north<br>Visible: Between latitudes of +90 and -30<br>Best viewed: April</h3>");
        $(".image").html("<img src='images/ursa_major.jpg'>");

    }
    else if(inputValue==="columba")
    {
        $(".heading").html("<h3>Columba constellation is located in the southern sky. Its name means “the dove” in Latin. The constellation’s original name was Columba Noachi, meaning “Noah’s dove.” It was named after the biblical dove that informed Noah that the Great Flood was receding.Columba was introduced by the Dutch astronomer Petrus Plancius in the late 16th century and later appeared in German astronomer Johann Bayer’s star atlas Uranometria of 1603.The constellation is home to the blue subgiant Phact (Alpha Columbae) and the runaway star Mu Columbae. Notable deep sky objects in Columba include the barred spiral galaxy NGC 1808 and the globular cluster NGC 1851. Columba is the 54th constellation in size, occupying an area of 270 square degrees. <br>Right Ascenison: 5.08 hours<br> Declination: -45 degrees<br> Visible: Between latitudes +45 to -90 degrees<br> Best viewed: February</h3>");
        $(".image").html("<img class='ph' src='images/columba.jpg'>");
    }


    else if(inputValue==="draco")
    {
        $(".heading").html("<h3>Draco is one of the largest constellations in the sky. Located in the northern celestial hemisphere, the constellation represents Ladon, the dragon that guarded the gardens of the Hesperides in Greek mythology. The name Draco means “the dragon” in Latin.Draco is one of the Greek constellations. It was first catalogued by the Greek astronomer Ptolemy in the 2nd century. It is a circumpolar constellation; it never sets below the horizon for many observers in the northern hemisphere. Draco contains several famous deep sky objects. These include the Cat’s Eye Nebula (NGC 6543), the Spindle Galaxy (Messier 102, NGC 5866), and the Tadpole Galaxy.<br>Right Ascension: 17 hours<br> Declination: 65 degrees<br> Visible:  Between latitudes of +90 to -15 degrees <br>Best Viewed: July</h3>")
        $(".image").html("<img src='images/draco.jpg'>");
    }

    else if(inputValue==="cancer")
    {
        $(".heading").html("<h3>Cancer constellation is located in the northern sky. Its name means “the crab” in Latin. Cancer is the faintest of the 12 zodiac constellations. The constellation was first catalogued by the Greek astronomer Ptolemy in his Almagest in the 2nd century CE. In Greek mythology, the constellation Cancer is associated with the crab sent by Hera to defeat Heracles. In different versions of the myth, the crab is either kicked into the sky by Heracles or placed among the stars by Hera after getting crushed by the Greek hero. Cancer contains a number of famous deep sky objects, among them the open cluster Presepe, also known as the Beehive Cluster (Messier 44), the open cluster Messier 67 and the interacting spiral galaxies NGC 2535 and NGC 2536.<br>Right Ascension: 9 hours<br>Declination: 20 degrees<br>Visible:  between latitudes +90 to -60degrees<br>Best seen: March</h3>");
        $(".image").html("<img class='can' src='images/cancer.png'> ");
    }


    else if(inputValue==="phoenix")
    {
        $(".heading").html("<h3>Phoenix constellation lies in the southern sky. It was named after the phoenix, the mythical bird that rises from its own ashes. The constellation was originally introduced by the Dutch astronomer and cartographer Petrus Plancius from the observations of the Dutch navigators Frederick Houtman and Pieter Dirkszoon Keyser in the late 16th century. It is a relatively small constellation, but it is the largest among the 12 constellations created and named by Plancius. It was first depicted on his globe in 1598 and later appeared in Johann Bayer’s atlas Uranometria in 1603. Phoenix constellation is easy to see for anyone in Australia and South Africa during southern hemisphere summer, but generally can’t be observed by anyone living north of the 40th parallel, and lies pretty low in the sky for observers north of the equator.<br>Right Ascension: 1 hour<br>Declination: 50 degrees<br>Visible: Between +32 and -90 degrees<br>Best seen: November</h3>");
        $(".image").html("<img class='ph' src='images/phoenix.jpg'>");
    }


    else if(inputValue==="taurus")
    {
        $(".heading").html("<h3>Taurus is a large constellation in the northern sky. Its name means “bull” in Latin. The constellation is symbolized by the bull’s head. It is one of the oldest constellations. Its history dates back to the Bronze Age. Taurus is one of the 12 constellations of the zodiac, first catalogued by the Greek astronomer Claudius Ptolemy in the 2nd century CE. In Greek mythology, the constellation is associated with Zeus, who transformed himself into a bull to get close to Europa and abduct her. Taurus is known for its bright stars Aldebaran, Elnath, and Alcyone, as well as for the variable star T Tauri. The constellation is also home to the Pleiades (Messier 45), also known as the Seven Sisters, and the Hyades, the two nearest open star clusters to Earth.<br>Right Ascension: 4.9 hours<br>Declination: 19 degrees<br>Visible: Between 90 to 65 degrees<br>Best seen: January</h3>");
        $(".image").html("<img src='images/taurus.png'> ");

    }


    else if(inputValue==="gemini")
    {
        $(".heading").html("<h3>Gemini constellation is located in the northern celestial hemisphere. Its name means “the twins” in Latin. The constellation represents the twins Castor and Pollux (Polydeuces), also known as the Dioscuri in ancient times, in Greek mythology. These two stars appear relatively close together forming an o shape, encouraging a mythological link. Gemini is one of the zodiac constellations, first catalogued by the Greek astronomer Ptolemy in the 2nd century. Gemini is known mainly for its two bright stars, Castor and Pollux, the neutron star Geminga, and several notable deep sky objects, among them the open cluster Messier 35, the Eskimo Nebula, the Jellyfish Nebula, and the Medusa Nebula. It contains 85 stars with naked eye visibility. <br>Right ascension: 7 hours<br>Declination: 20 degrees<br>Visible: Between latitudes +90 and -60 degrees<br>Best seen: January</h3>");
        $(".image").html("<img class='can' src='images/gemini.jpg'>");
    }

    else if(inputValue==="aquarius")
    {
        $(".heading").html("<h3>Aquarius is a constellation in the western zodiac and one of 88 official constellations according to the International Astronomical Union (IAU). The constellation describes a large group of stars that ancient Greek astronomers saw as a picture in the night sky. Aquarius was said to represent a 'cup bearer' or 'water bearer,' which is what its name means in Latin. Aquarius is one of the oldest constellations documented in the historical record, first recorded in the second century by the Greek astronomer Claudius Ptolemy.. The constellation contains 11 named stars. The star names approved by the International Astronomical Union (IAU) are Albali, Ancha, Bosona, Bunda, Lionrock, Márohu, Sadachbia, Sadalmelik, Sadalsuud, Situla, and Skat.<br>Right Ascension: 22.71 hours <br>Declination: -10.19 degrees <br>Visible: Between 65 degrees and -90 degrees in southern hemisphere<br> Best viewed: During October at 9 p.m.</h3>");
        $(".image").html("<img  src='images/aquarius.jpg'>");
    }

    else if(inputValue==="orion")
    {
        $(".heading").html("<h3>Orion is located on the celestial equator and can be seen throughout the world. The constellation is named after the hunter in Greek mythology is one of the most obvious and recognizable constellations in the sky. Two of the ten brightest stars in the sky are located in Orion — Rigel (Beta Orionis) and Betelgeuse (Alpha Orionis) Orion is clearly visible in the night sky(opens in new tab) from November to February. Finding Orion's Belt is the easiest way to locate the Orion Constellation. Orion's Belt is formed by three bright stars; Alnilam, Mintaka and Alnitak. Orion is in the southwestern sky if you are in the Northern Hemisphere or the northwestern sky if you are in the Southern Hemisphere.<br>Right ascension: 5 hours<br>Declination: 5 degrees<br>Visible: Between latitudes +85 and -75 degrees<br>Best seen: January</h3>")
        $(".image").html("<img class='can'  src='images/orion.jpg'>");
    }

    else
    $(".heading").html("<h3>Coming Soon!!</h3>");
}


function contactus(){
    $(".con").html("<a href='https://www.linkedin.com/in/jagpreet-singh-khurana-b4057524a/'>Jagpreet Singh Khurana</a>");
}


    document.addEventListener("keydown",function(e){
        if(e.key==="Enter")
        checkInputValue();
        }); 