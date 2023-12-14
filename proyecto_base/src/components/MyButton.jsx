import { useContext, useState } from 'react';
import UserContext from './ContextUser';
import {Button} from 'react-bootstrap'



const MyButton = () => {
    
    const {user,setUser}=useContext(UserContext);
    
    const changeTheme=()=>{
        if (user.theme==="light") {
          let auxUser =user;
          auxUser.theme="dark";
          setUser({id: user.id,
          user: user.user,
          password: user.password,
          email:user.email,
          theme:"dark",
          admin:user.admin})
          
          
        }else{
          let auxUser =user;
          auxUser.theme="light";
          setUser({id: user.id,
            user: user.user,
            password: user.password,
            email:user.email,
            theme:"light",
            admin:user.admin})
          console.log(user.theme);
        }
    }
  return (
    <Button className={`text-${user.theme}`} onClick={changeTheme}>Tema</Button>
  )
}

export default MyButton