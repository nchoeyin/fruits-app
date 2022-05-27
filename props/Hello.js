class Hello extends React.Component {
    render() {
        console.log(this.props);
        return(
        <div>
            <p>Hello {this.props.to} from {this.props.from}</p>
        </div>
        );
    }
}
