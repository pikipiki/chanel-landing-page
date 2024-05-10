import SliderSection from '@Components/container/SliderSection/SliderSection';
import HeroSection from '@Components/presentational/HeroSection/HeroSection';
import LastSection from '@Components/presentational/LastSection/LastSection';
import MoonSection from '@Components/presentational/MoonSection/MoonSection';
import { IntlProvider } from 'react-intl';
import './App.scss';
import { languages, messages } from './constants/constants';
import flattenMessages from './utils/flatten';

function App(): JSX.Element {
  return (
    <IntlProvider locale={languages.fr} messages={flattenMessages(messages.fr)}>
      <main className="app">
        <HeroSection />
        <div className="app__wrapper--sm">
          <MoonSection />
          <SliderSection />
          <LastSection />
        </div>
      </main>
    </IntlProvider>
  );
}

export default App;
