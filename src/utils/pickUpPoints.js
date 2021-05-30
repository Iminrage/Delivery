export const getPickUpPoints = async () => {
  const response = await fetch("https://fake-json-shop-heroku.herokuapp.com/db")
  const data = await response.json()
  return data;
}
