import Searchtrainform from "./searchtrain.form";
import Header from "./Header";
import Navbar from "./Navbar";
import classes from './/style.module.css'
import { useEffect, useState } from "react"


function Home(){
    const [logininfo, setlogininfo] = useState(null)
   
    useEffect(()=>{
    const fetchlogininfo = async()=>{
        const response = await fetch("/trains/searchTrains")
        const json = await response.json()
    
        if (response.ok){
            setlogininfo(json)
        }
    
    }
    fetchlogininfo()
    }, [])

    
    return(

    <div>
        <Header></Header>
       <Navbar/>
        <Searchtrainform></Searchtrainform>
    </div>
    )
}

export default Home;