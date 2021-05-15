import Axios from 'axios';


const requestAllCount = async () => {
    try {
        const data = await Axios.get('https://api-controlefinanceiro-heroku.herokuapp.com/conta');
        console.log("FRONT_END BUSCANDO TODOS", data);
        return data;
    } catch (error) {
        console.error(error.message)
    }
}

const requestAllClient = async () => {
    try {
        const {data} = await Axios.get('https://api-controlefinanceiro-heroku.herokuapp.com/client');
        console.log("FRONT_END BUSCANDO TODOS", data);
        return data;
    } catch (error) {
        console.error(error.message)
    }
}

const PostCount = async () => {
    try{
        const result = await Axios.post('http://localhost:3001/conta',
        );
        console.log("FRONT_Adicionando Valor", result);
        return result;
    }
        catch(error){
            console.error(error.message)
        }
      
}

const PostClient = async () => {
    try{
        const result = await Axios.post('http://localhost:3001/client',
        );
        console.log("FRONT_END Adicionando ", result);
        return result;
    }
        catch(error){
            console.error(error.message)
        }
      
}


export {requestAllCount,requestAllClient, PostClient, PostCount};