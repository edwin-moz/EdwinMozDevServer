import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import AuthContextProvider from './contexts/auth-context-provider.tsx'
import ServerContextProvider from './contexts/server-context-provider.tsx'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <AuthContextProvider>
            <ServerContextProvider>
                <App />
            </ServerContextProvider>
        </AuthContextProvider>
    </BrowserRouter>,
)
