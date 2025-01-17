import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App";
import HomePage from "./components/HomePage/HomePage";
import BordeauxQuizz from "./components/Projets/Bordeaux-Quizz/BordeauxQuizz";
import Netflux from "./components/Projets/Netflux/Netflux";
import ToDoList from "./components/Projets/ToDoList/ToDoList";
import "./index.css";
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: "/bordeauxquizz",
				element: <BordeauxQuizz />,
			},
			{
				path: "/popcornbox",
				element: <Netflux />,
			},
			{
				path: "/todolist",
				element: <ToDoList />,
			},
			{
				path: "/projet3",
			},
		],
	},
]);
const rootElement = document.getElementById("root");
if (rootElement) {
	createRoot(rootElement).render(
		<StrictMode>
			<RouterProvider router={router} />
		</StrictMode>,
	);
} else {
	console.error("No root element found.");
}
