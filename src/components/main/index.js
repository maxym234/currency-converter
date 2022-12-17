import { useState } from 'react';
import { Input } from '../../ui/Input';
import { Select } from '../../ui/Select';
import { Wrap, Container, SubContainer, Title, LogoSite, ErrorText } from './style';

export const Main = ({ data = [] }) => {
  const { rates = {}} = data;
  const { buy = {}} = rates;

  const [value, setValue] = useState('')
  const [firstSelect, setFirstSelect] = useState('')
  const [secondSelect, setSecondSelect] = useState('')
  const [currency, setСurrency] = useState('')
  // const isDisable = firstSelect === secondSelect || ((firstSelect && secondSelect) === '');
  const isDisable = firstSelect === secondSelect || ((firstSelect && secondSelect) === '');
  const options = [
    {value: 'usd', label: 'USD'},
    {value: 'eur', label: 'EUR'}, 
    {value: 'uah', label: 'UAH'}
  ];

  const funcFrom = (v, d) => {
    const key = d !== 'uah' ? secondSelect?.toUpperCase() : firstSelect?.toUpperCase();
    return d !== 'uah' ? firstSelect === 'eur' ? 0.9385  * v : firstSelect === 'usd' ? 1.0655 * v : buy?.[key] * v : currency !== 'uah' ? currency === d ? v : v / buy?.[key] : v / buy?.[key] ;
  }
  const funcTo = (v, d) => {
    const key = d !== 'uah' ? firstSelect?.toUpperCase() :  secondSelect?.toUpperCase(); 
    return d !== 'uah' ? secondSelect === 'eur' ? 0.9385  * v : secondSelect === 'usd' ? 1.0655 * v : buy?.[key] * v : currency !== 'uah' ? currency === d ? v : v / buy?.[key] : v / buy?.[key] ;
  }
  
  const handleChangeValue = (e, num) => {
    setValue(e);
    setСurrency(num ? secondSelect : firstSelect);
  }
  const handleChangeSelect = (e, num) => {
    num ? setSecondSelect(e) : setFirstSelect(e); 
    setСurrency(e);
    setValue(0);
  }
  
  const tryConvert = (currency, value, convert) => {
    if (Number.isNaN(value)) {
      return '';
    }
    const output = convert(value, currency);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }
  const firstFieldValue = currency === secondSelect ? tryConvert(secondSelect, value, funcFrom) : value;
  const secondFieldValue = currency === firstSelect ? tryConvert(firstSelect, value, funcTo) : value;
  return (
    <Wrap>
      <Container>
        <Title>Convertor a currency</Title>
        <LogoSite src='../logo.png' alt='currency'/>
        <SubContainer>
          <Input disabled={isDisable} placeholder='enter data...' type='number' value={!isDisable && (firstFieldValue || 0)} onChange={e => handleChangeValue(e, 0)}/>
          <Select placeholder="Select a currency" options={options} onChange={e => handleChangeSelect(e, 0)}/>
        </SubContainer>
        <SubContainer>
          <Input  disabled={isDisable} placeholder='enter data...' type='number' value={!isDisable && (secondFieldValue || 0)} onChange={e => handleChangeValue(e, 1)}/>
          <Select placeholder="Select a currency" options={options} onChange={e => handleChangeSelect(e, 1)} />
        </SubContainer>
        {isDisable && <ErrorText>*choose different currencies</ErrorText>}
      </Container>      
    </Wrap>
  );
};
