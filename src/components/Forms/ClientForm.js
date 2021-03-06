import React from 'react';
import Grid from '@material-ui/core/Grid';
import Controls from '../Controls/Controls';
import { CustomerForm, Form } from '../Forms/CustomForm';
import * as employeeService from '../../services/employeeService';
import Title from '../BaseDasbord/Title';

 
  const initialFValues = {
    
    fullName: '',
    address:'',
    mobile: '',
    email: '',
    ativo: "true",
   
  };

  export default function ClientForm() {
        
   const validate = (fieldValues = values) => {
      let temp = { ...errors }
      if ('fullName' in fieldValues)
          temp.fullName = fieldValues.fullName ? '' : "Este campo e requirido."
      if ('email' in fieldValues)
          temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? '' : "Endereco is not valid."
      if ('mobile' in fieldValues)
          temp.mobile = fieldValues.mobile.length > 9 ? '' : 'Minimum 10 numbers required.';
      
      setErrors({
          ...temp
      })
  
      if (fieldValues === values)
          return Object.values(temp).every(x => x === "")
  }
  
  const {
      values,
      //setValues,
      errors,
      setErrors,
      handleInputChange,
      resetForm
  } = CustomerForm(initialFValues, true, validate);
  
 
  const handleSubmit = async (e) => {
      e.preventDefault()
      if (validate()){
        employeeService.insertClient(values);
        console.log(values)
        resetForm()
              
      }
  }
 
/* async function xablau2 () {
  const getResult = await requestAllClient();
        
  console.log(result);
}
*/

    return (
      <>
        
           <Form onSubmit={handleSubmit}>
           <Title>Cadastrar Cliente </Title>
              <Grid container>
              
                  <Grid item xs={12} sm={6} md={6} lg={6}>
                  
                      <Controls.Input
                          name="fullName"
                          label="Nome"
                          value={values.fullName}
                          onChange={handleInputChange}
                          error={errors.fullName}
                      />
                        <Controls.Input
                          label="Endere??o"
                          name="address"
                          value={values.address}
                          onChange={handleInputChange}
                      />
                      
  
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={6}>
                  <Controls.Input
                          label="Celular"
                          name="mobile"
                          value={values.mobile}
                          onChange={handleInputChange}
                          error={errors.mobile}
                      />
                    <Controls.Input
                          label="Email"
                          name="email"
                          value={values.email}
                          onChange={handleInputChange}
                          error={errors.email}
                      />
                    </Grid>
                    <Grid item xs={12}>
                    <div>
                          <Controls.Button
                              type="submit"
                              text="Salvar" />
                          <Controls.Button
                              text="Cancelar"
                              color="default"
                              onClick={resetForm} />
                      </div>
                    </Grid>   
              </Grid>
          </Form>
                   
      </>
    );
  }
  