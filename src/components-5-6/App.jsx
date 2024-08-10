import { useState } from "react";
import {
    Form,
    SearchBar,
    Select,
    Radio,
    CheckBox,
    ControlForm,
    FormikComponent
} from "./components";

const App = () => {
    const [userData, setUserData] = useState({});
    const [selsectValue, setSelectValue] = useState('ua');

    const handleUserData = (data) => {
        setUserData(data);
    }

    const handleSelect = (data) => {
        setSelectValue(data);
    }

    return <div>
        <Form onLogin={handleUserData} />
        <SearchBar />
        <p>Language: {selsectValue}</p>
        <Select value={selsectValue} onSelect={handleSelect} />
        <Radio />
        <hr />
        <CheckBox />
        <hr />
        <ControlForm />
        <br />
        <hr />
        <p>Formik</p>
        <FormikComponent />
    </div>
}

export default App;