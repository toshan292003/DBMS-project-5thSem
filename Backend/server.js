let express = require('express');
let app = express();
let port = 3003;
let connection = require('./database');
let cors = require('cors');
let bodyParser = require('body-parser');



//importing all controllers
const LocController = require('./Controllers/LocController');
const ParamController = require('./Controllers/ParamController');
const MeasureController = require('./Controllers/MeasureController');
const QualityController = require('./Controllers/QualityController');
const SampleController = require('./Controllers/SampleController');
const PurityController = require('./Controllers/PurityController');
const AllLocations = require('./Controllers/AllLocations');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.use(express.json());
app.use(cors());    

app.get('/',(req,res)=>{
    res.send("Hello this is the backend server of DBMS mini poject.");
    console.log(req);
    return res.json("From backend side.");
})

app.get('/tables/location',(req,res)=>{
    const sql = "SELECT * FROM testingdb.location";
    connection.query(sql,(err,data)=>{
        if(err) return res.json(err);
        else return res.json(data);
    });
});

app.get('/tables/measurement',(req,res)=>{
    const sql = "SELECT * FROM testingdb.measurement ORDER BY Sample_id";
    connection.query(sql,(err,data)=>{
        if(err) return res.json(err);
        else return res.json(data);
    });
});
app.get('/tables/parameter',(req,res)=>{
    const sql = "SELECT * FROM testingdb.parameter";
    connection.query(sql,(err,data)=>{
        if(err) return res.json(err);
        else return res.json(data);
    });
});
app.get('/tables/quality',(req,res)=>{
    const sql = "SELECT * FROM testingdb.quality";
    connection.query(sql,(err,data)=>{
        if(err) return res.json(err);
        else return res.json(data);
    });
});
app.get('/tables/sampling_point',(req,res)=>{
    const sql = "SELECT * FROM testingdb.sampling_point";
    connection.query(sql,(err,data)=>{
        if(err) return res.json(err);
        else return res.json(data);
    });
});
app.get('/tables/LocNames',(req,res)=>{
    const sql = "SELECT Loc_name FROM testingdb.location";
    connection.query(sql,(err,data)=>{
        if(err) return res.json(err);
        else return res.json(data);
    });
});






app.use("/app/input",LocController);
app.use("/app/input",ParamController);
app.use("/app/input",MeasureController);
app.use("/app/input",QualityController);
app.use("/app/input",SampleController);
app.use("/app",PurityController);
app.use("/app",AllLocations);



app.listen(port,()=>{
    console.log("Server has started and is running in port number " + port);
})

module.exports = port;