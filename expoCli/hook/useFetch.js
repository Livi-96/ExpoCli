import { useEffect, useState } from "react";
import axios from 'axios'

const useFetch = async () => {

//const [data, setData] = useState([])
const [isLoading, setIsLoading] = useState(false)
const [error, setError] = useState(null)

let response = await fetch("https://icanhazdadjoke.com/");
  let data = await response.json();
  data = data.data;

  return data
}