import { useEffect, useState } from "react";
import ShowComapny from "./ShowComapny";
import axios from "axios";
import WelcomeRe from "./WelcomeRe"
import Create from "./create";
import UpdateCompany from "./UpdateCompany"
import { useNavigate } from "react-router-dom";
const MainDashboard = () => {
  // const [status, setStatus] = useState("");
  const [active, setactive] = useState("loading");
  const [compId, setcompId] = useState("loading");

// console.log(compId);
const navigator=useNavigate()


  const handalcompis = (e) => {
    setcompId(e);
  };

  const handalavtive = (e) => {
    setactive(e);
  };

  // console.log(active);

  const fetchCompanies = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/companise/getCompany",
        {},
        {
          withCredentials: true,
        }
      );

      if (response.data.companay.length) {
        setactive("companyHai");
      } else {
        setactive("companyNahiHai")
      }
    } catch (error) {
      console.error("Error fetching companies:", error);
    }
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  return (
    <div>
      {active === "loading" && <div className="flex justify-center py-60"><img src="/images/loading.gif" alt=""/></div>}
      {active === "companyHai" && <ShowComapny clickActive={handalavtive} compId={handalcompis}/>}
      {active === "companyNahiHai" && <WelcomeRe />}
      {active === "createCompani" && <Create clickActive={handalavtive}/>}
      {active === "updateCompany" && <UpdateCompany  clickActive={handalavtive} compId={compId}/>}
    </div>
  );
};

export default MainDashboard;
