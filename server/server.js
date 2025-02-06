const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const swaggerUi = require("swagger-ui-express");

const swaggerDocument = require("./swagger-output.json");
const connectDB = require("./config/db");
const eventRoutes = require("./routes/eventRoutes");
const registeredEventRoutes = require("./routes/registeredEventRoutes");
const jobRoutes = require("./routes/jobRoutes");
const appliedJobsRoutes = require("./routes/appliedJobsRoutes");

dotenv.config();
connectDB();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(eventRoutes);

app.use(jobRoutes);
app.use(registeredEventRoutes);

app.use(appliedJobsRoutes);

app.listen(PORT, () => {
  console.log(`Server Activated at ${PORT}`);
});
