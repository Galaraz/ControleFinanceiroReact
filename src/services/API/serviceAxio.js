import Axios from 'axios';


const requestAllCount = async () => {
    try {
        const {data} = await Axios.get('http://localhost:3001/conta');
        console.log("FRONT_END BUSCANDO TODOS", data);
        return data;
    } catch (error) {
        console.error(error.message)
    }
}

const requestAllClient = async () => {
    try {
        const result = await Axios.get('http://localhost:3001/client');
        console.log("FRONT_END BUSCANDO TODOS", result);
        return result;
    } catch (error) {
        console.error(error.message)
    }
}
//get localhost:3001/conta    buscar todos
//get localhost:3001/client   buscar todos

//post localhost:3001/conta   postar
const PostClient = async () => {
    try{
        const result = await Axios.post('http://localhost:3001/client',
        );
        console.log("FRONT_END BUSCANDO TODOS", result);
        return result;
    }
        catch(error){
            console.error(error.message)
        }

       
        
}
//post localhost:3001/client

export {requestAllCount,PostClient,requestAllClient};