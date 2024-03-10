import UserInfoProvider from './context/UserInfo/UserInfoProvider';
import RoutesApp from './routes/RoutesApp';
import Provider from './context/Provider/Provider';


export default function App() {  
  return (
    <UserInfoProvider>
      <Provider>
        <RoutesApp />
      </Provider>
    </UserInfoProvider>
  );
}
