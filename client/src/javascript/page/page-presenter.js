import React, {Component} from 'react';

class Tile extends Component {
    constructor(){
        super();
        this.state={
            clicked: false
        }
    }

    show=(e)=>{
        e.preventDefault();
        this.setState({
            clicked: true
        });
        this.props.addToTotal(e.target.dataset.color);
    };

    render(){
        return(
            <div onClick={this.show}
                 className={'square ' + this.props.color + " " + this.state.clicked}
                 data-color={this.props.color}></div>
        )
    }
}


class PagePresenter extends Component{
    constructor(){
        super();

        let squares = [];
        //create the squares 1st
        for(let i=0; i<100; i++){
            if(i%2 ===0){
                squares.push(<Tile key={i} color={'blue'} addToTotal={this.addToTotal}/>)
            }else{
                squares.push(<Tile key={i} color={'red'} addToTotal={this.addToTotal}/>)
            }
        }
        ///Shuffle logic
        //see : https://css-tricks.com/snippets/javascript/shuffle-array/#article-header-id-2
        //&& https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
        squares.sort(
            function() {
                return 0.5 - Math.random()
            }
        );

        this.state={
            tiles: squares,
            red: 0,
            blue: 0
        }
    }

    addToTotal = (color) => {
        let current_color_count = this.state[color];
        console.log(current_color_count);
        if(color === 'red'){
            this.setState({
                red: current_color_count + 1
            })
        }else {
            this.setState({
                blue: current_color_count + 1
            })
        }
    };

    render(){
        return(
            <div>
                <span>RED: {this.state.red}</span>
                <span>BLUE: {this.state.blue}</span>
                <div className={'board'}>
                    {this.state.tiles}
                </div>
            </div>
        )
    }
};

export default PagePresenter