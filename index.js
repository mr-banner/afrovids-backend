import app from "./app.js";

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`✅ Server running locally at http://localhost:${PORT}`);
});
