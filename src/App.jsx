import { useState } from 'react'


function App() {
  const [visible, setVisible] = useState(false);
  const toggleName =  () => {
    setVisible(!visible);
  }
  return (
    <>
    
      <div className="card">
        <button onClick={toggleName}>
          {visible ? 'Sembunyikan' : 'Tampilkan'} 
        </button>
        {visible && <p>Nama : Slyvia</p>}
      </div>
    </>
  )
}

export default App
