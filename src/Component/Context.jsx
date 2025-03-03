import { createContext, useState, useEffect } from "react";
import ProjectData from "./ProjectData.json";
export const AssetContext = createContext();

export const AssetProvider = ({ children }) => {
  const [assetData, setAssetData] = useState([]);
  const [ProjectTitle, SetProjectTitle] = useState(""); //store the project title

  useEffect(() => {
    // handlegetData();

    setAssetData(ProjectData.tasks[0].assets);
    SetProjectTitle(ProjectData.title);
  }, []);

  // get data from API
  // I am getting a CORS error because the backend is restricting access from another domain.
  const handlegetData = async () => {
    try {
      const response = await fetch(
        "https://dev.deepthought.education/assets/uploads/files/files/others/ddugky_project.json"
      );
      const data = await response.json();
      setAssetData(data.tasks[0].assets);
      console.log(data.tasks[0].assets);
      SetProjectTitle(data.title);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <AssetContext.Provider
      value={{ assetData, ProjectTitle }}
      ProjectTitle={ProjectTitle}
    >
      {children}
    </AssetContext.Provider>
  );
};
