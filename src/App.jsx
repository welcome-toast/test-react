import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Intercom from '@intercom/messenger-js-sdk'

function App() {
  const [count, setCount] = useState(0)
  const user = {
    id: "TEST_ID",
    name: "TEST_NAME",
    email: "TEST_EMAIL",
    createdAt: "2024-12-01",
  }
  const i = Intercom({ // 화면에 그리지도 않았는데, Intercome 함수 호출만으로 어떻게 UI에 표시되는지 체크.
    app_id: import.meta.env.VITE_INTERCOM_APP_ID,
    user_id: user.id, // IMPORTANT: Replace "user.id" with the variable you use to capture the user's ID
    name: user.name, // IMPORTANT: Replace "user.name" with the variable you use to capture the user's name
    email: user.email, // IMPORTANT: Replace "user.email" with the variable you use to capture the user's email
    created_at: user.createdAt, // IMPORTANT: Replace "user.createdAt" with the variable you use to capture the user's sign-up date in a Unix timestamp (in seconds) e.g. 1704067200
  });
  console.log("i", i); // undefined

  return (
    <>
      <div id="app">
        <a href="https://vite.dev" target="_blank">
          <img id="vite" src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img id="react" src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div id="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
