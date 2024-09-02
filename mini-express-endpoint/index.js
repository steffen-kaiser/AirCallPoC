const ex = require('express'),
router = ex()
axios = require('axios');

 const bodyParser = require('body-parser');

 router.use(bodyParser.json());
 
 router.get('/', (req, res) => {
   res.json({'message': 'Server is running'});
 });

 router.post('/aircall/calls', (req, res) => {
    const request_options = {
      url : `https://63c60403trial-dev-aircallpoc-srv.cfapps.us10-001.hana.ondemand.com/Aircallservice/CallEvent`,
      method : 'POST',
      headers : {
          'Content-Type':"application/json"
      },
      data: {
        resource : req.body.resource,
        event: req.body.event,
        timestamp: new Date(req.body.timestamp*1000),
        token: req.body.token,
       callid: req.body.data.id,
       direct_link: req.body.data.direct_link,
       started_at: new Date(req.body.data.started_at*1000),
       answered_at: req.body.data.answered_at ? new Date(req.body.data.answered_at*1000) : null,
       ended_at: req.body.data.ended_at ? new Date(req.body.data.ended_at*1000) : null,
       duration: req.body.data.duration,
       status: req.body.data.status,
       direction: req.body.data.direction,
       number: req.body.data.raw_digits,
       name: req.body.data.user.name
      }
  };
  console.log("REQUEST:",request_options)
  axios(request_options)
  .then(result=> {console.log("SUCCESSFUL")
    res.sendStatus(200);})
  .catch(error=>console.error("BAD_REQUEST:",error))

    
  });

router.listen(8080, function (err) {
    console.log('\nRouter is READY for connection on port 8080');
  });


  