import { API } from '../../src/constants';
export const getData = async () =>{
    try {
        const response = await fetch(API);
        const resultResponse = await response.json();
        return resultResponse;
      } catch (e) {
        throw new Error('Cannot connect to server');
      }
 }