// import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import "./index.css";
import LatestMatch from "../LatestMatch";
import MatchCard from "../MatchCard";
const TeamMatches = () => {
  const [data, setData] = useState({});

  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://apis.ccbp.in/ipl/${id}`);
        const responseData = await response.json();
        const formattedData = {
          teamBannerUrl: responseData.team_banner_url,
          latestMatchDetails: {
            id: responseData.latest_match_details.id,
            competingTeam: responseData.latest_match_details.competing_team,
            competingTeamLogo:
              responseData.latest_match_details.competing_team_logo,
            date: responseData.latest_match_details.date,
            firstInnings: responseData.latest_match_details.first_innings,
            manOfTheMatch: responseData.latest_match_details.man_of_the_match,
            matchStatus: responseData.latest_match_details.match_status,
            result: responseData.latest_match_details.result,
            secondInnings: responseData.latest_match_details.second_innings,
            umpires: responseData.latest_match_details.umpires,
            venue: responseData.latest_match_details.venue,
          },
          recentMatches: responseData.recent_matches.map((eachMatch) => ({
            id: eachMatch.id,
            competingTeam: eachMatch.competing_team,
            competingTeamLogo: eachMatch.competing_team_logo,
            date: eachMatch.date,
            firstInnings: eachMatch.first_innings,
            manOfTheMatch: eachMatch.man_of_the_match,
            matchStatus: eachMatch.match_status,
            result: eachMatch.result,
            secondInnings: eachMatch.second_innings,
            umpires: eachMatch.umpires,
            venue: eachMatch.venue,
          })),
        };

        setData(formattedData);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id]);

  const { teamBannerUrl, recentMatches, latestMatchDetails } = data;

  return (
    <div className="background">
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
            visible={loading}
          />
        </div>
      ) : (
        <>
          <div className="container">
            <div className="ipl-team-poster">
              <img src={teamBannerUrl} className="team-banner" alt="" />
            </div>
            <div>
              <p className="latest-match">Latest Matches</p>
              <LatestMatch latestMatchDetails={latestMatchDetails} />
            </div>
          </div>
          <div className="recent-match-card-container">
            <ul>
              {recentMatches.map((eachData) => (
                <MatchCard matchCardDetails={eachData} key={eachData.id} />
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default TeamMatches;
