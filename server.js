const app = require("./app");
const connectDatabase = require("./config/database");
const dotenv = require("dotenv");
const { ImportShowDays } = require("./controllers/ShowDaysController");
const { ImportShowFull } = require("./controllers/ShowFullController");
const { ImportAvatar } = require("./controllers/AvatarController");
const PORT = process.env.PORT || 8000;
const routes = require("./routes");

//Setting up config file
dotenv.config({ path: "config/config.env" });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Connecting to database
connectDatabase();

// ADD THIS LINE
app.use(express.static("client/build"));

app.use(routes);

ImportShowDays();
ImportShowFull();
ImportAvatar();

app.listen(PORT, () => {
  console.log(
    `Server st arted on PORT: ${PORT} in ${process.env.NODE_ENV} mode.`
  );
});
