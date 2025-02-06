const swaggerAutogen = require("swagger-autogen")();
const doc = {
  info: {
    title: "WomenRise",
    description:
      "A web-based system designed to connect women with job opportunities and professional events",
  },
  host: "localhost:8000",
};

const outputFile = "./swagger-output.json";
const routes = [
  "./routes/eventRoutes.js",
  "./routes/jobRoutes.js",
  "./routes/appliedJobsRoutes.js",
  "./routes/registeredEventRoutes.js",
];

swaggerAutogen(outputFile, routes, doc);
