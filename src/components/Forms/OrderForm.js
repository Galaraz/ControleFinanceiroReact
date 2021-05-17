import React from 'react';
import Grid from '@material-ui/core/Grid';
import Controls from '../Controls/Controls';
import { CustomerForm, Form } from '../Forms/CustomForm';
import * as employeeService from '../../services/employeeService';
import Title from '../BaseDasbord/Title';

const typeItems = [
  { id: 'despesa', title: 'Despesa' },
  { id: 'receita', title: 'Receita' },
];

const initialFValues = {
  
  hireDate: new Date(),
  receptor: '',
  type: '',
  isPaid: false,
  value: '',
 
};

export default function Orderpage() {
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ('receptor' in fieldValues)
      temp.receptor = fieldValues.receptor ? '' : 'This field is required.';
    if ('email' in fieldValues)
      temp.email = /$^|.+@.+..+/.test(fieldValues.email) ? '' : 'Email is not valid.';
    if ('mobile' in fieldValues)
      temp.mobile = fieldValues.mobile.length > 9 ? '' : 'Minimum 10 numbers required.';
    if ('departmentId' in fieldValues)
      temp.departmentId = fieldValues.departmentId.length !== 0 ? '' : 'This field is required.';
    setErrors({
      ...temp,
    });

    if (fieldValues === values) return Object.values(temp).every((x) => x === '');
  };

  const { values, errors, setErrors, handleInputChange, resetForm } = CustomerForm(
    initialFValues,
    true,
    validate
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      employeeService.insertEmployee(values);
      resetForm();
      
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={12} sm={12} md={6} lg={6}>
          <Title>Cadastar Contas</Title>
            <Controls.Select
              name="receptor"
              label="Receptor"
              value={values.departmentId}
              onChange={handleInputChange}
              options={employeeService.getDepartmentCollection()}
              error={errors.departmentId}
            />
            <Controls.Input
              name="value"
              label="Valor"
              value={values.value}
              onChange={handleInputChange}
              error={errors.value}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Controls.RadioGroup
              name="type"
              label="Tipo"
              value={values.type}
              onChange={handleInputChange}
              items={typeItems}
            />

            <Controls.DatePicker
              name="hireDate"
              label="Hire Date"
              value={values.hireDate}
              onChange={handleInputChange}
            />
            <Controls.Checkbox
              name="isPay"
              label="Paga?"
              value={values.isPay}
              onChange={handleInputChange}
            />

            <div>
              <Controls.Button type="submit" text="Salvar" />
              <Controls.Button text="Cancelar" color="default" onClick={resetForm} />
            </div>
          </Grid>
        </Grid>
      </Form>
    </>
  );
}
