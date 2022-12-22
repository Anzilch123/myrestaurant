import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Spinner from 'react-bootstrap/Spinner';

function Restreview({reviews}) {
    const [open, setOpen] = useState(false);
    console.log(reviews);
  return (
    
        <><br></br>
        <Button variant='dark'
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          click To see reviews
        </Button><Collapse in={open}>
          <div id="example-collapse-text">
           {
            reviews.map(item=>(
              <>
                <p>{item.name} <span>{item.date}</span></p>
                <h3>Rating:{item.rating}</h3>
                <h5>Comments:{item.comments}</h5>
                <Spinner animation="grow" variant="warning" />
                <Spinner animation="grow" variant="success" />
               <Spinner animation="grow" variant="info" />
                </>
            ))
}
          </div>
        </Collapse>
      

    </>
  );
}

export default Restreview