import Navbar from '../../component/navbar/Navbar';
import Intro from '../../component/home/Intro'
const Home = () => {
    return (
      <>
        <Navbar/>
        <div className='container-fluid'>
          <div className="row justify-content-center">
            <h4>Home Page</h4>  
          </div>
          <div className='row justify-content-center mt-4 banner'>
            <Intro />
          </div>
        </div>
        
      </>
    );
};
  
export default Home;