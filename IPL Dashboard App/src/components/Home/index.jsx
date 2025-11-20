import React, { useEffect, useState } from "react";
import axios from "axios";
import { TailSpin } from "react-loader-spinner";
import "./index.css";
import TeamCard from "../TeamCard";
const Home = () => {
  const [teamsData, setIplDashboardData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://apis.ccbp.in/ipl");
        const { teams } = response.data;
        const updatedData = teams.map((eachTeamData) => ({
          id: eachTeamData.id,
          name: eachTeamData.name,
          teamImageUrl: eachTeamData.team_image_url,
        }));

        setIplDashboardData(updatedData);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg">
      {loading ? (
        <div className="loader-container">
          <TailSpin
            height="80"
            width="80"
            color="#ffffff"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <div className="ipl-dashboard-container">
          <div className="ipl-logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="logo"
            />
            <h1 className="ipl-heading">IPL Dashboard</h1>
          </div>
          <div className="ipl-dashboard-card-list">
            <ul>
              {teamsData.map((eachData) => (
                <TeamCard eachData={eachData} key={eachData.id} />
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
export default Home;
