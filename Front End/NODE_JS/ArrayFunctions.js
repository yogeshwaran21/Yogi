countries=["India","US","UK","Austrila","Japan"];
capitals=["Delhi","Washington","Ottawa","Sydney","Tokyo"];

function getCapitals(country)
{
    for(i in countries){
        if(countries[i] == country)
        return capitals[i];
    }
    return "Country does not exist"
}
module.exports.getCapCity=getCapitals