export const getMovieList = async (year)  => {
    let urlApi = `https://jsonmock.hackerrank.com/api/movies?Year=${year}`
    try{
      const response = await fetch(urlApi);
      const data = await response.json();

      const infoNew = data.data.map((info) => info.Title)

      if (infoNew.length > 0) {
        return infoNew;
      }else {
        return console.log('No Results Found')
      }
    }catch(error){
      console.log('Error get Data', error);
    }
    return undefined;


  };