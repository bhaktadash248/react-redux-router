import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetDataAction } from './redux/actions/fetchActions'

const App = () => {

  const dispatch = useDispatch()
  const state = useSelector((state) => state.fetchDataReducer.data)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => dispatch(fetDataAction(data)))
  }, [])

  return (
    <div className="App">
      {
        state && state.map((res) => (
          <div key={res.id}>
            <h4>
              <Link to={`/${res.id}`}>{res.title}</Link>
            </h4>
            <hr />
          </div>
        ))
      }
    </div >
  );
}

export default App;
