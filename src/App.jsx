import { Provider } from 'react-redux';
import store from "./redux/store/store";
import AppRouter from "./router/AppRouter";

function App() {
	return (
		<Provider store={ store }>
			<AppRouter />
		</Provider>
	);
}

export default App;
