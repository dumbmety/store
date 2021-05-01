import Actions from "./Actions";
import Searchbar from "./Searchbar";
import './style.css'
const header = () => {
  return (
    <header className='products-header'>
      <Searchbar />
      <Actions />
    </header>
  );
};

export default header