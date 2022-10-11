export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6e43dffb04msh1b2056a1251f211p12a5acjsn314a337dbc29',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    }
  };


export const fetchData = async(url,options)=>{
    const response = await fetch(url, options);
    const data = await response.json();

    return data;

}