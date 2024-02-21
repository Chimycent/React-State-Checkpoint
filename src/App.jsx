import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Mikhail Varshavski',
        bio: 'Dr. Mike is a compassionate medical doctor dedicated to providing exceptional care to her patients. With years of rigorous training and a deep commitment to health and wellness, she specializes in diagnosing and treating a wide range of medical conditions. Dr. Johnson is known for her empathetic approach and strives to build trusting relationships with her patients, offering personalized guidance and support throughout their healthcare journey. She is passionate about making a positive impact on the lives of others and is committed to staying at the forefront of medical advancements to deliver the highest standard of care.',
        imgSrc: 'https://res.cloudinary.com/dhwqlht1d/image/upload/v1708515464/download_13_z9prwn.jpg',
        profession: 'Medical Doctor'
      },
      show: false,
      mountedTime: 0
    };
  }

  toggleShow = () => {
    this.setState({ show: !this.state.show });
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ mountedTime: this.state.mountedTime + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className='flex items-center justify-center flex-col border bg-slate-400 rounded-md w-[50%] ml-[25%] mt-5 pl-5 pt-5 pb-3'>
        <button className='border rounded-full py-4 px-3 bg-blue-500 hover:bg-blue-900' onClick={this.toggleShow}>
          {this.state.show ? 'Hide Profile' : 'Show Profile'}
        </button>
        {this.state.show && (
          <div className='flex flex-col justify-center items-center'>
            <h2>{this.state.person.fullName}</h2>
            <p>Profession: {this.state.person.profession}</p>
            <p>{this.state.person.bio}</p>
            <img src={this.state.person.imgSrc} alt={this.state.person.fullName} className='border rounded-md'/>
          </div>
        )}
        <button>Time since mount: {this.state.mountedTime} seconds</button>
      </div>
    );
  }
}

export default App;
