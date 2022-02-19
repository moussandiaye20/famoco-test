
import React, { useState} from 'react';

const Register = () => {
     
    const [username, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [first_name, setFirstname] = useState('');
    const [last_name, setLastname] = useState('');
    const [feedback, setFeedBack] = useState('');
    const [message, setMessage] = useState('');
   
    
    const cancel = ()=>{
                setLogin('');
                setEmail('');
            setPassword('');
            setFirstname('');
            setLastname('');
    }
   
    const submit = async (e) => {
        e.preventDefault();

       const response= await fetch("http://127.0.0.1:8000/users-management/create", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username,
                email,
                first_name,
                last_name,
                password
            })
        });
       const content = await response.json()
       
        if(response.status===200){
             
         setFeedBack(`success`);
         setMessage(`  ${content.username} has been added successfully`);
          cancel(); 
         setTimeout(() => {setMessage('');setFeedBack('')}, 5000);
        }else{
            
             setFeedBack(`danger`);
            
               
                for (const [key, value] of Object.entries(content)) {
                       setMessage(`  ${value}`);
                       console.log(key);
                    }

             Object.values(content).forEach(val =>{ 
                    //    console.log(val);
                     //   setMessage(`  ${val}`);
                });
         

        // setMessage(`  ${content}`);
         setTimeout(() => {setMessage('');setFeedBack('')}, 5000);
             


        }


            
    }
    return (
                     <div className="container">

    <div className="row">
        <div className="col-md-6 offset-md-3">

            <div className="signup-form">
            <h3 className="mb-5 text-secondary">Users management {'>'} create new user</h3>
            <div className={`alert alert-${feedback}` }role="alert">{message}</div>
                <form   className="mt-5 border p-4 bg-light shadow" onSubmit={submit} >
                    <h4 className="mb-5 text-secondary">Create new user</h4>
                    <div className="row">
                        <div className="mb-3 col-md-12">
                            <label>Login<span className="text-danger">*</span></label>
                            <input  type="text" name="fname" className="form-control" placeholder="Login"
                            required
                 onChange={e => setLogin(e.target.value)   }  value = {username} />
                        </div>
                        <div className="mb-3 col-md-12">
                            <label>Firstname<span className="text-danger">*</span></label>
                            <input type="text" name="fname" className="form-control" placeholder="Firstname"required
                 onChange={e => setFirstname(e.target.value)   }  value = {first_name}/> 
                        </div>

                        <div className="mb-3 col-md-12">
                            <label>LastName<span className="text-danger">*</span></label>
                            <input type="text" name="Lname" className="form-control" placeholder="LastName"required
                 onChange={e => setLastname(e.target.value)  }  value = {last_name}/>
                        </div>
                        <div className="mb-3 col-md-12">
                            <label>Email<span className="text-danger">*</span></label>
                            <input type="email" name="email" className="form-control" placeholder="Email" required
                 onChange={e => setEmail(e.target.value)  }  value = {email}/>
                        </div>
                        <div className="mb-3 col-md-12">
                            <label>Password<span className="text-danger">*</span></label>
                            <input type="password" name="password" className="form-control" placeholder="  Password" required
                    onChange={e => setPassword(e.target.value)}   value = {password}/>
                        </div>
                        
                        <div className="col-md-12">
                           
                             <button type="submit" className="btn btn-success  float-right"> Save</button>
                                <button type="button" className="btn btn-danger  float-right" onClick={cancel}>{'<'} Cancel</button>    
                                             
                        </div>
                    </div>
                </form>
               
            </div>
        </div>
    </div>
</div>
         
    );
};

export default Register;