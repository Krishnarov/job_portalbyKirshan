import axios from "axios";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import PropTypes from "prop-types";

function UpdateCompany(props) {
  const [name, setname] = useState("");
  const [website, setwebsite] = useState("");
  const [description, setdescription] = useState("");
  const [location, setlocation] = useState("");
  const [logo, setlogo] = useState("");
  const [compId, setcompId] = useState(props.compId);
  // console.log(props);

  useEffect(() => {
    const getcurentcompany = async () => {
      try {
        const res = await axios.post(
          `http://localhost:4000/companise/getonecompanise/${compId}`,
          {},
          { withCredentials: true }
        );
        if (res.status === 200) {
          console.log(res.data);
          setname(res.data.compain.name);
          setdescription(res.data.compain.description);
          setlocation(res.data.compain.location);
          setwebsite(res.data.compain.website);
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (compId) {
      getcurentcompany();
    }
  }, []);
  // const updatedata={name,website,description,location,logo}

  const handelupdate = async () => {
    const updatedata = new FormData();
    updatedata.append("name", name);
    updatedata.append("website", website);
    updatedata.append("description", description);
    updatedata.append("location", location);
    updatedata.append("logo", logo);
    try {
   

      const res = await axios.put(
        `http://localhost:4000/companise/updatecompani/${compId}`,
        updatedata,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }
      );

      if (res.status === 200) {
        toast.success("Success Notification!", {
          position: "bottom-right",
        });
        props.clickActive("companyHai");
      } else {
        console.error("Error : - ", res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" mt-10 flex items-center justify-center">
      {/* <ToastContainer /> */}
      <div className="border shadow-lg m-20 p-5">
        <div className="flex items-center">
          <div
            className="text-sm px-3 py-2"
            onClick={() => props.clickActive("companyHai")}
          >
            ← Back
          </div>
          <div className="flex items-center justify-center w-5/6">
            <div className="font-black text-xl">Company Setup</div>
          </div>
        </div>
        <div className="flex gap-4 mt-12">
          <div className="">
            <div>
              <p className="font-bold">Company Name</p>
              <input
                type="text"
                className="outline-0 px-3 py-2 border mt-2 w-80"
                placeholder=""
                value={name}
                onChange={(n) => setname(n.target.value)}
                name="name"
              />
            </div>
            <div className="mt-4">
              <p className="font-bold">Website</p>
              <input
                type="text"
                className="outline-0 px-3 py-2 border mt-2 w-80 "
                placeholder=""
                value={website}
                onChange={(n) => setwebsite(n.target.value)}
                name="website"
              />
            </div>
            <div className="mt-4">
              <p className="font-bold">logo</p>
              <input
                type="file"
                className="outline-0 px-3 py-2 border mt-2 w-80 "
                placeholder=""
                onChange={(n) => setlogo(n.target.files[0])}
                name="logo"
              />
            </div>
          </div>
          <div className="">
            <div>
              <p className="font-bold">Description</p>
              <input
                type="text"
                className="outline-0 px-3 py-2 border mt-2 w-80"
                placeholder=""
                value={description}
                onChange={(n) => setdescription(n.target.value)}
                name="description"
              />
            </div>
            <div className="mt-4">
              <p className="font-bold">Location</p>
              <input
                type="text"
                className="outline-0 px-3 py-2 border mt-2 w-80"
                placeholder=""
                value={location}
                onChange={(n) => setlocation(n.target.value)}
                name="location"
              />
            </div>
          </div>
        </div>
        <div className="w-full flex  justify-center mt-6">
          {" "}
          <div
            className="py-2 w-4/5 text-center  bg-indigo-800 text-white font-bold"
            onClick={() => handelupdate()}
          >
            Update
          </div>
        </div>
      </div>
    </div>
  );
}
UpdateCompany.propTypes = {
  clickActive: PropTypes.func.isRequired,
  compId: PropTypes.string.isRequired,
};

export default UpdateCompany;
