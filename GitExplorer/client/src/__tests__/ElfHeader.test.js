import React from 'react';
import { configure, shallow } from 'enzyme';
import ElfHeader from '../components/ElfHeader';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles/index';

configure({ adapter: new Adapter() });

describe('ElfHeader tests', function() {

    const themeDark = createMuiTheme({
        palette: {
            type: 'dark'
        }
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <MuiThemeProvider theme={themeDark}>
                <BrowserRouter>
                <ElfHeader />
                </BrowserRouter>
            </MuiThemeProvider>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders title and tests with containsMatchingElement', () => {
        const wrapper = shallow(<ElfHeader />);
        const target = <Typography>GitExplorer</Typography>;
        expect(wrapper.dive().containsMatchingElement(target)).toBe(true);
    });
});
