import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './components/App/App';
import Flag from './components/Flag/Flag';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('has empty data array on init', () => {
    const wrapper = mount(<App />);
    expect(wrapper.state('currencyObject')).toEqual([]);
  });
  it('shallow renders', () => {
    const component = shallow(<App  />);
    expect(component).toEqual(expect.anything());
  });

});

describe('Flag', () => {
  it('renders without crashing', () => {
    const component = mount(<Flag  />);
    expect(component).toEqual(expect.anything());
  });
});