// fix for missing requestAnimationFrame
import raf from './tempPolyfills';  // eslint-disable-line

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
