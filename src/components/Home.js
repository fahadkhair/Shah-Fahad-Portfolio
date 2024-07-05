import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
  } from "react-router-dom";

function Home() {

return (
<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action mt-5 ta-c" aria-current="true">
    Shah Fahad Done Projects
  </a>
  <Link to="./components/List" class="list-group-item list-group-item-action">List to Do</Link>
  <a href="#" class="list-group-item list-group-item-action">Toggle Button</a>
  {/* <a href="#" class="list-group-item list-group-item-action">A fourth link item</a> */}
  {/* <a class="list-group-item list-group-item-action disabled" aria-disabled="true">A disabled link item</a> */}
</div>
)
}

export default Home;

