import { Wrap, Component, Label } from './style';

export const Header = ({ data }) => {
  const arr = [
    {label: data?.base?.currency1, base: data?.rates?.buy?.USD, sell: data?.rates?.sell?.USD},
    {label: data?.base?.currency2, base: data?.rates?.buy?.EUR, sell: data?.rates?.sell?.EUR}
  ]
  return (
    <Wrap>
      {arr.map(el => (
        <Component> 
          <Label>Currency: {el?.label}</Label>
          <Label>Base: {el?.base}</Label>
          <Label>Sell: {el?.sell}</Label>
        </Component>
      ))}
    </Wrap>
  );
};
