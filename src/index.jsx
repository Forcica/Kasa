import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import "./scss/main.scss" // Importe le fichier SCSS principal pour les styles globaux

// Crée la racine de l'application React et la rend dans l'élément DOM avec l'ID 'root'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* React.StrictMode active des avertissements et des vérifications supplémentaires en mode développement */}
    <RouterProvider router={router} /> {/* Fournit le routeur à l'application */}
  </React.StrictMode>
);
