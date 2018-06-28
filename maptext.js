function getMap() {
  var x = document.getElementById("myRange")
  var currentVal = x.value
  return currentVal
}

function writeText(gebied) {
  var year = getMap()

  if (year == "2011") {
    if (gebied == "Westpoort"){
      document.getElementById("desc").innerHTML = gebied + "<br> Inwoners: 434 <br> gem. Stroomverbruik(kWh): 4157,71 <br> gem. gasverbuik(m3): 2790,89 ";
    }
    if (gebied == "Nieuw-West") {
      document.getElementById("desc").innerHTML = gebied + "<br> Inwoners: 138087 <br> gem. Stroomverbruik(kWh): 2596,22 <br> gem. gasverbuik(m3): 1375,84 ";
    }
    if (gebied == "West") {
      document.getElementById("desc").innerHTML = gebied + "<br> Inwoners: 133230 <br> gem. Stroomverbruik(kWh): 2354,22 <br> gem. gasverbuik(m3): 1245,09 ";
    }
    if (gebied == "Noord") {
      document.getElementById("desc").innerHTML = gebied + "<br> Inwoners: 86675 <br> gem. Stroomverbruik(kWh): 2681,23 <br> gem. gasverbuik(m3): 1492,51 ";
    }
    if (gebied == "Centrum") {
      document.getElementById("desc").innerHTML = gebied + "<br> Inwoners: 84030 <br> gem. Stroomverbruik(kWh): 2951,67 <br> gem. gasverbuik(m3): 1770,24 ";
    }
    if (gebied == "Zuid") {
      document.getElementById("desc").innerHTML = gebied + "<br> Inwoners: 135861 <br> gem. Stroomverbruik(kWh): 2674,06 <br> gem. gasverbuik(m3): 1612,76 ";
    }
    if (gebied == "Oost") {
      document.getElementById("desc").innerHTML = gebied + "<br> Inwoners: 120234 <br> gem. Stroomverbruik(kWh): 2546,2 <br> gem. gasverbuik(m3): 1342,73 ";
    }
    if (gebied == "Zuidoost") {
      document.getElementById("desc").innerHTML = gebied + "<br> Inwoners: 82008 <br> gem. Stroomverbruik(kWh): Geen data <br> gem. gasverbuik(m3): Geen data ";
    }
  }

  if (year == "2012") {
    if (gebied == "Westpoort"){
      document.getElementById("desc").innerHTML = gebied + "<br> Inwoners: 448 <br> gem. Stroomverbruik(kWh): 3757,4 <br> gem. gasverbuik(m3): 2758,21 ";
    }
    if (gebied == "Nieuw-West") {
      document.getElementById("desc").innerHTML = gebied + "<br> Inwoners: 139886 <br> gem. Stroomverbruik(kWh): 2588,44 <br> gem. gasverbuik(m3): 1342,99 ";
    }
    if (gebied == "West") {
      document.getElementById("desc").innerHTML = gebied + "<br> Inwoners: 135083 <br> gem. Stroomverbruik(kWh): 2374,76 <br> gem. gasverbuik(m3): 1214,46 ";
    }
    if (gebied == "Noord") {
      document.getElementById("desc").innerHTML = gebied + "<br> Inwoners: 87342 <br> gem. Stroomverbruik(kWh): 2674,1 <br> gem. gasverbuik(m3): 1457,2 ";
    }
    if (gebied == "Centrum") {
      document.getElementById("desc").innerHTML = gebied + "<br> Inwoners: 84541 <br> gem. Stroomverbruik(kWh): 2948,14 <br> gem. gasverbuik(m3): 1740,07 ";
    }
    if (gebied == "Zuid") {
      document.getElementById("desc").innerHTML = gebied + "<br> Inwoners: 137603 <br> gem. Stroomverbruik(kWh): 2695,51 <br> gem. gasverbuik(m3): 1573,84 ";
    }
    if (gebied == "Oost") {
      document.getElementById("desc").innerHTML = gebied + "<br> Inwoners: 122275 <br> gem. Stroomverbruik(kWh): 2558,59 <br> gem. gasverbuik(m3): 1311,89 ";
    }
    if (gebied == "Zuidoost") {
      document.getElementById("desc").innerHTML = gebied + "<br> Inwoners: 82866 <br> gem. Stroomverbruik(kWh): Geen data <br> gem. gasverbuik(m3): Geen data ";
    }
  }

  if (year == "2013") {
    if (gebied == "Westpoort"){
      document.getElementById("desc").innerHTML = gebied + "<br> Inwoners: 506 <br> gem. Stroomverbruik(kwh): 4098,0 <br> gem. gasverbuik(m3): 2819,29 ";
    }
    if (gebied == "Nieuw-West") {
      document.getElementById("desc").innerHTML = gebied + "<br> Inwoners: 141825 <br> gem. Stroomverbruik(kwh): 2626,41 <br> gem. gasverbuik(m3): 1311,36 ";
    }
    if (gebied == "West") {
      document.getElementById("desc").innerHTML = gebied + "<br> Inwoners: 138568 <br> gem. Stroomverbruik(kwh): 2378,34 <br> gem. gasverbuik(m3): 1194,62 ";
    }
    if (gebied == "Noord") {
      document.getElementById("desc").innerHTML = gebied + "<br> Inwoners: 88434 <br> gem. Stroomverbruik(kwh): 2655,05 <br> gem. gasverbuik(m3): 1418,06 ";
    }
    if (gebied == "Centrum") {
      document.getElementById("desc").innerHTML = gebied + "<br> Inwoners: 85618 <br> gem. Stroomverbruik(kwh): 2929,05 <br> gem. gasverbuik(m3): 1711,47 ";
    }
    if (gebied == "Zuid") {
      document.getElementById("desc").innerHTML = gebied + "<br> Inwoners: 137901 <br> gem. Stroomverbruik(kwh): 2691,39 <br> gem. gasverbuik(m3): 1531,17 ";
    }
    if (gebied == "Oost") {
      document.getElementById("desc").innerHTML = gebied + "<br> Inwoners: 122847 <br> gem. Stroomverbruik(kwh): 2583,81 <br> gem. gasverbuik(m3): 1293,41 ";
    }
    if (gebied == "Zuidoost") {
      document.getElementById("desc").innerHTML = gebied + "<br> Inwoners: 83743 <br> gem. Stroomverbruik(kwh): Geen data <br> gem. gasverbuik(m3): Geen data ";
    }
  }

  if (year == "2014") {
    if (gebied == "Westpoort"){
      document.getElementById("desc").innerHTML = gebied + "<br> Inwoners: 242 <br> gem. Stroomverbruik(kwh): 3630,5 <br> gem. gasverbuik(m3): 2716,52 ";
    }
    if (gebied == "Nieuw-West") {
      document.getElementById("desc").innerHTML = gebied + "<br> Inwoners: 144089 <br> gem. Stroomverbruik(kwh): 2596,32 <br> gem. gasverbuik(m3): 1297,55 ";
    }
    if (gebied == "West") {
      document.getElementById("desc").innerHTML = gebied + "<br> Inwoners: 141098 <br> gem. Stroomverbruik(kwh): 2356,93 <br> gem. gasverbuik(m3): 1183,71 ";
    }
    if (gebied == "Noord") {
      document.getElementById("desc").innerHTML = gebied + "<br> Inwoners: 89906 <br> gem. Stroomverbruik(kwh): 2612,83 <br> gem. gasverbuik(m3): 1416,81 ";
    }
    if (gebied == "Centrum") {
      document.getElementById("desc").innerHTML = gebied + "<br> Inwoners: 86099 <br> gem. Stroomverbruik(kwh): 2945,81 <br> gem. gasverbuik(m3): 1715,94 ";
    }
    if (gebied == "Zuid") {
      document.getElementById("desc").innerHTML = gebied + "<br> Inwoners: 139523 <br> gem. Stroomverbruik(kwh): 2676,62 <br> gem. gasverbuik(m3): 1523,39 ";
    }
    if (gebied == "Oost") {
      document.getElementById("desc").innerHTML = gebied + "<br> Inwoners: 126157 <br> gem. Stroomverbruik(kwh): 2568,41 <br> gem. gasverbuik(m3): 1279,29 ";
    }
    if (gebied == "Zuidoost") {
      document.getElementById("desc").innerHTML = gebied + "<br> Inwoners: 84071 <br> gem. Stroomverbruik(kwh): Geen data <br> gem. gasverbuik(m3): Geen data ";
    }
  }

  if (year == "2015") {
    if (gebied == "Westpoort"){
      document.getElementById("desc").innerHTML = gebied + "<br> Inwoners: 202 <br> gem. Stroomverbruik(kWh): 3928,25 <br> gem. gasverbuik(m3): 2508,11 ";
    }
    if (gebied == "Nieuw-West") {
      document.getElementById("desc").innerHTML = gebied + "<br> Inwoners: 146801 <br> gem. Stroomverbruik(kWh): 2541,57 <br> gem. gasverbuik(m3): 1267,53 ";
    }
    if (gebied == "West") {
      document.getElementById("desc").innerHTML = gebied + "<br> Inwoners: 142832 <br> gem. Stroomverbruik(kWh): 2286,25 <br> gem. gasverbuik(m3): 1139,47 ";
    }
    if (gebied == "Noord") {
      document.getElementById("desc").innerHTML = gebied + "<br> Inwoners: 91324 <br> gem. Stroomverbruik(kWh): 2538,54 <br> gem. gasverbuik(m3): 1375,8 ";
    }
    if (gebied == "Centrum") {
      document.getElementById("desc").innerHTML = gebied + "<br> Inwoners: 86418 <br> gem. Stroomverbruik(kWh): 2841,21 <br> gem. gasverbuik(m3): 1646,63 ";
    }
    if (gebied == "Zuid") {
      document.getElementById("desc").innerHTML = gebied + "<br> Inwoners: 141438 <br> gem. Stroomverbruik(kWh): 2596,08 <br> gem. gasverbuik(m3): 1475,13 ";
    }
    if (gebied == "Oost") {
      document.getElementById("desc").innerHTML = gebied + "<br> Inwoners: 128690 <br> gem. Stroomverbruik(kWh): 2507,52 <br> gem. gasverbuik(m3): 1225,34 ";
    }
    if (gebied == "Zuidoost") {
      document.getElementById("desc").innerHTML = gebied + "<br> Inwoners: 84567 <br> gem. Stroomverbruik(kWh): 4544,0 <br> gem. gasverbuik(m3): 1046,0 ";
    }
  }

  if (year == "2016") {
    if (gebied == "Westpoort"){
      document.getElementById("desc").innerHTML = gebied + "<br> Inwoners: 200 <br> gem. Stroomverbruik(kWh): 3552,33 <br> gem. gasverbuik(m3): 2469,48 ";
    }
    if (gebied == "Nieuw-West") {
      document.getElementById("desc").innerHTML = gebied + "<br> Inwoners: 149397 <br> gem. Stroomverbruik(kWh): 2488,29 <br> gem. gasverbuik(m3): 1238,95 ";
    }
    if (gebied == "West") {
      document.getElementById("desc").innerHTML = gebied + "<br> Inwoners: 143964 <br> gem. Stroomverbruik(kWh): 2244,68 <br> gem. gasverbuik(m3): 1113,69 ";
    }
    if (gebied == "Noord") {
      document.getElementById("desc").innerHTML = gebied + "<br> Inwoners: 92917 <br> gem. Stroomverbruik(kWh): 2508,24 <br> gem. gasverbuik(m3): 1345,75 ";
    }
    if (gebied == "Centrum") {
      document.getElementById("desc").innerHTML = gebied + "<br> Inwoners: 86499 <br> gem. Stroomverbruik(kWh): 2792,52 <br> gem. gasverbuik(m3): 1616,11 ";
    }
    if (gebied == "Zuid") {
      document.getElementById("desc").innerHTML = gebied + "<br> Inwoners: 143258 <br> gem. Stroomverbruik(kWh): 2555,3 <br> gem. gasverbuik(m3): 1442,7 ";
    }
    if (gebied == "Oost") {
      document.getElementById("desc").innerHTML = gebied + "<br> Inwoners: 132421 <br> gem. Stroomverbruik(kWh): 2475,29 <br> gem. gasverbuik(m3): 1203,41 ";
    }
    if (gebied == "Zuidoost") {
      document.getElementById("desc").innerHTML = gebied + "<br> Inwoners: 86057 <br> gem. Stroomverbruik(kWh): 2691,72 <br> gem. gasverbuik(m3): 1279,81 ";
      }
    }

  if (year == "2017") {
    if (gebied == "Westpoort"){
      document.getElementById("desc").innerHTML = gebied + "<br> Inwoners: 192 <br> gem. Stroomverbruik(kWh): 3552,33 <br> gem. gasverbuik(m3): 2602,14 ";
    }
    if (gebied == "Nieuw-West") {
      document.getElementById("desc").innerHTML = gebied + "<br> Inwoners: 151677 <br> gem. Stroomverbruik(kWh): 2488,29 <br> gem. gasverbuik(m3): 1230,27 ";
    }
    if (gebied == "West") {
      document.getElementById("desc").innerHTML = gebied + "<br> Inwoners: 143842 <br> gem. Stroomverbruik(kWh): 2244,68 <br> gem. gasverbuik(m3): 1093,01 ";
    }
    if (gebied == "Noord") {
      document.getElementById("desc").innerHTML = gebied + "<br> Inwoners: 94766 <br> gem. Stroomverbruik(kWh): 2508,24 <br> gem. gasverbuik(m3): 1346,6 ";
    }
    if (gebied == "Centrum") {
      document.getElementById("desc").innerHTML = gebied + "<br> Inwoners: 86422 <br> gem. Stroomverbruik(kWh): 2792,52 <br> gem. gasverbuik(m3): 1597,14 ";
    }
    if (gebied == "Zuid") {
      document.getElementById("desc").innerHTML = gebied + "<br> Inwoners: 144432 <br> gem. Stroomverbruik(kWh): 2555,3 <br> gem. gasverbuik(m3): 1430,99 ";
    }
    if (gebied == "Oost") {
      document.getElementById("desc").innerHTML = gebied + "<br> Inwoners: 135767 <br> gem. Stroomverbruik(kWh): 2475,29 <br> gem. gasverbuik(m3): 1176,61 ";
    }
    if (gebied == "Zuidoost") {
      document.getElementById("desc").innerHTML = gebied + "<br> Inwoners: 87854 <br> gem. Stroomverbruik(kWh): 2691,72 <br> gem. gasverbuik(m3): 1288,52 ";
    }
  }

}
