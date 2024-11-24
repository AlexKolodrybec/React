import Menu from "./components/Menu";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";

function App() {
    return (
        <div>
            <Header username="ALEX"/>
            <Menu />
            <LoginForm/>
        </div>
    );
}

export default App;