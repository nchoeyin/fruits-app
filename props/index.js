class App extends React.Component {
    render() {
        return (
        <div>
            <Hello 
            to="Ben" 
            from ="Sienna"
            num={4}
             />
            <Hello 
            to="Kylian" 
            from ="PSG"
            num ={10} 
            isFunny
            />
            <Hello 
            to="Cristiano" 
            from ="Manchester United"
            num ={10}
            data = {[1,2,3,4,5,6]} 
            />
        </div>
        );
    }
}
ReactDOM.render(<App />,document.getElementById('root'))