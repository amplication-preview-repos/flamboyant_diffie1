import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ClubList } from "./club/ClubList";
import { ClubCreate } from "./club/ClubCreate";
import { ClubEdit } from "./club/ClubEdit";
import { ClubShow } from "./club/ClubShow";
import { FriendList } from "./friend/FriendList";
import { FriendCreate } from "./friend/FriendCreate";
import { FriendEdit } from "./friend/FriendEdit";
import { FriendShow } from "./friend/FriendShow";
import { PlayerList } from "./player/PlayerList";
import { PlayerCreate } from "./player/PlayerCreate";
import { PlayerEdit } from "./player/PlayerEdit";
import { PlayerShow } from "./player/PlayerShow";
import { TaskList } from "./task/TaskList";
import { TaskCreate } from "./task/TaskCreate";
import { TaskEdit } from "./task/TaskEdit";
import { TaskShow } from "./task/TaskShow";
import { TapList } from "./tap/TapList";
import { TapCreate } from "./tap/TapCreate";
import { TapEdit } from "./tap/TapEdit";
import { TapShow } from "./tap/TapShow";
import { BoostList } from "./boost/BoostList";
import { BoostCreate } from "./boost/BoostCreate";
import { BoostEdit } from "./boost/BoostEdit";
import { BoostShow } from "./boost/BoostShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"ClickerGame"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Club"
          list={ClubList}
          edit={ClubEdit}
          create={ClubCreate}
          show={ClubShow}
        />
        <Resource
          name="Friend"
          list={FriendList}
          edit={FriendEdit}
          create={FriendCreate}
          show={FriendShow}
        />
        <Resource
          name="Player"
          list={PlayerList}
          edit={PlayerEdit}
          create={PlayerCreate}
          show={PlayerShow}
        />
        <Resource
          name="Task"
          list={TaskList}
          edit={TaskEdit}
          create={TaskCreate}
          show={TaskShow}
        />
        <Resource
          name="Tap"
          list={TapList}
          edit={TapEdit}
          create={TapCreate}
          show={TapShow}
        />
        <Resource
          name="Boost"
          list={BoostList}
          edit={BoostEdit}
          create={BoostCreate}
          show={BoostShow}
        />
      </Admin>
    </div>
  );
};

export default App;
