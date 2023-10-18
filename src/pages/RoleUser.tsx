import { useEffect, useState } from "react";
export function RoleUser() {
  const [user, setUser] = useState<userRole>({
    map: () => null,
    rcc: "",
    level: "",
    userid: "",
  });

  const getAllUser = async () => {
    //3.133.137.68 RemomaxBE
    const response = await fetch(`http://3.133.137.68:8080/RemomaxBE/level`);
    if (response.ok) {
      const data = await response.json();
      setUser(data);
    }
  };

  function createSpaces(level: string | any[]) {
    let spaces = "";
    for (let i = 0; i < level.length; i++) {
      spaces += "\xa0\xa0\xa0\xa0";
    }
    return spaces;
  }

  useEffect(() => {
    getAllUser();
  }, []);

  return (
    <div className="grid grid-cols-12">
      <div className=" col-span-1"></div>

      <form className="grid col-span-10 bg-slate-200 mt-2 mb-2">
        {user.map((user) => (
          <div key={user.rcc}>
            {createSpaces(user.level)}
            {user.userid}
          </div>
        ))}
      </form>

      <div className=" col-span-1"></div>
    </div>
  );
}
