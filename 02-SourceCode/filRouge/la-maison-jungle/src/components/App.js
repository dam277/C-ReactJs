import Banner from './Banner'
import logo from '../assets/logo.png'
// import Cart from './Cart'
import ShoppingList from './ShoppingList'
import QuestionForm from './QuestionForm'

function App() {
	return (
		<div>
			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
			<QuestionForm />
			{/* <Cart /> */}
			<ShoppingList />
		</div>
	)
}

export default App