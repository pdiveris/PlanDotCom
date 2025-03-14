import './bootstrap';
import { createRoot } from 'react-dom/client';
import WelcomeGrid from "./components/WelcomeGrid.jsx";

const props = {};

const el = document.getElementById('app');
const root = createRoot(el);
root.render(<WelcomeGrid {...props} />);

