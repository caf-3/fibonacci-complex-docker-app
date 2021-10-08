import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'
const Fib = () => {
    const [seendIndexes, setSeenIndexes] = useState([]);
    const [values, setValues] = useState({});
    const [index, setIndex] = useState('');

    useEffect(() => {
        fetchValues();
        fetchIndexes();
    }, [])

    async function fetchValues() {
        try {
            //fetch values
            const values = await axios.get('/api/values/current');
            setValues(values.data);
        } catch (error) {
            console.log(error)
        }
    }
    async function fetchIndexes(){
        try{
            const indexes = await axios.get('/api/values/all');
            setSeenIndexes(indexes.data)
        }catch(error){
            console.log(error);
        }
    }

    function renderValues(){
        const entries = [];

        for (let key in values){
            entries.push(
                <div key={key}>
                    For index {key} I calculated {values[key]}
                </div>
            )
        }
        return entries;
    }

    async function handleSubmit(e){
        e.preventDefault();
        await axios.post('/api/values', {
            index: index
        });
        setIndex('');
    }

    return (
        <div className="wrapper">
            <form onSubmit={handleSubmit}>
                <label>Enter your index:</label>
                <input 
                 type="number"
                 onChange={ e => setIndex(e.target.value)}    
                 value={index}
                />
                <button type="submit">Submit</button>
            </form>
            <h3>Indexes I have seen:</h3>
            { seendIndexes.map(({ number }) => number).join(', ') }

            <h3>Calculated values:</h3>
            { renderValues() }
        </div>
    )
}

export default Fib;