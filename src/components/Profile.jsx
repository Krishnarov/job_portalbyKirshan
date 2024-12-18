import React, { useEffect, useState } from "react";

function Profile() {
  const [user, setuser] = useState([]);
  const getuser = async () => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    setuser(user);
  };

  useEffect(() => {
    getuser();
  }, []);
  console.log(user);

  return (
    <div className="flex mt-4 justify-center">
      <div className="p-10 border relative">
        <div className="flex gap-10">
          <div className="w-40 h-40 shadow">
            <img src="" alt="profileimage" />
          </div>
          <div className="w-96">
            <div className="font-bold text-2xl">{user?.name}</div>
            <p>
              {user.profile?.bio}
              asdfasdfasdfasdfasdfasasdfasdclassName='mt-4'className='mt-4'className='mt-4'className='mt-4'className='mt-4'fasdfasdfasdfasasdfasdfasdfasdfasdfas
            </p>
          </div>
        </div>
        <div className="mt-4"><i className="ri-mail-line mr-2 text-xl font-bold"></i>{user?.email}</div>
        <div className="mt-4"><i className="ri-phone-fill mr-2 text-xl font-bold"></i>{user?.mobile}</div>
        <div className="mt-4">
          <p>Skills</p>
          <div>
            {user?.profile?.skills?.map((e, index) => (
              <div key={index}>{e}</div>
            ))}{" "}
            faasadfsadfaddf
          </div>
        </div>
        <div className="mt-4">
          <p>Resuma</p>
          <div>{user?.resume}adfadfssdf</div>
        </div>
        <div className="absolute top-5 right-5 hover:bg-slate-100 border px-2 py-1"><i className="ri-edit-2-fill mr-1"></i>edit</div>
      </div>
    </div>
  );
}

export default Profile;
