import { MAIN_API_KEY } from "./config.js";
import { CONTENT_API_KEY } from "./config.js"; // Both are valid
const workerUrl = "https://<worker-host>";
const response_indexing = await fetch(`${workerUrl}/daily-index.xml.gz`);