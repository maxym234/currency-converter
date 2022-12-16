import { Header } from "./components/header";
import { Main } from "./components/main";
import { useEffect, useState } from 'react';
import { API } from "./constants";
import { ThemeProvider } from 'styled-components';
import { mainTheme } from "./styles/globalStyles";
export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
      getData();
  }, []);
  const getData = async()=>{
      try {
          const response = await fetch(API);
          const resultResponse = await response.json();
          setData(resultResponse?.data);
          return     resultResponse;
        } catch (e) {
          throw new Error('Cannot connect to server');
        }
   }
  return (
    <ThemeProvider theme={mainTheme}>
      <Header data={data} />
      <Main data={data} />
    </ThemeProvider>
  );
}


