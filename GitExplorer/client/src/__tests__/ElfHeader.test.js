import React from 'react';
import { configure, shallow } from 'enzyme';
import ElfHeader from '../components/ElfHeader';
import Adapter from 'enzyme-adapter-react-16';
import { createMuiTheme } from '@material-ui/core/styles/index';
import Typography from "@material-ui/core/es/Typography/Typography";

configure({ adapter: new Adapter() });

describe('ElfHeader tests', function() {

    const themeDark = createMuiTheme({
        palette: {
            type: 'dark'
        }
    });

    it('renders without crashing', () => {
        const wrapper = shallow(<ElfHeader/>);
        expect(wrapper).to.have.length(1);
    });

    it('renders title and tests with containsMatchingElement', () => {
        const wrapper = shallow(<ElfHeader />);
        const target = <Typography>GitExplorer</Typography>;
        expect(wrapper.dive().containsMatchingElement(target)).toBe(true);
    });
});
