import './Welcome.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Welcome() {
  return (
   <div className='wel'>
    <h1 className='we'>Welcome To The <strong>Future of Strategic Apps</strong></h1>
    <p className='lo'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu lorem ut tortor lacinia<br/> ullamcorper ut sit amet nulla. Quisque interdum urna nisl, vel lacinia lorem hendrerit.</p>
    <div className='flex-container'>
    <DropdownButton variant="light" className='drop' title="Lifestyle Apps">
      <Dropdown.Item href="#/action-1">Lifestyle Apps</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
    <DropdownButton variant="light" className='drop' title="Social Media Apps">
      <Dropdown.Item href="#/action-1">Lifestyle Apps</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
    <DropdownButton variant="light" className='drop' title="Utility Apps">
      <Dropdown.Item href="#/action-1">Lifestyle Apps</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
    <DropdownButton variant="light" className='drop' title="Gaming Apps">
      <Dropdown.Item href="#/action-1">Lifestyle Apps</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
    <DropdownButton variant="light" className='drop' title="News Apps">
      <Dropdown.Item href="#/action-1">Lifestyle Apps</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton><br/>
    </div>
    <div className='flex-container'>
    <DropdownButton variant="light" className='drop' title="Billing Apps">
      <Dropdown.Item href="#/action-1">Lifestyle Apps</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
    <DropdownButton variant="light" className='drop' title="E-learning">
      <Dropdown.Item href="#/action-1">Lifestyle Apps</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
    <DropdownButton variant="light" className='drop' title="E-commerce">
      <Dropdown.Item href="#/action-1">Lifestyle Apps</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
    <DropdownButton variant="light" className='drop' title="Gaming Apps">
      <Dropdown.Item href="#/action-1">Lifestyle Apps</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
    </div>
   </div>
  );
}

export default Welcome;
