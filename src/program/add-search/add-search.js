import React,{Component} from 'react'
import './add-search.scss'


class AddSearch extends Component{
    constructor(props){
        super(props);
        this.state={
        list : [{title : null,
                content : '',
            date:null,
            index:null}],
        };
        this.someRef=React.createRef();
        this.initialTotal=0;
    }



    addNote(e){
        if(this.initialTotal===1){
           const newState=this.state;
           newState.list.splice(0,1);
           this.setState(newState);
        }
        this.initialTotal+=1;
        e.preventDefault();
            const {list} = this.state;
            const newNote = this.newNote.value;
            const date = new Date().toLocaleString();
            this.setState({
                list:[...this.state.list,{
                    'title' : this.state.list.length,
                    'content' : newNote,
                    'date' : date,
                    'index' : this.state.index+1
                }],
          
    });

}



render()
    {
     if(this.state.list.length!==1 )
     {
         return(  
         <div className="tabela">
         <form onSubmit={(e)=>{this.addNote(e)}}>
     <button id="bt" type="submit">+</button>
     <input ref={input =>this.newNote = input} type="text" placeholder="Unesite zadatak!" id="newNote"/>

     <button id="bt"type="submit">🔍</button>
     </form>
     <table className="zadaci" ref={this.someRef}>
         <th className="korpa"></th>
         <th className="title">Title</th>
         <th className="content">Content</th>
         <th classname="updated">Updated Date</th>
         {
                (this.state.list.map(item =>(
                    <tr value={this.state.list.index}>
                        <td className="korpa"><button id="trash" type="button" onClick={this.removeContent }>🗑</button></td>
                        <td className="title">{item.title}</td>
                        <td className="content">{item.content}</td>
                        <td className="updated">{item.date}</td>
                        </tr>
                )))}
         </table>
            </div>);
     }
     else
     {
        return(
            <div className="tabela">
                <form onSubmit={(e)=>{this.addNote(e)}}>
            <button id="bt" type="submit">+</button>
            <input ref={input =>this.newNote = input} type="text" placeholder="Unesite zadatak!" id="newNote"/>
            <button id="bt"type="submit">🔍</button>
            </form>
            <table className="zadaci" ref={this.someRef}>
                <th className="korpa"></th>
                <th className="title">Title</th>
                <th className="content">Content</th>
                <th classname="updated">Updated Date</th>
               
            </table>
            </div>
        );
                }
    }
}

export default AddSearch;