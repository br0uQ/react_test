import MyButton from "./components/MyButton";

function App() {

    return ( 
        <div>
            <MyButton 
              text="Mein Button"
              color="secondary"
              onButtonPressed={(selected: boolean) => {console.log(selected)}}/>
        </div>
   );

}

export default App;
