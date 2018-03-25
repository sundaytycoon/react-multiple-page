import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

// https://github.com/facebook/create-react-app/issues/3636
// Create-react-app dosen't support jest v22, Now on 2018-03-25