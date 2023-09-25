import { onAuthStateChanged } from "firebase/auth";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import { useAppDispatch } from "./redux/hook";
// import { auth } from "./firebase/firebase.config";
import { setLoading, setUser } from "./redux/features/user/userSlice";
import { useEffect } from "react";
import { auth } from "./firebase/firebase.config";

function App() {
  // const [count, setCount] = useState(0);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email));
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    });
  }, [dispatch]);

  return (
    <>
      
      <MainLayout />
    </>
  );
}

export default App;
