import axios from "axios";
import { useEffect, useState } from "react";
import AnswerPart from "./components/AnswerPart";
import Categories from "./components/Categories";
import Header from "./components/Header";
import Loader from "./components/Loader";

function App() {

  const [categories, setcategories] = useState([])
  const [photo, setPhoto] = useState('')
  const [joke, setJoke] = useState('')
  const [category, setCategory] = useState('random')
  const [loading, setLoading] = useState(true)
  const [firstRender, setFirstRender] = useState(true)

  const fetchCategories = async() => {
    try {
      
      setLoading(true)
      const {data} = await axios.get('https://api.chucknorris.io/jokes/categories')
      setcategories(data);
    } catch (error) {
      window.alert(error)
    } finally {
      setFirstRender(false)
    }
  }

  const fetchData = async() => {
    try {
      setLoading(true)
      const {data} = await axios.get(`${category.includes('random') ? `https://api.chucknorris.io/jokes/random` : `https://api.chucknorris.io/jokes/random?category=${category}`}`)
      setPhoto(data.icon_url);
      setJoke(data.value)
    } catch (error) {
      window.alert(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(()=> {
    const getData = async() => {
      await fetchCategories()
      await fetchData()
    }
    getData()
  },[category])



  return (
    <section className="w-full">
      {
        firstRender ? <Loader /> : 
        <>
        <Header />
        <div className="w-[1240px] mx-auto">
        <Categories categories={categories} setCategory={setCategory}/>
        <AnswerPart joke={joke} loading={loading}/>
        </div>
        </>
      }
    </section>
  );
}

export default App;
