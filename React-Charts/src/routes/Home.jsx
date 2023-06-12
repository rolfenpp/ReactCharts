import '../routes/Home.css'
import { useNavigate } from 'react-router-dom'
import { useState } from "react";
import "./Home.css";
import BarChart from "../components/BarChart";
import LineChart from "../components/LineChart";
import PieChart from "../components/PieChart";
import { UserData } from "../mockdata";

function Home() {
  const [userData, setUserData] = useState({labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: ["rgba(75,192,192,1)","#ecf0f1","#50AF95","#f3ba2f","#2a71d0",],
        borderColor: "black",
        color: 'white',
        borderWidth: 2,
      },
    ],
  });

  // IF YOU SEE THIS COMMENT: I HAVE GOOD EYESIGHT

  return (
    <div className="home">
      <div className='barChart'>
        <BarChart chartData={userData} style={''}/>
      </div>
      <div className='lineChart'>
        <LineChart chartData={userData} />
      </div>
      <div className='pieChart'>
        <PieChart chartData={userData} />
      </div>
    </div>
  );
}



export default Home