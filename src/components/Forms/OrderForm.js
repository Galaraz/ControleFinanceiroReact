import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Controls from '../Controls/Controls';
import { CustomerForm, Form } from '../Forms/CustomForm';
import * as employeeService from '../../services/employeeService';
import Title from '../BaseDasbord/Title';

const typeItems = [
  { id: 'despesa', title: 'Despesa' },
  { id: 'receita', title: 'Receita' },
  { id: 'outros', title: 'Outros' },
];

const initialFValues = {
  id: 0,
  valor: '',
  tipo: 'despesa',
  receptor: '',
  hireDate: new Date(),
  isPay: false,
};

export default function Orderpage() {
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ('fullName' in fieldValues)
      temp.fullName = fieldValues.fullName ? '' : 'This field is required.';
    if ('email' in fieldValues)
      temp.email = /$^|.+@.+..+/.test(fieldValues.email) ? '' : 'Email is not valid.';
    if ('mobile' in fieldValues)
      temp.mobile = fieldValues.mobile.length > 9 ? '' : 'Minimum 10 numbers required.';
    if ('departmentId' in fieldValues)
      temp.departmentId = fieldValues.departmentId.length !== 0 ? '' : 'This field is required.';
    setErrors({
      ...temp,
    });

    if (fieldValues == values) return Object.values(temp).every((x) => x === '');
  };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } = CustomerForm(
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
              name="valor"
              label="Valor"
              value={values.fullName}
              onChange={handleInputChange}
              error={errors.fullName}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Controls.RadioGroup
              name="tipo"
              label="Tipo"
              value={values.gender}
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
              value={values.isPermanent}
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
