import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./features/users/usersSlice";


function App() {

  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());

  }, [dispatch]);


  return (
    <div>
             <h1>Users list</h1>
             {status=== 'loading' && <p>Users information is still loading...</p>}
             {status === 'failed' && <p>Error : {error}</p>}

             {status === 'succeeded' &&
             items.map((user) =>(
              <div key={user.id}>
                <h3>Name - {user.name}</h3>
                <p> E-mail - {user.email}</p>
                <p>City - {user.address.city}</p>
              </div>
             ))}
    </div>
  )
}

export default App;
