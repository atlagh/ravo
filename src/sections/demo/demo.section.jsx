import React from 'react';
import './demo.selection.scss';
import notask from '../../assets/empty.svg';

class Demo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        brand: "Ford"
    };
    }


    


    componentDidMount() {
        setInterval(() => {
            fetch('http://localhost:3001/signIn')
            .then(response => response.json())
            .then(data => console.log(data.success))
            .then(data => this.setState({ brand: data?.success }));
          }, 10000);
        
    }



    render() {
        if(this.state.brand==="Ford"){

            return(
                <div className='demo-container blur'>
                    <iframe className='task' src="https://tripetto.app/run/HIJBX7QVXH" title="Maes - Fetty Wap" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                    
            )
        }else {
            return(
                <div className='demo-container'>
                    <img src={notask} alt="Logo" className='notask'/>
                </div>
                    
            )
        }
    
}
}

export default Demo;

