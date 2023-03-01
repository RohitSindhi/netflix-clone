import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Iframe from 'react-iframe'
import { AiOutlineSearch, AiOutlineInfoCircle } from 'react-icons/ai'
// import { GrCheckbox } from 'react-icons/gr'
import { FaBell } from 'react-icons/fa'
import { GrPlayFill } from 'react-icons/gr'
import { HiSpeakerWave } from 'react-icons/hi2'
import axios from 'axios'
import { useDispatch,  useSelector, } from 'react-redux'
import { netflixdata, toprated, trending, actionmovie, comedy, horror, romance, documentaries, search } from './action/Action'
import backvideo from './assets/Narcos - Netflix.mp4'
import Movies from './action/Movies'
import Modales from './modal/Modales'

function App() {

  const searchmoviename = useSelector((state: any) => state?.netflixval?.search)
console.log("searchmoviename",searchmoviename);


  const [isModalOpen, setIsModalOpen] = useState(false);


  const showModal = () => {
      setIsModalOpen(true);
    };
  
    const handleOk = () => {
      setIsModalOpen(false);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };

  const dispatch = useDispatch();

  const [showhead , setShowhead] = useState(false)
  const [inp1 , setinp] = useState('')



  const handelhaeder = () => {

    const scrollValue = document.documentElement.scrollTop;
    if(scrollValue > 90){
      setShowhead(true)
    }else{
      setShowhead(false)
    }
  }
  // const location = useLocation();
  
  

  
  window.addEventListener("scroll",handelhaeder)


  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0&with_networks=213

    `).then((rohit) => {
      console.log("rohit", rohit);
      dispatch(netflixdata(rohit))
    })
  }, [])
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0&language=en-US`).then((kajal) => {
      console.log("kajal", kajal);
      dispatch(trending(kajal))
    })
  }, [])
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0&language=en-US`).then((topret) => {
      console.log("topret", topret);
      dispatch(toprated(topret))
    })
  }, [])
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0&with_genres=28`).then((action) => {
      console.log("actionmovie", action);
      dispatch(actionmovie(action))
    })
  }, [])
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0&with_genres=28
    `).then((comedye) => {
      console.log("comedye", comedye);
      dispatch(comedy(comedye))
    })
  }, [])
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0&with_genres=27
    `).then((honted) => {
      console.log("honted", honted);
      dispatch(horror(honted))
    })
  }, [])
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0&with_genres=99

    `).then((romantic) => {
      console.log("romantic", romantic);
      dispatch(romance(romantic))
    })
  }, [])
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0&with_genres=27

    `).then((document) => {
      console.log("document", document);
      dispatch(documentaries(document))
    })
  }, [])


useEffect(()=>{
  axios.get(`https://api.themoviedb.org/3/search/multi?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0&language=en-US&include_adult=false&query=${inp1}
  `).then((serch)=>{
    console.log("ds,...<><><><><>",serch);
    dispatch(search(serch))
    
  })
},[])




  return (
    <div className=''>
      <div >
        <div className={showhead ? 'header-main-list1':'header-main-list'}>
          <div className='header-logo-img-div'>
            <div>

              <img src="https://netflix-clone-ebon-nu.vercel.app/f4070143e1f521da82a119eb78b434d0.png" alt="" width={140} />
            </div>
            <div className='menu-list-div-header'>

              <li id='lists-in-header-for-chennel'>Home</li>
              <li id='lists-in-header-for-chennel'>TV Shows</li>
              <li id='lists-in-header-for-chennel'>Movies</li>
              <li id='lists-in-header-for-chennel'>Recently Added</li>
              <li id='lists-in-header-for-chennel'>My List</li>
            </div>

          </div>
          <div className='serch-select-menu-header'>
            <input type="text" value={inp1}   onChange={(e:any)=>(setinp(e.target.value))}/>
            {/* <li><AiOutlineSearch className='serch-bar-icon' /></li> */}
            <li>KIDS</li>
            <li>DVD</li>
            <li><FaBell className='jingle-bell-header' /></li>
            <li className='box-in-second-header-div'></li>

          </div>
        </div>
        <div className='content-text-narcos-div'>
          <h1>Narcos</h1>
          <p>A gritty chronicle of the war against Colombia's infamously violent <br /> and powerful drug cartels.</p>
          <div className='but-sound-div'>
            <div className='two-but-play-n-info'>

              <button className='play'><GrPlayFill id='play-icon' />Play</button>
              <button className='info'><AiOutlineInfoCircle id='info-icon' />More Info</button>
            </div>
            
            <div className='sound-div'>
              <HiSpeakerWave className='sound-on-icon' />
            </div>
          </div>

        </div>
      </div>
      <div>
        <video autoPlay loop muted id="myVideo" width={"100%"}>
          <source src={backvideo} type="video/mp4" />
        </video>
      </div><br /><br />
      <div className='video-down'>

      </div>
      <div>

        <Movies showModal={showModal}/>
        <Modales isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel}/>
      </div>

    </div>
  )
}

export default App
