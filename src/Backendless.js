import Backendless from "backendless";

Backendless.serverURL = "https://worthyshow-us.backendless.app/api";

Backendless.initApp(
  process.env.REACT_APP_BACKENDLESS_APP_ID,   
  process.env.REACT_APP_BACKENDLESS_API_KEY    
  );
  
  

  export default Backendless;