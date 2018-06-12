class Address extends Component {
    constructor(props) {
        super(props);
        this.debug = false;
        this.canceled = false;
        this.state = {
            addressIndex: 0,
            addressList: [{}],
            address: tempAddressList[0]
        };
        this.log('Address List: addressList', tempAddressList);
    }

    componentDidMount() {
        this.getAddressList();
    }

    componentWillUnmount() {
        this.canceled = true;
    }

    getAddressList = () => {
        if (this.debug) {
            console.log('getAddressList called.');
        }
        fetch('/address-list')
            .then(response => response.json())
            .then(addressListFromServer => {
                if(!this.canceled) {
                    this.setState({ addressList: addressListFromServer });
                    this.setState({ index: 0 });
                }
            })
            .catch(ex => {
                console.log(ex);
            });
    };

}