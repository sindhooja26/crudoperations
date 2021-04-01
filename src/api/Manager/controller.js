import flight from '../Comman/flightModel';

export const Addflights = (req, res) => {
  flight.create(req.body, (err, result) => {
   
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
}






