import React, { useState } from 'react';
import styles from './Contador.module.css';

function Contador() {
    const [count, setCount] = useState(0);
  
    return (
      <div className={styles.Contador}>
        <button onClick={() => setCount(count - 1)}>
          - 
        </button>
        <p> {count} </p>
        <button onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>
    );
  }

export default Contador;

