import React from 'react';
import { shallow } from 'enzyme';
import { act } from 'react-dom/test-utils';
import Form from '../RegisterForm';

describe('<RegisterForm/>', function() {
  let form: React.FC;

  beforeEach(() => {
    form = shallow(<Form />);
  });

  it('should renders without crashing', function() {
    shallow(<Form />);
  });

  it('should have two number fields', function() {
    expect(form.find('input[type="number"]').length).toEqual(2);
  });

  it('should have a date field', function() {
    expect(form.find('input[type="date"]').length).toEqual(1);
  });

  it('should have no error message on load', function() {
    expect(form.find('.errorMessage').length).toBe(0);
  });

  it('should have submit button disabled on load', function() {
    expect(form.find('input[type="submit"]').props().disabled).toBeTruthy();
  });

  it('should have submit button disabled on one field filled', function() {
    form.find('input[name="credit_card_number"]').prop('onChange')({
      target: { name: 'credit_card_number', value: '123123' },
    });
    form.update();
    expect(form.find('input[type="submit"]').props().disabled).toBeTruthy();
  });

  it('should have submit button enabled when input fields are filled', function() {
    expect(form.find('input[type="submit"]').props().disabled).toBeTruthy();
    form.find('input[name="credit_card_number"]').prop('onChange')({
      target: { name: 'credit_card_number', value: '123123' },
    });
    form.find('input[name="CVC"]').prop('onChange')({
      target: { name: 'CVC', value: '456456' },
    });
    form.find('input[name="expiry"]').prop('onChange')({
      target: { name: 'expiry', value: '29/08/2019' },
    });
    form.update();
    expect(form.find('input[type="submit"]').props().disabled).toBeFalsy();
  });

  it('should show error message when submitted with empty input values', function() {
    form.simulate('submit', { preventDefault() {} });
    expect(form.find('.errorMessage').length).toBe(1);
    expect(form.find('.errorMessage li').length).toBe(3);
  });

  it('should set the input value on change event', function() {
    form.find('input[name="credit_card_number"]').prop('onChange')({
      target: { name: 'credit_card_number', value: '123123' },
    });
    form.find('input[name="CVC"]').prop('onChange')({
      target: { name: 'CVC', value: '456456' },
    });
    form.find('input[name="expiry"]').prop('onChange')({
      target: { name: 'expiry', value: '29/08/2019' },
    });
    form.update();
    expect(form.find('input[name="credit_card_number"]').prop('value')).toEqual('123123');
    expect(form.find('input[name="CVC"]').prop('value')).toEqual('456456');
    expect(form.find('input[name="expiry"]').prop('value')).toEqual('29/08/2019');
  });

  it('should not have any errors when all fields have values', function() {
    form.find('input[name="credit_card_number"]').prop('onChange')({
      target: { name: 'credit_card_number', value: '123123' },
    });
    form.find('input[name="CVC"]').prop('onChange')({
      target: { name: 'CVC', value: '456456' },
    });
    form.find('input[name="expiry"]').prop('onChange')({
      target: { name: 'expiry', value: '29/08/2019' },
    });
    form.update();

    form.simulate('submit', { preventDefault() {} });
  });
});
