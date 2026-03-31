import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { gsap } from "gsap";

gsap.config({ trialWarn: false } as any);

createRoot(document.getElementById("root")!).render(<App />);
