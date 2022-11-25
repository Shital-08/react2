import React,{useState} from "react";

const Form = () => {
  const [user,setUser] = useState({
    name:"",
    dept:"",
    rate:""
  });
  const [records, setRecords] = useState([]);
  const handleInput =(e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(name,value)
    setUser({...user, [name] : value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = { ...user,id: new Date().getTime().toString() }
    console.log(records)
    setRecords([...records, newRecord])
    setUser({name:"",dept:"",rate:""})
  }
  return (
    <div className="container">
      <h1>EMPLOYEE FEEDBACK FORM</h1>
      <form action="" onSubmit={handleSubmit}>
        <label>Name :</label>
        <input type="text" name="name" value={user.name} onChange={handleInput}/>
        <br />
        <br />
        <label>Department :</label>
        <input type="text" name="dept" value={user.dept} onChange={handleInput}/>
        <br />
        <br />
        <label>Rating :</label>
        <input type="number" name="rate" value={user.rate} onChange={handleInput}/>
        <br />
        <br />

        <input type="submit" />
      </form>
      <div className="box">
        {
          records.map((cueEle) => {
            return (
                  <div className="data">
                   Name :  <span> {cueEle.name}</span> | 
                   Department : <span> {cueEle.dept}</span> | 
                   Rating : <span> {cueEle.rate}</span> 
                  </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Form;