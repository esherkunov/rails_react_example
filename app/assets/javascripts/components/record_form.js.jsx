class RecordForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            date: '',
            amount: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        $.post('', { record: this.state }, (data) => {
            this.props.handleNewRecord(data);
            this.setState({
                title: '',
                date: '',
                amount: ''
            })}, 'JSON');
    }

    valid() {
        return this.state.title && this.state.date && this.state.amount;
    }

    render() {
        return (
            <form className="form-inline" onSubmit={ this.handleSubmit }>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Date" name="date" value={ this.state.date } onChange={ this.handleChange }/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Title" name="title" value={ this.state.title } onChange={ this.handleChange }/>
                </div>
                <div className="form-group">
                    <input type="number" className="form-control" placeholder="Amount" name="amount" value={ this.state.amount } onChange={ this.handleChange }/>
                </div>
                <button className="btn btn-primary" type="submit" disabled={ !this.valid() }>Create record</button>
            </form>
        );
    }
}