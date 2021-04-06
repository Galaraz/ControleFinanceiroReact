import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Controls from '../Controls/Controls';
import { CustomerForm, Form } from '../Forms/CustomForm';
import * as employeeService from '../../services/employeeService';
import Title from '../BaseDasbord/Title';

 
  const initialFValues = {
    id: 0,
    nome: '',
    cnpj: '',
    razaoSocial: '',
    
  };

  export default function ClientForm() {
   
   const validate = (fieldValues = values) => {
      let temp = { ...errors }
      if ('Nome' in fieldValues)
          temp.fullName = fieldValues.fullName ? "" : "Este campo e requirido."
      if ('email' in fieldValues)
          temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
      if ('mobile' in fieldValues)
          temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required."
      if ('departmentId' in fieldValues)
          temp.departmentId = fieldValues.departmentId.length !== 0 ? "" : "This field is required."
      setErrors({
          ...temp
      })
  
      if (fieldValues == values)
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
  
  const handleSubmit = e => {
      e.preventDefault()
      if (validate()){
          employeeService.insertEmployee(values)
          resetForm()
      }
  }
    
    
    return (
      <>
        
           <Form onSubmit={handleSubmit}>
           <Title>Cadastro de Empresas</Title>
              <Grid container>
              
                  <Grid item xs={12} sm={6} md={6} lg={6}>
                  
                      <Controls.Input
                          name="Nome"
                          label="Nome"
                          value={values.fullName}
                          onChange={handleInputChange}
                          error={errors.fullName}
                      />
                      <Controls.Input
                          label="Endereco"
                          name="endereco"
                          value={values.email}
                          onChange={handleInputChange}
                          error={errors.email}
                      />
  
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={6}>
                  <Controls.Input
                          label="CNPJ"
                          name="cnpj"
                          value={values.mobile}
                          onChange={handleInputChange}
                          error={errors.mobile}
                      />
                      <Controls.Input
                          label="Razão Social"
                          name="razaoSocial"
                          value={values.city}
                          onChange={handleInputChange}
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
  