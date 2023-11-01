
import {useNavigate} from "react-router-dom"
import classes from './Searchtrain.form.module.css';
const Searchtrainform = () =>{
    
    const navigate = useNavigate();
    function handleSubmit(event){
        navigate("Login")
    }
    return <div>
    <form className={classes.form}>
                <div className={classes['input-group']}>

                    <label>TO</label>
                    <select className={classes['input-group']}>
                    <option value="Thane">Thane</option>
                    <option value="Pune">Pune</option>
                    <option value="Nagpur">Nagpur</option>
                    </select>

                    <label>FROM</label>
                    <select>
                    <option value="Thane">Thane</option>
                    <option value="Pune">Pune</option>
                    <option value="Nagpur">Nagpur</option>
                    </select>

                </div>
                <div className={classes['input-group']}>
                    <label>Date</label><input type='date'/>
                    <label>Classes</label><input/>
                </div>
                <div className={classes['input-group']}>
                    <label>Category</label><input/>
                </div>
       
                <button onClick={handleSubmit}>Search</button>
            </form>
            <h1>Safety | Security | Punctuality</h1>
        </div>
};

export default Searchtrainform
