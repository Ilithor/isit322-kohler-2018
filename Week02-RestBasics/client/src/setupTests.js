import appInit from './app-init';
import elfDebugEnzyme from './ElfDebugEnzyme';

require('../__mock__/fetch');

it('renders state of File paragraph after button click', () => {
    const wrapper = shallow(<App appInit={appInit}/>);
    const statusParagraph = <p className="App-intro">status: Mock Server Happy</p>;
    wrapper.find('#queryServer').simulate('click');
    setImmediate(() => {
        wrapper.update();
        elfDebugEnzyme.getFirst(wrapper, 'p');
        //expect(true).toBe(true);
        expect(wrapper.contains(statusParagraph)).toBe(true);
    });
});