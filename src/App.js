import './App.css';
import Input from "./Input/Input";
import CardList from "./CardList/CardList";
import useCitiesList from "./Hooks/useCitiesList";

function App() {
    const [citiesInputValue, setCitiesInputValue] = useCitiesList()
    return (
        <div className='Main'>
            <Input setCitiesInputValue={setCitiesInputValue}/>
           <CardList citiesInputValue={citiesInputValue} />
        </div>
    );
}

export default App;
