import './Welcome.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Welcome() {
  return (
   <div className='wel'>
    <h1>Welcome To The Future of Strategic Apps</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu lorem ut tortor lacinia ullamcorper ut sit amet nulla. Quisque interdum urna nisl, vel lacinia lorem hendrerit.</p>
    <div className='flex-container'>
    <DropdownButton title="Lifestyle Apps">
      <Dropdown.Item href="#/action-1">Lifestyle Apps</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
    <DropdownButton title="Social Media Apps">
      <Dropdown.Item href="#/action-1">Lifestyle Apps</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
    <DropdownButton title="Utility Apps">
      <Dropdown.Item href="#/action-1">Lifestyle Apps</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
    <DropdownButton title="Gaming Apps">
      <Dropdown.Item href="#/action-1">Lifestyle Apps</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
    <DropdownButton title="News Apps">
      <Dropdown.Item href="#/action-1">Lifestyle Apps</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
    <DropdownButton title="Billing Apps">
      <Dropdown.Item href="#/action-1">Lifestyle Apps</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
    <DropdownButton title="E-learning">
      <Dropdown.Item href="#/action-1">Lifestyle Apps</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
    <DropdownButton title="E-commerce">
      <Dropdown.Item href="#/action-1">Lifestyle Apps</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
    <DropdownButton title="Gaming Apps">
      <Dropdown.Item href="#/action-1">Lifestyle Apps</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
   </div>
  );
}

export default Welcome;
