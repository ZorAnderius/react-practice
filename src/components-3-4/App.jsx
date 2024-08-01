import CustomerButton from "./CustomerButton/CustomerButton"
import CountButton from "./CountButton/CountButton";

import styles from './App.module.css'
import HideButton from "./HideButton/HideButton";
import EffectButton from "./EffectButton/EffectButton";
import Modal from "./Modal/Modal";
import { useState } from "react";
import Button from "./Button/Button";
import AddButton from "./AddButton/AddButton";

const App = () => {
    const [showModal, setShowModal] = useState(false);

    const handleToggleModal = () => {
        setShowModal(!showModal);
    }
    return <div className={styles.container}>
        <CustomerButton message="Music is playing">
            Play music
        </CustomerButton>   
        <CustomerButton message="Video is playing">
            Play video
        </CustomerButton>
        <CountButton />
        <HideButton />

        <EffectButton />

        <Button handle={handleToggleModal}>{showModal ? 'Hide Modal' : 'Show Modal' }</Button>
        {showModal && <Modal />}

        <AddButton />
       </div>
}

export default App