import Axios from 'axios';

/* const KEYS ={
    employees:'employees',
    employeeId:'employeeId'
} */
/* const {data} = await Axios.get('https://api-controlefinanceiro-heroku.herokuapp.com/client');
// console.log("FRONT_END BUSCANDO TODOS", data);
 return data; */

export const getDepartmentCollection = ()=>([

    { id: '1', title: 'Development' },
    { id: '2', title: 'Marketing' },
    { id: '3', title: 'Accounting' },
    { id: '4', title: 'HR' },
])

export async function  insertEmployee (data) {
   
  

    const result = await Axios.post('https://api-controlefinanceiro-heroku.herokuapp.com/conta',data
        );
        console.log("FRONT_END Adicionando ", result);
        console.log(result)
        return result;
    
}

export async function  insertClient (data) {
       
    const result = await Axios.post('https://api-controlefinanceiro-heroku.herokuapp.com/client',data
    );
    console.log("FRONT_END Adicionando ", result);
    console.log(result)
    return result;

}

