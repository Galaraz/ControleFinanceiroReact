import React from 'react';
import Dashboard from '../../components/BaseDasbord/Dashboard';
//import { ComboBox } from '../../components';
import NavBar from '../../components/Navigation/NavBar';
const HomePage = () => (
  <>
    {/* <ComboBox>
      <Dashboard /> 
    </ComboBox>
 */}
 <NavBar />
 <Dashboard /> 
 </>   
);

export default HomePage;
