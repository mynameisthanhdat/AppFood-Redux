import React from 'react-native';

const apiGetAllFood = 'http://localhost:3001/list_all_foods';
async function getFoodFromServer() {
    try {
        let response = await fetch(apiGetAllFood);
        let responseJson = await response.json();
        return responseJson.data;
    } catch {
        console.error(`Error is: ${error}`)
    }
}
export { getFoodFromServer };  