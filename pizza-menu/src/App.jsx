import Menu from "./components/Menu";
import Header from "./components/Header";
import Form from "./components/Form";

function App() {
    return (
        <div>
            <Header username="ALEX"/>
            <Menu />
            <Form titleText="The best pizza." subtitleText="Straight out of the oven, straight to you." welcomeText="Welcome! Please start by telling us your name:"/>
        </div>
    );
}

export default App;