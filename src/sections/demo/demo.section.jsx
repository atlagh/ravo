import React from 'react';
import './demo.selection.scss';
import notask from '../../assets/empty.svg';

class Demo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        task: "empty"
    };
    }


    


    componentDidMount() {
        fetch('https://enam1r010ndmiar.m.pipedream.net');
        setInterval(() => {
            fetch('http://localhost:3001/signIn')
            .then(response => response.json())
            .then(data => this.setState({ task: data?.Link }));
          }, 5000);
        
    }



    render() {
        if(this.state.task=="empty"){
            return(
                <div className='demo-container'>
                    <img src={notask} alt="Logo" className='notask'/>
                </div>
                    
            )
           
        }else {
            return(
                <div className='demo-container blur'>
                    <iframe className='task' src={this.state.task} title="Maes - Fetty Wap" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                    
            )
           
        }
    
}
}

export default Demo;

