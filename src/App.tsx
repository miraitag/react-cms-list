import { Provider } from "react-redux";
import { Spinner } from "./components/Spinner";
import { setupStore } from "./redux/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { OverViewPage } from "./pages/OverViewPage";
import { TaskPage } from "./pages/TasksPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { PaymentsPage } from "./pages/PaymentsPage";
import { UsersPage } from "./pages/UsersPage";

export const App = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <OverViewPage />
		},
		{
			path: "/tasks",
			element: <TaskPage />
		},
		{
			path: "/projects",
			element: <ProjectsPage />
		},
		{
			path: "/payments",
			element: <PaymentsPage />
		},
		{
			path: "/users",
			element: <UsersPage />
		},
	])

	return (
		<Provider store={setupStore()}>
			<RouterProvider router={router} />
			<Spinner />
		</Provider>
	);
};
