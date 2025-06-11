import logo from './logo.svg';
import './App.css';
import { ClubInfo } from './components/ClubInfo';
import { Achievements } from './components/Achievements';
import { Squad } from './components/Squad';

function App() {
  const clubData = {
    name: 'ФК "Динамо"',
    city: 'Киев',
    founded: 1927,
    logo: '/images/logo.png',
  };

  const achievements = [
    '14-кратный чемпион Украины',
    '11-кратный обладатель Кубка Украины',
    '2 полуфинала Лиги чемпионов',
  ];

  const players = ['Андрей Ярмоленко', 'Виталий Буяльский', 'Георгий Бущан'];

  const styles = ['style1.css', 'style2.css', 'style3.css'];
  const randomStyle = styles[Math.floor(Math.random() * styles.length)];
  require(`./randomStyles/${randomStyle}`);

  return (
    <div className="app">
      <h1>Футбольный клуб</h1>
      <ClubInfo name={clubData.name}
        city={clubData.city}
        founded={clubData.founded}
        logo={clubData.logo}></ClubInfo>
      <Achievements list={achievements}></Achievements>
      <Squad players={players}></Squad>
    </div>
  );
}

export default App;
